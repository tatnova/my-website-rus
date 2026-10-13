// Маршрутизатор доменов для Cloudflare Pages. Один проект отдаёт основной сайт и все лендинги:
//
//   adsnew.org/...               основной сайт (+ 301 со старых адресов WordPress на кейсы)
//   <ниша>.adsnew.org/           лендинг ниши (страница /l/<ниша>), свои robots.txt и sitemap.xml
//   <ниша>.adsnew.org/другое     301 на adsnew.org/другое
//   beauty.adsnew.org/massage    301 на massage.adsnew.org/
//   beauty.adsnew.org/...        301 на adsnew.org/...
//   link.adsnew.org/...          301 на adsnew.org/links
//   www.adsnew.org/...           301 на adsnew.org/...
//
// Данные (какие есть ниши и старые адреса) лежат в /_data/routing.json, его создаёт
// scripts/cloudflare-postbuild.mjs из папки content/. Любые другие домены (например *.pages.dev
// для проверки) получают основной сайт без переадресаций.

export const MAIN_HOST = 'adsnew.org';

const redirect = (to, status = 301) =>
  new Response(null, { status, headers: { Location: to, 'Cache-Control': 'public, max-age=3600' } });

// Старые адреса WordPress сравниваются без завершающего «/» и без регистра.
const normalize = (path) => {
  let p = path;
  try {
    p = decodeURIComponent(p);
  } catch {}
  return (p.replace(/\/+$/, '') || '/').toLowerCase();
};

/**
 * @param {Request} request
 * @param {{ niches: Record<string, string>, redirects: Record<string, string> }} data
 *   niches: поддомен → id ниши; redirects: старый путь (normalize) → новый путь.
 * @param {(path: string) => Promise<Response>} serveAsset отдать файл сайта по пути.
 * @returns {Promise<Response | null>} null — отдать запрошенный адрес как есть.
 */
export async function route(request, data, serveAsset) {
  const url = new URL(request.url);
  const host = url.hostname.toLowerCase();
  const path = url.pathname;
  const main = `https://${MAIN_HOST}`;

  // Скрипты, стили, картинки и шрифты отдаются на любом домене как есть
  // (обычно их сюда не пускает _routes.json, это запасная проверка).
  if (/^\/(_next|img|uploads|_data)\//.test(path) || /\.(js|css|webp|jpe?g|png|svg|ico|woff2?)$/i.test(path)) {
    return null;
  }

  if (host === `www.${MAIN_HOST}`) return redirect(main + path + url.search);

  if (host === `beauty.${MAIN_HOST}`) {
    if (path === '/massage' || path.startsWith('/massage/')) return redirect(`https://massage.${MAIN_HOST}/`);
    return redirect(main + path + url.search);
  }

  if (host === `link.${MAIN_HOST}`) return redirect(`${main}/links`);

  if (host.endsWith(`.${MAIN_HOST}`)) {
    const sub = host.slice(0, -(MAIN_HOST.length + 1));
    const niche = data.niches[sub];
    if (!niche) return redirect(main + path + url.search);
    if (path === '/' || path === '/index.html') return serveAsset(`/l/${niche}`, url.search);
    if (path === '/robots.txt') return serveAsset(`/l/${niche}/robots.txt`);
    if (path === '/sitemap.xml') return serveAsset(`/l/${niche}/sitemap.xml`);
    return redirect(main + path + url.search);
  }

  if (host === MAIN_HOST) {
    const target = data.redirects[normalize(path)];
    if (target) return redirect(main + target);
    // Служебные копии лендингов на основном домене не нужны: ведём на поддомен.
    const landing = path.match(/^\/l\/([^/]+)\/?$/);
    if (landing) {
      const sub = Object.keys(data.niches).find((k) => data.niches[k] === landing[1]);
      if (sub) return redirect(`https://${sub}.${MAIN_HOST}/`);
    }
  }

  return null;
}

export { normalize };

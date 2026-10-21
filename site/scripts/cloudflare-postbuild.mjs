// После статической сборки (out/) добавляет файлы для Cloudflare Pages:
//   out/_data/routing.json   ниши и старые адреса WordPress для маршрутизатора (routing/router.mjs);
//                            старые адреса берутся из old_urls кейсов и статей и из content/redirects.yml;
//   out/_routes.json         картинки и скрипты отдаются напрямую, без маршрутизатора;
//   out/l/<ниша>/robots.txt и sitemap.xml   отдельные для каждого поддомена.
import { readdir, readFile, writeFile, mkdir } from 'node:fs/promises';
import path from 'node:path';
import { parse } from 'yaml';

const ROOT = path.resolve(import.meta.dirname, '..');
const OUT = path.join(ROOT, 'out');
const CONTENT = path.join(ROOT, 'content');
const LIVE = process.env.LANDINGS_LIVE === '1';

const frontmatter = (raw) => parse(raw.match(/^---\r?\n([\s\S]*?)\r?\n---/)?.[1] ?? '') ?? {};
const normalize = (p) => (decodeURIComponent(p).replace(/\/+$/, '') || '/').toLowerCase();

const niches = {};
const nicheMeta = [];
for (const file of (await readdir(path.join(CONTENT, 'niches'))).filter((f) => /\.ya?ml$/.test(f))) {
  const id = file.replace(/\.ya?ml$/, '');
  const d = parse(await readFile(path.join(CONTENT, 'niches', file), 'utf8')) ?? {};
  const sub = String(d.subdomain || id);
  niches[sub] = id;
  // Английская версия лендинга есть, если есть content/en/niches/<ниша>.yml.
  const en = await readFile(path.join(CONTENT, 'en', 'niches', file), 'utf8').then(() => true, () => false);
  nicheMeta.push({ id, sub, published: d.published === true, en });
}

// Старые адреса WordPress: из полей old_urls кейсов и статей и из content/redirects.yml.
const redirects = {};
const prefixes = [];
const addRedirect = (old, to) => {
  const from = normalize(new URL(String(old), 'https://adsnew.org').pathname);
  if (redirects[from] && redirects[from] !== to) {
    throw new Error(`Старый адрес ${old} ведёт сразу на ${redirects[from]} и на ${to}`);
  }
  redirects[from] = to;
};
for (const [dir, base] of [['cases', '/cases'], ['articles', '/blog']]) {
  const files = await readdir(path.join(CONTENT, dir)).catch(() => []);
  for (const file of files.filter((f) => f.endsWith('.md'))) {
    const d = frontmatter(await readFile(path.join(CONTENT, dir, file), 'utf8'));
    if (d.draft === true) continue;
    for (const old of d.old_urls ?? []) addRedirect(old, `${base}/${file.replace(/\.md$/, '')}`);
  }
}
const extra = parse(await readFile(path.join(CONTENT, 'redirects.yml'), 'utf8').catch(() => '')) ?? {};
for (const r of extra.redirects ?? []) {
  const from = String(r.from ?? '');
  const to = String(r.to ?? '');
  if (!from.startsWith('/') || !to.startsWith('/')) throw new Error(`Неверная переадресация в content/redirects.yml: ${from} → ${to}`);
  if (from.endsWith('/*')) prefixes.push([normalize(from.slice(0, -2)), to]);
  else addRedirect(from, to);
}
// Более длинные префиксы проверяются первыми.
prefixes.sort((a, b) => b[0].length - a[0].length);

await mkdir(path.join(OUT, '_data'), { recursive: true });
await writeFile(path.join(OUT, '_data/routing.json'), JSON.stringify({ niches, redirects, prefixes }, null, 2));

await writeFile(
  path.join(OUT, '_routes.json'),
  JSON.stringify(
    {
      version: 1,
      include: ['/*'],
      exclude: ['/_next/*', '/img/*', '/uploads/*', '/_data/*', '/favicon.ico', '/*.jpg', '/*.png', '/*.svg', '/*.webp'],
    },
    null,
    2,
  ),
);

for (const n of nicheMeta) {
  const dir = path.join(OUT, 'l', n.id);
  await mkdir(dir, { recursive: true });
  const base = `https://${n.sub}.adsnew.org`;
  const open = LIVE && n.published;
  await writeFile(
    path.join(dir, 'robots.txt'),
    open ? `User-Agent: *\nAllow: /\n\nSitemap: ${base}/sitemap.xml\n` : 'User-Agent: *\nDisallow: /\n',
  );
  await writeFile(
    path.join(dir, 'sitemap.xml'),
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
      (open ? `<url><loc>${base}/</loc></url>\n` : '') +
      (open && n.en ? `<url><loc>${base}/en/</loc></url>\n` : '') +
      `</urlset>\n`,
  );
}

console.log(`Ниши: ${Object.keys(niches).join(', ')}; переадресаций со старых адресов: ${Object.keys(redirects).length} (+ ${prefixes.length} по началу адреса)`);

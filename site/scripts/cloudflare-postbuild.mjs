// После статической сборки (out/) добавляет файлы для Cloudflare Pages:
//   out/_data/routing.json   ниши и старые адреса WordPress для маршрутизатора (routing/router.mjs);
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
  nicheMeta.push({ id, sub, published: d.published === true });
}

const redirects = {};
for (const file of (await readdir(path.join(CONTENT, 'cases'))).filter((f) => f.endsWith('.md'))) {
  const slug = file.replace(/\.md$/, '');
  const d = frontmatter(await readFile(path.join(CONTENT, 'cases', file), 'utf8'));
  if (d.draft === true) continue;
  for (const old of d.old_urls ?? []) {
    const from = normalize(new URL(String(old), 'https://adsnew.org').pathname);
    if (redirects[from] && redirects[from] !== `/cases/${slug}`) {
      throw new Error(`Старый адрес ${old} указан в двух кейсах: ${redirects[from]} и /cases/${slug}`);
    }
    redirects[from] = `/cases/${slug}`;
  }
}

await mkdir(path.join(OUT, '_data'), { recursive: true });
await writeFile(path.join(OUT, '_data/routing.json'), JSON.stringify({ niches, redirects }, null, 2));

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
      `</urlset>\n`,
  );
}

console.log(`Ниши: ${Object.keys(niches).join(', ')}; переадресаций со старых адресов: ${Object.keys(redirects).length}`);

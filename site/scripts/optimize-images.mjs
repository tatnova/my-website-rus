// Делает уменьшенные WebP-копии всех JPG/PNG из public/ (включая public/uploads/ из Pages CMS)
// в public/img/ и записывает их размеры в src/lib/image-manifest.json.
// Запускается автоматически перед каждой сборкой (npm run build), вручную: npm run images.
// Уже готовые копии не пересоздаются, если оригинал не менялся.
import { readdir, mkdir, writeFile, stat } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const ROOT = path.resolve(import.meta.dirname, '..');
const PUBLIC = path.join(ROOT, 'public');
const OUT = path.join(PUBLIC, 'img');
const WIDTHS = [480, 800, 1200];

async function walk(dir) {
  const result = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (full !== OUT) result.push(...(await walk(full)));
    } else if (/\.(jpe?g|png)$/i.test(entry.name)) {
      result.push(full);
    }
  }
  return result;
}

const mtime = (file) => stat(file).then((s) => s.mtimeMs, () => 0);

await mkdir(OUT, { recursive: true });
const files = (await walk(PUBLIC)).sort();
const manifest = {};
let made = 0;

for (const input of files) {
  const rel = path.relative(PUBLIC, input).split(path.sep).join('/');
  // uploads/case/shot.png → uploads-case-shot
  const name = rel.replace(/\.[^.]+$/, '').replace(/[^a-zA-Z0-9_-]+/g, '-');
  const { width, height } = await sharp(input).metadata();
  const widths = WIDTHS.filter((w) => w < width).concat(Math.min(width, WIDTHS.at(-1)));
  const srcTime = await mtime(input);

  for (const w of widths) {
    const out = path.join(OUT, `${name}-${w}.webp`);
    if ((await mtime(out)) >= srcTime) continue;
    await sharp(input).resize({ width: w }).webp({ quality: 75 }).toFile(out);
    made++;
  }
  manifest[`/${rel}`] = { base: `/img/${name}`, width, height, widths };
}

await writeFile(path.join(ROOT, 'src/lib/image-manifest.json'), JSON.stringify(manifest, null, 2) + '\n');
console.log(`Картинок: ${files.length}, новых копий: ${made}`);

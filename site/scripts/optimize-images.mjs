// Делает уменьшенные WebP-копии всех JPG/PNG из public/ в public/img/
// и записывает их размеры в src/lib/image-manifest.json.
// Запуск: npm run images (после добавления новых картинок).
import { readdir, mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const ROOT = path.resolve(import.meta.dirname, '..');
const PUBLIC = path.join(ROOT, 'public');
const OUT = path.join(PUBLIC, 'img');
const WIDTHS = [480, 800, 1200];

await mkdir(OUT, { recursive: true });
const files = (await readdir(PUBLIC)).filter((f) => /\.(jpe?g|png)$/i.test(f)).sort();
const manifest = {};

for (const file of files) {
  const input = path.join(PUBLIC, file);
  const { width, height } = await sharp(input).metadata();
  const name = path.parse(file).name;
  const widths = WIDTHS.filter((w) => w < width).concat(Math.min(width, WIDTHS.at(-1)));

  for (const w of widths) {
    await sharp(input).resize({ width: w }).webp({ quality: 75 }).toFile(path.join(OUT, `${name}-${w}.webp`));
  }
  manifest[`/${file}`] = { base: `/img/${name}`, width, height, widths };
}

await writeFile(path.join(ROOT, 'src/lib/image-manifest.json'), JSON.stringify(manifest, null, 2) + '\n');
console.log(`Готово: ${files.length} картинок`);

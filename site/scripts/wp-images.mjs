// Скачивает картинки статей и кейсов, перенесённых из WordPress, в public/uploads/wp/.
// Список «новый путь → адрес в WordPress» лежит в scripts/wp-images.tsv.
// Уже скачанные файлы пропускаются. Запуск: node scripts/wp-images.mjs
import { readFile, writeFile, mkdir, stat } from 'node:fs/promises';
import path from 'node:path';

const ROOT = path.resolve(import.meta.dirname, '..');
const list = (await readFile(path.join(ROOT, 'scripts/wp-images.tsv'), 'utf8'))
  .split('\n')
  .filter(Boolean)
  .map((line) => line.split('\t'));

const exists = (file) => stat(file).then((s) => s.size > 0, () => false);
let done = 0;
const failed = [];

for (const [local, remote] of list) {
  const file = path.join(ROOT, 'public', local);
  if (await exists(file)) continue;
  try {
    const res = await fetch(remote, { redirect: 'follow' });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const type = res.headers.get('content-type') ?? '';
    if (!type.startsWith('image/')) throw new Error(`не картинка: ${type}`);
    await mkdir(path.dirname(file), { recursive: true });
    await writeFile(file, Buffer.from(await res.arrayBuffer()));
    done++;
  } catch (e) {
    failed.push(`${remote} — ${e.message}`);
  }
}

console.log(`Скачано: ${done}, всего в списке: ${list.length}, не удалось: ${failed.length}`);
for (const f of failed) console.log('  ' + f);
if (failed.length) process.exitCode = 1;

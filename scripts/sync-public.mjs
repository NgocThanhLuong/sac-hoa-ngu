import { cpSync, copyFileSync, existsSync, mkdirSync, rmSync } from 'node:fs';
import { resolve } from 'node:path';

const root = process.cwd();
const publicDir = resolve(root, 'public');

const files = [
  'index.html',
  'styles.css',
  'responsive.css',
  'enhanced.css',
  'script.js',
  'enhanced.js',
  'music.js',
  'teacher-profile.css',
  'teacher-profile.js',
  'class-info.css',
  'class-info.js',
  'wow.css',
  'wow.js'
];

const directories = ['assets', 'data'];

rmSync(publicDir, { recursive: true, force: true });
mkdirSync(publicDir, { recursive: true });

for (const file of files) {
  const source = resolve(root, file);
  if (!existsSync(source)) throw new Error(`Missing Firebase source file: ${file}`);
  copyFileSync(source, resolve(publicDir, file));
}

for (const directory of directories) {
  const source = resolve(root, directory);
  if (!existsSync(source)) throw new Error(`Missing Firebase source directory: ${directory}`);
  cpSync(source, resolve(publicDir, directory), { recursive: true });
}

console.log(`[firebase] Synced ${files.length} files + ${directories.length} directories into public/`);

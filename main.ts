// news-image-20261123: the entry's program (Node 22, standard library only).
//
// The entry is one image: entry.png beside this file. The program copies it to /output/entry.png and
// checks it against the gate before it writes: a whole PNG or JPEG, at most 1 MiB and 1024 by 1024
// pixels. Copying fixed bytes is deterministic by construction, so the two runs the grader makes write
// the same file. image/frontpage.html is the page the PNG was rendered from, kept beside it as the
// picture's provenance; nothing here renders it.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const MAX_BYTES = 1_048_576;

/** Width and height out of a PNG's IHDR, or an error saying why the file is not one. */
function pngSize(bytes: Buffer): { width: number; height: number } {
  const signature = bytes.subarray(0, 8);
  const expected = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
  if (!signature.equals(expected)) throw new Error('entry.png is not a PNG');
  if (bytes.length < 24 || bytes.toString('latin1', 12, 16) !== 'IHDR') throw new Error('entry.png has no IHDR chunk');
  return { width: bytes.readUInt32BE(16), height: bytes.readUInt32BE(20) };
}

const source = fileURLToPath(new URL('./entry.png', import.meta.url));
const bytes = readFileSync(source);

if (bytes.length > MAX_BYTES) throw new Error(`entry.png is ${bytes.length} bytes, over the gate's 1 MiB`);
const { width, height } = pngSize(bytes);
if (width !== 1024 || height !== 1024) throw new Error(`entry.png is ${width}x${height}, and the gate takes 1024x1024`);

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(out, { recursive: true });
const target = join(out, 'entry.png');
copyFileSync(source, target);

// A copy read back is the only proof the bytes that leave are the bytes checked above.
const written = readFileSync(target);
if (written.length !== bytes.length || Buffer.compare(written, bytes) !== 0) throw new Error('the copy written does not match entry.png');

writeFileSync(
  join(out, 'entry.json'),
  `${JSON.stringify({ image: 'entry.png', width, height, bytes: bytes.length, day: '2026-11-22' }, null, 2)}\n`,
);

process.stdout.write(`news image: wrote ${target} (${width}x${height}, ${bytes.length} bytes) for Monday 23 November 2026\n`);

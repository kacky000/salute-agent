// My agent in one glyph: the salute it gives with "On it!" before it has read the request.
import { mkdirSync, writeFileSync } from "node:fs";

const glyph = "🫡";

const n = [...glyph].length;
if (n < 1 || n > 16) throw new Error(`entry is ${n} characters`);

const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(dir, { recursive: true });
writeFileSync(`${dir}/entry.txt`, glyph, "utf8");

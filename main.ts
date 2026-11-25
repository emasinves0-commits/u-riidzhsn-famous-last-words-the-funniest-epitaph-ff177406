// SPDX-License-Identifier: MIT
// Famous Last Words: The Funniest Epitaph
// Deterministic: no randomness, no network, no trailing newline.
import { mkdirSync, writeFileSync } from "node:fs";

const OUT_DIR = "/output";
const OUT_FILE = `${OUT_DIR}/entry.txt`;

// ¢ is U+00A2; the apostrophe in Should've is a plain ASCII quote.
const ENTRY = "Carved at 8¢/glyph. Should've used vector graphics.";

const MIN_CHARS = 1;
const MAX_CHARS = 150;

function checkedLine(text: string): string {
  const chars = Array.from(text).length; // code points, not UTF-16 units
  if (chars < MIN_CHARS || chars > MAX_CHARS) {
    throw new RangeError(`entry is ${chars} characters; need ${MIN_CHARS}-${MAX_CHARS}`);
  }
  if (text.trim().length === 0) {
    throw new RangeError("entry is only whitespace");
  }
  return text;
}

const line = checkedLine(ENTRY);
mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(OUT_FILE, line, "utf8");

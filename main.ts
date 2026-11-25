// The 3AM Fridge Text — a smart fridge texts its owner at 3am.
// The program writes exactly one line to /output/entry.txt.
import { writeFileSync, mkdirSync } from "node:fs";
import { dirname } from "node:path";

const LINE =
  "It's 3am. I hum all night so you can sleep, and this is how you repay me — standing in the dark, judging my leftovers.";

const out = process.argv[2] ?? "/output/entry.txt";
// Gate: 1-140 characters of UTF-8 text, not only whitespace.
if (LINE.length < 1 || LINE.length > 140 || LINE.trim().length === 0) {
  throw new Error(`entry line is ${LINE.length} chars, outside the 1-140 gate`);
}
mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, LINE, "utf8");

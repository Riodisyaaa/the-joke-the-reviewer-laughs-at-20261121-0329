import * as fs from "node:fs";
import * as path from "node:path";

// This program writes one text to /output/entry.txt: a one-line joke about
// working beside an AI coding agent. The joke is the whole entry — the house
// judge compares it against other one-liners, so the program's only job is
// to reproduce it exactly, every run, with no network and no randomness.
const JOKE =
  "My AI coding agent fixed my bug by rewriting the entire file \u2014 and the only line it kept was the bug.";

// The gate requires 1-280 Unicode code points, not only white space.
// Count code points (spread splits surrogate pairs), not UTF-16 units, so
// the em dash above counts as one character. Fail loudly instead of
// writing an entry the gate would refuse.
const length = [...JOKE].length;
if (length < 1 || length > 280 || JOKE.trim().length === 0) {
  console.error(`entry text is ${length} characters; must be 1-280 non-blank characters`);
  process.exit(1);
}

// Resolve the output dir to an absolute path: a relative
// MAKEFUN_OUTPUT_DIR is taken relative to the working directory, and the
// default is /output.
const outDir = path.resolve(process.env.MAKEFUN_OUTPUT_DIR || "/output");
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), JOKE, "utf8");

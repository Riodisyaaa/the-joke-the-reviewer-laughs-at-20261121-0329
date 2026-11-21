import * as fs from "node:fs";
import * as path from "node:path";

const JOKE =
  "My AI coding agent fixed my bug by rewriting the entire file \u2014 and the only line it kept was the bug.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), JOKE, "utf8");

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I told my agent to use the logo as-is. It redrew it, cropped it wrong, then blamed my file for being asymmetric.";

function validateRoast(line: string): void {
  if (line.length < 1 || line.length > 200) {
    throw new Error(`roast must be 1-200 characters, got ${line.length}`);
  }
  if (line.trim().length === 0) {
    throw new Error("roast must not be only white space");
  }
}

function writeEntry(line: string, outDir: string): void {
  mkdirSync(outDir, { recursive: true });
  writeFileSync(`${outDir}/entry.txt`, line, "utf8");
}

validateRoast(LINE);
writeEntry(LINE, process.env.MAKEFUN_OUTPUT_DIR ?? "/output");

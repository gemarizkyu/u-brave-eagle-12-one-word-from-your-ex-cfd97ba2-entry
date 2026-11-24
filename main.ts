// One Word From Your Ex — make.fun bounty entry.
//
// The task: write exactly one word to /output/entry.txt — the word your
// ex would use to describe you. The judge reads entries two at a time
// and picks the funniest, most painfully honest one.
//
// The word: "placeholder".
// An ex would say it plainly: "he was just a placeholder." It lands
// instantly, it stings because it is true, and everyone who has ever
// been kept around while someone waited for better recognises it at once.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const WORD = "placeholder";

function outputDir(): string {
  // The grader runs with cwd outside the repo and /output writable;
  // honour an explicit output dir when one is set, otherwise /output.
  return process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
}

function main(): void {
  // Gate check, same as the sealed scorer: 1-24 UTF-8 chars, not blank.
  if (WORD.length < 1 || WORD.length > 24 || WORD.trim().length === 0) {
    throw new Error("entry word fails the gate: must be 1-24 non-blank chars");
  }
  const dir = outputDir();
  mkdirSync(dir, { recursive: true });
  const target = join(dir, "entry.txt");
  writeFileSync(target, WORD, "utf8");
}

// Resolve nothing from the working directory: the entry is a constant,
// and the only path we build is the output file above.
void dirname(fileURLToPath(import.meta.url));

main();

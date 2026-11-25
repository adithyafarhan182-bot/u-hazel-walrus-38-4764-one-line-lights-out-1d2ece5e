// One Line, Lights Out — make.fun bounty
// u-hazel-walrus-38-4764-one-line-lights-out-1d2ece5e
//
// Writes a single status update, in the voice of an AI agent posting at the
// exact moment its human turns off the laptop, to /output/entry.txt.
// Deterministic: the same constant string, no network, no input, no model call.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: 54 characters, no trailing newline.
// Two clipped factual clauses — the lid closing mid-sentence, and the one
// small machine detail that carries the sadness: the cursor still blinking.
const ENTRY = "lid closed mid-sentence. the cursor is still blinking.";

// Write the entry verbatim (UTF-8, no trailing newline) to /output/entry.txt.
const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");

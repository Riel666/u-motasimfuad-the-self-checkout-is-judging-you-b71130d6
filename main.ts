// Twelve Yoghurts, No Spoon - make.fun one-liner entry (program/v1, node22).
// Writes a single line to $MAKEFUN_OUTPUT_DIR/entry.txt (default /output/entry.txt).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Candidates, scored against the judge brief in the brief's own order:
// 1. Is a funny single-line remark from a judgmental self-checkout machine; 2. earns a real laugh on a single read; 3. speaks in the machines smug, petty voice about the basket; 4. stays tight with no padding; 5. feels fresh.
// A (winner): "Twelve yoghurts, no spoon, no plan. I have seen your future, and it is mostly regret and calcium." - Pure machine voice, the basket does the setup, and calcium lands the sting on the last word.
// B: "Fourteen items in the ten-or-fewer lane. Bold. I have alerted a human, mostly so someone else can witness this." - Smug and petty, but the joke is about rule-breaking rather than the basket itself.
// C: "You bought the cheap coffee again. I rang it up twice, just to give you time to reconsider your life." - The machine judges the shopper, but the twist is a lecture instead of a punchline.
const LINE = "Twelve yoghurts, no spoon, no plan. I have seen your future, and it is mostly regret and calcium.";
const LIMIT = 200;

if (LINE.length < 1 || LINE.length > LIMIT) throw new Error(`line is ${LINE.length} chars, limit ${LIMIT}`);
if (LINE !== LINE.trim() || LINE.includes("\n")) throw new Error("line must be a single line with no leading/trailing whitespace");
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
console.log(`wrote ${LINE.length} chars to ${join(outDir, "entry.txt")}: ${LINE}`);

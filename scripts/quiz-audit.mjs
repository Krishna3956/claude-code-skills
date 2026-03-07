#!/usr/bin/env node
/**
 * QA Audit Script for Quiz Platform
 * Validates answer integrity rules across all 25 quiz config files.
 */

import { readFileSync, readdirSync } from "fs";
import { join } from "path";

const QUIZZES_DIR = join(process.cwd(), "src/quizzes");
const STANDARD_ARCHETYPE_RANGES = [
  [0, 39],
  [40, 49],
  [50, 59],
  [60, 69],
  [70, 79],
  [80, 89],
  [90, 100],
];

function extractStringArray(content, key) {
  const keyMatch = content.match(new RegExp(`${key}:\\s*\\[`, "s"));
  if (!keyMatch) return null;
  let start = keyMatch.index + keyMatch[0].length;
  let depth = 1;
  let i = start;
  let inString = false;
  let quote = null;
  while (i < content.length && depth > 0) {
    const c = content[i];
    if (!inString) {
      if (c === '"' || c === "'") {
        inString = true;
        quote = c;
      } else if (c === "[") depth++;
      else if (c === "]") depth--;
    } else {
      if (c === "\\" && i + 1 < content.length) i++;
      else if (c === quote) inString = false;
    }
    i++;
  }
  const inner = content.slice(start, i - 1);
  const items = [];
  inString = false;
  quote = null;
  let current = "";
  for (let j = 0; j < inner.length; j++) {
    const c = inner[j];
    if (!inString) {
      if (c === '"' || c === "'") {
        inString = true;
        quote = c;
        current = "";
      }
    } else {
      if (c === "\\" && j + 1 < inner.length) {
        current += inner[++j];
      } else if (c === quote) {
        inString = false;
        items.push(current.trim());
        current = "";
      } else {
        current += c;
      }
    }
  }
  return items.filter((s) => s.length > 0);
}

function extractStringValue(content, key) {
  const keyMatch = content.match(new RegExp(`${key}:\\s*`, "s"));
  if (!keyMatch) return null;
  const start = keyMatch.index + keyMatch[0].length;
  const firstChar = content[start];
  if (firstChar === '"') {
    const regex = /"((?:[^"\\]|\\.)*)"/s;
    const m = content.slice(start).match(regex);
    return m ? m[1] : null;
  }
  if (firstChar === "'") {
    const regex = /'((?:[^'\\]|\\.)*)'/s;
    const m = content.slice(start).match(regex);
    return m ? m[1] : null;
  }
  return null;
}

function extractChallenges(content) {
  const challenges = [];
  const challengesMatch = content.match(/challenges:\s*\[([\s\S]*?)\],\s*rounds:/);
  if (!challengesMatch) return challenges;

  const challengesContent = challengesMatch[1];
  let depth = 0;
  let start = -1;
  for (let i = 0; i < challengesContent.length; i++) {
    const c = challengesContent[i];
    if (c === "{") {
      if (depth === 0) start = i;
      depth++;
    } else if (c === "}") {
      depth--;
      if (depth === 0 && start >= 0) {
        const block = challengesContent.slice(start, i + 1);
        const typeMatch = block.match(/type:\s*["']([^"']+)["']/);
        const idMatch = block.match(/id:\s*(\d+)/);
        if (typeMatch && idMatch) {
          challenges.push({
            type: typeMatch[1],
            id: parseInt(idMatch[1], 10),
            block,
          });
        }
        start = -1;
      }
    }
  }
  return challenges;
}

function extractArchetypes(content) {
  const archetypes = [];
  const archMatch = content.match(/archetypes:\s*\[([\s\S]*?)\],\s*(?:challenges|dimensionLabels)/);
  if (!archMatch) return archetypes;

  const archContent = archMatch[1];
  const rangeRegex = /minScore:\s*(\d+)[\s\S]*?maxScore:\s*(\d+)/g;
  let m;
  while ((m = rangeRegex.exec(archContent)) !== null) {
    archetypes.push({
      minScore: parseInt(m[1], 10),
      maxScore: parseInt(m[2], 10),
    });
  }
  return archetypes;
}

function auditQuiz(filename) {
  const filepath = join(QUIZZES_DIR, filename);
  const content = readFileSync(filepath, "utf-8");
  const slug = filename.replace(".tsx", "");
  const errors = [];

  // 1. quick_pick (IDs 8-10): blank must be in options
  const challenges = extractChallenges(content);
  for (const ch of challenges) {
    if (ch.type === "quick_pick" && (ch.id >= 8 && ch.id <= 10)) {
      const blank = extractStringValue(ch.block, "blank");
      const options = extractStringArray(ch.block, "options");
      if (blank !== null && options !== null) {
        if (!options.includes(blank)) {
          errors.push({
            rule: "quick_pick",
            detail: `Quiz ${slug}, challenge ${ch.id}: blank "${blank}" NOT in options [${options.join(", ")}]`,
          });
        }
      }
    }
  }

  // 2. odd_one_out (IDs 13-14): oddItem must be in items
  for (const ch of challenges) {
    if (ch.type === "odd_one_out" && (ch.id === 13 || ch.id === 14)) {
      const oddItem = extractStringValue(ch.block, "oddItem");
      const items = extractStringArray(ch.block, "items");
      if (oddItem !== null && items !== null) {
        if (!items.includes(oddItem)) {
          errors.push({
            rule: "odd_one_out",
            detail: `Quiz ${slug}, challenge ${ch.id}: oddItem "${oddItem}" NOT in items [${items.join(", ")}]`,
          });
        }
      }
    }
  }

  // 3. speed_pick (IDs 11-12): correctItems and wrongItems must have zero overlap
  for (const ch of challenges) {
    if (ch.type === "speed_pick" && (ch.id === 11 || ch.id === 12)) {
      const correctItems = extractStringArray(ch.block, "correctItems");
      const wrongItems = extractStringArray(ch.block, "wrongItems");
      if (correctItems && wrongItems) {
        const overlap = correctItems.filter((x) => wrongItems.includes(x));
        if (overlap.length > 0) {
          errors.push({
            rule: "speed_pick",
            detail: `Quiz ${slug}, challenge ${ch.id}: OVERLAP between correctItems and wrongItems: [${overlap.join(", ")}]`,
          });
        }
      }
    }
  }

  // 4. this_or_that (IDs 5-7): correct must be exactly "A" or "B"
  for (const ch of challenges) {
    if (ch.type === "this_or_that" && (ch.id >= 5 && ch.id <= 7)) {
      const correctMatch = ch.block.match(/correct:\s*["']?([^"',\s}]+)["']?/);
      const correct = correctMatch ? correctMatch[1] : null;
      if (correct !== "A" && correct !== "B") {
        errors.push({
          rule: "this_or_that",
          detail: `Quiz ${slug}, challenge ${ch.id}: correct="${correct}" (must be exactly "A" or "B")`,
        });
      }
    }
  }

  // 5. Archetypes: ranges must cover 0-100 with no gaps/overlaps (standard: 0-39, 40-49, 50-59, 60-69, 70-79, 80-89, 90-100)
  const archetypes = extractArchetypes(content);
  if (archetypes.length > 0) {
    const sorted = [...archetypes].sort((a, b) => a.minScore - b.minScore);
    const gotRanges = sorted.map((a) => [a.minScore, a.maxScore]);
    const matchesStandard =
      gotRanges.length === STANDARD_ARCHETYPE_RANGES.length &&
      gotRanges.every(
        (r, i) =>
          r[0] === STANDARD_ARCHETYPE_RANGES[i][0] &&
          r[1] === STANDARD_ARCHETYPE_RANGES[i][1]
      );
    if (!matchesStandard) {
      errors.push({
        rule: "archetypes",
        detail: `Quiz ${slug}: Archetype ranges don't match standard. Expected: ${JSON.stringify(STANDARD_ARCHETYPE_RANGES)}. Got: ${JSON.stringify(gotRanges)}`,
      });
    } else {
      for (let i = 1; i < sorted.length; i++) {
        if (sorted[i].minScore <= sorted[i - 1].maxScore) {
          errors.push({
            rule: "archetypes",
            detail: `Quiz ${slug}: Archetype overlap: ${sorted[i - 1].minScore}-${sorted[i - 1].maxScore} overlaps with ${sorted[i].minScore}-${sorted[i].maxScore}`,
          });
        }
        if (sorted[i].minScore > sorted[i - 1].maxScore + 1) {
          errors.push({
            rule: "archetypes",
            detail: `Quiz ${slug}: Archetype gap: gap between ${sorted[i - 1].maxScore} and ${sorted[i].minScore}`,
          });
        }
      }
      if (
        sorted[0]?.minScore > 0 ||
        sorted[sorted.length - 1]?.maxScore < 100
      ) {
        errors.push({
          rule: "archetypes",
          detail: `Quiz ${slug}: Archetypes don't cover 0-100. First: ${sorted[0]?.minScore}, Last: ${sorted[sorted.length - 1]?.maxScore}`,
        });
      }
    }
  }

  // 6. Em dashes (—) in challenge text
  const emDashRegex = /—/g;
  const textFields = [
    "statement",
    "scenario",
    "explanation",
    "prompt",
    "blank",
    "optionA",
    "optionB",
  ];
  for (const ch of challenges) {
    for (const field of textFields) {
      const val = extractStringValue(ch.block, field);
      if (val && emDashRegex.test(val)) {
        errors.push({
          rule: "em_dash",
          detail: `Quiz ${slug}, challenge ${ch.id} (${ch.type}), field "${field}": contains em dash (—)`,
        });
      }
    }
    const options = extractStringArray(ch.block, "options");
    const items = extractStringArray(ch.block, "items");
    const correctItems = extractStringArray(ch.block, "correctItems");
    const wrongItems = extractStringArray(ch.block, "wrongItems");
    for (const arr of [options, items, correctItems, wrongItems]) {
      if (arr) {
        for (const item of arr) {
          if (emDashRegex.test(item)) {
            errors.push({
              rule: "em_dash",
              detail: `Quiz ${slug}, challenge ${ch.id}: array item contains em dash: "${item}"`,
            });
          }
        }
      }
    }
  }
  // Also check archetype descriptions
  const archContent = content.match(/archetypes:\s*\[([\s\S]*?)\],\s*(?:challenges|dimensionLabels)/);
  if (archContent && emDashRegex.test(archContent[1])) {
    errors.push({
      rule: "em_dash",
      detail: `Quiz ${slug}: archetype description contains em dash (—)`,
    });
  }

  // 7. Quotation marks wrapping statements (truth_or_myth and final_boss)
  for (const ch of challenges) {
    if (
      (ch.type === "truth_or_myth" || ch.id === 15) &&
      extractStringValue(ch.block, "statement")
    ) {
      const stmt = extractStringValue(ch.block, "statement");
      if (stmt) {
        const startsWithQuote =
          stmt.startsWith('"') ||
          stmt.startsWith("\u201C") ||
          stmt.startsWith("\u2018");
        const endsWithQuote =
          stmt.endsWith('"') ||
          stmt.endsWith("\u201D") ||
          stmt.endsWith("\u2019");
        if (startsWithQuote && endsWithQuote) {
          errors.push({
            rule: "quotation_marks",
            detail: `Quiz ${slug}, challenge ${ch.id}: statement wrapped in quotation marks: "${stmt.substring(0, 50)}..."`,
          });
        }
      }
    }
  }

  return { slug, errors };
}

// Run audit
const files = readdirSync(QUIZZES_DIR).filter((f) => f.endsWith(".tsx"));
console.log(`\n=== QUIZ QA AUDIT REPORT ===\n`);
console.log(`Auditing ${files.length} quiz files...\n`);

const allErrors = [];
const byRule = {
  quick_pick: [],
  odd_one_out: [],
  speed_pick: [],
  this_or_that: [],
  archetypes: [],
  em_dash: [],
  quotation_marks: [],
};

for (const file of files.sort()) {
  const { slug, errors } = auditQuiz(file);
  for (const e of errors) {
    allErrors.push(e);
    if (byRule[e.rule]) byRule[e.rule].push(e.detail);
  }
}

// Print report by rule
const rules = [
  "quick_pick",
  "odd_one_out",
  "speed_pick",
  "this_or_that",
  "archetypes",
  "em_dash",
  "quotation_marks",
];

for (const rule of rules) {
  console.log(`\n--- ${rule.toUpperCase().replace(/_/g, " ")} ---`);
  if (byRule[rule].length === 0) {
    console.log("✓ No errors found.");
  } else {
    byRule[rule].forEach((d) => console.log(`  ✗ ${d}`));
  }
}

console.log("\n" + "=".repeat(50));
console.log(
  `\nTOTAL: ${allErrors.length} error(s) across ${files.length} quizzes.\n`
);

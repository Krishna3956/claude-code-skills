#!/usr/bin/env node
/**
 * QA Audit Script for Quiz Platform
 * Validates dimension distribution, challenge count, IDs, and types across all quiz configs.
 */

const fs = require("fs");
const path = require("path");

const VALID_DIMENSIONS = new Set([
  "memory",
  "orchestration",
  "automation",
  "extensibility",
  "workflows",
  "prompting",
  "bestPractices",
]);

const TYPE_RULES = {
  1: "truth_or_myth",
  2: "truth_or_myth",
  3: "truth_or_myth",
  4: "truth_or_myth",
  5: "this_or_that",
  6: "this_or_that",
  7: "this_or_that",
  8: "quick_pick",
  9: "quick_pick",
  10: "quick_pick",
  11: "speed_pick",
  12: "speed_pick",
  13: "odd_one_out",
  14: "odd_one_out",
  15: null, // any type
};

const quizzesDir = path.join(__dirname, "../src/quizzes");
const files = fs.readdirSync(quizzesDir).filter((f) => f.endsWith(".tsx"));

const results = [];
const errors = [];

for (const file of files) {
  const quizSlug = file.replace(".tsx", "");
  const filePath = path.join(quizzesDir, file);
  const content = fs.readFileSync(filePath, "utf-8");

  // Extract challenges: match objects with type, id, dimension
  const challengeRegex =
    /\{\s*type:\s*"([^"]+)"\s*,\s*id:\s*(\d+)\s*,\s*dimension:\s*"([^"]+)"/g;
  const challenges = [];
  let m;
  while ((m = challengeRegex.exec(content)) !== null) {
    challenges.push({
      type: m[1],
      id: parseInt(m[2], 10),
      dimension: m[3],
    });
  }

  const quizResult = {
    slug: quizSlug,
    challengeCount: challenges.length,
    dimensionCounts: {},
    zeroDimensions: [],
    invalidDimensions: [],
    idErrors: [],
    typeErrors: [],
  };

  // Count dimensions
  for (const d of VALID_DIMENSIONS) {
    quizResult.dimensionCounts[d] = 0;
  }
  for (const c of challenges) {
    if (VALID_DIMENSIONS.has(c.dimension)) {
      quizResult.dimensionCounts[c.dimension]++;
    } else {
      quizResult.invalidDimensions.push(
        `id ${c.id}: "${c.dimension}"`
      );
    }
  }

  // Check for zero dimensions
  for (const [dim, count] of Object.entries(quizResult.dimensionCounts)) {
    if (count === 0) {
      quizResult.zeroDimensions.push(dim);
    }
  }

  // Check challenge count
  if (challenges.length !== 15) {
    quizResult.idErrors.push(
      `Expected 15 challenges, found ${challenges.length}`
    );
  }

  // Check IDs: sequential 1-15, no gaps, no duplicates
  const ids = challenges.map((c) => c.id).sort((a, b) => a - b);
  const expectedIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  if (ids.length !== new Set(ids).size) {
    const dupes = ids.filter((id, i) => ids.indexOf(id) !== i);
    quizResult.idErrors.push(`Duplicate IDs: ${[...new Set(dupes)].join(", ")}`);
  }
  if (ids.join(",") !== expectedIds.join(",")) {
    quizResult.idErrors.push(
      `IDs should be 1-15 sequential. Got: ${ids.join(", ")}`
    );
  }

  // Check type matches slot
  for (const c of challenges) {
    const expectedType = TYPE_RULES[c.id];
    if (expectedType && c.type !== expectedType) {
      quizResult.typeErrors.push(
        `id ${c.id}: expected type "${expectedType}", got "${c.type}"`
      );
    }
  }

  results.push(quizResult);
}

// --- REPORT ---
console.log("=".repeat(80));
console.log("QUIZ PLATFORM QA AUDIT REPORT");
console.log("=".repeat(80));
console.log();

console.log("1. DIMENSION DISTRIBUTION BY QUIZ");
console.log("-".repeat(80));
for (const r of results) {
  const dimStr = Object.entries(r.dimensionCounts)
    .map(([k, v]) => `${k}=${v}`)
    .join(", ");
  console.log(`${r.slug}: ${dimStr}`);
}
console.log();

console.log("2. QUIZZES WITH ZERO CHALLENGES IN A DIMENSION (BUG - FAKE SCORES)");
console.log("-".repeat(80));
const zeroDimQuizzes = results.filter((r) => r.zeroDimensions.length > 0);
if (zeroDimQuizzes.length === 0) {
  console.log("None - all quizzes have at least 1 challenge per dimension.");
} else {
  for (const r of zeroDimQuizzes) {
    console.log(`  ${r.slug}: ${r.zeroDimensions.join(", ")}`);
  }
}
console.log();

console.log("3. INVALID DIMENSION KEYS (not in valid set)");
console.log("-".repeat(80));
const invalidDimQuizzes = results.filter((r) => r.invalidDimensions.length > 0);
if (invalidDimQuizzes.length === 0) {
  console.log("None - all dimensions are valid.");
} else {
  for (const r of invalidDimQuizzes) {
    console.log(`  ${r.slug}: ${r.invalidDimensions.join("; ")}`);
  }
}
console.log();

console.log("4. CHALLENGE COUNT ERRORS (expected exactly 15)");
console.log("-".repeat(80));
const countErrors = results.filter((r) => r.challengeCount !== 15);
if (countErrors.length === 0) {
  console.log("None - all quizzes have exactly 15 challenges.");
} else {
  for (const r of countErrors) {
    console.log(`  ${r.slug}: ${r.challengeCount} challenges`);
  }
}
console.log();

console.log("5. ID ERRORS (gaps, duplicates, non-sequential)");
console.log("-".repeat(80));
const idErrorQuizzes = results.filter((r) => r.idErrors.length > 0);
if (idErrorQuizzes.length === 0) {
  console.log("None - all IDs are sequential 1-15 with no gaps/duplicates.");
} else {
  for (const r of idErrorQuizzes) {
    console.log(`  ${r.slug}:`);
    r.idErrors.forEach((e) => console.log(`    - ${e}`));
  }
}
console.log();

console.log("6. TYPE/SLOT MISMATCHES");
console.log("-".repeat(80));
console.log(
  "Rules: 1-4=truth_or_myth, 5-7=this_or_that, 8-10=quick_pick, 11-12=speed_pick, 13-14=odd_one_out, 15=any"
);
console.log("-".repeat(80));
const typeErrorQuizzes = results.filter((r) => r.typeErrors.length > 0);
if (typeErrorQuizzes.length === 0) {
  console.log("None - all challenge types match their round slots.");
} else {
  for (const r of typeErrorQuizzes) {
    console.log(`  ${r.slug}:`);
    r.typeErrors.forEach((e) => console.log(`    - ${e}`));
  }
}
console.log();

console.log("=".repeat(80));
console.log("SUMMARY");
console.log("=".repeat(80));
const totalErrors =
  zeroDimQuizzes.length +
  invalidDimQuizzes.length +
  countErrors.length +
  idErrorQuizzes.length +
  typeErrorQuizzes.length;
console.log(`Quizzes audited: ${results.length}`);
console.log(`Quizzes with zero-dimension bug: ${zeroDimQuizzes.length}`);
console.log(`Quizzes with invalid dimensions: ${invalidDimQuizzes.length}`);
console.log(`Quizzes with wrong challenge count: ${countErrors.length}`);
console.log(`Quizzes with ID errors: ${idErrorQuizzes.length}`);
console.log(`Quizzes with type/slot mismatches: ${typeErrorQuizzes.length}`);
console.log(`Total quizzes with at least one error: ${new Set([...zeroDimQuizzes, ...invalidDimQuizzes, ...countErrors, ...idErrorQuizzes, ...typeErrorQuizzes].map(r => r.slug)).size}`);

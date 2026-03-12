import fs from "node:fs";
import path from "node:path";
import type { QuizBuilderDraft } from "@/lib/quiz-builder";

const STORE_DIR = path.join(process.cwd(), ".tmp");
const STORE_FILE = path.join(STORE_DIR, "generated-quiz-draft.json");

export function setGeneratedQuizDraft(draft: QuizBuilderDraft) {
  fs.mkdirSync(STORE_DIR, { recursive: true });
  fs.writeFileSync(STORE_FILE, JSON.stringify(draft), "utf8");
}

export function getGeneratedQuizDraft(): QuizBuilderDraft | null {
  try {
    const raw = fs.readFileSync(STORE_FILE, "utf8");
    return JSON.parse(raw) as QuizBuilderDraft;
  } catch {
    return null;
  }
}

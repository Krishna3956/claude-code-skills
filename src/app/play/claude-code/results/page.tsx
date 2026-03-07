"use client";
import { ResultsPage } from "@/components/quiz";
import { claudeCodeConfig } from "@/quizzes/claude-code";

export default function Page() {
  return <ResultsPage config={claudeCodeConfig} />;
}

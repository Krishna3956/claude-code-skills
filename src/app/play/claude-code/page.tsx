"use client";
import { QuizPage } from "@/components/quiz";
import { claudeCodeConfig } from "@/quizzes/claude-code";

export default function Page() {
  return <QuizPage config={claudeCodeConfig} />;
}

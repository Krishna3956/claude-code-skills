"use client";
import { QuizPage } from "@/components/quiz";
import { loomConfig } from "@/quizzes/loom";

export default function Page() {
  return <QuizPage config={loomConfig} />;
}

"use client";

import { QuizPage } from "@/components/quiz";
import { merlinAiConfig } from "@/quizzes/merlin-ai";

export default function Page() {
  return <QuizPage config={merlinAiConfig} />;
}

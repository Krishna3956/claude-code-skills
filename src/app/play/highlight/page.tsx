"use client";

import { QuizPage } from "@/components/quiz";
import { highlightConfig } from "@/quizzes/highlight";

export default function Page() {
  return <QuizPage config={highlightConfig} />;
}

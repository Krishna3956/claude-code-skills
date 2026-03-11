"use client";

import { QuizPage } from "@/components/quiz";
import { cluesoConfig } from "@/quizzes/clueso";

export default function Page() {
  return <QuizPage config={cluesoConfig} />;
}

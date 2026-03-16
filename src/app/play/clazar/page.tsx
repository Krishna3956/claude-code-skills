"use client";

import { QuizPage } from "@/components/quiz";
import { clazarConfig } from "@/quizzes/clazar";

export default function Page() {
  return <QuizPage config={clazarConfig} />;
}

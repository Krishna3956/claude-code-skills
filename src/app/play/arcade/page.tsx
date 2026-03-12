"use client";

import { QuizPage } from "@/components/quiz";
import { arcadeConfig } from "@/quizzes/arcade";

export default function Page() {
  return <QuizPage config={arcadeConfig} />;
}

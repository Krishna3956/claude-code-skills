"use client";

import { QuizPage } from "@/components/quiz";
import { rowsConfig } from "@/quizzes/rows";

export default function Page() {
  return <QuizPage config={rowsConfig} />;
}

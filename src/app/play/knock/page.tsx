"use client";

import { QuizPage } from "@/components/quiz";
import { knockConfig } from "@/quizzes/knock";

export default function Page() {
  return <QuizPage config={knockConfig} />;
}

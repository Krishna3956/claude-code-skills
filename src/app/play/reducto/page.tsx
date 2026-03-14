"use client";

import { QuizPage } from "@/components/quiz";
import { reductoConfig } from "@/quizzes/reducto";

export default function Page() {
  return <QuizPage config={reductoConfig} />;
}

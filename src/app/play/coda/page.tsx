"use client";

import { QuizPage } from "@/components/quiz";
import { codaConfig } from "@/quizzes/coda";

export default function Page() {
  return <QuizPage config={codaConfig} />;
}

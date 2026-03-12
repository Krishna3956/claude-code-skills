"use client";

import { QuizPage } from "@/components/quiz";
import { tallyConfig } from "@/quizzes/tally";

export default function Page() {
  return <QuizPage config={tallyConfig} />;
}

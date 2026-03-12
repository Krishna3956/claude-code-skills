"use client";

import { QuizPage } from "@/components/quiz";
import { planetscaleConfig } from "@/quizzes/planetscale";

export default function Page() {
  return <QuizPage config={planetscaleConfig} />;
}

"use client";

import { QuizPage } from "@/components/quiz";
import { splineConfig } from "@/quizzes/spline";

export default function Page() {
  return <QuizPage config={splineConfig} />;
}

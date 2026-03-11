"use client";

import { QuizPage } from "@/components/quiz";
import { rotorisConfig } from "@/quizzes/rotoris";

export default function Page() {
  return <QuizPage config={rotorisConfig} />;
}

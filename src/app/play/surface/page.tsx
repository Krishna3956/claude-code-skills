"use client";

import { QuizPage } from "@/components/quiz";
import { surfaceConfig } from "@/quizzes/surface";

export default function Page() {
  return <QuizPage config={surfaceConfig} />;
}

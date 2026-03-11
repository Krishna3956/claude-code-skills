"use client";

import { QuizPage } from "@/components/quiz";
import { riveConfig } from "@/quizzes/rive";

export default function Page() {
  return <QuizPage config={riveConfig} />;
}

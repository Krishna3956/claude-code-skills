"use client";

import { QuizPage } from "@/components/quiz";
import { raycastConfig } from "@/quizzes/raycast";

export default function Page() {
  return <QuizPage config={raycastConfig} />;
}

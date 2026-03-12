"use client";

import { QuizPage } from "@/components/quiz";
import { triggerdevConfig } from "@/quizzes/triggerdev";

export default function Page() {
  return <QuizPage config={triggerdevConfig} />;
}

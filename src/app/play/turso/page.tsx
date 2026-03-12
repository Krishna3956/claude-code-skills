"use client";

import { QuizPage } from "@/components/quiz";
import { tursoConfig } from "@/quizzes/turso";

export default function Page() {
  return <QuizPage config={tursoConfig} />;
}

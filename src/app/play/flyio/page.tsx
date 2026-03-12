"use client";

import { QuizPage } from "@/components/quiz";
import { flyioConfig } from "@/quizzes/flyio";

export default function Page() {
  return <QuizPage config={flyioConfig} />;
}

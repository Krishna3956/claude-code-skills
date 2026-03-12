"use client";

import { QuizPage } from "@/components/quiz";
import { plainConfig } from "@/quizzes/plain";

export default function Page() {
  return <QuizPage config={plainConfig} />;
}

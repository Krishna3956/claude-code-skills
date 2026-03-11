"use client";

import { QuizPage } from "@/components/quiz";
import { e2bConfig } from "@/quizzes/e2b";

export default function Page() {
  return <QuizPage config={e2bConfig} />;
}

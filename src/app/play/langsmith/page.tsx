"use client";

import { QuizPage } from "@/components/quiz";
import { langsmithConfig } from "@/quizzes/langsmith";

export default function Page() {
  return <QuizPage config={langsmithConfig} />;
}

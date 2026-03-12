"use client";

import { QuizPage } from "@/components/quiz";
import { infisicalConfig } from "@/quizzes/infisical";

export default function Page() {
  return <QuizPage config={infisicalConfig} />;
}

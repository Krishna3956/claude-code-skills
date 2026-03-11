"use client";

import { QuizPage } from "@/components/quiz";
import { langchainConfig } from "@/quizzes/langchain";

export default function Page() {
  return <QuizPage config={langchainConfig} />;
}

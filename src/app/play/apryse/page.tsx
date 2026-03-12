"use client";
import { QuizPage } from "@/components/quiz";
import { apryseConfig } from "@/quizzes/apryse";

export default function Page() {
  return <QuizPage config={apryseConfig} />;
}

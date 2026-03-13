"use client";
import { QuizPage } from "@/components/quiz";
import { stiltaConfig } from "@/quizzes/stilta";

export default function Page() {
  return <QuizPage config={stiltaConfig} />;
}

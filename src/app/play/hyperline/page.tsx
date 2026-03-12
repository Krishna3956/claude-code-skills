"use client";
import { QuizPage } from "@/components/quiz";
import { hyperlineConfig } from "@/quizzes/hyperline";

export default function Page() {
  return <QuizPage config={hyperlineConfig} />;
}

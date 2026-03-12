"use client";
import { QuizPage } from "@/components/quiz";
import { paddleConfig } from "@/quizzes/paddle";

export default function Page() {
  return <QuizPage config={paddleConfig} />;
}

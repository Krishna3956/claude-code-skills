"use client";
import { QuizPage } from "@/components/quiz";
import { canvaConfig } from "@/quizzes/canva";

export default function Page() {
  return <QuizPage config={canvaConfig} />;
}

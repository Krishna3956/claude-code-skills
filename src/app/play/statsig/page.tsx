"use client";
import { QuizPage } from "@/components/quiz";
import { statsigConfig } from "@/quizzes/statsig";

export default function Page() {
  return <QuizPage config={statsigConfig} />;
}

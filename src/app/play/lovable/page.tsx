"use client";
import { QuizPage } from "@/components/quiz";
import { lovableConfig } from "@/quizzes/lovable";

export default function Page() {
  return <QuizPage config={lovableConfig} />;
}

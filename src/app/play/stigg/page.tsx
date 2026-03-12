"use client";
import { QuizPage } from "@/components/quiz";
import { stiggConfig } from "@/quizzes/stigg";

export default function Page() {
  return <QuizPage config={stiggConfig} />;
}

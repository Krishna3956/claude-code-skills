"use client";
import { QuizPage } from "@/components/quiz";
import { linearConfig } from "@/quizzes/linear";

export default function Page() {
  return <QuizPage config={linearConfig} />;
}

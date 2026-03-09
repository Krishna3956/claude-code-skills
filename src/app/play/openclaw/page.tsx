"use client";
import { QuizPage } from "@/components/quiz";
import { openclawConfig } from "@/quizzes/openclaw";

export default function Page() {
  return <QuizPage config={openclawConfig} />;
}

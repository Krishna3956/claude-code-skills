"use client";
import { QuizPage } from "@/components/quiz";
import { cursorConfig } from "@/quizzes/cursor";

export default function Page() {
  return <QuizPage config={cursorConfig} />;
}

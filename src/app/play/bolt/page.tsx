"use client";
import { QuizPage } from "@/components/quiz";
import { boltConfig } from "@/quizzes/bolt";

export default function Page() {
  return <QuizPage config={boltConfig} />;
}

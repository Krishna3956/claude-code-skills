"use client";
import { QuizPage } from "@/components/quiz";
import { vercelConfig } from "@/quizzes/vercel";

export default function Page() {
  return <QuizPage config={vercelConfig} />;
}

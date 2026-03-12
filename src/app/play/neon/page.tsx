"use client";
import { QuizPage } from "@/components/quiz";
import { NeonConfig } from "@/quizzes/neon";

export default function Page() {
  return <QuizPage config={NeonConfig} />;
}

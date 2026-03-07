"use client";
import { QuizPage } from "@/components/quiz";
import { zapierConfig } from "@/quizzes/zapier";

export default function Page() {
  return <QuizPage config={zapierConfig} />;
}

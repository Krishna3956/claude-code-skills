"use client";
import { QuizPage } from "@/components/quiz";
import { wealthsimpleConfig } from "@/quizzes/wealthsimple";

export default function Page() {
  return <QuizPage config={wealthsimpleConfig} />;
}

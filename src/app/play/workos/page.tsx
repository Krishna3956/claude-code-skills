"use client";
import { QuizPage } from "@/components/quiz";
import { workosConfig } from "@/quizzes/workos";

export default function Page() {
  return <QuizPage config={workosConfig} />;
}

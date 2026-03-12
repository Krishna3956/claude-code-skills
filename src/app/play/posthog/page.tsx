"use client";
import { QuizPage } from "@/components/quiz";
import { posthogConfig } from "@/quizzes/posthog";

export default function Page() {
  return <QuizPage config={posthogConfig} />;
}

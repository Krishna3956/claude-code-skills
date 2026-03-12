"use client";
import { QuizPage } from "@/components/quiz";
import { buildkiteConfig } from "@/quizzes/buildkite";

export default function Page() {
  return <QuizPage config={buildkiteConfig} />;
}

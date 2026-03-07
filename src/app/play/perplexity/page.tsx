"use client";
import { QuizPage } from "@/components/quiz";
import { perplexityConfig } from "@/quizzes/perplexity";

export default function Page() {
  return <QuizPage config={perplexityConfig} />;
}

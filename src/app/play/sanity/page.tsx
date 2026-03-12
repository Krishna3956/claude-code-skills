"use client";
import { QuizPage } from "@/components/quiz";
import { sanityConfig } from "@/quizzes/sanity";

export default function Page() {
  return <QuizPage config={sanityConfig} />;
}

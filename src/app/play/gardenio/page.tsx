"use client";
import { QuizPage } from "@/components/quiz";
import { gardenioConfig } from "@/quizzes/gardenio";

export default function Page() {
  return <QuizPage config={gardenioConfig} />;
}

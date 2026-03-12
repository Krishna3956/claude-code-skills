"use client";
import { QuizPage } from "@/components/quiz";
import { expoConfig } from "@/quizzes/expo";

export default function Page() {
  return <QuizPage config={expoConfig} />;
}

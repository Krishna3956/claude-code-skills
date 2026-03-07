"use client";
import { QuizPage } from "@/components/quiz";
import { figmaConfig } from "@/quizzes/figma";

export default function Page() {
  return <QuizPage config={figmaConfig} />;
}

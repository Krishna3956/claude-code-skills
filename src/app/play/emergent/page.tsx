"use client";
import { QuizPage } from "@/components/quiz";
import { emergentConfig } from "@/quizzes/emergent";

export default function Page() {
  return <QuizPage config={emergentConfig} />;
}

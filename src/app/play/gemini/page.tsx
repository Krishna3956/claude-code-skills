"use client";
import { QuizPage } from "@/components/quiz";
import { geminiConfig } from "@/quizzes/gemini";

export default function Page() {
  return <QuizPage config={geminiConfig} />;
}

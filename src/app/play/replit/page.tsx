"use client";
import { QuizPage } from "@/components/quiz";
import { replitConfig } from "@/quizzes/replit";

export default function Page() {
  return <QuizPage config={replitConfig} />;
}

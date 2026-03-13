"use client";
import { QuizPage } from "@/components/quiz";
import { excelConfig } from "@/quizzes/excel";

export default function Page() {
  return <QuizPage config={excelConfig} />;
}

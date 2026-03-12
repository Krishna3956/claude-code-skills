"use client";
import { QuizPage } from "@/components/quiz";
import { wherebyConfig } from "@/quizzes/whereby";

export default function Page() {
  return <QuizPage config={wherebyConfig} />;
}

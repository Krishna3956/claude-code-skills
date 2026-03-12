"use client";

import { QuizPage } from "@/components/quiz";
import { granolaConfig } from "@/quizzes/granola";

export default function Page() {
  return <QuizPage config={granolaConfig} />;
}

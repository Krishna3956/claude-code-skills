"use client";

import { QuizPage } from "@/components/quiz";
import { framerConfig } from "@/quizzes/framer";

export default function Page() {
  return <QuizPage config={framerConfig} />;
}

"use client";

import { QuizPage } from "@/components/quiz";
import { storylaneConfig } from "@/quizzes/storylane";

export default function Page() {
  return <QuizPage config={storylaneConfig} />;
}

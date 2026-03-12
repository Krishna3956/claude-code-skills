"use client";

import { QuizPage } from "@/components/quiz";
import { trainualConfig } from "@/quizzes/trainual";

export default function Page() {
  return <QuizPage config={trainualConfig} />;
}

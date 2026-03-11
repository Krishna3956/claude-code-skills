"use client";

import { QuizPage } from "@/components/quiz";
import { attioConfig } from "@/quizzes/attio";

export default function Page() {
  return <QuizPage config={attioConfig} />;
}

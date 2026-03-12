"use client";

import { QuizPage } from "@/components/quiz";
import { axiomConfig } from "@/quizzes/axiom";

export default function Page() {
  return <QuizPage config={axiomConfig} />;
}

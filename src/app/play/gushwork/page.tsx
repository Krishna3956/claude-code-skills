"use client";

import { QuizPage } from "@/components/quiz";
import { gushworkConfig } from "@/quizzes/gushwork";

export default function Page() {
  return <QuizPage config={gushworkConfig} />;
}

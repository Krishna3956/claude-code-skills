"use client";

import { QuizPage } from "@/components/quiz";
import { arizeConfig } from "@/quizzes/arize";

export default function Page() {
  return <QuizPage config={arizeConfig} />;
}

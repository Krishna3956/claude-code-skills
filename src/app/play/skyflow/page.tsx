"use client";

import { QuizPage } from "@/components/quiz";
import { skyflowConfig } from "@/quizzes/skyflow";

export default function Page() {
  return <QuizPage config={skyflowConfig} />;
}

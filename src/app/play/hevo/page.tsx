"use client";

import { QuizPage } from "@/components/quiz";
import { hevoConfig } from "@/quizzes/hevo";

export default function Page() {
  return <QuizPage config={hevoConfig} />;
}

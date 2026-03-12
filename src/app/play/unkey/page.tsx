"use client";

import { QuizPage } from "@/components/quiz";
import { unkeyConfig } from "@/quizzes/unkey";

export default function Page() {
  return <QuizPage config={unkeyConfig} />;
}

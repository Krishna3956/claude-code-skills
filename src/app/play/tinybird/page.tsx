"use client";

import { QuizPage } from "@/components/quiz";
import { tinybirdConfig } from "@/quizzes/tinybird";

export default function Page() {
  return <QuizPage config={tinybirdConfig} />;
}

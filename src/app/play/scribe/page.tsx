"use client";

import { QuizPage } from "@/components/quiz";
import { scribeConfig } from "@/quizzes/scribe";

export default function Page() {
  return <QuizPage config={scribeConfig} />;
}

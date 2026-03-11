"use client";

import { QuizPage } from "@/components/quiz";
import { fastlyConfig } from "@/quizzes/fastly";

export default function Page() {
  return <QuizPage config={fastlyConfig} />;
}

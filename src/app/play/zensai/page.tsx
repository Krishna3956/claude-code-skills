"use client";

import { QuizPage } from "@/components/quiz";
import { zensaiConfig } from "@/quizzes/zensai";

export default function Page() {
  return <QuizPage config={zensaiConfig} />;
}

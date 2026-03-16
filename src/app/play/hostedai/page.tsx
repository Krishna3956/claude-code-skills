"use client";

import { QuizPage } from "@/components/quiz";
import { hostedaiConfig } from "@/quizzes/hostedai";

export default function Page() {
  return <QuizPage config={hostedaiConfig} />;
}

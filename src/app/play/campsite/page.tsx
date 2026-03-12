"use client";

import { QuizPage } from "@/components/quiz";
import { campsiteConfig } from "@/quizzes/campsite";

export default function Page() {
  return <QuizPage config={campsiteConfig} />;
}

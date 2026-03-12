"use client";

import { QuizPage } from "@/components/quiz";
import { convexConfig } from "@/quizzes/convex";

export default function Page() {
  return <QuizPage config={convexConfig} />;
}

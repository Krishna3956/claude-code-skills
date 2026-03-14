"use client";

import { QuizPage } from "@/components/quiz";
import { memoriesConfig } from "@/quizzes/memories";

export default function Page() {
  return <QuizPage config={memoriesConfig} />;
}

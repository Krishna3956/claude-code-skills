"use client";

import { QuizPage } from "@/components/quiz";
import { sstConfig } from "@/quizzes/sst";

export default function Page() {
  return <QuizPage config={sstConfig} />;
}

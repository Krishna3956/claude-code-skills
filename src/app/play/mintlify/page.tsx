"use client";

import { QuizPage } from "@/components/quiz";
import { mintlifyConfig } from "@/quizzes/mintlify";

export default function Page() {
  return <QuizPage config={mintlifyConfig} />;
}

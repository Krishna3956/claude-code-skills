"use client";

import { ResultsPage } from "@/components/quiz";
import { langsmithConfig } from "@/quizzes/langsmith";

export default function Page() {
  return <ResultsPage config={langsmithConfig} />;
}

"use client";

import { ResultsPage } from "@/components/quiz";
import { e2bConfig } from "@/quizzes/e2b";

export default function Page() {
  return <ResultsPage config={e2bConfig} />;
}

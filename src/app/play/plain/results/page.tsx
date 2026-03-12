"use client";

import { ResultsPage } from "@/components/quiz";
import { plainConfig } from "@/quizzes/plain";

export default function Page() {
  return <ResultsPage config={plainConfig} />;
}

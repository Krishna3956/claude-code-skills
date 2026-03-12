"use client";

import { ResultsPage } from "@/components/quiz";
import { flyioConfig } from "@/quizzes/flyio";

export default function Page() {
  return <ResultsPage config={flyioConfig} />;
}

"use client";

import { ResultsPage } from "@/components/quiz";
import { reductoConfig } from "@/quizzes/reducto";

export default function Page() {
  return <ResultsPage config={reductoConfig} />;
}

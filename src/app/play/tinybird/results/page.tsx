"use client";

import { ResultsPage } from "@/components/quiz";
import { tinybirdConfig } from "@/quizzes/tinybird";

export default function Page() {
  return <ResultsPage config={tinybirdConfig} />;
}

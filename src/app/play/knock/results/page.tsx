"use client";

import { ResultsPage } from "@/components/quiz";
import { knockConfig } from "@/quizzes/knock";

export default function Page() {
  return <ResultsPage config={knockConfig} />;
}

"use client";

import { ResultsPage } from "@/components/quiz";
import { rowsConfig } from "@/quizzes/rows";

export default function Page() {
  return <ResultsPage config={rowsConfig} />;
}

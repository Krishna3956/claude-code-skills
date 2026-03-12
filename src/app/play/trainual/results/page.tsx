"use client";

import { ResultsPage } from "@/components/quiz";
import { trainualConfig } from "@/quizzes/trainual";

export default function Page() {
  return <ResultsPage config={trainualConfig} />;
}

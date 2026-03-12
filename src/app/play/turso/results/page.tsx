"use client";

import { ResultsPage } from "@/components/quiz";
import { tursoConfig } from "@/quizzes/turso";

export default function Page() {
  return <ResultsPage config={tursoConfig} />;
}

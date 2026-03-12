"use client";

import { ResultsPage } from "@/components/quiz";
import { unkeyConfig } from "@/quizzes/unkey";

export default function Page() {
  return <ResultsPage config={unkeyConfig} />;
}

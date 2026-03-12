"use client";

import { ResultsPage } from "@/components/quiz";
import { granolaConfig } from "@/quizzes/granola";

export default function Page() {
  return <ResultsPage config={granolaConfig} />;
}

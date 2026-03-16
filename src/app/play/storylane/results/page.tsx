"use client";

import { ResultsPage } from "@/components/quiz";
import { storylaneConfig } from "@/quizzes/storylane";

export default function Page() {
  return <ResultsPage config={storylaneConfig} />;
}

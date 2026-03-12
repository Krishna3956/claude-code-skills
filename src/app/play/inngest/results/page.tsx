"use client";

import { ResultsPage } from "@/components/quiz";
import { inngestConfig } from "@/quizzes/inngest";

export default function Page() {
  return <ResultsPage config={inngestConfig} />;
}

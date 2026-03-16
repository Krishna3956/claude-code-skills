"use client";

import { ResultsPage } from "@/components/quiz";
import { starbuzzConfig } from "@/quizzes/starbuzz";

export default function Page() {
  return <ResultsPage config={starbuzzConfig} />;
}

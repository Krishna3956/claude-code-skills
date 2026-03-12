"use client";

import { ResultsPage } from "@/components/quiz";
import { guruConfig } from "@/quizzes/guru";

export default function Page() {
  return <ResultsPage config={guruConfig} />;
}

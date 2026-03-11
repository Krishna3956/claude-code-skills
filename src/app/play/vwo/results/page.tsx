"use client";

import { ResultsPage } from "@/components/quiz";
import { vwoConfig } from "@/quizzes/vwo";

export default function Page() {
  return <ResultsPage config={vwoConfig} />;
}

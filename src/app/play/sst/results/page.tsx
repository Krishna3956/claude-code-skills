"use client";

import { ResultsPage } from "@/components/quiz";
import { sstConfig } from "@/quizzes/sst";

export default function Page() {
  return <ResultsPage config={sstConfig} />;
}

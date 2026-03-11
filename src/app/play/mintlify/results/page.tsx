"use client";

import { ResultsPage } from "@/components/quiz";
import { mintlifyConfig } from "@/quizzes/mintlify";

export default function Page() {
  return <ResultsPage config={mintlifyConfig} />;
}

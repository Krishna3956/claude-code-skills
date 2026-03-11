"use client";

import { ResultsPage } from "@/components/quiz";
import { browserbaseConfig } from "@/quizzes/browserbase";

export default function Page() {
  return <ResultsPage config={browserbaseConfig} />;
}

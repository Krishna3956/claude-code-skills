"use client";

import { ResultsPage } from "@/components/quiz";
import { depotConfig } from "@/quizzes/depot";

export default function Page() {
  return <ResultsPage config={depotConfig} />;
}

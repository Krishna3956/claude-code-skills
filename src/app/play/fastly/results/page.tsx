"use client";

import { ResultsPage } from "@/components/quiz";
import { fastlyConfig } from "@/quizzes/fastly";

export default function Page() {
  return <ResultsPage config={fastlyConfig} />;
}

"use client";

import { ResultsPage } from "@/components/quiz";
import { grafbaseConfig } from "@/quizzes/grafbase";

export default function Page() {
  return <ResultsPage config={grafbaseConfig} />;
}

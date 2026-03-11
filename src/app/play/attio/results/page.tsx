"use client";

import { ResultsPage } from "@/components/quiz";
import { attioConfig } from "@/quizzes/attio";

export default function Page() {
  return <ResultsPage config={attioConfig} />;
}

"use client";

import { ResultsPage } from "@/components/quiz";
import { hevoConfig } from "@/quizzes/hevo";

export default function Page() {
  return <ResultsPage config={hevoConfig} />;
}

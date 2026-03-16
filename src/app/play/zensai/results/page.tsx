"use client";

import { ResultsPage } from "@/components/quiz";
import { zensaiConfig } from "@/quizzes/zensai";

export default function Page() {
  return <ResultsPage config={zensaiConfig} />;
}

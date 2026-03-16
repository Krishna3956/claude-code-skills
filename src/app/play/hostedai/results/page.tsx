"use client";

import { ResultsPage } from "@/components/quiz";
import { hostedaiConfig } from "@/quizzes/hostedai";

export default function Page() {
  return <ResultsPage config={hostedaiConfig} />;
}

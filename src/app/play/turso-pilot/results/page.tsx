"use client";

import { ResultsPage } from "@/components/quiz";
import { tursoPilotConfig } from "@/quizzes/turso-pilot";

export default function Page() {
  return <ResultsPage config={tursoPilotConfig} />;
}

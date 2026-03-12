"use client";

import { ResultsPage } from "@/components/quiz";
import { upstashConfig } from "@/quizzes/upstash";

export default function Page() {
  return <ResultsPage config={upstashConfig} />;
}

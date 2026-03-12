"use client";

import { ResultsPage } from "@/components/quiz";
import { basedashConfig } from "@/quizzes/basedash";

export default function Page() {
  return <ResultsPage config={basedashConfig} />;
}

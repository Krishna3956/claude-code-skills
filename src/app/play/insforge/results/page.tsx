"use client";

import { ResultsPage } from "@/components/quiz";
import { insforgeConfig } from "@/quizzes/insforge";

export default function Page() {
  return <ResultsPage config={insforgeConfig} />;
}

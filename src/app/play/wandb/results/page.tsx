"use client";

import { ResultsPage } from "@/components/quiz";
import { wandbConfig } from "@/quizzes/wandb";

export default function Page() {
  return <ResultsPage config={wandbConfig} />;
}

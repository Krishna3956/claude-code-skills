"use client";

import { ResultsPage } from "@/components/quiz";
import { liveblocksConfig } from "@/quizzes/liveblocks";

export default function Page() {
  return <ResultsPage config={liveblocksConfig} />;
}

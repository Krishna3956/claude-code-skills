"use client";

import { QuizPage } from "@/components/quiz";
import { liveblocksConfig } from "@/quizzes/liveblocks";

export default function Page() {
  return <QuizPage config={liveblocksConfig} />;
}

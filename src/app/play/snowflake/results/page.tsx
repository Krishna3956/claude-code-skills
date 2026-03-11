"use client";

import { ResultsPage } from "@/components/quiz";
import { snowflakeConfig } from "@/quizzes/snowflake";

export default function Page() {
  return <ResultsPage config={snowflakeConfig} />;
}


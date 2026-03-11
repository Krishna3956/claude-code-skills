"use client";

import { QuizPage } from "@/components/quiz";
import { snowflakeConfig } from "@/quizzes/snowflake";

export default function Page() {
  return <QuizPage config={snowflakeConfig} />;
}


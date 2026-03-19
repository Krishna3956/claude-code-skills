"use client";

import { QuizPage } from "@/components/quiz";
import { notionConfig } from "@/quizzes/notion";

export default function Page() {
  return <QuizPage config={{ ...notionConfig, slug: "notionn", analyticsPrefix: "notionn" }} />;
}

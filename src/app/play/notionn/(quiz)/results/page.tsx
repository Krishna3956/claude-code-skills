"use client";

import { ResultsPage } from "@/components/quiz";
import { notionConfig } from "@/quizzes/notion";

export default function Page() {
  return <ResultsPage config={{ ...notionConfig, slug: "notionn", analyticsPrefix: "notionn" }} />;
}

"use client";

import { ResultsPage } from "@/components/quiz";
import { airtableConfig } from "@/quizzes/airtable";

export default function Page() {
  return <ResultsPage config={{ ...airtableConfig, slug: "airtablee", analyticsPrefix: "airtablee" }} />;
}

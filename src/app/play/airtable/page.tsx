"use client";
import { QuizPage } from "@/components/quiz";
import { airtableConfig } from "@/quizzes/airtable";

export default function Page() {
  return <QuizPage config={airtableConfig} />;
}

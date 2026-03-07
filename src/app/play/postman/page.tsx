"use client";
import { QuizPage } from "@/components/quiz";
import { postmanConfig } from "@/quizzes/postman";

export default function Page() {
  return <QuizPage config={postmanConfig} />;
}

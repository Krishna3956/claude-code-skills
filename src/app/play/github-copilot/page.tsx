"use client";
import { QuizPage } from "@/components/quiz";
import { githubCopilotConfig } from "@/quizzes/github-copilot";

export default function Page() {
  return <QuizPage config={githubCopilotConfig} />;
}

"use client";
import { ResultsPage } from "@/components/quiz";
import { githubCopilotConfig } from "@/quizzes/github-copilot";

export default function Page() {
  return <ResultsPage config={githubCopilotConfig} />;
}

import type { Metadata } from "next";
import { QuizLayout } from "@/components/quiz";
import { githubCopilotConfig } from "@/quizzes/github-copilot";

export const metadata: Metadata = {
  title: "How GitHub Copilot Are You?",
  description:
    "6 rounds. ~3 min. No signup. Test your GitHub Copilot skills and get a shareable scorecard.",
  icons: { icon: "/logos/github-copilot.jpg" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <QuizLayout config={githubCopilotConfig}>{children}</QuizLayout>;
}

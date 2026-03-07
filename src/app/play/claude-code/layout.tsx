import type { Metadata } from "next";
import { QuizLayout } from "@/components/quiz";
import { claudeCodeConfig } from "@/quizzes/claude-code";

export const metadata: Metadata = {
  title: "How Claude Code Are You?",
  description:
    "15 challenges. 6 rounds. ~3 minutes. No signup. Test your Claude Code skills and get a shareable scorecard.",
  icons: { icon: "/claude-logo.png" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <QuizLayout config={claudeCodeConfig}>{children}</QuizLayout>;
}

import type { Metadata } from "next";
import { QuizLayout } from "@/components/quiz";
import { obsidianConfig } from "@/quizzes/obsidian";

export const metadata: Metadata = {
  title: "How Obsidian Are You?",
  description:
    "6 rounds. ~3 min. No signup. Test your Obsidian skills and get a shareable scorecard.",
  icons: { icon: "/logos/obsidian.png" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <QuizLayout config={obsidianConfig}>{children}</QuizLayout>;
}

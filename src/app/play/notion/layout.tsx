import type { Metadata } from "next";
import { QuizLayout } from "@/components/quiz";
import { notionConfig } from "@/quizzes/notion";

export const metadata: Metadata = {
  title: "How Notion Are You?",
  description:
    "6 rounds. ~3 min. No signup. Test your Notion skills and get a shareable scorecard.",
  icons: { icon: "/logos/notion.png" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <QuizLayout config={notionConfig}>{children}</QuizLayout>;
}

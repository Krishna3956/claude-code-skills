import type { Metadata } from "next";
import { QuizLayout } from "@/components/quiz";
import { cursorConfig } from "@/quizzes/cursor";

export const metadata: Metadata = {
  title: "How Cursor Are You?",
  description: "6 rounds. ~3 min. No signup. Test your Cursor skills and get a shareable scorecard.",
  icons: { icon: "/logos/cursor.png" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <QuizLayout config={cursorConfig}>{children}</QuizLayout>;
}

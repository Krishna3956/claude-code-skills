import type { Metadata } from "next";
import { QuizLayout } from "@/components/quiz";
import { windsurfConfig } from "@/quizzes/windsurf";

export const metadata: Metadata = {
  title: "How Windsurf Are You?",
  description:
    "15 challenges. 6 rounds. ~3 minutes. No signup. Test your Windsurf skills and get a shareable scorecard.",
  icons: { icon: "/logos/windsurf.svg" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <QuizLayout config={windsurfConfig}>{children}</QuizLayout>;
}

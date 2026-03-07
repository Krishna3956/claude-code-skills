import type { Metadata } from "next";
import { QuizLayout } from "@/components/quiz";
import { linearConfig } from "@/quizzes/linear";

export const metadata: Metadata = {
  title: "How Linear Are You?",
  description:
    "15 challenges. 6 rounds. ~3 minutes. No signup. Test your Linear skills and get a shareable scorecard.",
  icons: { icon: "/logos/linear.jpg" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <QuizLayout config={linearConfig}>{children}</QuizLayout>;
}

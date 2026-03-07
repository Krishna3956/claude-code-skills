import type { Metadata } from "next";
import { QuizLayout } from "@/components/quiz";
import { zapierConfig } from "@/quizzes/zapier";

export const metadata: Metadata = {
  title: "How Zapier Are You?",
  description:
    "6 rounds. ~3 min. No signup. Test your Zapier skills and get a shareable scorecard.",
  icons: { icon: "/logos/zapier.png" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <QuizLayout config={zapierConfig}>{children}</QuizLayout>;
}

import type { Metadata } from "next";
import { QuizLayout } from "@/components/quiz";
import { geminiConfig } from "@/quizzes/gemini";

export const metadata: Metadata = {
  title: "How Gemini Are You?",
  description:
    "6 rounds. ~3 min. No signup. Test your Gemini skills and get a shareable scorecard.",
  icons: { icon: "/logos/gemini.png" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <QuizLayout config={geminiConfig}>{children}</QuizLayout>;
}

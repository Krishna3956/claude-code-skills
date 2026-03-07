import type { Metadata } from "next";
import { QuizLayout } from "@/components/quiz";
import { lovableConfig } from "@/quizzes/lovable";

export const metadata: Metadata = {
  title: "How Lovable Are You?",
  description:
    "6 rounds. ~3 min. No signup. Test your Lovable skills and get a shareable scorecard.",
  icons: { icon: "/logos/lovable.png" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <QuizLayout config={lovableConfig}>{children}</QuizLayout>;
}

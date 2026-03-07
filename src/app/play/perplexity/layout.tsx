import type { Metadata } from "next";
import { QuizLayout } from "@/components/quiz";
import { perplexityConfig } from "@/quizzes/perplexity";

export const metadata: Metadata = {
  title: "How Perplexity Are You?",
  description:
    "6 rounds. ~3 min. No signup. Test your Perplexity skills and get a shareable scorecard.",
  icons: { icon: "/logos/perplexity.png" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <QuizLayout config={perplexityConfig}>{children}</QuizLayout>;
}

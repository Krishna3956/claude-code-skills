import type { Metadata } from "next";
import { QuizLayout } from "@/components/quiz";
import { canvaConfig } from "@/quizzes/canva";

export const metadata: Metadata = {
  title: "How Canva Are You?",
  description:
    "15 challenges. 6 rounds. ~3 minutes. No signup. Test your Canva skills and get a shareable scorecard.",
  icons: { icon: "/logos/canva.jpg" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <QuizLayout config={canvaConfig}>{children}</QuizLayout>;
}

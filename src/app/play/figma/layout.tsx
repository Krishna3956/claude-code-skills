import type { Metadata } from "next";
import { QuizLayout } from "@/components/quiz";
import { figmaConfig } from "@/quizzes/figma";

export const metadata: Metadata = {
  title: "How Figma Are You?",
  description:
    "6 rounds. ~3 min. No signup. Test your Figma skills and get a shareable scorecard.",
  icons: { icon: "/logos/figma.svg" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <QuizLayout config={figmaConfig}>{children}</QuizLayout>;
}

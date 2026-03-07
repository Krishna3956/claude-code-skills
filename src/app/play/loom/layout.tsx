import type { Metadata } from "next";
import { QuizLayout } from "@/components/quiz";
import { loomConfig } from "@/quizzes/loom";

export const metadata: Metadata = {
  title: "How Loom Are You?",
  description:
    "6 rounds. ~3 min. No signup. Test your Loom skills and get a shareable scorecard.",
  icons: { icon: "/logos/loom.png" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <QuizLayout config={loomConfig}>{children}</QuizLayout>;
}

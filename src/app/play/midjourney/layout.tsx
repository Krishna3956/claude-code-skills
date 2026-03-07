import type { Metadata } from "next";
import { QuizLayout } from "@/components/quiz";
import { midjourneyConfig } from "@/quizzes/midjourney";

export const metadata: Metadata = {
  title: "How Midjourney Are You?",
  description:
    "15 challenges. 6 rounds. ~3 minutes. No signup. Test your Midjourney skills and get a shareable scorecard.",
  icons: { icon: "/logos/midjourney.jpg" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <QuizLayout config={midjourneyConfig}>{children}</QuizLayout>;
}

import type { Metadata } from "next";
import { QuizLayout } from "@/components/quiz";
import { slackConfig } from "@/quizzes/slack";

export const metadata: Metadata = {
  title: "How Slack Are You?",
  description:
    "15 challenges. 6 rounds. ~3 minutes. No signup. Test your Slack skills and get a shareable scorecard.",
  icons: { icon: "/logos/slack.png" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <QuizLayout config={slackConfig}>{children}</QuizLayout>;
}

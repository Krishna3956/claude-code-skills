import type { Metadata } from "next";
import { QuizLayout } from "@/components/quiz";
import { slackConfig } from "@/quizzes/slack";

const canonicalUrl = "https://www.howwellyouknow.com/play/slack";
const description =
  "Slack ninja or newbie? Test channels, huddles, workflows, and integrations across 6 rounds. Free quiz, shareable scorecard, ~3 min.";
const ogImageUrl =
  "/api/og?title=How+Slack+Are+You%3F&tool=Slack&slug=slack";

export const metadata: Metadata = {
  title: "How Slack Are You?",
  description,
  icons: { icon: "/logos/slack.png" },
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: "How Slack Are You?",
    description,
    url: canonicalUrl,
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: "How Slack Are You?" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "How Slack Are You?",
    description,
    images: [ogImageUrl],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <QuizLayout config={slackConfig}>{children}</QuizLayout>;
}

import type { Metadata } from "next";
import { QuizLayout } from "@/components/quiz";
import { buildkiteConfig } from "@/quizzes/buildkite";

const canonicalUrl = "https://www.howwellyouknow.com/play/buildkite";
const description =
  "Think you know Buildkite? Test pipeline architecture, agent design, dynamic pipelines, and CI/CD best practices in 6 rounds.";
const ogImageUrl =
  "/api/og?title=How+Buildkite+Are+You%3F&tool=Buildkite&slug=buildkite";

export const metadata: Metadata = {
  title: "How Buildkite Are You?",
  description,
  icons: { icon: "/logos/buildkite.svg" },
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: "How Buildkite Are You?",
    description,
    url: canonicalUrl,
    images: [
      { url: ogImageUrl, width: 1200, height: 630, alt: "How Buildkite Are You?" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How Buildkite Are You?",
    description,
    images: [ogImageUrl],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <QuizLayout config={buildkiteConfig}>{children}</QuizLayout>;
}

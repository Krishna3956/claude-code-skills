import type { Metadata } from "next";
import { QuizLayout } from "@/components/quiz";
import { statsigConfig } from "@/quizzes/statsig";

const canonicalUrl = "https://www.howwellyouknow.com/play/statsig";
const description =
  "Think you know Statsig? Test feature flags, experimentation, layers, and statistical analysis in 6 rounds.";
const ogImageUrl =
  "/api/og?title=How+Statsig+Are+You%3F&tool=Statsig&slug=statsig";

export const metadata: Metadata = {
  title: "How Statsig Are You?",
  description,
  icons: { icon: "/logos/statsig.svg" },
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: "How Statsig Are You?",
    description,
    url: canonicalUrl,
    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: "How Statsig Are You?",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How Statsig Are You?",
    description,
    images: [ogImageUrl],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <QuizLayout config={statsigConfig}>{children}</QuizLayout>;
}

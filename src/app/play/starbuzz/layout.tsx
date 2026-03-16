import type { Metadata } from "next";
import { QuizLayout } from "@/components/quiz";
import { starbuzzConfig } from "@/quizzes/starbuzz";

const canonicalUrl = "https://www.howwellyouknow.com/play/starbuzz";
const description =
  "Think you know Starbuzz.ai? Prove it. AI campaign creation, creator discovery, competitor mapping, tracking automation, Brand GPT, and operator-grade influencer workflow judgment in 5 rounds.";
const ogImageUrl = "/api/og?title=How+Starbuzz.ai+Are+You%3F&tool=Starbuzz.ai&slug=starbuzz";

export const metadata: Metadata = {
  title: "How Starbuzz.ai Are You?",
  description,
  icons: { icon: "/logos/starbuzz.png" },
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: "How Starbuzz.ai Are You?",
    description,
    url: canonicalUrl,
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: "How Starbuzz.ai Are You?" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "How Starbuzz.ai Are You?",
    description,
    images: [ogImageUrl],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <QuizLayout config={starbuzzConfig}>{children}</QuizLayout>;
}

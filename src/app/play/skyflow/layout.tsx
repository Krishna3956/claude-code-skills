import type { Metadata } from "next";
import { QuizLayout } from "@/components/quiz";
import { skyflowConfig } from "@/quizzes/skyflow";

const canonicalUrl = "https://www.howwellyouknow.com/play/skyflow";
const description =
  "Think you know Skyflow? Prove it. Vaults, tokenization, Elements, Connections, governance, AI sanitization, and runtime-sensitive-data judgment in 5 rounds.";
const ogImageUrl = "/api/og?title=How+Skyflow+Are+You%3F&tool=Skyflow&slug=skyflow";

export const metadata: Metadata = {
  title: "How Skyflow Are You?",
  description,
  icons: { icon: "/logos/skyflow.svg" },
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: "How Skyflow Are You?",
    description,
    url: canonicalUrl,
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: "How Skyflow Are You?" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "How Skyflow Are You?",
    description,
    images: [ogImageUrl],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <QuizLayout config={skyflowConfig}>{children}</QuizLayout>;
}

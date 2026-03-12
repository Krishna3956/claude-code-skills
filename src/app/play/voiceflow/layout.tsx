import type { Metadata } from "next";
import { QuizLayout } from "@/components/quiz";
import { voiceflowConfig } from "@/quizzes/voiceflow";

const canonicalUrl = "https://www.howwellyouknow.com/play/voiceflow";
const description =
  "Think you know Voiceflow? Test agent architecture, dialog design, integrations, and conversational AI engineering in 6 rounds.";
const ogImageUrl =
  "/api/og?title=How+Voiceflow+Are+You%3F&tool=Voiceflow&slug=voiceflow";

export const metadata: Metadata = {
  title: "How Voiceflow Are You?",
  description,
  icons: { icon: "/logos/voiceflow.svg" },
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: "How Voiceflow Are You?",
    description,
    url: canonicalUrl,
    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: "How Voiceflow Are You?",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How Voiceflow Are You?",
    description,
    images: [ogImageUrl],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <QuizLayout config={voiceflowConfig}>{children}</QuizLayout>;
}

import type { Metadata } from "next";
import { QuizLayout } from "@/components/quiz";
import { surfaceConfig } from "@/quizzes/surface";

const canonicalUrl = "https://www.howwellyouknow.com/play/surface";
const description =
  "Think you understand Surface? Prove it. Forms, workflows, lead table, enrichment, AI agents, and GTM routing in 6 rounds.";
const ogImageUrl =
  "/api/og?title=How+Surface+Are+You%3F&tool=Surface&slug=surface";

export const metadata: Metadata = {
  title: "How Surface Are You?",
  description,
  icons: { icon: "/logos/surface-labs.png" },
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: "How Surface Are You?",
    description,
    url: canonicalUrl,
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: "How Surface Are You?" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "How Surface Are You?",
    description,
    images: [ogImageUrl],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <QuizLayout config={surfaceConfig}>{children}</QuizLayout>;
}

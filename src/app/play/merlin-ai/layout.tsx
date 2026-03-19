import type { Metadata } from "next";
import { QuizLayout } from "@/components/quiz";
import { merlinAiConfig } from "@/quizzes/merlin-ai";

const canonicalUrl = "https://www.howwellyouknow.com/play/merlin-ai";
const description =
  "Merlin AI power user? Test your Zycus knowledge across intake, negotiation, AP automation, ERP integration, and agentic procurement workflows.";
const ogImageUrl =
  "/api/og?title=How+Merlin+AI+Are+You%3F&tool=Merlin+AI&slug=merlin-ai";

export const metadata: Metadata = {
  title: "How Merlin AI Are You?",
  description,
  icons: { icon: "/logos/zycus.webp" },
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: "How Merlin AI Are You?",
    description,
    url: canonicalUrl,
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: "How Merlin AI Are You?" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "How Merlin AI Are You?",
    description,
    images: [ogImageUrl],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <QuizLayout config={merlinAiConfig}>{children}</QuizLayout>;
}

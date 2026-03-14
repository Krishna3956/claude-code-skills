import type { Metadata } from "next";
import { QuizLayout } from "@/components/quiz";
import { memoriesConfig } from "@/quizzes/memories";

const canonicalUrl = "https://www.howwellyouknow.com/play/memories";
const description =
  "Think you know Memories.ai? Prove it. Upload, search, video chat, transcription, ReID, sessions, and production video intelligence in 5 rounds.";
const ogImageUrl =
  "/api/og?title=How+Memories.ai+Are+You%3F&tool=Memories.ai&slug=memories";

export const metadata: Metadata = {
  title: "How Memories.ai Are You?",
  description,
  icons: { icon: "/logos/memories.svg" },
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: "How Memories.ai Are You?",
    description,
    url: canonicalUrl,
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: "How Memories.ai Are You?" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "How Memories.ai Are You?",
    description,
    images: [ogImageUrl],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <QuizLayout config={memoriesConfig}>{children}</QuizLayout>;
}

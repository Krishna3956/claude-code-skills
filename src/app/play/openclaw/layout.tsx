import type { Metadata } from "next";
import { QuizLayout } from "@/components/quiz";
import { openclawConfig } from "@/quizzes/openclaw";

const canonicalUrl = "https://www.howwellyouknow.com/play/openclaw";
const description =
  "OpenClaw pro? Test gateway setup, routing, memory, and automation in 6 rounds. Free quiz, no signup, shareable scorecard.";
const ogImageUrl =
  "/api/og?title=How+OpenClaw+Are+You%3F&tool=OpenClaw&slug=openclaw";

export const metadata: Metadata = {
  title: "How OpenClaw Are You?",
  description,
  icons: { icon: "/logos/openclaw-mascot.png" },
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: "How OpenClaw Are You?",
    description,
    url: canonicalUrl,
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: "How OpenClaw Are You?" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "How OpenClaw Are You?",
    description,
    images: [ogImageUrl],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <QuizLayout config={openclawConfig}>{children}</QuizLayout>;
}

import type { Metadata } from "next";
import { QuizLayout } from "@/components/quiz";
import { scribeConfig } from "@/quizzes/scribe";

const canonicalUrl = "https://www.howwellyouknow.com/play/scribe";
const description = "Think you know Scribe? Test process capture, SOP documentation, and onboarding workflow quality in 6 rounds.";
const ogImageUrl = "/api/og?title=How+Scribe+Are+You%3F&tool=Scribe&slug=scribe";

export const metadata: Metadata = {
  title: "How Scribe Are You?",
  description,
  icons: { icon: "/logos/scribe.svg" },
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: "How Scribe Are You?",
    description,
    url: canonicalUrl,
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: "How Scribe Are You?" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "How Scribe Are You?",
    description,
    images: [ogImageUrl],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <QuizLayout config={scribeConfig}>{children}</QuizLayout>;
}

import type { Metadata } from "next";
import { QuizLayout } from "@/components/quiz";
import { guruConfig } from "@/quizzes/guru";

const canonicalUrl = "https://www.howwellyouknow.com/play/guru";
const description = "Think you know Guru? Test knowledge governance, source-of-truth strategy, and AI answer quality in 6 rounds.";
const ogImageUrl = "/api/og?title=How+Guru+Are+You%3F&tool=Guru&slug=guru";

export const metadata: Metadata = {
  title: "How Guru Are You?",
  description,
  icons: { icon: "/logos/guru.svg" },
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: "How Guru Are You?",
    description,
    url: canonicalUrl,
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: "How Guru Are You?" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "How Guru Are You?",
    description,
    images: [ogImageUrl],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <QuizLayout config={guruConfig}>{children}</QuizLayout>;
}

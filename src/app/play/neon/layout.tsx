import type { Metadata } from "next";
import { QuizLayout } from "@/components/quiz";
import { NeonConfig } from "@/quizzes/neon";

const canonicalUrl = "https://www.howwellyouknow.com/play/neon";
const description = "Think you know Neon? Test your real product depth in 6 rounds and get a shareable scorecard.";
const ogImageUrl = "/api/og?title=How+Neon+Are+You%3F&tool=Neon&slug=neon";

export const metadata: Metadata = {
  title: "How Neon Are You?",
  description,
  icons: { icon: "/logos/neon.png" },
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: "How Neon Are You?",
    description,
    url: canonicalUrl,
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: "How Neon Are You?" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "How Neon Are You?",
    description,
    images: [ogImageUrl],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <QuizLayout config={NeonConfig}>{children}</QuizLayout>;
}

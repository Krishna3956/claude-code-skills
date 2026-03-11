import type { Metadata } from "next";
import { QuizLayout } from "@/components/quiz";
import { framerConfig } from "@/quizzes/framer";

const canonicalUrl = "https://www.howwellyouknow.com/play/framer";
const description = "Think you know Framer? Test site building, CMS, and publish workflow skills in 6 rounds.";
const ogImageUrl = "/api/og?title=How+Framer+Are+You%3F&tool=Framer&slug=framer";

export const metadata: Metadata = {
  title: "How Framer Are You?",
  description,
  icons: { icon: "/logos/framer.png" },
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: "How Framer Are You?",
    description,
    url: canonicalUrl,
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: "How Framer Are You?" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "How Framer Are You?",
    description,
    images: [ogImageUrl],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <QuizLayout config={framerConfig}>{children}</QuizLayout>;
}

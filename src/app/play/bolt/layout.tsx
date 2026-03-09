import type { Metadata } from "next";
import { QuizLayout } from "@/components/quiz";
import { boltConfig } from "@/quizzes/bolt";

const canonicalUrl = "https://www.howwellyouknow.com/play/bolt";
const description =
  "Bolt.new master? AI full-stack, instant coding, and project setup in 6 rounds. Take the 3-min challenge and share your score.";
const ogImageUrl =
  "/api/og?title=How+Bolt.new+Are+You%3F&tool=Bolt.new&slug=bolt";

export const metadata: Metadata = {
  title: "How Bolt.new Are You?",
  description,
  icons: { icon: "/logos/bolt.png" },
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: "How Bolt.new Are You?",
    description,
    url: canonicalUrl,
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: "How Bolt.new Are You?" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "How Bolt.new Are You?",
    description,
    images: [ogImageUrl],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <QuizLayout config={boltConfig}>{children}</QuizLayout>;
}

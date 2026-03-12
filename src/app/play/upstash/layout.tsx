import type { Metadata } from "next";
import { QuizLayout } from "@/components/quiz";
import { upstashConfig } from "@/quizzes/upstash";

const canonicalUrl = "https://www.howwellyouknow.com/play/upstash";
const description = "Think you know Upstash? Test Redis, QStash, Vector, and serverless data workflows in 6 rounds.";
const ogImageUrl = "/api/og?title=How+Upstash+Are+You%3F&tool=Upstash&slug=upstash";

export const metadata: Metadata = {
  title: "How Upstash Are You?",
  description,
  icons: { icon: "/logos/upstash.png" },
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: "How Upstash Are You?",
    description,
    url: canonicalUrl,
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: "How Upstash Are You?" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "How Upstash Are You?",
    description,
    images: [ogImageUrl],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <QuizLayout config={upstashConfig}>{children}</QuizLayout>;
}

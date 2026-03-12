import type { Metadata } from "next";
import { QuizLayout } from "@/components/quiz";
import { convexConfig } from "@/quizzes/convex";

const canonicalUrl = "https://www.howwellyouknow.com/play/convex";
const description = "Think you know Convex? Test reactive backend patterns, function types, and realtime architecture in 6 rounds.";
const ogImageUrl = "/api/og?title=How+Convex+Are+You%3F&tool=Convex&slug=convex";

export const metadata: Metadata = {
  title: "How Convex Are You?",
  description,
  icons: { icon: "/logos/convex.ico" },
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: "How Convex Are You?",
    description,
    url: canonicalUrl,
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: "How Convex Are You?" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "How Convex Are You?",
    description,
    images: [ogImageUrl],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <QuizLayout config={convexConfig}>{children}</QuizLayout>;
}

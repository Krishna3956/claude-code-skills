import type { Metadata } from "next";
import { QuizLayout } from "@/components/quiz";
import { tursoPilotConfig } from "@/quizzes/turso-pilot";

const canonicalUrl = "https://www.howwellyouknow.com/play/turso-pilot";
const description = "Think you know Turso? Test libSQL, embedded replicas, vectors, branching, and more in 6 rounds.";
const ogImageUrl = "/api/og?title=How+Turso+Are+You%3F&tool=Turso&slug=turso-pilot";

export const metadata: Metadata = {
  title: "How Turso Are You?",
  description,
  icons: { icon: "/logos/turso.ico" },
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: "How Turso Are You?",
    description,
    url: canonicalUrl,
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: "How Turso Are You?" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "How Turso Are You?",
    description,
    images: [ogImageUrl],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <QuizLayout config={tursoPilotConfig}>{children}</QuizLayout>;
}

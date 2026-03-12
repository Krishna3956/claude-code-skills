import type { Metadata } from "next";
import { QuizLayout } from "@/components/quiz";
import { gardenioConfig } from "@/quizzes/gardenio";

const canonicalUrl = "https://www.howwellyouknow.com/play/gardenio";
const description = "Think you know Garden.io? Test environment-aware delivery, dependency graphs, and release automation in 6 rounds.";
const ogImageUrl = "/api/og?title=How+Garden.io+Are+You%3F&tool=Garden.io&slug=gardenio";

export const metadata: Metadata = {
  title: "How Garden.io Are You?",
  description,
  icons: { icon: "/logos/gardenio.png" },
  alternates: { canonical: canonicalUrl },
  openGraph: { title: "How Garden.io Are You?", description, url: canonicalUrl, images: [{ url: ogImageUrl, width: 1200, height: 630, alt: "How Garden.io Are You?" }] },
  twitter: { card: "summary_large_image", title: "How Garden.io Are You?", description, images: [ogImageUrl] },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <QuizLayout config={gardenioConfig}>{children}</QuizLayout>;
}

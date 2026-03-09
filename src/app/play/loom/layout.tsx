import type { Metadata } from "next";
import { QuizLayout } from "@/components/quiz";
import { loomConfig } from "@/quizzes/loom";

const canonicalUrl = "https://www.howwellyouknow.com/play/loom";
const description =
  "Loom power user? Test async video, screen recording, and sharing features in 6 rounds. Get your shareable scorecard in ~3 min. No signup.";
const ogImageUrl =
  "/api/og?title=How+Loom+Are+You%3F&tool=Loom&slug=loom";

export const metadata: Metadata = {
  title: "How Loom Are You?",
  description,
  icons: { icon: "/logos/loom.png" },
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: "How Loom Are You?",
    description,
    url: canonicalUrl,
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: "How Loom Are You?" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "How Loom Are You?",
    description,
    images: [ogImageUrl],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <QuizLayout config={loomConfig}>{children}</QuizLayout>;
}

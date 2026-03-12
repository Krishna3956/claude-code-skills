import type { Metadata } from "next";
import { QuizLayout } from "@/components/quiz";
import { insforgeConfig } from "@/quizzes/insforge";

const canonicalUrl = "https://www.howwellyouknow.com/play/insforge";
const description =
  "Think you know InsForge? Test auth, realtime, database, storage, and functions architecture in 6 rounds.";
const ogImageUrl = "/api/og?title=How+InsForge+Are+You%3F&tool=InsForge&slug=insforge";

export const metadata: Metadata = {
  title: "How InsForge Are You?",
  description,
  icons: { icon: "/logos/insforge.svg" },
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: "How InsForge Are You?",
    description,
    url: canonicalUrl,
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: "How InsForge Are You?" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "How InsForge Are You?",
    description,
    images: [ogImageUrl],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <QuizLayout config={insforgeConfig}>{children}</QuizLayout>;
}

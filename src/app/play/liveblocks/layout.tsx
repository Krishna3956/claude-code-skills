import type { Metadata } from "next";
import { QuizLayout } from "@/components/quiz";
import { liveblocksConfig } from "@/quizzes/liveblocks";

const canonicalUrl = "https://www.howwellyouknow.com/play/liveblocks";
const description = "Think you know Liveblocks? Test realtime collaboration, presence, and shared state workflows in 6 rounds.";
const ogImageUrl = "/api/og?title=How+Liveblocks+Are+You%3F&tool=Liveblocks&slug=liveblocks";

export const metadata: Metadata = {
  title: "How Liveblocks Are You?",
  description,
  icons: { icon: "/logos/liveblocks.png" },
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: "How Liveblocks Are You?",
    description,
    url: canonicalUrl,
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: "How Liveblocks Are You?" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "How Liveblocks Are You?",
    description,
    images: [ogImageUrl],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <QuizLayout config={liveblocksConfig}>{children}</QuizLayout>;
}

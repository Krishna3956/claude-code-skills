import type { Metadata } from "next";
import { QuizLayout } from "@/components/quiz";
import { flyioConfig } from "@/quizzes/flyio";

const canonicalUrl = "https://www.howwellyouknow.com/play/flyio";
const description = "Think you know Fly.io? Test regions, Machines, volumes, and global app deployment workflows in 6 rounds.";
const ogImageUrl = "/api/og?title=How+Fly.io+Are+You%3F&tool=Fly.io&slug=flyio";

export const metadata: Metadata = {
  title: "How Fly.io Are You?",
  description,
  icons: { icon: "/logos/flyio.png" },
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: "How Fly.io Are You?",
    description,
    url: canonicalUrl,
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: "How Fly.io Are You?" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "How Fly.io Are You?",
    description,
    images: [ogImageUrl],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <QuizLayout config={flyioConfig}>{children}</QuizLayout>;
}

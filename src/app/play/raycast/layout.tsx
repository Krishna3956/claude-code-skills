import type { Metadata } from "next";
import { QuizLayout } from "@/components/quiz";
import { raycastConfig } from "@/quizzes/raycast";

const canonicalUrl = "https://www.howwellyouknow.com/play/raycast";
const description =
  "Think you know Raycast? Test your launcher, snippets, quicklinks, and extension platform knowledge in 6 rounds.";
const ogImageUrl = "/api/og?title=How+Raycast+Are+You%3F&tool=Raycast&slug=raycast";

export const metadata: Metadata = {
  title: "How Raycast Are You?",
  description,
  icons: { icon: "/logos/raycast.svg" },
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: "How Raycast Are You?",
    description,
    url: canonicalUrl,
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: "How Raycast Are You?" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "How Raycast Are You?",
    description,
    images: [ogImageUrl],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <QuizLayout config={raycastConfig}>{children}</QuizLayout>;
}

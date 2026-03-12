import type { Metadata } from "next";
import { QuizLayout } from "@/components/quiz";
import { plainConfig } from "@/quizzes/plain";

const canonicalUrl = "https://www.howwellyouknow.com/play/plain";
const description = "Think you know Plain? Test B2B support operations, routing, and composable support workflows in 6 rounds.";
const ogImageUrl = "/api/og?title=How+Plain+Are+You%3F&tool=Plain&slug=plain";

export const metadata: Metadata = {
  title: "How Plain Are You?",
  description,
  icons: { icon: "/logos/plain.png" },
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: "How Plain Are You?",
    description,
    url: canonicalUrl,
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: "How Plain Are You?" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "How Plain Are You?",
    description,
    images: [ogImageUrl],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <QuizLayout config={plainConfig}>{children}</QuizLayout>;
}

import type { Metadata } from "next";
import { QuizLayout } from "@/components/quiz";
import { browserbaseConfig } from "@/quizzes/browserbase";

const canonicalUrl = "https://www.howwellyouknow.com/play/browserbase";
const description = "Think you know Browserbase? Test browser automation infrastructure skills in 6 rounds.";
const ogImageUrl = "/api/og?title=How+Browserbase+Are+You%3F&tool=Browserbase&slug=browserbase";

export const metadata: Metadata = {
  title: "How Browserbase Are You?",
  description,
  icons: { icon: "/logos/browserbase.svg" },
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: "How Browserbase Are You?",
    description,
    url: canonicalUrl,
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: "How Browserbase Are You?" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "How Browserbase Are You?",
    description,
    images: [ogImageUrl],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <QuizLayout config={browserbaseConfig}>{children}</QuizLayout>;
}

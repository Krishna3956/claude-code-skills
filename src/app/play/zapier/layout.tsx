import type { Metadata } from "next";
import { QuizLayout } from "@/components/quiz";
import { zapierConfig } from "@/quizzes/zapier";

const canonicalUrl = "https://www.howwellyouknow.com/play/zapier";
const description =
  "Zapier automation pro? Test your Zaps, triggers, and 5000+ app knowledge in 6 rounds. Free quiz—get your scorecard in 3 min.";
const ogImageUrl =
  "/api/og?title=How+Zapier+Are+You%3F&tool=Zapier&slug=zapier";

export const metadata: Metadata = {
  title: "How Zapier Are You?",
  description,
  icons: { icon: "/logos/zapier.png" },
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: "How Zapier Are You?",
    description,
    url: canonicalUrl,
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: "How Zapier Are You?" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "How Zapier Are You?",
    description,
    images: [ogImageUrl],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <QuizLayout config={zapierConfig}>{children}</QuizLayout>;
}

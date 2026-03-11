import type { Metadata } from "next";
import { QuizLayout } from "@/components/quiz";
import { fastlyConfig } from "@/quizzes/fastly";

const canonicalUrl = "https://www.howwellyouknow.com/play/fastly";
const description =
  "Think you know Fastly? Test cache headers, purging, shielding, and deployment workflow in 6 rounds.";
const ogImageUrl = "/api/og?title=How+Fastly+Are+You%3F&tool=Fastly&slug=fastly";

export const metadata: Metadata = {
  title: "How Fastly Are You?",
  description,
  icons: { icon: "/logos/fastly.png" },
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: "How Fastly Are You?",
    description,
    url: canonicalUrl,
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: "How Fastly Are You?" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "How Fastly Are You?",
    description,
    images: [ogImageUrl],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <QuizLayout config={fastlyConfig}>{children}</QuizLayout>;
}

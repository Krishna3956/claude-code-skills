import type { Metadata } from "next";
import { QuizLayout } from "@/components/quiz";
import { grafbaseConfig } from "@/quizzes/grafbase";

const canonicalUrl = "https://www.howwellyouknow.com/play/grafbase";
const description = "Think you know Grafbase? Test GraphQL gateway strategy, schema governance, and API workflows in 6 rounds.";
const ogImageUrl = "/api/og?title=How+Grafbase+Are+You%3F&tool=Grafbase&slug=grafbase";

export const metadata: Metadata = {
  title: "How Grafbase Are You?",
  description,
  icons: { icon: "/logos/grafbase.svg" },
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: "How Grafbase Are You?",
    description,
    url: canonicalUrl,
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: "How Grafbase Are You?" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "How Grafbase Are You?",
    description,
    images: [ogImageUrl],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <QuizLayout config={grafbaseConfig}>{children}</QuizLayout>;
}

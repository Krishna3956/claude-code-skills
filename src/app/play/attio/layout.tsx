import type { Metadata } from "next";
import { QuizLayout } from "@/components/quiz";
import { attioConfig } from "@/quizzes/attio";

const canonicalUrl = "https://www.howwellyouknow.com/play/attio";
const description = "Think you know Attio? Test CRM architecture and Attio developer platform fundamentals in 6 rounds.";
const ogImageUrl = "/api/og?title=How+Attio+Are+You%3F&tool=Attio&slug=attio";

export const metadata: Metadata = {
  title: "How Attio Are You?",
  description,
  icons: { icon: "/logos/attio.ico" },
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: "How Attio Are You?",
    description,
    url: canonicalUrl,
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: "How Attio Are You?" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "How Attio Are You?",
    description,
    images: [ogImageUrl],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <QuizLayout config={attioConfig}>{children}</QuizLayout>;
}

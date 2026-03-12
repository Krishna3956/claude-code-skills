import type { Metadata } from "next";
import { QuizLayout } from "@/components/quiz";
import { sstConfig } from "@/quizzes/sst";

const canonicalUrl = "https://www.howwellyouknow.com/play/sst";
const description = "Think you know SST? Test serverless app architecture, deployment workflow, and infra discipline in 6 rounds.";
const ogImageUrl = "/api/og?title=How+SST+Are+You%3F&tool=SST&slug=sst";

export const metadata: Metadata = {
  title: "How SST Are You?",
  description,
  icons: { icon: "/logos/sst.ico" },
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: "How SST Are You?",
    description,
    url: canonicalUrl,
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: "How SST Are You?" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "How SST Are You?",
    description,
    images: [ogImageUrl],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <QuizLayout config={sstConfig}>{children}</QuizLayout>;
}

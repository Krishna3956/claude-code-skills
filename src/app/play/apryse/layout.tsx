import type { Metadata } from "next";
import { QuizLayout } from "@/components/quiz";
import { apryseConfig } from "@/quizzes/apryse";

const canonicalUrl = "https://www.howwellyouknow.com/play/apryse";
const description =
  "Think you know Apryse? Test document processing, WebViewer, XFDF annotations, and PDF SDK engineering in 6 rounds.";
const ogImageUrl =
  "/api/og?title=How+Apryse+Are+You%3F&tool=Apryse&slug=apryse";

export const metadata: Metadata = {
  title: "How Apryse Are You?",
  description,
  icons: { icon: "/logos/apryse.svg" },
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: "How Apryse Are You?",
    description,
    url: canonicalUrl,
    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: "How Apryse Are You?",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How Apryse Are You?",
    description,
    images: [ogImageUrl],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <QuizLayout config={apryseConfig}>{children}</QuizLayout>;
}

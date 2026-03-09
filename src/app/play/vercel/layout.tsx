import type { Metadata } from "next";
import { QuizLayout } from "@/components/quiz";
import { vercelConfig } from "@/quizzes/vercel";

const canonicalUrl = "https://www.howwellyouknow.com/play/vercel";
const description =
  "Vercel deploy pro? 6 rounds on deployments, Next.js, serverless, and edge. Take the 3-min quiz and get your shareable scorecard.";
const ogImageUrl =
  "/api/og?title=How+Vercel+Are+You%3F&tool=Vercel&slug=vercel";

export const metadata: Metadata = {
  title: "How Vercel Are You?",
  description,
  icons: { icon: "/logos/vercel.svg" },
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: "How Vercel Are You?",
    description,
    url: canonicalUrl,
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: "How Vercel Are You?" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "How Vercel Are You?",
    description,
    images: [ogImageUrl],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <QuizLayout config={vercelConfig}>{children}</QuizLayout>;
}

import type { Metadata } from "next";
import { QuizLayout } from "@/components/quiz";
import { hostedaiConfig } from "@/quizzes/hostedai";

const canonicalUrl = "https://www.howwellyouknow.com/play/hostedai";
const description =
  "Think you know Hosted.ai? Prove it. GPUaaS pools, VM vs GPUaaS tradeoffs, overcommit, billing, multi-tenant control, and operator-grade platform judgment in 5 rounds.";
const ogImageUrl =
  "/api/og?title=How+Hosted.ai+Are+You%3F&tool=Hosted.ai&slug=hostedai";

export const metadata: Metadata = {
  title: "How Hosted.ai Are You?",
  description,
  icons: { icon: "/logos/hostedai.svg" },
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: "How Hosted.ai Are You?",
    description,
    url: canonicalUrl,
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: "How Hosted.ai Are You?" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "How Hosted.ai Are You?",
    description,
    images: [ogImageUrl],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <QuizLayout config={hostedaiConfig}>{children}</QuizLayout>;
}

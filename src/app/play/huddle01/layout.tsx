import type { Metadata } from "next";
import { QuizLayout } from "@/components/quiz";
import { huddle01Config } from "@/quizzes/huddle01";

const canonicalUrl = "https://www.howwellyouknow.com/play/huddle01";
const description =
  "Think you know Huddle01 Cloud? Prove it. AI inference, managed Docker and Kubernetes, load balancing, dedicated AMD EPYC compute, and transparent cloud-cost judgment in 5 rounds.";
const ogImageUrl = "/api/og?title=How+Huddle01+Cloud+Are+You%3F&tool=Huddle01+Cloud&slug=huddle01";

export const metadata: Metadata = {
  title: "How Huddle01 Cloud Are You?",
  description,
  icons: { icon: "/logos/huddle01-cloud.png" },
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: "How Huddle01 Cloud Are You?",
    description,
    url: canonicalUrl,
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: "How Huddle01 Cloud Are You?" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "How Huddle01 Cloud Are You?",
    description,
    images: [ogImageUrl],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <QuizLayout config={huddle01Config}>{children}</QuizLayout>;
}

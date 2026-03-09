import type { Metadata } from "next";
import { QuizLayout } from "@/components/quiz";
import { dockerConfig } from "@/quizzes/docker";

const canonicalUrl = "https://www.howwellyouknow.com/play/docker";
const description =
  "Docker pro? Containers, images, Dockerfile, and CLI commands across 6 rounds. Take the 3-min challenge and get your shareable scorecard.";
const ogImageUrl =
  "/api/og?title=How+Docker+Are+You%3F&tool=Docker&slug=docker";

export const metadata: Metadata = {
  title: "How Docker Are You?",
  description,
  icons: { icon: "/logos/docker.svg" },
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: "How Docker Are You?",
    description,
    url: canonicalUrl,
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: "How Docker Are You?" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "How Docker Are You?",
    description,
    images: [ogImageUrl],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <QuizLayout config={dockerConfig}>{children}</QuizLayout>;
}

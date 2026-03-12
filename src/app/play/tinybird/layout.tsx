import type { Metadata } from "next";
import { QuizLayout } from "@/components/quiz";
import { tinybirdConfig } from "@/quizzes/tinybird";

const canonicalUrl = "https://www.howwellyouknow.com/play/tinybird";
const description = "Real-time analytics APIs built from data pipelines and low-latency query workflows.";
const ogImageUrl = "/api/og?title=How+Tinybird+Are+You%3F&tool=Tinybird&slug=tinybird";

export const metadata: Metadata = {
  title: "How Tinybird Are You?",
  description,
  icons: { icon: "/logos/tinybird.png" },
  alternates: { canonical: canonicalUrl },
  openGraph: { title: "How Tinybird Are You?", description, url: canonicalUrl, images: [{ url: ogImageUrl, width: 1200, height: 630, alt: "How Tinybird Are You?" }] },
  twitter: { card: "summary_large_image", title: "How Tinybird Are You?", description, images: [ogImageUrl] },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <QuizLayout config={tinybirdConfig}>{children}</QuizLayout>;
}

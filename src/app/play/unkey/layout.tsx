import type { Metadata } from "next";
import { QuizLayout } from "@/components/quiz";
import { unkeyConfig } from "@/quizzes/unkey";

const canonicalUrl = "https://www.howwellyouknow.com/play/unkey";
const description = "API key infrastructure with permissions, limits, and operational controls for developers.";
const ogImageUrl = "/api/og?title=How+Unkey+Are+You%3F&tool=Unkey&slug=unkey";

export const metadata: Metadata = {
  title: "How Unkey Are You?",
  description,
  icons: { icon: "/logos/unkey.png" },
  alternates: { canonical: canonicalUrl },
  openGraph: { title: "How Unkey Are You?", description, url: canonicalUrl, images: [{ url: ogImageUrl, width: 1200, height: 630, alt: "How Unkey Are You?" }] },
  twitter: { card: "summary_large_image", title: "How Unkey Are You?", description, images: [ogImageUrl] },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <QuizLayout config={unkeyConfig}>{children}</QuizLayout>;
}

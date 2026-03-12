import type { Metadata } from "next";
import { QuizLayout } from "@/components/quiz";
import { axiomConfig } from "@/quizzes/axiom";

const canonicalUrl = "https://www.howwellyouknow.com/play/axiom";
const description = "Observability workflows for logs and event telemetry with fast query analysis.";
const ogImageUrl = "/api/og?title=How+Axiom+Are+You%3F&tool=Axiom&slug=axiom";

export const metadata: Metadata = {
  title: "How Axiom Are You?",
  description,
  icons: { icon: "/logos/axiom.png" },
  alternates: { canonical: canonicalUrl },
  openGraph: { title: "How Axiom Are You?", description, url: canonicalUrl, images: [{ url: ogImageUrl, width: 1200, height: 630, alt: "How Axiom Are You?" }] },
  twitter: { card: "summary_large_image", title: "How Axiom Are You?", description, images: [ogImageUrl] },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <QuizLayout config={axiomConfig}>{children}</QuizLayout>;
}

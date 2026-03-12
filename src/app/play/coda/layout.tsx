import type { Metadata } from "next";
import { QuizLayout } from "@/components/quiz";
import { codaConfig } from "@/quizzes/coda";

const canonicalUrl = "https://www.howwellyouknow.com/play/coda";
const description = "Docs-as-apps workspace with tables, automations, and connected team workflows.";
const ogImageUrl = "/api/og?title=How+Coda+Are+You%3F&tool=Coda&slug=coda";

export const metadata: Metadata = {
  title: "How Coda Are You?",
  description,
  icons: { icon: "/logos/coda.png" },
  alternates: { canonical: canonicalUrl },
  openGraph: { title: "How Coda Are You?", description, url: canonicalUrl, images: [{ url: ogImageUrl, width: 1200, height: 630, alt: "How Coda Are You?" }] },
  twitter: { card: "summary_large_image", title: "How Coda Are You?", description, images: [ogImageUrl] },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <QuizLayout config={codaConfig}>{children}</QuizLayout>;
}

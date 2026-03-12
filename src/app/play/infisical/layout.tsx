import type { Metadata } from "next";
import { QuizLayout } from "@/components/quiz";
import { infisicalConfig } from "@/quizzes/infisical";

const canonicalUrl = "https://www.howwellyouknow.com/play/infisical";
const description = "Secrets management and secure configuration workflows for development and production.";
const ogImageUrl = "/api/og?title=How+Infisical+Are+You%3F&tool=Infisical&slug=infisical";

export const metadata: Metadata = {
  title: "How Infisical Are You?",
  description,
  icons: { icon: "/logos/infisical.png" },
  alternates: { canonical: canonicalUrl },
  openGraph: { title: "How Infisical Are You?", description, url: canonicalUrl, images: [{ url: ogImageUrl, width: 1200, height: 630, alt: "How Infisical Are You?" }] },
  twitter: { card: "summary_large_image", title: "How Infisical Are You?", description, images: [ogImageUrl] },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <QuizLayout config={infisicalConfig}>{children}</QuizLayout>;
}

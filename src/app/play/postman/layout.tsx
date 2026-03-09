import type { Metadata } from "next";
import { QuizLayout } from "@/components/quiz";
import { postmanConfig } from "@/quizzes/postman";

const canonicalUrl = "https://www.howwellyouknow.com/play/postman";
const description =
  "Postman API pro? Collections, environments, and testing workflows in 6 rounds. Free quiz—get your shareable scorecard in 3 min.";
const ogImageUrl =
  "/api/og?title=How+Postman+Are+You%3F&tool=Postman&slug=postman";

export const metadata: Metadata = {
  title: "How Postman Are You?",
  description,
  icons: { icon: "/logos/postman.png" },
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: "How Postman Are You?",
    description,
    url: canonicalUrl,
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: "How Postman Are You?" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "How Postman Are You?",
    description,
    images: [ogImageUrl],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <QuizLayout config={postmanConfig}>{children}</QuizLayout>;
}

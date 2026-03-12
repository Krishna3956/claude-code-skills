import type { Metadata } from "next";
import { QuizLayout } from "@/components/quiz";
import { rowsConfig } from "@/quizzes/rows";

const canonicalUrl = "https://www.howwellyouknow.com/play/rows";
const description = "Spreadsheet product with integrations and operations workflows for business teams.";
const ogImageUrl = "/api/og?title=How+Rows+Are+You%3F&tool=Rows&slug=rows";

export const metadata: Metadata = {
  title: "How Rows Are You?",
  description,
  icons: { icon: "/logos/rows.png" },
  alternates: { canonical: canonicalUrl },
  openGraph: { title: "How Rows Are You?", description, url: canonicalUrl, images: [{ url: ogImageUrl, width: 1200, height: 630, alt: "How Rows Are You?" }] },
  twitter: { card: "summary_large_image", title: "How Rows Are You?", description, images: [ogImageUrl] },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <QuizLayout config={rowsConfig}>{children}</QuizLayout>;
}

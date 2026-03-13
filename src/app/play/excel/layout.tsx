import type { Metadata } from "next";
import { QuizLayout } from "@/components/quiz";
import { excelConfig } from "@/quizzes/excel";

const canonicalUrl = "https://www.howwellyouknow.com/play/excel";
const description =
  "Think you're elite in Excel? Prove it. Dynamic arrays, XLOOKUP/XMATCH, LET/LAMBDA, spill logic, and structured references in 6 brutal rounds.";
const ogImageUrl =
  "/api/og?title=How+Excel+Are+You%3F&tool=Microsoft+Excel&slug=excel";

export const metadata: Metadata = {
  title: "How Excel Are You?",
  description,
  icons: { icon: "/logos/excel-mark.svg" },
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: "How Excel Are You?",
    description,
    url: canonicalUrl,
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: "How Excel Are You?" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "How Excel Are You?",
    description,
    images: [ogImageUrl],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <QuizLayout config={excelConfig}>{children}</QuizLayout>;
}

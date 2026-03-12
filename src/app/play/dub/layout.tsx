import type { Metadata } from "next";
import { QuizLayout } from "@/components/quiz";
import { dubConfig } from "@/quizzes/dub";

const canonicalUrl = "https://www.howwellyouknow.com/play/dub";
const description = "Modern link infrastructure with branded short links and analytics workflows.";
const ogImageUrl = "/api/og?title=How+Dub+Are+You%3F&tool=Dub&slug=dub";

export const metadata: Metadata = {
  title: "How Dub Are You?",
  description,
  icons: { icon: "/logos/dub.png" },
  alternates: { canonical: canonicalUrl },
  openGraph: { title: "How Dub Are You?", description, url: canonicalUrl, images: [{ url: ogImageUrl, width: 1200, height: 630, alt: "How Dub Are You?" }] },
  twitter: { card: "summary_large_image", title: "How Dub Are You?", description, images: [ogImageUrl] },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <QuizLayout config={dubConfig}>{children}</QuizLayout>;
}

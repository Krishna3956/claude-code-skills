import type { Metadata } from "next";
import { QuizLayout } from "@/components/quiz";
import { loopsConfig } from "@/quizzes/loops";

const canonicalUrl = "https://www.howwellyouknow.com/play/loops";
const description = "Email platform for SaaS teams running lifecycle campaigns and product-triggered messaging.";
const ogImageUrl = "/api/og?title=How+Loops+Are+You%3F&tool=Loops&slug=loops";

export const metadata: Metadata = {
  title: "How Loops Are You?",
  description,
  icons: { icon: "/logos/loops.png" },
  alternates: { canonical: canonicalUrl },
  openGraph: { title: "How Loops Are You?", description, url: canonicalUrl, images: [{ url: ogImageUrl, width: 1200, height: 630, alt: "How Loops Are You?" }] },
  twitter: { card: "summary_large_image", title: "How Loops Are You?", description, images: [ogImageUrl] },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <QuizLayout config={loopsConfig}>{children}</QuizLayout>;
}

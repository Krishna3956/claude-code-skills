import type { Metadata } from "next";
import { QuizLayout } from "@/components/quiz";
import { hygraphConfig } from "@/quizzes/hygraph";
const canonicalUrl = "https://www.howwellyouknow.com/play/hygraph";
const description = "Think you know Hygraph? Test schema evolution, GraphQL content architecture, and API governance in 6 rounds.";
const ogImageUrl = "/api/og?title=How+Hygraph+Are+You%3F&tool=Hygraph&slug=hygraph";
export const metadata: Metadata = {
  title: "How Hygraph Are You?", description, icons: { icon: "/logos/hygraph.ico" }, alternates: { canonical: canonicalUrl },
  openGraph: { title: "How Hygraph Are You?", description, url: canonicalUrl, images: [{ url: ogImageUrl, width: 1200, height: 630, alt: "How Hygraph Are You?" }] },
  twitter: { card: "summary_large_image", title: "How Hygraph Are You?", description, images: [ogImageUrl] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <QuizLayout config={hygraphConfig}>{children}</QuizLayout>; }

import type { Metadata } from "next";
import { QuizLayout } from "@/components/quiz";
import { prismaConfig } from "@/quizzes/prisma";

const canonicalUrl = "https://www.howwellyouknow.com/play/prisma";
const description = "Think you know Prisma? Test schema modeling, Prisma Client, and migration workflows in 6 rounds.";
const ogImageUrl = "/api/og?title=How+Prisma+Are+You%3F&tool=Prisma&slug=prisma";

export const metadata: Metadata = {
  title: "How Prisma Are You?",
  description,
  icons: { icon: "/logos/prisma.ico" },
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: "How Prisma Are You?",
    description,
    url: canonicalUrl,
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: "How Prisma Are You?" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "How Prisma Are You?",
    description,
    images: [ogImageUrl],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <QuizLayout config={prismaConfig}>{children}</QuizLayout>;
}

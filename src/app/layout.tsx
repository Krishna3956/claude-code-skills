import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "How Claude Code Are You?",
  description:
    "Test your Claude Code knowledge across 7 skill dimensions. 18 questions, 3 minutes, zero signup. Get your spider-web skill profile and shareable score card.",
  openGraph: {
    title: "How Claude Code Are You?",
    description:
      "Test your Claude Code skills — from CLAUDE.md to Subagents, Hooks to MCP. 18 questions. 3 minutes. No signup.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "How Claude Code Are You?",
    description:
      "Test your Claude Code skills — 18 questions, 3 minutes, zero signup.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/claude-logo.png" />
        <link rel="apple-touch-icon" href="/claude-logo.png" />
      </head>
      <body className={`${geistMono.variable} antialiased`}>{children}</body>
    </html>
  );
}

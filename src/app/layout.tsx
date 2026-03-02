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
    "Test your Claude Code knowledge across 7 skill dimensions. 15 challenges, 6 rounds, ~3 minutes, zero signup. Get your spider-web skill profile and shareable scorecard.",
  metadataBase: new URL("https://claude-code.vercel.app"),
  openGraph: {
    title: "How well do you know Claude Code?",
    description:
      "15 challenges. 6 rounds. ~3 minutes. No signup. Test your Claude Code skills and get a shareable scorecard.",
    type: "website",
    url: "https://claude-code.vercel.app",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "How well do you know Claude Code?",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How well do you know Claude Code?",
    description:
      "15 challenges. 6 rounds. ~3 minutes. No signup. Test your Claude Code skills.",
    images: ["/og-image.png"],
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

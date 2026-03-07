import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "How Well You Know",
  description:
    "Test your knowledge of the tools you use every day. 15 challenges, 6 rounds, ~3 minutes, zero signup. Get your skill profile and shareable scorecard.",
  metadataBase: new URL("https://www.howwellyouknow.com"),
  icons: { icon: "/default-favicon.ico" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head />
      <body className={`${geistMono.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}

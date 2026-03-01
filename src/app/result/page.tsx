"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import Link from "next/link";
import { decodeResult } from "@/lib/scoring";
import { getArchetype } from "@/data/archetypes";
import RadarChart from "@/components/RadarChart";
import { motion } from "framer-motion";

function ResultContent() {
  const searchParams = useSearchParams();
  const result = decodeResult(searchParams);

  if (!result) {
    return (
      <div className="flex min-h-screen items-center justify-center px-4">
        <div className="text-center">
          <p className="text-muted mb-4">No results found.</p>
          <Link href="/" className="text-accent hover:underline">
            Take the test &rarr;
          </Link>
        </div>
      </div>
    );
  }

  const archetype = getArchetype(result.overallScore);

  const shareText = `I'm ${archetype.emoji} ${archetype.title} (${result.overallScore}/100) — How well do you know Claude Code?`;
  const shareUrl = typeof window !== "undefined" ? window.location.href : "";

  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`;

  const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`;

  const copyToClipboard = () => {
    const text = `${shareText}\n${shareUrl}`;
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="flex min-h-screen flex-col items-center px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-lg flex flex-col items-center gap-6"
      >
        {/* Header */}
        <div className="text-center">
          <p className="text-xs text-muted mb-2 uppercase tracking-widest">
            Your Claude Code Profile
          </p>
          <div className="text-5xl mb-3">{archetype.emoji}</div>
          <h1 className="text-2xl sm:text-3xl font-bold text-foreground">
            {archetype.title}
          </h1>
        </div>

        {/* Score */}
        <div className="text-center">
          <div className="text-5xl font-bold text-accent">
            {result.overallScore}
          </div>
          <div className="text-xs text-muted mt-1">out of 100</div>
        </div>

        {/* Description */}
        <p className="text-sm text-muted text-center max-w-sm leading-relaxed">
          {archetype.description}
        </p>

        {/* Radar Chart */}
        <div className="w-full bg-surface border border-border rounded-xl p-4">
          <RadarChart dimensions={result.dimensions} />
        </div>

        {/* Dimension Breakdown */}
        <div className="w-full flex flex-col gap-2">
          {result.dimensions.map((dim) => (
            <div
              key={dim.dimension}
              className="flex items-center justify-between px-4 py-2.5 bg-surface border border-border rounded-lg"
            >
              <span className="text-sm text-foreground">{dim.label}</span>
              <div className="flex items-center gap-3">
                <div className="w-24 h-1.5 bg-background rounded-full overflow-hidden">
                  <div
                    className="h-full bg-accent rounded-full"
                    style={{ width: `${dim.score}%` }}
                  />
                </div>
                <span className="text-sm font-mono text-accent w-8 text-right">
                  {dim.score}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Share Buttons */}
        <div className="w-full flex flex-col gap-3 mt-2">
          <p className="text-xs text-muted text-center uppercase tracking-widest">
            Share your score
          </p>
          <div className="flex gap-3">
            <a
              href={twitterUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 rounded-lg border border-border px-4 py-2.5 text-sm text-foreground hover:bg-surface-light transition-colors"
            >
              𝕏 Twitter
            </a>
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 rounded-lg border border-border px-4 py-2.5 text-sm text-foreground hover:bg-surface-light transition-colors"
            >
              in LinkedIn
            </a>
            <button
              onClick={copyToClipboard}
              className="flex-1 flex items-center justify-center gap-2 rounded-lg border border-border px-4 py-2.5 text-sm text-foreground hover:bg-surface-light transition-colors"
            >
              Copy Link
            </button>
          </div>
        </div>

        {/* Retake */}
        <Link
          href="/v2"
          className="text-sm text-muted hover:text-accent transition-colors"
        >
          &larr; Play again
        </Link>
      </motion.div>

      <footer className="mt-12 mb-6 text-xs text-muted">
        Built by{" "}
        <a
          href="https://www.linkedin.com/in/krgoyal/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:underline"
        >
          Krishna Goyal
        </a>
      </footer>
    </div>
  );
}

export default function ResultPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center">
          <div className="text-muted">Loading results...</div>
        </div>
      }
    >
      <ResultContent />
    </Suspense>
  );
}

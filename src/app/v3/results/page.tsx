"use client";

import { useSearchParams } from "next/navigation";
import { Suspense, useRef, useState } from "react";
import Link from "next/link";
import { decodeResult } from "@/lib/scoring";
import { getArchetype } from "@/data/archetypes";
import RadarChart from "@/components/RadarChart";
import { motion } from "framer-motion";
import { toPng } from "html-to-image";

const LINKEDIN_URL = "https://www.linkedin.com/in/krishnaa-goyal/";

function ResultContent() {
  const searchParams = useSearchParams();
  const result = decodeResult(searchParams);
  const cardRef = useRef<HTMLDivElement>(null);
  const [downloading, setDownloading] = useState(false);
  const [copied, setCopied] = useState(false);

  if (!result) {
    return (
      <div className="flex min-h-dvh items-center justify-center px-4">
        <div className="text-center">
          <p className="text-muted mb-4">No results found.</p>
          <Link href="/v3" className="text-accent hover:underline text-sm">
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

  const copyToClipboard = async () => {
    const text = `${shareText}\n${shareUrl}`;
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const downloadCard = async () => {
    if (!cardRef.current || downloading) return;
    setDownloading(true);
    try {
      const dataUrl = await toPng(cardRef.current, {
        pixelRatio: 2,
        backgroundColor: "#1a1a2e",
      });
      const link = document.createElement("a");
      link.download = `claude-code-score-${result.overallScore}.png`;
      link.href = dataUrl;
      link.click();
    } catch {
      // fallback: do nothing
    }
    setDownloading(false);
  };

  return (
    <div className="flex min-h-dvh flex-col items-center px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md flex flex-col items-center gap-6"
      >
        {/* ── DOWNLOADABLE CARD ─────────────────────────────── */}
        <div
          ref={cardRef}
          className="w-full bg-surface border border-border/60 rounded-2xl overflow-hidden"
        >
          {/* Card header */}
          <div className="px-6 pt-6 pb-4 text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center">
                <span className="text-accent text-xs font-black">CC</span>
              </div>
              <span className="text-[11px] text-muted/50 uppercase tracking-widest">
                Claude Code Skills
              </span>
            </div>

            <div className="text-4xl sm:text-5xl font-black text-accent mb-1">
              {result.overallScore}
              <span className="text-lg text-muted/40 font-normal">/100</span>
            </div>

            <h1 className="text-xl sm:text-2xl font-bold text-foreground mt-2">
              {archetype.title}
            </h1>
            <p className="text-xs text-muted mt-2 max-w-xs mx-auto leading-relaxed">
              {archetype.description}
            </p>
          </div>

          {/* Radar Chart */}
          <div className="px-4 pb-2">
            <RadarChart dimensions={result.dimensions} />
          </div>

          {/* Dimension bars */}
          <div className="px-5 pb-5 flex flex-col gap-1.5">
            {result.dimensions.map((dim) => (
              <div
                key={dim.dimension}
                className="flex items-center justify-between py-1.5"
              >
                <span className="text-[11px] text-muted w-28 truncate">
                  {dim.label}
                </span>
                <div className="flex items-center gap-2 flex-1 ml-3">
                  <div className="flex-1 h-1 bg-background/50 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-accent rounded-full transition-all"
                      style={{ width: `${dim.score}%` }}
                    />
                  </div>
                  <span className="text-[11px] font-mono text-accent/70 w-7 text-right">
                    {dim.score}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Card footer */}
          <div className="px-5 py-3 border-t border-border/40 flex items-center justify-between">
            <span className="text-[10px] text-muted/40">
              howclaudecode.dev
            </span>
            <span className="text-[10px] text-muted/40">
              not a certification
            </span>
          </div>
        </div>

        {/* ── ACTIONS ───────────────────────────────────────── */}
        <div className="w-full flex flex-col gap-3">
          {/* Download */}
          <button
            onClick={downloadCard}
            disabled={downloading}
            className="w-full py-3.5 rounded-xl bg-accent text-background font-bold text-sm transition-all hover:bg-accent-dim active:scale-[0.98] disabled:opacity-50"
          >
            {downloading ? "Generating..." : "Download Scorecard"}
          </button>

          {/* Share row */}
          <div className="flex gap-2.5">
            <a
              href={twitterUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center py-3 rounded-xl border border-border/60 text-sm text-foreground hover:bg-surface-light transition-colors"
            >
              Post on X
            </a>
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center py-3 rounded-xl border border-border/60 text-sm text-foreground hover:bg-surface-light transition-colors"
            >
              LinkedIn
            </a>
            <button
              onClick={copyToClipboard}
              className="flex-1 flex items-center justify-center py-3 rounded-xl border border-border/60 text-sm text-foreground hover:bg-surface-light transition-colors"
            >
              {copied ? "Copied!" : "Copy Link"}
            </button>
          </div>
        </div>

        {/* Retake */}
        <Link
          href="/v3"
          className="text-xs text-muted/50 hover:text-accent transition-colors"
        >
          play again
        </Link>

        {/* Disclaimer */}
        <p className="text-[10px] text-muted/30 text-center leading-relaxed max-w-xs">
          For fun only. Not affiliated with, sponsored by, or endorsed by Anthropic.
          Not a professional certification. Go build something cool.
        </p>
      </motion.div>

      <footer className="mt-8 mb-4 text-[11px] text-muted/40">
        made by{" "}
        <a
          href={LINKEDIN_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted/60 hover:text-accent transition-colors"
        >
          Krishna Goyal
        </a>
      </footer>
    </div>
  );
}

export default function V3ResultPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-dvh items-center justify-center">
          <div className="text-muted text-sm">Loading...</div>
        </div>
      }
    >
      <ResultContent />
    </Suspense>
  );
}

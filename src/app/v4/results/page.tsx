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
const SITE_URL = "https://howclaudecode.dev";

function XIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function ResultContent() {
  const searchParams = useSearchParams();
  const result = decodeResult(searchParams);
  const cardRef = useRef<HTMLDivElement>(null);
  const [downloading, setDownloading] = useState(false);

  if (!result) {
    return (
      <div className="flex min-h-dvh items-center justify-center px-4">
        <div className="text-center">
          <p className="text-muted mb-4">No results found.</p>
          <Link href="/v4" className="text-accent hover:underline text-sm">
            Take the test &rarr;
          </Link>
        </div>
      </div>
    );
  }

  const archetype = getArchetype(result.overallScore);

  const shareText = encodeURIComponent(
    `I'm ${archetype.emoji} ${archetype.title} (${result.overallScore}/100)\n\nHow well do you know Claude Code? Try it yourself 👇`
  );
  const currentUrl = typeof window !== "undefined" ? window.location.href : SITE_URL;
  const shareUrlEncoded = encodeURIComponent(currentUrl);

  const twitterUrl = `https://x.com/intent/post?text=${shareText}&url=${shareUrlEncoded}`;
  const linkedinUrl = `https://www.linkedin.com/feed/?shareActive=true&text=${shareText}%0A${shareUrlEncoded}`;

  const downloadCard = async () => {
    if (!cardRef.current || downloading) return;
    setDownloading(true);
    try {
      const dataUrl = await toPng(cardRef.current, {
        pixelRatio: 3,
        backgroundColor: "#1a1a2e",
      });
      const link = document.createElement("a");
      link.download = `claude-code-${result.overallScore}.png`;
      link.href = dataUrl;
      link.click();
    } catch {
      // silent fail
    }
    setDownloading(false);
  };

  return (
    <div className="flex min-h-dvh flex-col items-center px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md flex flex-col items-center gap-5"
      >
        {/* ── DOWNLOADABLE SCORECARD ────────────────────────── */}
        <div
          ref={cardRef}
          className="w-full bg-surface border border-border/50 rounded-2xl overflow-hidden"
        >
          <div className="px-6 pt-6 pb-3 text-center">
            <p className="text-[10px] text-muted/40 uppercase tracking-[0.2em] mb-5">
              Claude Code Skills
            </p>

            <div className="text-5xl font-black text-accent mb-1">
              {result.overallScore}
              <span className="text-base text-muted/30 font-normal ml-1">/100</span>
            </div>

            <h1 className="text-xl font-bold text-foreground mt-3">
              {archetype.title}
            </h1>
            <p className="text-xs text-muted/60 mt-2 max-w-[280px] mx-auto leading-relaxed">
              {archetype.description}
            </p>
          </div>

          <div className="px-2">
            <RadarChart dimensions={result.dimensions} />
          </div>

          <div className="px-5 pb-5 flex flex-col gap-1.5">
            {result.dimensions.map((dim) => (
              <div key={dim.dimension} className="flex items-center justify-between py-1">
                <span className="text-[11px] text-muted/50 w-24 truncate">{dim.label}</span>
                <div className="flex items-center gap-2 flex-1 ml-3">
                  <div className="flex-1 h-1 bg-background/40 rounded-full overflow-hidden">
                    <div className="h-full bg-accent rounded-full" style={{ width: `${dim.score}%` }} />
                  </div>
                  <span className="text-[11px] font-mono text-accent/60 w-6 text-right">{dim.score}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="px-5 py-3 border-t border-border/20 flex items-center justify-between">
            <span className="text-[9px] text-muted/25">howclaudecode.dev</span>
            <span className="text-[9px] text-muted/25">for fun only · not a certification</span>
          </div>
        </div>

        {/* ── ACTIONS ───────────────────────────────────────── */}
        <div className="w-full flex flex-col gap-3">
          <button
            onClick={downloadCard}
            disabled={downloading}
            className="w-full py-3.5 rounded-xl bg-accent text-background font-bold text-sm transition-all hover:bg-accent-dim active:scale-[0.98] disabled:opacity-50"
          >
            {downloading ? "Generating..." : "Download Scorecard"}
          </button>

          <div className="flex gap-3">
            <a
              href={twitterUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl border border-border/50 text-sm text-foreground hover:bg-surface-light transition-colors"
            >
              <XIcon />
              <span>Post</span>
            </a>
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl border border-border/50 text-sm text-foreground hover:bg-surface-light transition-colors"
            >
              <LinkedInIcon />
              <span>Share</span>
            </a>
          </div>
        </div>

        <Link href="/v4" className="text-xs text-muted/40 hover:text-accent transition-colors mt-1">
          play again
        </Link>

        <p className="text-[9px] text-muted/25 text-center leading-relaxed max-w-xs mt-2">
          For fun only. Not affiliated with, sponsored by, or endorsed by Anthropic.
          Not a professional certification.
        </p>
      </motion.div>

      <footer className="mt-8 mb-4 text-[11px] text-muted/40">
        made by{" "}
        <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="text-muted/60 hover:text-accent transition-colors">
          Krishna Goyal
        </a>
      </footer>
    </div>
  );
}

export default function V4ResultPage() {
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

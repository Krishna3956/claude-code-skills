"use client";

import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useRef, useState } from "react";
import Link from "next/link";
import RadarChart from "@/components/RadarChart";
import { motion } from "framer-motion";
import { toPng } from "html-to-image";
import { track } from "@vercel/analytics";
import type { QuizConfig } from "./types";
import { decodeResult, getArchetype } from "./scoring";

const LINKEDIN_URL = "https://www.linkedin.com/in/krishnaa-goyal/";

function ResultContent({ config }: { config: QuizConfig }) {
  const searchParams = useSearchParams();
  const result = decodeResult(searchParams, config);
  const cardRef = useRef<HTMLDivElement>(null);
  const [downloading, setDownloading] = useState(false);
  const prefix = config.analyticsPrefix;

  if (!result) {
    return (
      <div className="flex min-h-dvh items-center justify-center px-4">
        <div className="text-center">
          <p style={{ color: "var(--v5-text-secondary)" }} className="mb-4">No results found.</p>
          <Link href={`/play/${config.slug}`} style={{ color: "var(--v5-accent)" }} className="hover:underline text-sm">
            Take the test &rarr;
          </Link>
        </div>
      </div>
    );
  }

  const archetype = getArchetype(result.overallScore, config);
  const siteUrl = `https://www.howwellyouknow.com/play/${config.slug}`;
  const cardAccent = config.scorecardAccentColor ?? config.accentColor;

  useEffect(() => {
    track(`${prefix}_results_viewed`, {
      score: result.overallScore,
      archetype: archetype.title,
    });
  }, [prefix, result.overallScore, archetype.title]);

  const shareMessage = `I just took "How well do you know ${config.toolName}?" and scored ${result.overallScore}/100 - that makes me a ${archetype.title}!\n\nThink you can beat my score? 15 challenges, 6 rounds, no signup required.\n\nTry it yourself`;

  const twitterText = `I scored ${result.overallScore}/100 on "How well do you know ${config.toolName}?" - I'm a ${archetype.title}\n\nThink you can beat me?`;
  const twitterUrl = `https://x.com/intent/post?text=${encodeURIComponent(twitterText)}&url=${encodeURIComponent(siteUrl)}`;
  const linkedinUrl = `https://www.linkedin.com/feed/?shareActive=true&text=${encodeURIComponent(shareMessage)}%0A${encodeURIComponent(siteUrl)}`;

  const saveBtnRef = useRef<HTMLButtonElement>(null);

  const downloadCard = async () => {
    if (!cardRef.current || downloading) return;
    track(`${prefix}_scorecard_dl`, { score: result.overallScore, archetype: archetype.title });
    setDownloading(true);
    if (saveBtnRef.current) saveBtnRef.current.style.display = "none";
    try {
      const dataUrl = await toPng(cardRef.current, { pixelRatio: 3, backgroundColor: config.scorecardBg });
      const link = document.createElement("a");
      link.download = `${config.slug}-score-${result.overallScore}.png`;
      link.href = dataUrl;
      link.click();
    } catch {
      // silent
    }
    if (saveBtnRef.current) saveBtnRef.current.style.display = "";
    setDownloading(false);
  };

  return (
    <div className="flex min-h-dvh flex-col items-center px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-lg flex flex-col items-center gap-5 pt-6"
      >
        <div ref={cardRef} className="w-full rounded-2xl overflow-hidden relative"
          style={{ background: config.scorecardBg, border: `1px solid ${config.scorecardDivider}` }}>

          <div style={{
            position: "absolute", top: 0, left: 0, right: 0, height: "120px",
            background: `linear-gradient(180deg, ${cardAccent}18 0%, transparent 100%)`,
            pointerEvents: "none",
          }} />

          <div style={{
            position: "absolute", top: 0, left: 0, right: 0, height: "3px",
            background: cardAccent,
          }} />

          <div className="px-6 pt-6 pb-3 text-center relative">
            <button ref={saveBtnRef} onClick={downloadCard} disabled={downloading}
              className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[11px] font-medium transition-all hover:opacity-80 active:scale-95 disabled:opacity-40"
              style={{ background: "rgba(255,255,255,0.06)", color: config.scorecardLabelColor, border: "1px solid rgba(255,255,255,0.1)" }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              {downloading ? "..." : "Save"}
            </button>

            <div className="flex justify-center mb-4">
              <div className="inline-flex items-center justify-center rounded-2xl"
                style={{ background: "#FFFFFF", padding: "10px" }}>
                {config.scorecardLogo ?? config.logo}
              </div>
            </div>

            <p style={{ color: config.scorecardLabelColor, fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase" as const }} className="mb-4">
              Scorecard
            </p>

            <div className="mb-1" style={{ fontSize: "48px", fontWeight: 800, color: cardAccent, fontFamily: "var(--font-v5-serif), ui-serif, Georgia, serif", lineHeight: 1 }}>
              {result.overallScore}
              <span style={{ fontSize: "18px", color: config.scorecardLabelColor, fontWeight: 400, marginLeft: "4px" }}>/100</span>
            </div>

            <h1 className="mt-3" style={{ fontSize: "22px", fontFamily: "var(--font-v5-serif), ui-serif, Georgia, serif", color: "#F5F0EB" }}>
              {archetype.title}
            </h1>
            <p className="mt-2 mx-auto max-w-[280px]" style={{ color: config.scorecardLabelColor, fontSize: "12px", lineHeight: 1.6 }}>
              {archetype.description}
            </p>
          </div>

          <div className="px-2">
            <RadarChart
              dimensions={result.dimensions}
              accentColor={cardAccent}
              gridColor={config.scorecardGridColor}
              labelColor={config.scorecardLabelColor}
              bgColor={config.scorecardBg}
            />
          </div>

          <div className="px-5 pb-5 flex flex-col gap-2">
            {result.dimensions.map((dim) => (
              <div key={dim.dimension} className="flex items-center justify-between py-1">
                <span style={{ color: config.scorecardLabelColor, fontSize: "11px" }} className="w-24 truncate">{dim.label}</span>
                <div className="flex items-center gap-2 flex-1 ml-3">
                  <div className="flex-1 h-1 rounded-full overflow-hidden" style={{ background: config.scorecardDivider }}>
                    <div className="h-full rounded-full" style={{ width: `${dim.score}%`, background: cardAccent }} />
                  </div>
                  <span className="font-mono w-6 text-right" style={{ color: cardAccent, fontSize: "11px", opacity: 0.7 }}>{dim.score}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="px-5 py-3 flex items-center justify-center" style={{ borderTop: `1px solid ${config.scorecardDivider}` }}>
            <span style={{ color: config.scorecardLabelColor, fontSize: "9px" }}>howwellyouknow.com</span>
          </div>
        </div>

        <div className="w-full flex flex-col gap-3">
          <div className="flex gap-3">
            <a href={twitterUrl} target="_blank" rel="noopener noreferrer"
              onClick={() => track(`${prefix}_share_x`, { score: result.overallScore })}
              className="flex-1 flex items-center justify-center gap-2.5 py-3 rounded-xl text-sm font-semibold transition-all active:scale-[0.98]"
              style={{ background: "#1A1A1A", color: "#FFFFFF" }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              Post on X
            </a>
            <a href={linkedinUrl} target="_blank" rel="noopener noreferrer"
              onClick={() => track(`${prefix}_share_li`, { score: result.overallScore })}
              className="flex-1 flex items-center justify-center gap-2.5 py-3 rounded-xl text-sm font-semibold transition-all active:scale-[0.98]"
              style={{ background: "#0A66C2", color: "#FFFFFF" }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              Share on LinkedIn
            </a>
          </div>
        </div>

        <Link href={`/play/${config.slug}`} onClick={() => track(`${prefix}_play_again`, { score: result.overallScore })}
          className="text-xs transition-colors mt-1 flex items-center gap-1" style={{ color: "var(--v5-text-tertiary)" }}>
          &larr; Play Again
        </Link>

        <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer"
          className="flex sm:hidden items-center gap-1.5 mt-4 transition-opacity hover:opacity-80" style={{ textDecoration: "none" }}>
          <span style={{ color: "var(--v5-text-tertiary)", fontSize: "13px" }}>Made with</span>
          <span style={{ color: "var(--v5-accent)", fontSize: "14px" }}>♥</span>
          <span style={{ color: "var(--v5-text-tertiary)", fontSize: "13px" }}>by</span>
          <span style={{ color: "var(--v5-accent)", fontSize: "13px", fontWeight: 600 }}>Krishna Goyal</span>
        </a>
      </motion.div>

      <div className="hidden sm:flex fixed top-0 right-0 z-50 px-4 py-3">
        <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer"
          className="flex items-center gap-1.5 transition-opacity hover:opacity-80" style={{ textDecoration: "none" }}>
          <span style={{ color: "var(--v5-text-tertiary)", fontSize: "13px" }}>Made with</span>
          <span style={{ color: "var(--v5-accent)", fontSize: "14px" }}>♥</span>
          <span style={{ color: "var(--v5-text-tertiary)", fontSize: "13px" }}>by</span>
          <span style={{ color: "var(--v5-accent)", fontSize: "13px", fontWeight: 600 }}>Krishna Goyal</span>
        </a>
      </div>
    </div>
  );
}

export default function ResultsPage({ config }: { config: QuizConfig }) {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-dvh items-center justify-center">
          <div style={{ color: "var(--v5-text-secondary)", fontSize: "14px" }}>Loading...</div>
        </div>
      }
    >
      <ResultContent config={config} />
    </Suspense>
  );
}

"use client";

import { useSearchParams } from "next/navigation";
import { Suspense, useRef, useState, useEffect } from "react";
import Link from "next/link";
import { decodeResult } from "@/lib/scoring";
import { getArchetype } from "@/data/archetypes";
import RadarChart from "@/components/RadarChart";
import { motion, AnimatePresence } from "framer-motion";
import { toPng } from "html-to-image";
import { track } from "@vercel/analytics";

const LINKEDIN_URL = "https://www.linkedin.com/in/krishnaa-goyal/";

function ResultContent() {
  const searchParams = useSearchParams();
  const result = decodeResult(searchParams);
  const cardRef = useRef<HTMLDivElement>(null);
  const [downloading, setDownloading] = useState(false);
  const [showPHPopup, setShowPHPopup] = useState(false);

  if (!result) {
    return (
      <div className="flex min-h-dvh items-center justify-center px-4">
        <div className="text-center">
          <p style={{ color: "var(--v5-text-secondary)" }} className="mb-4">No results found.</p>
          <Link href="/play/claude-code" style={{ color: "var(--v5-accent)" }} className="hover:underline text-sm">
            Take the test &rarr;
          </Link>
        </div>
      </div>
    );
  }

  const archetype = getArchetype(result.overallScore);
  const siteUrl = "https://www.howwellyouknow.com/play/claude-code";

  const shareMessage = `I just took "How well do you know Claude Code?" and scored ${result.overallScore}/100 — that makes me a ${archetype.title}!\n\nThink you can beat my score? 15 challenges, 6 rounds, no coding required.\n\nTry it yourself 👇`;

  const twitterText = `I scored ${result.overallScore}/100 on "How well do you know Claude Code?" — I'm a ${archetype.title} 🔥\n\nThink you can beat me? 👇`;
  const twitterUrl = `https://x.com/intent/post?text=${encodeURIComponent(twitterText)}&url=${encodeURIComponent(siteUrl)}`;

  const linkedinUrl = `https://www.linkedin.com/feed/?shareActive=true&text=${encodeURIComponent(shareMessage)}%0A${encodeURIComponent(siteUrl)}`;

  const saveBtnRef = useRef<HTMLButtonElement>(null);

  const downloadCard = async () => {
    if (!cardRef.current || downloading) return;
    track("scorecard_downloaded", { score: result.overallScore, archetype: archetype.title });
    setDownloading(true);
    if (saveBtnRef.current) saveBtnRef.current.style.display = "none";
    try {
      const dataUrl = await toPng(cardRef.current, {
        pixelRatio: 3,
        backgroundColor: "#1C1917",
      });
      const link = document.createElement("a");
      link.download = `claude-code-score-${result.overallScore}.png`;
      link.href = dataUrl;
      link.click();
    } catch {
      // silent
    }
    if (saveBtnRef.current) saveBtnRef.current.style.display = "";
    setDownloading(false);
  };

  useEffect(() => {
    const dismissed = sessionStorage.getItem("ph_popup_dismissed");
    if (dismissed) return;
    const timer = setTimeout(() => setShowPHPopup(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex min-h-dvh flex-col items-center px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-lg flex flex-col items-center gap-5 pt-6"
      >
        {/* ── DOWNLOADABLE SCORECARD ────────────────────────── */}
        <div
          ref={cardRef}
          className="w-full rounded-2xl overflow-hidden"
          style={{ background: "#1C1917" }}
        >
          <div className="px-6 pt-5 pb-3 text-center relative">
            {/* Download button inside card top-right */}
            <button
              ref={saveBtnRef}
              onClick={downloadCard}
              disabled={downloading}
              className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[11px] font-medium transition-all hover:opacity-80 active:scale-95 disabled:opacity-40"
              style={{ background: "rgba(255,255,255,0.06)", color: "#A8A29E", border: "1px solid rgba(255,255,255,0.1)" }}
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              {downloading ? "..." : "Save"}
            </button>

            <p style={{ color: "#D97757", fontSize: "18px", letterSpacing: "0.02em", fontFamily: "var(--font-v5-serif), ui-serif, Georgia, serif" }} className="mb-5">
              Claude Code Scorecard
            </p>

            <div className="mb-1"
              style={{
                fontSize: "42px",
                fontWeight: 800,
                color: "#D97757",
                fontFamily: "var(--font-v5-serif), ui-serif, Georgia, serif",
                lineHeight: 1,
              }}
            >
              {result.overallScore}
              <span style={{ fontSize: "18px", color: "#78716C", fontWeight: 400, marginLeft: "4px" }}>/100</span>
            </div>

            <h1
              className="mt-3"
              style={{
                fontSize: "22px",
                fontFamily: "var(--font-v5-serif), ui-serif, Georgia, serif",
                color: "#F5F0EB",
              }}
            >
              {archetype.title}
            </h1>
            <p className="mt-2 mx-auto max-w-[280px]"
              style={{ color: "#A8A29E", fontSize: "12px", lineHeight: 1.6 }}>
              {archetype.description}
            </p>
          </div>

          <div className="px-2">
            <RadarChart
              dimensions={result.dimensions}
              accentColor="#D97757"
              gridColor="#3a3532"
              labelColor="#A8A29E"
              bgColor="#1C1917"
            />
          </div>

          <div className="px-5 pb-5 flex flex-col gap-2">
            {result.dimensions.map((dim) => (
              <div key={dim.dimension} className="flex items-center justify-between py-1">
                <span style={{ color: "#78716C", fontSize: "11px" }} className="w-24 truncate">
                  {dim.label}
                </span>
                <div className="flex items-center gap-2 flex-1 ml-3">
                  <div className="flex-1 h-1 rounded-full overflow-hidden"
                    style={{ background: "#292524" }}>
                    <div className="h-full rounded-full" style={{ width: `${dim.score}%`, background: "#D97757" }} />
                  </div>
                  <span className="font-mono w-6 text-right" style={{ color: "#D97757", fontSize: "11px", opacity: 0.7 }}>
                    {dim.score}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="px-5 py-3 flex items-center justify-center"
            style={{ borderTop: "1px solid #292524" }}>
            <span style={{ color: "#78716C", fontSize: "9px" }}>
              howwellyouknow.com
            </span>
          </div>
        </div>

        {/* ── SHARE ─────────────────────────────────────────── */}
        <div className="w-full flex flex-col gap-3">
          <div className="flex gap-3">
            <a
              href={twitterUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => track("share_x", { score: result.overallScore, archetype: archetype.title })}
              className="flex-1 flex items-center justify-center gap-2.5 py-3 rounded-xl text-sm font-semibold transition-all active:scale-[0.98]"
              style={{ background: "#1C1917", color: "#FFFFFF" }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              Post on X
            </a>
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => track("share_linkedin", { score: result.overallScore, archetype: archetype.title })}
              className="flex-1 flex items-center justify-center gap-2.5 py-3 rounded-xl text-sm font-semibold transition-all active:scale-[0.98]"
              style={{ background: "#0A66C2", color: "#FFFFFF" }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              Share on LinkedIn
            </a>
          </div>
        </div>

        <Link href="/play/claude-code" onClick={() => track("play_again", { score: result.overallScore })} className="text-xs transition-colors mt-1 flex items-center gap-1"
          style={{ color: "var(--v5-text-tertiary)" }}>
          &larr; Play Again
        </Link>

        {/* Credit: inline below Play Again on mobile only */}
        <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer"
          className="flex sm:hidden items-center gap-1.5 mt-4 transition-opacity hover:opacity-80"
          style={{ textDecoration: "none" }}>
          <span style={{ color: "var(--v5-text-tertiary)", fontSize: "13px" }}>Made with</span>
          <span style={{ color: "var(--v5-accent)", fontSize: "14px" }}>♥</span>
          <span style={{ color: "var(--v5-text-tertiary)", fontSize: "13px" }}>by</span>
          <span style={{ color: "var(--v5-accent)", fontSize: "13px", fontWeight: 600 }}>Krishna Goyal</span>
        </a>
      </motion.div>

      {/* Product Hunt badge: top-left on desktop, centered on mobile */}
      <div className="hidden sm:flex fixed top-0 left-0 z-50 px-4 py-3 pointer-events-none">
        <a
          href="https://www.producthunt.com/products/how-claude-code-are-you?embed=true&utm_source=badge-featured&utm_medium=badge&utm_campaign=badge-claude-code-skill-map"
          target="_blank"
          rel="noopener noreferrer"
          className="pointer-events-auto transition-opacity hover:opacity-80"
        >
          <img
            src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1088194&theme=dark&t=1772444117435"
            alt="Claude Code Skill Map - Interactive game that tests how well you know Claude Code | Product Hunt"
            width="180"
            height="39"
          />
        </a>
      </div>

      {/* Credit: fixed top-right on desktop only */}
      <div className="hidden sm:flex fixed top-0 right-0 z-50 px-4 py-3">
        <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer"
          className="flex items-center gap-1.5 transition-opacity hover:opacity-80"
          style={{ textDecoration: "none" }}>
          <span style={{ color: "var(--v5-text-tertiary)", fontSize: "13px" }}>Made with</span>
          <span style={{ color: "var(--v5-accent)", fontSize: "14px" }}>♥</span>
          <span style={{ color: "var(--v5-text-tertiary)", fontSize: "13px" }}>by</span>
          <span style={{ color: "var(--v5-accent)", fontSize: "13px", fontWeight: 600 }}>Krishna Goyal</span>
        </a>
      </div>

      {/* Product Hunt upvote popup */}
      <AnimatePresence>
        {showPHPopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center px-4"
            style={{ background: "rgba(0,0,0,0.5)", backdropFilter: "blur(4px)" }}
            onClick={() => {
              setShowPHPopup(false);
              sessionStorage.setItem("ph_popup_dismissed", "1");
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-sm rounded-2xl p-6 text-center relative"
              style={{
                background: "var(--v5-bg)",
                border: "1px solid var(--v5-border)",
                boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
              }}
            >
              <button
                onClick={() => {
                  setShowPHPopup(false);
                  sessionStorage.setItem("ph_popup_dismissed", "1");
                }}
                className="absolute top-3 right-3 w-7 h-7 flex items-center justify-center rounded-full transition-colors"
                style={{ color: "var(--v5-text-tertiary)", background: "var(--v5-bg-surface-light)" }}
              >
                &times;
              </button>

              <p style={{ fontSize: "28px", lineHeight: 1 }} className="mb-3">🧡</p>

              <h3
                style={{
                  fontFamily: "var(--font-v5-serif), ui-serif, Georgia, serif",
                  fontSize: "20px",
                  color: "var(--v5-text)",
                  marginBottom: "8px",
                }}
              >
                Enjoyed the quiz?
              </h3>

              <p style={{ color: "var(--v5-text-secondary)", fontSize: "13px", lineHeight: 1.6, marginBottom: "20px" }}>
                This was a weekend project built for fun. If you liked it, an upvote on Product Hunt would mean a lot.
              </p>

              <a
                href="https://www.producthunt.com/products/how-claude-code-are-you?embed=true&utm_source=badge-featured&utm_medium=badge&utm_campaign=badge-claude-code-skill-map"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 w-full py-3 rounded-xl text-sm font-semibold transition-all active:scale-[0.98]"
                style={{ background: "#DA552F", color: "#FFFFFF" }}
                onClick={() => {
                  track("ph_upvote_click", { score: result.overallScore });
                  sessionStorage.setItem("ph_popup_dismissed", "1");
                  setShowPHPopup(false);
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 19V5" />
                  <path d="M5 12l7-7 7 7" />
                </svg>
                Upvote on Product Hunt
              </a>

              <button
                onClick={() => {
                  setShowPHPopup(false);
                  sessionStorage.setItem("ph_popup_dismissed", "1");
                }}
                className="mt-3 text-xs transition-colors"
                style={{ color: "var(--v5-text-tertiary)" }}
              >
                Maybe later
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function V6ResultPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-dvh items-center justify-center">
          <div style={{ color: "var(--v5-text-secondary)", fontSize: "14px" }}>Loading...</div>
        </div>
      }
    >
      <ResultContent />
    </Suspense>
  );
}

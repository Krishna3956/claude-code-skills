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

const SITE_URL = "https://howwellyouknow.com";

function PlayMorePopup({ accentColor, onClose }: { accentColor: string; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 50,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "rgba(0,0,0,0.6)",
        backdropFilter: "blur(4px)",
        WebkitBackdropFilter: "blur(4px)",
        padding: "16px",
      }}
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "#1a1a2e",
          borderRadius: 20,
          border: "1px solid rgba(255,255,255,0.1)",
          padding: "32px 28px",
          maxWidth: 360,
          width: "100%",
          textAlign: "center",
          position: "relative",
        }}
      >
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: 12,
            right: 12,
            background: "none",
            border: "none",
            color: "rgba(255,255,255,0.4)",
            cursor: "pointer",
            padding: 4,
            fontSize: 18,
            lineHeight: 1,
          }}
        >
          ✕
        </button>

        <div style={{ fontSize: 40, marginBottom: 12 }}>🎮</div>

        <h2
          style={{
            color: "#F5F0EB",
            fontSize: 20,
            fontWeight: 700,
            fontFamily: "var(--font-v5-serif), ui-serif, Georgia, serif",
            marginBottom: 8,
          }}
        >
          Enjoyed this one?
        </h2>

        <p
          style={{
            color: "rgba(255,255,255,0.55)",
            fontSize: 14,
            lineHeight: 1.5,
            marginBottom: 24,
          }}
        >
          We have 25+ challenges across AI, dev tools, design, and more. Find your next one.
        </p>

        <a
          href="/play"
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 8,
            width: "100%",
            padding: "14px 24px",
            borderRadius: 12,
            background: accentColor,
            color: "#FFFFFF",
            fontSize: 15,
            fontWeight: 700,
            textDecoration: "none",
            transition: "transform 0.15s, opacity 0.2s",
          }}
          onMouseDown={(e) => { e.currentTarget.style.transform = "scale(0.97)"; }}
          onMouseUp={(e) => { e.currentTarget.style.transform = "scale(1)"; }}
        >
          Play More Challenges
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </a>
      </motion.div>
    </motion.div>
  );
}

function ResultContent({ config }: { config: QuizConfig }) {
  const searchParams = useSearchParams();
  const isEmbed = searchParams.get("embed") === "true";
  const result = decodeResult(searchParams, config);
  const cardRef = useRef<HTMLDivElement>(null);
  const [downloading, setDownloading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const prefix = config.analyticsPrefix;

  if (!result) {
    return (
      <div className="flex min-h-dvh items-center justify-center px-4">
        <div className="text-center">
          <p style={{ color: "var(--v5-text-secondary)" }} className="mb-4">
            No results found.
          </p>
          <Link
            href={`/play/${config.slug}`}
            style={{ color: "var(--v5-accent)" }}
            className="hover:underline text-sm"
          >
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

  useEffect(() => {
    if (isEmbed) return;
    const timer = setTimeout(() => setShowPopup(true), 5000);
    return () => clearTimeout(timer);
  }, [isEmbed]);

  const shareMessage = `I just took "How well do you know ${config.toolName}?" and scored ${result.overallScore}/100. That makes me a ${archetype.title}!\n\nThink you can beat my score? 6 rounds, ~3 min, no signup required.\n\nTry it yourself`;

  const saveBtnRef = useRef<HTMLButtonElement>(null);

  const downloadCard = async () => {
    if (!cardRef.current || downloading) return;
    track(`${prefix}_scorecard_dl`, {
      score: result.overallScore,
      archetype: archetype.title,
    });
    setDownloading(true);
    if (saveBtnRef.current) saveBtnRef.current.style.display = "none";
    try {
      const opts = { pixelRatio: 3, backgroundColor: config.scorecardBg };
      // First pass warms the image cache inside html-to-image so all
      // <img> elements (logos, etc.) are inlined as data-URIs.
      await toPng(cardRef.current, opts);
      const dataUrl = await toPng(cardRef.current, opts);
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
    <div className="flex min-h-dvh flex-col items-center px-4 py-8" style={isEmbed ? { zoom: 0.75 } : undefined}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-lg flex flex-col items-center gap-5 pt-6"
      >
        <div
          ref={cardRef}
          className="w-full rounded-2xl overflow-hidden relative"
          style={{
            background: config.scorecardBg,
            border: `1px solid ${config.scorecardDivider}`,
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "120px",
              background: `linear-gradient(180deg, ${cardAccent}18 0%, transparent 100%)`,
              pointerEvents: "none",
            }}
          />

          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "3px",
              background: cardAccent,
            }}
          />

          <div className="px-6 pt-6 pb-3 text-center relative">
            {isEmbed ? null : (
              <a
                href="/"
                onClick={() =>
                  track("powered_by_clicked", {
                    source: "results_scorecard",
                    quiz: prefix,
                  })
                }
                className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[11px] font-medium transition-all hover:opacity-80"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  color: config.scorecardLabelColor,
                  border: "1px solid rgba(255,255,255,0.1)",
                  textDecoration: "none",
                }}
              >
                Powered by
                <img
                  src="/logos/hwyk-logo-dark-transparent.svg"
                  alt="HWYK"
                  width="16"
                  height="16"
                  style={{ objectFit: "contain" }}
                />
                <svg
                  width="9"
                  height="9"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={config.scorecardLabelColor}
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ opacity: 0.5 }}
                >
                  <path d="M7 17L17 7" />
                  <path d="M7 7h10v10" />
                </svg>
              </a>
            )}
            <button
              ref={saveBtnRef}
              onClick={downloadCard}
              disabled={downloading}
              className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[11px] font-medium transition-all hover:opacity-80 active:scale-95 disabled:opacity-40"
              style={{
                background: "rgba(255,255,255,0.06)",
                color: config.scorecardLabelColor,
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              {downloading ? "..." : "Save"}
            </button>

            <div className="flex justify-center mb-4">
              <div
                className="inline-flex items-center justify-center rounded-2xl scorecard-logo-wrap"
                style={{ background: "#FFFFFF", padding: "10px" }}
              >
                {config.scorecardLogo ?? config.logo}
              </div>
            </div>

            <p
              style={{
                color: config.scorecardLabelColor,
                fontSize: "11px",
                letterSpacing: "0.12em",
                textTransform: "uppercase" as const,
              }}
              className="mb-4"
            >
              Scorecard
            </p>

            <div
              className="mb-1"
              style={{
                fontSize: "48px",
                fontWeight: 800,
                color: cardAccent,
                fontFamily:
                  "var(--font-v5-serif), ui-serif, Georgia, serif",
                lineHeight: 1,
              }}
            >
              {result.overallScore}
              <span
                style={{
                  fontSize: "18px",
                  color: config.scorecardLabelColor,
                  fontWeight: 400,
                  marginLeft: "4px",
                }}
              >
                /100
              </span>
            </div>

            <h1
              className="mt-3"
              style={{
                fontSize: "22px",
                fontFamily:
                  "var(--font-v5-serif), ui-serif, Georgia, serif",
                color: "#F5F0EB",
              }}
            >
              {archetype.title}
            </h1>
          </div>

          <div>
            <div className="px-6 pb-2 text-center">
              <p
                className="mx-auto max-w-[280px]"
                style={{
                  color: config.scorecardLabelColor,
                  fontSize: "12px",
                  lineHeight: 1.6,
                }}
              >
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
                <div
                  key={dim.dimension}
                  className="flex items-center justify-between py-1"
                >
                  <span
                    style={{
                      color: config.scorecardLabelColor,
                      fontSize: "11px",
                    }}
                    className="w-24 truncate"
                  >
                    {dim.label}
                  </span>
                  <div className="flex items-center gap-2 flex-1 ml-3">
                    <div
                      className="flex-1 h-1 rounded-full overflow-hidden"
                      style={{ background: config.scorecardDivider }}
                    >
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: `${dim.score}%`,
                          background: cardAccent,
                        }}
                      />
                    </div>
                    <span
                      className="font-mono w-6 text-right"
                      style={{
                        color: cardAccent,
                        fontSize: "11px",
                        opacity: 0.7,
                      }}
                    >
                      {dim.score}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            className="px-5 py-3 flex items-center justify-center gap-2"
            style={{
              borderTop: `1px solid ${config.scorecardDivider}`,
            }}
          >
            <img
              src="/logos/hwyk-logo-transparent.svg"
              alt=""
              width="14"
              height="14"
              style={{ objectFit: "contain", opacity: 0.7 }}
            />
            <span
              style={{
                color: config.scorecardLabelColor,
                fontSize: "9px",
              }}
            >
              howwellyouknow.com
            </span>
          </div>
        </div>

        <div className="w-full flex flex-col gap-3">
          <button
            onClick={() => {
              navigator.clipboard.writeText(`${shareMessage}\n\n${siteUrl}`);
              track(`${prefix}_share_copy`, { score: result.overallScore });
            }}
            className="flex items-center justify-center gap-2.5 py-3 rounded-xl text-sm font-semibold transition-all active:scale-[0.98]"
            style={{ background: "var(--v5-accent)", color: "#FFFFFF" }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
              <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
            </svg>
            Copy &amp; Share
          </button>
        </div>

        <Link
          href={`/play/${config.slug}`}
          onClick={() => {
            track(`${prefix}_play_again`, {
              score: result.overallScore,
            });
          }}
          className="text-xs transition-colors mt-1 flex items-center gap-1"
          style={{ color: "var(--v5-text-tertiary)" }}
        >
          &larr; Play Again
        </Link>

        {!isEmbed && (
          <a
            href={SITE_URL}
            className="flex items-center gap-1.5 mt-6 mb-4 transition-opacity hover:opacity-80"
            style={{ textDecoration: "none" }}
          >
            <span
              style={{ color: "var(--v5-text-tertiary)", fontSize: "13px" }}
            >
              Made with
            </span>
            <span style={{ color: "var(--v5-accent)", fontSize: "14px" }}>
              ♥
            </span>
            <span
              style={{ color: "var(--v5-text-tertiary)", fontSize: "13px" }}
            >
              by
            </span>
            <span
              style={{
                color: "var(--v5-accent)",
                fontSize: "13px",
                fontWeight: 600,
              }}
            >
              How Well You Know
            </span>
          </a>
        )}
      </motion.div>

      {showPopup && (
        <PlayMorePopup
          accentColor={cardAccent}
          onClose={() => setShowPopup(false)}
        />
      )}
    </div>
  );
}

export default function ResultsPage({ config }: { config: QuizConfig }) {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-dvh items-center justify-center">
          <div
            style={{
              color: "var(--v5-text-secondary)",
              fontSize: "14px",
            }}
          >
            Loading...
          </div>
        </div>
      }
    >
      <ResultContent config={config} />
    </Suspense>
  );
}

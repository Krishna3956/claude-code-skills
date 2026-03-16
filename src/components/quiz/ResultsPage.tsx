"use client";

import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useRef, useState } from "react";
import Link from "next/link";
import RadarChart from "@/components/RadarChart";
import { motion } from "framer-motion";
import { toPng } from "html-to-image";
import { track } from "@/lib/analytics";
import type { QuizConfig, QuizDifficultyKey, QuizResult } from "./types";
import { normalizePlayDirectoryQuizConfig } from "./config-utils";
import { decodeResult, getArchetype } from "./scoring";
import Navbar from "@/components/marketing/Navbar";

const RESULT_GATE_EMAIL_KEY = "quiz-results-gate-email";

function getResultUnlockKey(slug: string, difficultyKey: QuizDifficultyKey, score: number) {
  return `quiz-results-unlocked:${slug}:${difficultyKey}:${score}`;
}

function getResultSubmittedKey(slug: string, difficultyKey: QuizDifficultyKey, score: number) {
  return `quiz-results-submitted:${slug}:${difficultyKey}:${score}`;
}

function getDifficultyKey(config: QuizConfig, raw: string | null): QuizDifficultyKey {
  const available = config.difficultyOptions?.map((option) => option.key) ?? [];
  if (raw === "easy" || raw === "medium" || raw === "hard") {
    if (available.length === 0 || available.includes(raw)) return raw;
  }
  return config.defaultDifficulty ?? "hard";
}

function getActiveConfig(config: QuizConfig, difficultyKey: QuizDifficultyKey): QuizConfig {
  const variant = config.difficultyOptions?.find((option) => option.key === difficultyKey);
  if (!variant) return config;
  return {
    ...config,
    tagline: variant.tagline ?? config.tagline,
    subtitle: variant.subtitle ?? config.subtitle,
    challenges: variant.challenges,
    rounds: variant.rounds,
    archetypes: variant.archetypes ?? config.archetypes,
  };
}


function getStoredResult(slug: string, difficultyKey: QuizDifficultyKey): QuizResult | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.sessionStorage.getItem(`quiz-result:${slug}:${difficultyKey}`);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as QuizResult;
    if (typeof parsed?.overallScore !== "number" || !Array.isArray(parsed?.dimensions)) return null;
    return parsed;
  } catch {
    return null;
  }
}

function getPopupDismissKey(slug: string, difficultyKey: QuizDifficultyKey, score: number) {
  return `quiz-results-popup-dismissed:${slug}:${difficultyKey}:${score}`;
}

function ResultGate({
  toolName,
  accentColor,
  textColor,
  textSecondary,
  borderColor,
  bgColor,
  email,
  setEmail,
  onSubmit,
  loading,
  error,
}: {
  toolName: string;
  accentColor: string;
  textColor: string;
  textSecondary: string;
  borderColor: string;
  bgColor: string;
  email: string;
  setEmail: (value: string) => void;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  loading: boolean;
  error: string | null;
}) {
  return (
    <div
      className="absolute inset-0 z-10 flex items-center justify-center px-4"
      style={{ background: "rgba(8,12,22,0.38)", backdropFilter: "blur(8px)" }}
    >
      <div
        className="w-full max-w-sm rounded-2xl p-5 shadow-xl"
        style={{ background: bgColor, border: `1px solid ${borderColor}` }}
      >
        <div className="mb-4 text-center">
          <p
            className="mb-2 text-[11px] font-semibold uppercase tracking-[0.18em]"
            style={{ color: accentColor }}
          >
            Unlock Results
          </p>
          <h2
            className="mb-2 text-xl"
            style={{
              color: textColor,
              fontFamily: "var(--font-v5-serif), ui-serif, Georgia, serif",
            }}
          >
            See your full {toolName} scorecard
          </h2>
          <p className="text-sm leading-6" style={{ color: textSecondary }}>
            Drop your email and we&apos;ll reveal the result right here.
          </p>
        </div>

        <form onSubmit={onSubmit} className="flex flex-col gap-3">
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="you@company.com"
            autoComplete="email"
            className="w-full rounded-xl px-4 py-3 text-sm outline-none"
            style={{
              background: "#FFFFFF",
              border: `1px solid ${borderColor}`,
              color: textColor,
            }}
          />
          <button
            type="submit"
            disabled={loading}
            className="rounded-xl px-4 py-3 text-sm font-semibold transition-opacity hover:opacity-90 disabled:opacity-50"
            style={{ background: accentColor, color: "#FFFFFF" }}
          >
            {loading ? "Unlocking..." : "Unlock My Results"}
          </button>
          {error ? (
            <p className="text-xs text-center" style={{ color: "#dc2626" }}>
              {error}
            </p>
          ) : null}
          <p className="text-[11px] text-center leading-5" style={{ color: textSecondary }}>
            We only use this to unlock and log quiz results.
          </p>
        </form>
      </div>
    </div>
  );
}

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
  const normalizedConfig = normalizePlayDirectoryQuizConfig(config);
  const difficultyKey = getDifficultyKey(normalizedConfig, searchParams.get("difficulty"));
  const activeConfig = getActiveConfig(normalizedConfig, difficultyKey);
  const navTheme = activeConfig.navbarTheme === "dark" ? "light" : activeConfig.navbarTheme;
  const decodedResult = decodeResult(searchParams, activeConfig);
  const storedResult = getStoredResult(activeConfig.slug, difficultyKey);
  const result = storedResult ?? decodedResult;
  const cardRef = useRef<HTMLDivElement>(null);
  const saveBtnRef = useRef<HTMLButtonElement>(null);
  const autoUnlockAttemptedRef = useRef(false);
  const [downloading, setDownloading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [gateEmail, setGateEmail] = useState("");
  const [gateUnlocked, setGateUnlocked] = useState(false);
  const [gateLoading, setGateLoading] = useState(false);
  const [gateError, setGateError] = useState<string | null>(null);
  const prefix = activeConfig.analyticsPrefix;
  const cardAccent = activeConfig.scorecardAccentColor ?? activeConfig.accentColor;
  const archetype = result ? getArchetype(result.overallScore, activeConfig) : null;
  const siteUrl = `https://www.howwellyouknow.com/play/${activeConfig.slug}?difficulty=${difficultyKey}`;
  const popupDismissKey = result
    ? getPopupDismissKey(activeConfig.slug, difficultyKey, result.overallScore)
    : null;
  const popupDismissed =
    popupDismissKey && typeof window !== "undefined"
      ? window.localStorage.getItem(popupDismissKey) === "1"
      : false;
  const unlockKey = result ? getResultUnlockKey(activeConfig.slug, difficultyKey, result.overallScore) : null;
  const submittedKey = result ? getResultSubmittedKey(activeConfig.slug, difficultyKey, result.overallScore) : null;

  useEffect(() => {
    if (typeof window === "undefined") return;
    const storedEmail = window.localStorage.getItem(RESULT_GATE_EMAIL_KEY);
    if (storedEmail) {
      setGateEmail(storedEmail);
    }
  }, []);

  useEffect(() => {
    if (!unlockKey || typeof window === "undefined") return;
    setGateUnlocked(window.localStorage.getItem(unlockKey) === "1");
  }, [unlockKey]);

  useEffect(() => {
    if (!result || !archetype) return;
    track(`${prefix}_results_viewed`, {
      score: result.overallScore,
      archetype: archetype.title,
      difficulty: difficultyKey,
    });
  }, [archetype, difficultyKey, prefix, result]);

  useEffect(() => {
    if (isEmbed || !gateUnlocked || !popupDismissKey || popupDismissed || showPopup) return;
    const timer = setTimeout(() => setShowPopup(true), 5000);
    return () => clearTimeout(timer);
  }, [gateUnlocked, isEmbed, popupDismissKey, popupDismissed, showPopup]);

  useEffect(() => {
    if (!result || !archetype || !submittedKey || !unlockKey || gateUnlocked || gateLoading) return;
    if (typeof window === "undefined") return;
    if (autoUnlockAttemptedRef.current) return;

    const savedEmail = window.localStorage.getItem(RESULT_GATE_EMAIL_KEY);
    const alreadySubmitted = window.localStorage.getItem(submittedKey) === "1";
    if (!savedEmail || alreadySubmitted) return;
    autoUnlockAttemptedRef.current = true;

    const submitStoredEmail = async () => {
      setGateLoading(true);
      setGateError(null);
      try {
        const response = await fetch("/api/capture-email", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: savedEmail,
            quiz: `${activeConfig.slug}:${difficultyKey}`,
            score: result.overallScore,
            archetype: archetype.title,
            dimensions: JSON.stringify(
              result.dimensions.map((dimension) => ({
                key: dimension.dimension,
                label: dimension.label,
                score: dimension.score,
                earned: dimension.earned,
                possible: dimension.possible,
              }))
            ),
          }),
        });

        const payload = await response.json().catch(() => ({}));
        if (!response.ok) {
          throw new Error(typeof payload?.error === "string" ? payload.error : "Unable to unlock results.");
        }

        window.localStorage.setItem(unlockKey, "1");
        window.localStorage.setItem(submittedKey, "1");
        window.localStorage.setItem(RESULT_GATE_EMAIL_KEY, savedEmail);
        setGateUnlocked(true);
      } catch (error) {
        setGateError(error instanceof Error ? error.message : "Unable to unlock results.");
      } finally {
        setGateLoading(false);
      }
    };

    void submitStoredEmail();
  }, [activeConfig.slug, archetype, difficultyKey, gateLoading, gateUnlocked, result, submittedKey, unlockKey]);

  const closePopup = () => {
    if (popupDismissKey && typeof window !== "undefined") {
      window.localStorage.setItem(popupDismissKey, "1");
    }
    setShowPopup(false);
  };

  const handleUnlockSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!result || !archetype || !unlockKey || !submittedKey) return;

    setGateLoading(true);
    setGateError(null);

    try {
      const response = await fetch("/api/capture-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: gateEmail.trim(),
          quiz: `${activeConfig.slug}:${difficultyKey}`,
          score: result.overallScore,
          archetype: archetype.title,
          dimensions: JSON.stringify(
            result.dimensions.map((dimension) => ({
              key: dimension.dimension,
              label: dimension.label,
              score: dimension.score,
              earned: dimension.earned,
              possible: dimension.possible,
            }))
          ),
        }),
      });

      const payload = await response.json().catch(() => ({}));
      if (!response.ok) {
        throw new Error(typeof payload?.error === "string" ? payload.error : "Unable to unlock results.");
      }

      if (typeof window !== "undefined") {
        window.localStorage.setItem(RESULT_GATE_EMAIL_KEY, gateEmail.trim());
        window.localStorage.setItem(unlockKey, "1");
        window.localStorage.setItem(submittedKey, "1");
      }
      track(`${prefix}_results_unlocked`, {
        score: result.overallScore,
        difficulty: difficultyKey,
      });
      setGateUnlocked(true);
    } catch (error) {
      setGateError(error instanceof Error ? error.message : "Unable to unlock results.");
    } finally {
      setGateLoading(false);
    }
  };

  const downloadCard = async () => {
    if (!cardRef.current || !result || !archetype || downloading || !gateUnlocked) return;
    track(`${prefix}_scorecard_dl`, {
      score: result.overallScore,
      archetype: archetype.title,
      difficulty: difficultyKey,
    });
    setDownloading(true);
    if (saveBtnRef.current) saveBtnRef.current.style.display = "none";
    try {
      const opts = { pixelRatio: 3, backgroundColor: activeConfig.scorecardBg };
      await toPng(cardRef.current, opts);
      const dataUrl = await toPng(cardRef.current, opts);
      const link = document.createElement("a");
      link.download = `${activeConfig.slug}-${difficultyKey}-score-${result.overallScore}.png`;
      link.href = dataUrl;
      link.click();
    } catch {
      // silent
    }
    if (saveBtnRef.current) saveBtnRef.current.style.display = "";
    setDownloading(false);
  };

  if (!result || !archetype) {
    return (
      <>
        {!isEmbed && <Navbar theme={navTheme} />}
        <div className="flex min-h-dvh items-center justify-center px-4">
          <div className="text-center">
            <p style={{ color: "var(--v5-text-secondary)" }} className="mb-4">
              No results found.
            </p>
            <Link
              href={`/play/${activeConfig.slug}?difficulty=${difficultyKey}`}
              style={{ color: "var(--v5-accent)" }}
              className="hover:underline text-sm"
            >
              Take the test &rarr;
            </Link>
          </div>
        </div>
      </>
    );
  }

  const shareMessage = `I just took "How well do you know ${activeConfig.toolName}?" and scored ${result.overallScore}/100 on ${difficultyKey} mode. That makes me a ${archetype.title}!\n\nThink you can beat my score? ${activeConfig.rounds.length} rounds, ~3 min, no signup required.\n\nTry it yourself`;

  return (
    <>
      {!isEmbed && <Navbar theme={navTheme} />}
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
            background: activeConfig.scorecardBg,
            border: `1px solid ${activeConfig.scorecardDivider}`,
          }}
        >
          {!gateUnlocked ? (
            <ResultGate
              toolName={activeConfig.toolName}
              accentColor={cardAccent}
              textColor="#111827"
              textSecondary="#6B7280"
              borderColor="#E5E7EB"
              bgColor="#FFFFFF"
              email={gateEmail}
              setEmail={setGateEmail}
              onSubmit={handleUnlockSubmit}
              loading={gateLoading}
              error={gateError}
            />
          ) : null}
          <div
            style={{
              filter: gateUnlocked ? undefined : "blur(16px)",
              pointerEvents: gateUnlocked ? undefined : "none",
              userSelect: gateUnlocked ? undefined : "none",
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
            <button
              ref={saveBtnRef}
              onClick={downloadCard}
              disabled={downloading}
              className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[11px] font-medium transition-all hover:opacity-80 active:scale-95 disabled:opacity-40"
              style={{
                background: "rgba(255,255,255,0.06)",
                color: activeConfig.scorecardLabelColor,
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
                style={{
                  background: activeConfig.scorecardLogoBg ?? "#FFFFFF",
                  border: activeConfig.scorecardLogoBorder
                    ? `1px solid ${activeConfig.scorecardLogoBorder}`
                    : undefined,
                  padding: "10px",
                }}
              >
                {activeConfig.scorecardLogo ?? activeConfig.logo}
              </div>
            </div>

            <p
              style={{
                color: activeConfig.scorecardLabelColor,
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
                  color: activeConfig.scorecardLabelColor,
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
                  color: activeConfig.scorecardLabelColor,
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
                gridColor={activeConfig.scorecardGridColor}
                labelColor={activeConfig.scorecardLabelColor}
                bgColor={activeConfig.scorecardBg}
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
                      color: activeConfig.scorecardLabelColor,
                      fontSize: "11px",
                    }}
                    className="w-24 truncate"
                  >
                    {dim.label}
                  </span>
                  <div className="flex items-center gap-2 flex-1 ml-3">
                    <div
                      className="flex-1 h-1 rounded-full overflow-hidden"
                      style={{ background: activeConfig.scorecardDivider }}
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
                      className="font-mono w-14 text-right"
                      style={{
                        color: cardAccent,
                        fontSize: "11px",
                        opacity: 0.7,
                      }}
                    >
                      {dim.earned}/{dim.possible}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            className="px-5 py-3 flex items-center justify-center gap-2"
            style={{
              borderTop: `1px solid ${activeConfig.scorecardDivider}`,
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
                color: activeConfig.scorecardLabelColor,
                fontSize: "9px",
              }}
            >
              howwellyouknow.com
            </span>
          </div>
          </div>
        </div>

        <div className="w-full flex flex-col gap-3">
          <button
            onClick={() => {
              if (!gateUnlocked) return;
              navigator.clipboard.writeText(`${shareMessage}\n\n${siteUrl}`);
              track(`${prefix}_share_copy`, { score: result.overallScore });
            }}
            disabled={!gateUnlocked}
            className="flex items-center justify-center gap-2.5 py-3 rounded-xl text-sm font-semibold transition-all active:scale-[0.98]"
            style={{
              background: "var(--v5-accent)",
              color: activeConfig.ctaTextColor ?? "#FFFFFF",
              opacity: gateUnlocked ? 1 : 0.45,
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
              <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
            </svg>
            Copy &amp; Share
          </button>
        </div>

        <Link
          href={`/play/${activeConfig.slug}?difficulty=${difficultyKey}`}
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

      </motion.div>

        {showPopup && (
          <PlayMorePopup
            accentColor={cardAccent}
            onClose={closePopup}
          />
        )}
      </div>
    </>
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

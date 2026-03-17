"use client";

import { Suspense, useState, useEffect, useRef, useCallback } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { track } from "@/lib/analytics";
import Navbar from "@/components/marketing/Navbar";
import {
  ShieldQuestion,
  ArrowLeftRight,
  MousePointerClick,
  Timer,
  ScanEye,
  Crown,
} from "lucide-react";
import { normalizePlayDirectoryQuizConfig } from "./config-utils";
import type {
  QuizConfig,
  QuizDifficultyKey,
  TruthOrMythChallenge,
  ThisOrThatChallenge,
  QuickPickChallenge,
  SpeedPickChallenge,
  OddOneOutChallenge,
  ChallengeResult,
} from "./types";

function shuffleDeterministically<T>(items: T[], seed: number): T[] {
  const copy = [...items];
  let state = seed || 1;
  for (let i = copy.length - 1; i > 0; i -= 1) {
    state = (state * 1664525 + 1013904223) >>> 0;
    const j = state % (i + 1);
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function RoundIcon({ name, size = 20, color }: { name: string; size?: number; color?: string }) {
  const c = color ?? "var(--v5-accent)";
  const sw = size > 24 ? 2 : 1.5;
  const props = { size, color: c, strokeWidth: sw };
  switch (name) {
    case "Truth or Myth": return <ShieldQuestion {...props} />;
    case "This or That": return <ArrowLeftRight {...props} />;
    case "Quick Pick": return <MousePointerClick {...props} />;
    case "Speed Round": return <Timer {...props} />;
    case "Odd One Out": return <ScanEye {...props} />;
    case "Final Boss": return <Crown {...props} />;
    default: return <MousePointerClick {...props} />;
  }
}
import { calculateResults, encodeResult } from "./scoring";

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

function FeedbackBox({ show, correct, text }: { show: boolean; correct: boolean | null; text: string }) {
  if (!show) return null;
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full rounded-xl px-4 py-3.5 text-sm leading-relaxed"
      style={{
        background: correct ? "rgba(22,163,74,0.06)" : "rgba(220,38,38,0.06)",
        border: `1px solid ${correct ? "rgba(22,163,74,0.2)" : "rgba(220,38,38,0.2)"}`,
        color: correct ? "var(--v5-correct)" : "var(--v5-wrong)",
      }}
    >
      <span className="font-semibold">{correct ? "Correct" : "Not quite"}</span>
      <span style={{ color: "var(--v5-text-secondary)" }}> · {text}</span>
    </motion.div>
  );
}

function TruthOrMythCard({ challenge, onAnswer, prefix }: { challenge: TruthOrMythChallenge; onAnswer: (c: boolean) => void; prefix: string }) {
  const [answered, setAnswered] = useState<boolean | null>(null);
  const isCorrect = answered !== null ? answered === challenge.isTrue : null;

  const handlePick = (pick: boolean) => {
    if (answered !== null) return;
    setAnswered(pick);
    onAnswer(pick === challenge.isTrue);
  };

  const btnStyle = (pick: boolean) => {
    const isThis = answered === pick;
    if (answered === null) {
      return {
        background: pick ? "rgba(22,163,74,0.05)" : "rgba(220,38,38,0.05)",
        border: `1px solid ${pick ? "rgba(22,163,74,0.3)" : "rgba(220,38,38,0.3)"}`,
        color: pick ? "var(--v5-correct)" : "var(--v5-wrong)",
      };
    }
    if (isThis) {
      return {
        background: isCorrect ? "rgba(22,163,74,0.1)" : "rgba(220,38,38,0.1)",
        border: `1px solid ${isCorrect ? "var(--v5-correct)" : "var(--v5-wrong)"}`,
        color: isCorrect ? "var(--v5-correct)" : "var(--v5-wrong)",
      };
    }
    return { background: "transparent", border: "1px solid var(--v5-border)", color: "var(--v5-text-tertiary)", opacity: 0.3 };
  };

  return (
    <div className="flex flex-col items-center gap-5 w-full">
      <div className="rounded-2xl px-6 py-8 w-full text-center"
        style={{ background: "var(--v5-bg-surface)", border: "1px solid var(--v5-border)" }}>
        <p className="text-lg sm:text-xl leading-relaxed"
          style={{ color: "var(--v5-text)", fontFamily: "var(--font-v5-serif), ui-serif, Georgia, serif" }}>
          {challenge.statement}
        </p>
      </div>
      <div className="flex gap-3 w-full">
        <button onClick={() => { track(`${prefix}_answer`, { round: "truth_myth", questionId: challenge.id, choice: "truth" }); handlePick(true); }} disabled={answered !== null}
          className="flex-1 py-4 rounded-xl text-base font-semibold transition-all active:scale-[0.97]" style={btnStyle(true)}>
          Truth
        </button>
        <button onClick={() => { track(`${prefix}_answer`, { round: "truth_myth", questionId: challenge.id, choice: "myth" }); handlePick(false); }} disabled={answered !== null}
          className="flex-1 py-4 rounded-xl text-base font-semibold transition-all active:scale-[0.97]" style={btnStyle(false)}>
          Myth
        </button>
      </div>
      <FeedbackBox show={answered !== null} correct={isCorrect} text={challenge.explanation} />
    </div>
  );
}

function ThisOrThatCard({ challenge, onAnswer, prefix }: { challenge: ThisOrThatChallenge; onAnswer: (c: boolean) => void; prefix: string }) {
  const [picked, setPicked] = useState<"A" | "B" | null>(null);
  const isCorrect = picked !== null ? picked === challenge.correct : null;

  const handlePick = (pick: "A" | "B") => {
    if (picked !== null) return;
    setPicked(pick);
    onAnswer(pick === challenge.correct);
  };

  const optStyle = (opt: "A" | "B") => {
    if (picked === null) return { background: "transparent", border: "1px solid var(--v5-border)", color: "var(--v5-text)" };
    if (opt === challenge.correct) return { background: "rgba(22,163,74,0.06)", border: "1px solid var(--v5-correct)", color: "var(--v5-correct)" };
    if (opt === picked) return { background: "rgba(220,38,38,0.06)", border: "1px solid var(--v5-wrong)", color: "var(--v5-wrong)" };
    return { background: "transparent", border: "1px solid var(--v5-border)", color: "var(--v5-text-tertiary)", opacity: 0.3 };
  };

  return (
    <div className="flex flex-col items-center gap-5 w-full">
      <div className="rounded-2xl px-5 py-5 w-full text-center"
        style={{ background: "var(--v5-bg-surface)", border: "1px solid var(--v5-border)" }}>
        <p className="text-base sm:text-lg leading-relaxed" style={{ color: "var(--v5-text)" }}>{challenge.scenario}</p>
      </div>
      <div className="flex gap-3 w-full">
        <button onClick={() => { track(`${prefix}_answer`, { round: "this_or_that", questionId: challenge.id, choice: "A" }); handlePick("A"); }} disabled={picked !== null}
          className="flex-1 py-5 px-3 rounded-xl transition-all active:scale-[0.97]" style={optStyle("A")}>
          <span className="text-sm sm:text-base font-medium">{challenge.optionA}</span>
        </button>
        <div className="flex items-center px-1">
          <span style={{ color: "var(--v5-text-tertiary)", fontSize: "10px", fontWeight: 700, textTransform: "uppercase" as const }}>or</span>
        </div>
        <button onClick={() => { track(`${prefix}_answer`, { round: "this_or_that", questionId: challenge.id, choice: "B" }); handlePick("B"); }} disabled={picked !== null}
          className="flex-1 py-5 px-3 rounded-xl transition-all active:scale-[0.97]" style={optStyle("B")}>
          <span className="text-sm sm:text-base font-medium">{challenge.optionB}</span>
        </button>
      </div>
      <FeedbackBox show={picked !== null} correct={isCorrect} text={challenge.explanation} />
    </div>
  );
}

function QuickPickCard({ challenge, onAnswer, prefix }: { challenge: QuickPickChallenge; onAnswer: (c: boolean) => void; prefix: string }) {
  const [picked, setPicked] = useState<string | null>(null);
  const isCorrect = picked !== null ? picked === challenge.blank : null;

  const handlePick = (option: string) => {
    if (picked !== null) return;
    setPicked(option);
    onAnswer(option === challenge.blank);
  };

  const optStyle = (opt: string) => {
    if (picked === null) return { background: "transparent", border: "1px solid var(--v5-border)", color: "var(--v5-text)" };
    if (opt === challenge.blank) return { background: "rgba(22,163,74,0.06)", border: "1px solid var(--v5-correct)", color: "var(--v5-correct)" };
    if (opt === picked) return { background: "rgba(220,38,38,0.06)", border: "1px solid var(--v5-wrong)", color: "var(--v5-wrong)" };
    return { background: "transparent", border: "1px solid var(--v5-border)", color: "var(--v5-text-tertiary)", opacity: 0.3 };
  };

  return (
    <div className="flex flex-col items-center gap-5 w-full">
      <div className="rounded-2xl px-5 py-5 w-full text-center"
        style={{ background: "var(--v5-bg-surface)", border: "1px solid var(--v5-border)" }}>
        <p className="text-base sm:text-lg leading-relaxed" style={{ color: "var(--v5-text)" }}>{challenge.scenario}</p>
      </div>
      <div className="flex flex-col gap-2.5 w-full">
        {challenge.options.map((opt) => (
          <button key={opt} onClick={() => { track(`${prefix}_answer`, { round: "quick_pick", questionId: challenge.id, choice: opt }); handlePick(opt); }} disabled={picked !== null}
            className="w-full px-5 py-4 rounded-xl text-left text-sm font-medium transition-all active:scale-[0.98]" style={optStyle(opt)}>
            {opt}
          </button>
        ))}
      </div>
      <FeedbackBox show={picked !== null} correct={isCorrect} text={challenge.explanation} />
    </div>
  );
}

function SpeedPickCard({
  challenge,
  onAnswer,
  prefix,
  accentColor,
  ctaTextColor,
}: {
  challenge: SpeedPickChallenge;
  onAnswer: (c: boolean) => void;
  prefix: string;
  accentColor: string;
  ctaTextColor: string;
}) {
  const allItems = shuffleDeterministically([...challenge.correctItems, ...challenge.wrongItems], challenge.id);
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [timeLeft, setTimeLeft] = useState(challenge.timeLimit);
  const [done, setDone] = useState(false);
  const finishedRef = useRef(false);
  const submittedRef = useRef(false);

  const finishRound = useCallback(() => {
    if (finishedRef.current) return;
    finishedRef.current = true;
    setDone(true);
  }, []);

  useEffect(() => {
    if (done || timeLeft <= 0) return;
    const timer = setTimeout(() => setTimeLeft((t) => t - 1), 1000);
    return () => clearTimeout(timer);
  }, [timeLeft, done, finishRound]);

  useEffect(() => {
    if (done || timeLeft > 0) return;
    const timer = setTimeout(() => finishRound(), 0);
    return () => clearTimeout(timer);
  }, [done, finishRound, timeLeft]);

  useEffect(() => {
    if (!done || submittedRef.current) return;
    submittedRef.current = true;
    const correctPicks = [...selected].filter((s) => challenge.correctItems.includes(s)).length;
    const wrongPicks = [...selected].filter((s) => challenge.wrongItems.includes(s)).length;
    onAnswer(Math.max(0, correctPicks - wrongPicks) >= challenge.correctItems.length * 0.5);
  }, [done, selected, challenge, onAnswer]);

  const toggleItem = (item: string) => {
    if (done) return;
    setSelected((prev) => { const n = new Set(prev); if (n.has(item)) n.delete(item); else n.add(item); return n; });
  };

  const chipStyle = (item: string) => {
    const isSel = selected.has(item);
    const isRight = challenge.correctItems.includes(item);
    if (!done) {
      return isSel
        ? { background: "var(--v5-accent-subtle)", border: "1px solid var(--v5-accent)", color: "var(--v5-accent)" }
        : { background: "transparent", border: "1px solid var(--v5-border)", color: "var(--v5-text)" };
    }
    if (isRight && isSel) return { background: "rgba(22,163,74,0.08)", border: "1px solid var(--v5-correct)", color: "var(--v5-correct)" };
    if (isRight && !isSel) return { background: "rgba(22,163,74,0.04)", border: "1px solid rgba(22,163,74,0.2)", color: "rgba(22,163,74,0.5)" };
    if (!isRight && isSel) return { background: "rgba(220,38,38,0.08)", border: "1px solid var(--v5-wrong)", color: "var(--v5-wrong)" };
    return { background: "transparent", border: "1px solid var(--v5-border)", color: "var(--v5-text-tertiary)", opacity: 0.15 };
  };

  return (
    <div className="flex flex-col items-center gap-5 w-full">
      <div className="w-full flex items-center gap-3">
        <div className="flex-1 h-1.5 rounded-full overflow-hidden" style={{ background: "var(--v5-bg-surface-light)" }}>
          <motion.div className="h-full rounded-full"
            style={{ background: timeLeft <= 3 ? "var(--v5-wrong)" : "var(--v5-accent)" }}
            initial={{ width: "100%" }} animate={{ width: `${(timeLeft / challenge.timeLimit) * 100}%` }}
            transition={{ duration: 0.3 }} />
        </div>
        <span className="font-mono text-xs font-bold w-5 text-right"
          style={{ color: timeLeft <= 3 ? "var(--v5-wrong)" : "var(--v5-accent)" }}>{timeLeft}</span>
      </div>
      <p className="text-base text-center" style={{ color: "var(--v5-text-secondary)" }}>{challenge.prompt}</p>
      <div className="flex flex-wrap gap-2.5 justify-center w-full">
        {allItems.map((item) => (
          <button key={item} onClick={() => { track(`${prefix}_answer`, { round: "speed_pick", questionId: challenge.id, item }); toggleItem(item); }} disabled={done}
            className="px-4 py-3 rounded-xl text-sm font-medium transition-all active:scale-95" style={chipStyle(item)}>
            {item}
          </button>
        ))}
      </div>
      {!done && (
        <button onClick={() => { track(`${prefix}_lock_in`, { questionId: challenge.id }); finishRound(); }}
          className="mt-1 px-8 py-2.5 rounded-xl text-sm font-bold transition-all active:scale-95"
          style={{ background: accentColor, color: ctaTextColor, border: "none" }}>
          Lock In
        </button>
      )}
      {done && (
        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
          className="w-full rounded-xl px-4 py-3 text-sm leading-relaxed"
          style={{ background: "var(--v5-bg-surface-light)", border: "1px solid var(--v5-border)" }}>
          <span style={{ color: "var(--v5-text-secondary)" }}>{challenge.explanation}</span>
        </motion.div>
      )}
    </div>
  );
}

function OddOneOutCard({ challenge, onAnswer, prefix }: { challenge: OddOneOutChallenge; onAnswer: (c: boolean) => void; prefix: string }) {
  const shuffled = shuffleDeterministically(challenge.items, challenge.id);
  const [picked, setPicked] = useState<string | null>(null);
  const isCorrect = picked !== null ? picked === challenge.oddItem : null;

  const handlePick = (item: string) => {
    if (picked !== null) return;
    setPicked(item);
    onAnswer(item === challenge.oddItem);
  };

  const itemStyle = (item: string) => {
    if (picked === null) return { background: "transparent", border: "1px solid var(--v5-border)", color: "var(--v5-text)" };
    if (item === challenge.oddItem) return { background: "rgba(22,163,74,0.06)", border: "1px solid var(--v5-correct)", color: "var(--v5-correct)" };
    if (item === picked) return { background: "rgba(220,38,38,0.06)", border: "1px solid var(--v5-wrong)", color: "var(--v5-wrong)" };
    return { background: "transparent", border: "1px solid var(--v5-border)", color: "var(--v5-text-tertiary)", opacity: 0.3 };
  };

  return (
    <div className="flex flex-col items-center gap-5 w-full">
      <div className="rounded-2xl px-5 py-5 w-full text-center"
        style={{ background: "var(--v5-bg-surface)", border: "1px solid var(--v5-border)" }}>
        <p className="text-base sm:text-lg leading-relaxed" style={{ color: "var(--v5-text)" }}>{challenge.prompt}</p>
      </div>
      <div className="grid grid-cols-2 gap-3 w-full">
        {shuffled.map((item) => (
          <button key={item} onClick={() => { track(`${prefix}_answer`, { round: "odd_one_out", questionId: challenge.id, choice: item }); handlePick(item); }} disabled={picked !== null}
            className="py-5 px-4 rounded-xl text-sm font-medium text-center transition-all active:scale-[0.97]" style={itemStyle(item)}>
            {item}
          </button>
        ))}
      </div>
      <FeedbackBox show={picked !== null} correct={isCorrect} text={challenge.explanation} />
    </div>
  );
}

// ────────────────────────────────────────────────────────────
// HOMESCREEN
// ────────────────────────────────────────────────────────────
function HomeScreen({
  config,
  onStart,
  isEmbed,
  difficultyKey,
  onDifficultyChange,
}: {
  config: QuizConfig;
  onStart: () => void;
  isEmbed: boolean;
  difficultyKey: QuizDifficultyKey;
  onDifficultyChange: (key: QuizDifficultyKey) => void;
}) {
  const difficultyOptions = config.difficultyOptions ?? [];
  const startButton = (
    <button
      onClick={() => { track(`${config.analyticsPrefix}_started`); onStart(); }}
      className={`${isEmbed ? "px-12" : "w-full"} py-4 rounded-xl text-base font-semibold transition-all active:scale-[0.98]`}
      style={{ background: "var(--v5-accent)", color: config.ctaTextColor ?? "#FFFFFF" }}>
      Let&apos;s Go
    </button>
  );

  return (
    <div
      className="flex min-h-screen flex-col items-center justify-center px-4 py-12"
      style={isEmbed ? { zoom: 0.75 } : undefined}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center text-center gap-6 w-full max-w-md"
      >
        {config.logo}

        <div>
          <h1 className="text-3xl sm:text-4xl leading-tight"
            style={{ fontFamily: "var(--font-v5-serif), ui-serif, Georgia, serif" }}>
            How well do you
          </h1>
          <h1 className="text-3xl sm:text-4xl leading-tight"
            style={{ fontFamily: "var(--font-v5-serif), ui-serif, Georgia, serif", color: "var(--v5-accent)" }}>
            know {config.toolName}?
          </h1>
        </div>

        <p style={{ color: "var(--v5-text-secondary)", fontSize: "14px", lineHeight: "1.6" }}>
          {config.tagline}
          <br />
          {config.subtitle}
        </p>

        {difficultyOptions.length > 0 && !isEmbed && (
          <div className="w-full max-w-sm">
            <div
              className="mb-2 text-[11px] font-semibold uppercase tracking-[0.14em]"
              style={{ color: "var(--v5-text-tertiary)" }}
            >
              Difficulty
            </div>
            <div
              className="grid grid-cols-3 rounded-xl p-1"
              style={{ background: "var(--v5-bg-surface-light)", border: "1px solid var(--v5-border)" }}
            >
              {difficultyOptions.map((option) => {
                const active = option.key === difficultyKey;
                return (
                  <button
                    key={option.key}
                    onClick={() => onDifficultyChange(option.key)}
                    className="rounded-lg px-3 py-2.5 text-sm font-semibold transition-all"
                    style={{
                      background: active ? "var(--v5-bg-elevated)" : "transparent",
                      color: active ? "var(--v5-accent)" : "var(--v5-text-secondary)",
                      boxShadow: active ? "0 1px 3px rgba(0,0,0,0.08)" : "none",
                    }}
                  >
                    {option.label}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {isEmbed && startButton}

        <div className="w-full rounded-xl overflow-hidden" style={{ border: "1px solid var(--v5-border)" }}>
          {config.rounds.map((round, i) => (
            <div key={round.name} className="flex items-center gap-3 px-4 py-3"
              style={{ borderTop: i > 0 ? "1px solid var(--v5-border-subtle)" : "none" }}>
              <span className="w-7 flex justify-center"><RoundIcon name={round.name} size={18} /></span>
              <span style={{ color: "var(--v5-text)", fontSize: "14px", fontWeight: 500 }}>{round.name}</span>
              <span className="ml-auto" style={{ color: "var(--v5-text-tertiary)", fontSize: "11px" }}>{round.tagline}</span>
            </div>
          ))}
        </div>

        {!isEmbed && startButton}

        <p style={{ color: "var(--v5-text-tertiary)", fontSize: "11px", lineHeight: "1.5" }}>
          ~3 min · no signup · shareable results
        </p>

      </motion.div>
    </div>
  );
}

// ────────────────────────────────────────────────────────────
// MAIN GAME
// ────────────────────────────────────────────────────────────
function QuizPageInner({ config }: { config: QuizConfig }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const isEmbed = searchParams.get("embed") === "true";
  const normalizedConfig = normalizePlayDirectoryQuizConfig(config);
  const difficultyKey = getDifficultyKey(normalizedConfig, searchParams.get("difficulty"));
  const activeConfig = getActiveConfig(normalizedConfig, difficultyKey);
  const navTheme = activeConfig.navbarTheme === "dark" ? "light" : activeConfig.navbarTheme;
  const [started, setStarted] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [, setResults] = useState<ChallengeResult[]>([]);
  const resultsRef = useRef<ChallengeResult[]>([]);
  const [dismissedRoundIntroIndex, setDismissedRoundIntroIndex] = useState<number | null>(null);
  const [answered, setAnswered] = useState(false);

  const total = activeConfig.challenges.length;
  const challenge = activeConfig.challenges[currentIndex] ?? null;
  const currentRound = challenge
    ? activeConfig.rounds.find((r) => r.ids.includes(challenge.id)) ?? null
    : null;
  const isFirstOfRound = Boolean(challenge && currentRound && currentRound.ids[0] === challenge.id);
  const showingRoundIntro =
    started && challenge !== null && isFirstOfRound && dismissedRoundIntroIndex !== currentIndex;
  const prefix = activeConfig.analyticsPrefix;

  useEffect(() => {
    if (!showingRoundIntro) return;
    const timer = setTimeout(() => setDismissedRoundIntroIndex(currentIndex), 1200);
    return () => clearTimeout(timer);
  }, [currentIndex, showingRoundIntro]);

  function handleAnswer(correct: boolean) {
    if (!challenge) return;
    const nextResult = {
      challengeId: challenge.id,
      earned: correct ? 1 : 0,
      possible: 1,
      dimension: challenge.dimension,
    };
    const existingIndex = resultsRef.current.findIndex((result) => result.challengeId === challenge.id);
    const nextResults =
      existingIndex === -1
        ? [...resultsRef.current, nextResult]
        : resultsRef.current.map((result, index) => (index === existingIndex ? nextResult : result));
    resultsRef.current = nextResults;
    setAnswered(true);
    track(`${prefix}_question_result`, {
      questionId: challenge.id,
      correct,
      questionIndex: currentIndex + 1,
      totalQuestions: total,
    });
    setResults(nextResults);
  }

  function handleNext() {
    if (currentIndex < total - 1) {
      setCurrentIndex((i) => i + 1);
      setAnswered(false);
    } else {
      const finalResults = resultsRef.current;
      const finalResult = calculateResults(finalResults, activeConfig);
      if (typeof window !== "undefined") {
        window.sessionStorage.setItem(
          `quiz-result:${activeConfig.slug}:${difficultyKey}`,
          JSON.stringify(finalResult)
        );
      }
      const encoded = encodeResult(finalResult);
      track(`${activeConfig.analyticsPrefix}_completed`, {
        score: finalResult.overallScore,
        correctCount: finalResults.filter((r) => r.earned > 0).length,
        totalQuestions: total,
        difficulty: difficultyKey,
      });
      const hasDifficulty = (config.difficultyOptions?.length ?? 0) > 0;
      const diffParam = hasDifficulty ? `difficulty=${difficultyKey}&` : "";
      router.push(`/play/${activeConfig.slug}/results?${diffParam}${encoded}${isEmbed ? "&embed=true" : ""}`);
    }
  }

  function handleDifficultyChange(nextDifficulty: QuizDifficultyKey) {
    const params = new URLSearchParams(searchParams.toString());
    params.set("difficulty", nextDifficulty);
    if (isEmbed) params.set("embed", "true");
    router.replace(`/play/${normalizedConfig.slug}?${params.toString()}`);
  }

  if (!challenge) return null;

  if (!started) {
    return (
      <>
        {!isEmbed && !config.hideNavbar && <Navbar theme={navTheme} />}
        <HomeScreen
          config={activeConfig}
          onStart={() => setStarted(true)}
          isEmbed={isEmbed}
          difficultyKey={difficultyKey}
          onDifficultyChange={handleDifficultyChange}
        />
      </>
    );
  }

  if (showingRoundIntro && currentRound) {
    return (
      <>
        {!isEmbed && !config.hideNavbar && <Navbar theme={navTheme} />}
        <div className="flex min-h-dvh items-center justify-center px-4" style={isEmbed ? { zoom: 0.75 } : undefined}>
          <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
            className="flex flex-col items-center gap-3 text-center">
            <div><RoundIcon name={currentRound.name} size={40} /></div>
            <h2 className="text-xl sm:text-2xl"
              style={{ fontFamily: "var(--font-v5-serif), ui-serif, Georgia, serif", color: "var(--v5-text)" }}>
              {currentRound.name}
            </h2>
            <p style={{ color: "var(--v5-text-secondary)", fontSize: "14px" }}>{currentRound.tagline}</p>
          </motion.div>
        </div>
      </>
    );
  }

  const roundIndex = activeConfig.rounds.findIndex((r) => r.ids.includes(challenge.id));
  const posInRound = currentRound ? currentRound.ids.indexOf(challenge.id) : 0;
  const roundSize = currentRound ? currentRound.ids.length : 1;

  return (
    <>
      {!isEmbed && !config.hideNavbar && <Navbar theme={navTheme} />}
      <div className="flex min-h-dvh flex-col items-center px-4 py-6 sm:py-8" style={isEmbed ? { zoom: 0.75 } : undefined}>
      <div className="w-full max-w-lg mb-6">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2" style={{ fontSize: "12px", color: "var(--v5-text-secondary)" }}>
            <button
              onClick={() => {
                resultsRef.current = [];
                setStarted(false);
                setCurrentIndex(0);
                setResults([]);
                setAnswered(false);
              }}
              className="flex items-center transition-opacity hover:opacity-70"
              title="Back to start"
              style={{ background: "none", border: "none", cursor: "pointer", padding: 0, marginRight: 2, color: "var(--v5-text-tertiary)" }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
            </button>
            <span className="flex items-center"><RoundIcon name={currentRound?.name ?? ""} size={14} color="var(--v5-text-secondary)" /></span>
            <span>{currentRound?.name}</span>
          </div>
          <div className="flex gap-1.5">
            {Array.from({ length: roundSize }).map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 rounded-full transition-colors"
                style={{ background: i <= posInRound ? "var(--v5-accent)" : "var(--v5-border)" }} />
            ))}
          </div>
        </div>
        <div className="flex gap-1 w-full">
          {activeConfig.rounds.map((_, i) => (
            <div key={i} className="flex-1 h-1 rounded-full transition-colors"
              style={{ background: i < roundIndex ? "var(--v5-accent)" : i === roundIndex ? `${activeConfig.accentColor}66` : "var(--v5-border-subtle)" }} />
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div key={challenge.id}
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.2 }} className="w-full max-w-lg">
          {challenge.type === "truth_or_myth" && <TruthOrMythCard challenge={challenge} onAnswer={handleAnswer} prefix={prefix} />}
          {challenge.type === "this_or_that" && <ThisOrThatCard challenge={challenge} onAnswer={handleAnswer} prefix={prefix} />}
          {challenge.type === "quick_pick" && <QuickPickCard challenge={challenge} onAnswer={handleAnswer} prefix={prefix} />}
          {challenge.type === "speed_pick" && (
            <SpeedPickCard
              challenge={challenge}
              onAnswer={handleAnswer}
              prefix={prefix}
              accentColor={activeConfig.accentColor}
              ctaTextColor={activeConfig.ctaTextColor ?? "#FFFFFF"}
            />
          )}
          {challenge.type === "odd_one_out" && <OddOneOutCard challenge={challenge} onAnswer={handleAnswer} prefix={prefix} />}
        </motion.div>
      </AnimatePresence>

        {answered && (
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="mt-6">
            <button onClick={() => { track(currentIndex < total - 1 ? `${prefix}_next` : `${prefix}_see_results`, { questionId: challenge.id, questionIndex: currentIndex + 1 }); handleNext(); }}
              className="inline-flex items-center gap-2 rounded-xl px-8 py-3 text-sm font-semibold transition-all active:scale-[0.97]"
              style={{ background: "var(--v5-accent)", color: activeConfig.ctaTextColor ?? "#FFFFFF" }}>
              {currentIndex < total - 1 ? "Next" : "See Results"}
              <span style={{ opacity: 0.6 }}>&rarr;</span>
            </button>
          </motion.div>
        )}
      </div>
    </>
  );
}

export default function QuizPage({ config }: { config: QuizConfig }) {
  return (
    <Suspense fallback={<div className="flex min-h-dvh items-center justify-center" />}>
      <QuizPageInner config={config} />
    </Suspense>
  );
}

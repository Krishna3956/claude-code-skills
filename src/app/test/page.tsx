"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  v4challenges,
  V4_ROUND_CONFIG,
  TruthOrMythChallenge,
  ThisOrThatChallenge,
  QuickPickChallenge,
  SpeedPickChallenge,
  OddOneOutChallenge,
} from "@/data/v4challenges";
import { ChallengeResult, calculateV2Results } from "@/lib/v2scoring";
import { encodeResult } from "@/lib/scoring";
import { track } from "@vercel/analytics";

const LINKEDIN_URL = "https://www.linkedin.com/in/krishnaa-goyal/";

// ────────────────────────────────────────────────────────────
// HOMESCREEN
// ────────────────────────────────────────────────────────────
function HomeScreen({ onStart }: { onStart: () => void }) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center text-center gap-6 w-full max-w-md"
      >
          {/* Claude Logo */}
          <img
            src="/claude-logo.png"
            alt="Claude Code"
            width={44}
            height={44}
            style={{ borderRadius: "12px" }}
          />

          {/* Wordmark */}
          <div>
            <h1
              className="text-3xl sm:text-4xl leading-tight"
              style={{ fontFamily: "var(--font-v5-serif), ui-serif, Georgia, serif" }}
            >
              How well do you
            </h1>
            <h1
              className="text-3xl sm:text-4xl leading-tight"
              style={{
                fontFamily: "var(--font-v5-serif), ui-serif, Georgia, serif",
                color: "var(--v5-accent)",
              }}
            >
              know Claude Code?
            </h1>
          </div>

          <p style={{ color: "var(--v5-text-secondary)", fontSize: "14px", lineHeight: "1.6" }}>
            6 rounds. 15 challenges. No coding required.
            <br />
            Just you vs. Claude Code trivia.
          </p>

          {/* Round list — clean, not clickable */}
          <div
            className="w-full rounded-xl overflow-hidden"
            style={{ border: "1px solid var(--v5-border)" }}
          >
            {V4_ROUND_CONFIG.map((round, i) => (
              <div
                key={round.name}
                className="flex items-center gap-3 px-4 py-3"
                style={{
                  borderTop: i > 0 ? "1px solid var(--v5-border-subtle)" : "none",
                }}
              >
                <span className="text-lg w-7 text-center">{round.icon}</span>
                <span style={{ color: "var(--v5-text)", fontSize: "14px", fontWeight: 500 }}>
                  {round.name}
                </span>
                <span
                  className="ml-auto"
                  style={{ color: "var(--v5-text-tertiary)", fontSize: "11px" }}
                >
                  {round.tagline}
                </span>
              </div>
            ))}
          </div>

          <button
            onClick={() => { track("quiz_started"); onStart(); }}
            className="w-full py-4 rounded-xl text-base font-semibold transition-all active:scale-[0.98]"
            style={{
              background: "var(--v5-accent)",
              color: "#FFFFFF",
            }}
          >
            Let&apos;s Go
          </button>

          <p style={{ color: "var(--v5-text-tertiary)", fontSize: "11px", lineHeight: "1.5" }}>
            ~3 min · no signup · shareable results
          </p>

          {/* Credit: inline below content on mobile only */}
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
            src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1088194&theme=light&t=1772444117435"
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
    </div>
  );
}

// ────────────────────────────────────────────────────────────
// FEEDBACK BOX
// ────────────────────────────────────────────────────────────
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
      <span style={{ color: "var(--v5-text-secondary)" }}> — {text}</span>
    </motion.div>
  );
}

// ────────────────────────────────────────────────────────────
// TRUTH OR MYTH
// ────────────────────────────────────────────────────────────
function TruthOrMythCard({ challenge, onAnswer }: { challenge: TruthOrMythChallenge; onAnswer: (c: boolean) => void }) {
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
      <div
        className="rounded-2xl px-6 py-8 w-full text-center"
        style={{ background: "var(--v5-bg-surface)", border: "1px solid var(--v5-border)" }}
      >
        <p
          className="text-lg sm:text-xl leading-relaxed"
          style={{ color: "var(--v5-text)", fontFamily: "var(--font-v5-serif), ui-serif, Georgia, serif" }}
        >
          &ldquo;{challenge.statement}&rdquo;
        </p>
      </div>
      <div className="flex gap-3 w-full">
        <button onClick={() => { track("answer_truth_myth", { choice: "truth" }); handlePick(true); }} disabled={answered !== null}
          className="flex-1 py-4 rounded-xl text-base font-semibold transition-all active:scale-[0.97]"
          style={btnStyle(true)}>
          Truth
        </button>
        <button onClick={() => { track("answer_truth_myth", { choice: "myth" }); handlePick(false); }} disabled={answered !== null}
          className="flex-1 py-4 rounded-xl text-base font-semibold transition-all active:scale-[0.97]"
          style={btnStyle(false)}>
          Myth
        </button>
      </div>
      <FeedbackBox show={answered !== null} correct={isCorrect} text={challenge.explanation} />
    </div>
  );
}

// ────────────────────────────────────────────────────────────
// THIS OR THAT
// ────────────────────────────────────────────────────────────
function ThisOrThatCard({ challenge, onAnswer }: { challenge: ThisOrThatChallenge; onAnswer: (c: boolean) => void }) {
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
        <button onClick={() => { track("answer_this_or_that", { choice: "A" }); handlePick("A"); }} disabled={picked !== null}
          className="flex-1 py-5 px-3 rounded-xl transition-all active:scale-[0.97]"
          style={optStyle("A")}>
          <span className="text-sm sm:text-base font-medium">{challenge.optionA}</span>
        </button>
        <div className="flex items-center px-1">
          <span style={{ color: "var(--v5-text-tertiary)", fontSize: "10px", fontWeight: 700, textTransform: "uppercase" as const }}>or</span>
        </div>
        <button onClick={() => { track("answer_this_or_that", { choice: "B" }); handlePick("B"); }} disabled={picked !== null}
          className="flex-1 py-5 px-3 rounded-xl transition-all active:scale-[0.97]"
          style={optStyle("B")}>
          <span className="text-sm sm:text-base font-medium">{challenge.optionB}</span>
        </button>
      </div>
      <FeedbackBox show={picked !== null} correct={isCorrect} text={challenge.explanation} />
    </div>
  );
}

// ────────────────────────────────────────────────────────────
// QUICK PICK
// ────────────────────────────────────────────────────────────
function QuickPickCard({ challenge, onAnswer }: { challenge: QuickPickChallenge; onAnswer: (c: boolean) => void }) {
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
        {challenge.options.map((opt: string) => (
          <button key={opt} onClick={() => { track("answer_quick_pick", { choice: opt }); handlePick(opt); }} disabled={picked !== null}
            className="w-full px-5 py-4 rounded-xl text-left text-sm font-medium transition-all active:scale-[0.98]"
            style={optStyle(opt)}>
            {opt}
          </button>
        ))}
      </div>
      <FeedbackBox show={picked !== null} correct={isCorrect} text={challenge.explanation} />
    </div>
  );
}

// ────────────────────────────────────────────────────────────
// SPEED PICK
// ────────────────────────────────────────────────────────────
function SpeedPickCard({ challenge, onAnswer }: { challenge: SpeedPickChallenge; onAnswer: (c: boolean) => void }) {
  const allItems = useRef([...challenge.correctItems, ...challenge.wrongItems].sort(() => Math.random() - 0.5));
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [timeLeft, setTimeLeft] = useState(challenge.timeLimit);
  const [done, setDone] = useState(false);
  const finishedRef = useRef(false);

  const finishRound = useCallback(() => {
    if (finishedRef.current) return;
    finishedRef.current = true;
    setDone(true);
  }, []);

  useEffect(() => {
    if (done || timeLeft <= 0) { if (timeLeft <= 0) finishRound(); return; }
    const timer = setTimeout(() => setTimeLeft((t) => t - 1), 1000);
    return () => clearTimeout(timer);
  }, [timeLeft, done, finishRound]);

  useEffect(() => {
    if (!done) return;
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
          <motion.div
            className="h-full rounded-full"
            style={{ background: timeLeft <= 3 ? "var(--v5-wrong)" : "var(--v5-accent)" }}
            initial={{ width: "100%" }}
            animate={{ width: `${(timeLeft / challenge.timeLimit) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
        <span className="font-mono text-xs font-bold w-5 text-right"
          style={{ color: timeLeft <= 3 ? "var(--v5-wrong)" : "var(--v5-accent)" }}>
          {timeLeft}
        </span>
      </div>
      <p className="text-base text-center" style={{ color: "var(--v5-text-secondary)" }}>{challenge.prompt}</p>
      <div className="flex flex-wrap gap-2.5 justify-center w-full">
        {allItems.current.map((item: string) => (
          <button key={item} onClick={() => { track("answer_speed_pick", { item }); toggleItem(item); }} disabled={done}
            className="px-4 py-3 rounded-xl text-sm font-medium transition-all active:scale-95"
            style={chipStyle(item)}>
            {item}
          </button>
        ))}
      </div>
      {!done && (
        <button onClick={() => { track("speed_pick_lock_in"); finishRound(); }}
          className="mt-1 px-8 py-2.5 rounded-xl text-sm font-bold transition-all active:scale-95"
          style={{ background: "var(--v5-text)", color: "var(--v5-bg)" }}>
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

// ────────────────────────────────────────────────────────────
// ODD ONE OUT
// ────────────────────────────────────────────────────────────
function OddOneOutCard({ challenge, onAnswer }: { challenge: OddOneOutChallenge; onAnswer: (c: boolean) => void }) {
  const shuffled = useRef([...challenge.items].sort(() => Math.random() - 0.5));
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
        {shuffled.current.map((item: string) => (
          <button key={item} onClick={() => { track("answer_odd_one_out", { choice: item }); handlePick(item); }} disabled={picked !== null}
            className="py-5 px-4 rounded-xl text-sm font-medium text-center transition-all active:scale-[0.97]"
            style={itemStyle(item)}>
            {item}
          </button>
        ))}
      </div>
      <FeedbackBox show={picked !== null} correct={isCorrect} text={challenge.explanation} />
    </div>
  );
}

// ────────────────────────────────────────────────────────────
// MAIN GAME
// ────────────────────────────────────────────────────────────
export default function V6Page() {
  const router = useRouter();
  const [started, setStarted] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [results, setResults] = useState<ChallengeResult[]>([]);
  const [showingRoundIntro, setShowingRoundIntro] = useState(true);
  const [answered, setAnswered] = useState(false);

  const challenge = v4challenges[currentIndex];
  const total = v4challenges.length;
  const currentRound = V4_ROUND_CONFIG.find((r) => r.ids.includes(challenge.id));
  const isFirstOfRound = currentRound ? currentRound.ids[0] === challenge.id : false;

  useEffect(() => {
    if (!started) return;
    if (isFirstOfRound) {
      setShowingRoundIntro(true);
      const timer = setTimeout(() => setShowingRoundIntro(false), 1200);
      return () => clearTimeout(timer);
    } else {
      setShowingRoundIntro(false);
    }
  }, [currentIndex, isFirstOfRound, started]);

  const handleAnswer = useCallback(
    (correct: boolean) => {
      setAnswered(true);
      setResults((prev) => [...prev, { challengeId: challenge.id, earned: correct ? 1 : 0, possible: 1, dimension: challenge.dimension }]);
    },
    [challenge]
  );

  const handleNext = useCallback(() => {
    if (currentIndex < total - 1) {
      setCurrentIndex((i) => i + 1);
      setAnswered(false);
    } else {
      const finalResult = calculateV2Results(results);
      const encoded = encodeResult(finalResult);
      router.push(`/test/results?${encoded}`);
    }
  }, [currentIndex, total, results, router]);

  if (!started) return <HomeScreen onStart={() => setStarted(true)} />;

  // Round intro
  if (showingRoundIntro && currentRound) {
    return (
      <div className="flex min-h-dvh items-center justify-center px-4">
        <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
          className="flex flex-col items-center gap-3 text-center">
          <div className="text-4xl">{currentRound.icon}</div>
          <h2
            className="text-xl sm:text-2xl"
            style={{ fontFamily: "var(--font-v5-serif), ui-serif, Georgia, serif", color: "var(--v5-text)" }}
          >
            {currentRound.name}
          </h2>
          <p style={{ color: "var(--v5-text-secondary)", fontSize: "14px" }}>{currentRound.tagline}</p>
        </motion.div>
      </div>
    );
  }

  const roundIndex = V4_ROUND_CONFIG.findIndex((r) => r.ids.includes(challenge.id));
  const posInRound = currentRound ? currentRound.ids.indexOf(challenge.id) : 0;
  const roundSize = currentRound ? currentRound.ids.length : 1;

  return (
    <div className="flex min-h-dvh flex-col items-center px-4 py-6 sm:py-8">
      {/* Top bar */}
      <div className="w-full max-w-lg mb-6">
        <div className="flex items-center justify-between mb-3">
          <span className="flex items-center gap-2" style={{ fontSize: "12px", color: "var(--v5-text-secondary)" }}>
            <span className="text-base">{currentRound?.icon}</span>
            <span>{currentRound?.name}</span>
          </span>
          <div className="flex gap-1.5">
            {Array.from({ length: roundSize }).map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 rounded-full transition-colors"
                style={{ background: i <= posInRound ? "var(--v5-accent)" : "var(--v5-border)" }} />
            ))}
          </div>
        </div>
        <div className="flex gap-1 w-full">
          {V4_ROUND_CONFIG.map((_, i) => (
            <div key={i} className="flex-1 h-1 rounded-full transition-colors"
              style={{
                background: i < roundIndex ? "var(--v5-accent)" : i === roundIndex ? "rgba(217,119,87,0.4)" : "var(--v5-border-subtle)",
              }} />
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div key={challenge.id}
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.2 }} className="w-full max-w-lg">
          {challenge.type === "truth_or_myth" && <TruthOrMythCard challenge={challenge} onAnswer={handleAnswer} />}
          {challenge.type === "this_or_that" && <ThisOrThatCard challenge={challenge} onAnswer={handleAnswer} />}
          {challenge.type === "quick_pick" && <QuickPickCard challenge={challenge} onAnswer={handleAnswer} />}
          {challenge.type === "speed_pick" && <SpeedPickCard challenge={challenge} onAnswer={handleAnswer} />}
          {challenge.type === "odd_one_out" && <OddOneOutCard challenge={challenge} onAnswer={handleAnswer} />}
        </motion.div>
      </AnimatePresence>

      {answered && (
        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="mt-6">
          <button onClick={() => { track(currentIndex < total - 1 ? "next_question" : "see_results", { questionIndex: currentIndex }); handleNext(); }}
            className="inline-flex items-center gap-2 rounded-xl px-8 py-3 text-sm font-semibold transition-all active:scale-[0.97]"
            style={{ background: "var(--v5-accent)", color: "#FFFFFF" }}>
            {currentIndex < total - 1 ? "Next" : "See Results"}
            <span style={{ opacity: 0.6 }}>&rarr;</span>
          </button>
        </motion.div>
      )}

    </div>
  );
}

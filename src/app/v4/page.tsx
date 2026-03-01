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

const LINKEDIN_URL = "https://www.linkedin.com/in/krishnaa-goyal/";

// ────────────────────────────────────────────────────────────
// HOMESCREEN (V2 style with V2 icons, round list is NOT clickable)
// ────────────────────────────────────────────────────────────
function HomeScreen({ onStart }: { onStart: () => void }) {
  return (
    <div className="flex min-h-dvh flex-col items-center justify-center px-5">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center text-center gap-6 max-w-sm w-full"
      >
        <div className="text-5xl">🧠</div>

        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-foreground leading-tight">
            How well do you
          </h1>
          <h1 className="text-2xl sm:text-3xl font-bold text-accent leading-tight">
            know Claude Code?
          </h1>
        </div>

        <p className="text-muted text-sm leading-relaxed">
          6 rounds. 15 challenges. No coding required.
          <br />
          Just you vs. Claude Code trivia.
        </p>

        {/* Round preview — NOT buttons, just info rows */}
        <div className="w-full space-y-0 rounded-xl overflow-hidden border border-border/50">
          {V4_ROUND_CONFIG.map((round, i) => (
            <div
              key={round.name}
              className={`flex items-center gap-3 px-4 py-2.5 ${
                i > 0 ? "border-t border-border/30" : ""
              }`}
            >
              <span className="text-base w-6 text-center">{round.icon}</span>
              <span className="text-foreground text-sm">{round.name}</span>
              <span className="ml-auto text-muted/50 text-[11px]">{round.tagline}</span>
            </div>
          ))}
        </div>

        <button
          onClick={onStart}
          className="mt-1 w-full py-4 rounded-xl bg-accent text-background font-bold text-base transition-all hover:bg-accent-dim active:scale-[0.98]"
        >
          Let&apos;s Go
        </button>

        <p className="text-[10px] text-muted/40 leading-relaxed">
          ~3 min · no signup · shareable results
          <br />
          Not affiliated with Anthropic. Just for fun.
        </p>
      </motion.div>

      <footer className="fixed bottom-4 text-[11px] text-muted/40">
        made by{" "}
        <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="text-muted/60 hover:text-accent transition-colors">
          Krishna Goyal
        </a>
      </footer>
    </div>
  );
}

// ────────────────────────────────────────────────────────────
// FEEDBACK BOX (shared)
// ────────────────────────────────────────────────────────────
function FeedbackBox({ show, correct, text }: { show: boolean; correct: boolean | null; text: string }) {
  if (!show) return null;
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      className={`w-full rounded-xl px-4 py-3.5 text-sm leading-relaxed ${
        correct
          ? "bg-correct/8 border border-correct/20 text-correct"
          : "bg-wrong/8 border border-wrong/20 text-wrong"
      }`}
    >
      <span className="font-bold">{correct ? "Correct" : "Not quite"}</span>
      <span className="text-foreground/60"> — {text}</span>
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

  return (
    <div className="flex flex-col items-center gap-5 w-full">
      <div className="bg-surface/60 border border-border/50 rounded-2xl px-6 py-8 w-full text-center">
        <p className="text-foreground text-base sm:text-lg font-medium leading-relaxed">
          &ldquo;{challenge.statement}&rdquo;
        </p>
      </div>
      <div className="flex gap-3 w-full">
        <button onClick={() => handlePick(true)} disabled={answered !== null}
          className={`flex-1 py-4 rounded-xl text-base font-bold transition-all active:scale-[0.97] ${
            answered === null
              ? "bg-correct/10 border border-correct/30 text-correct hover:bg-correct/20"
              : answered === true
                ? isCorrect ? "bg-correct/20 border border-correct text-correct" : "bg-wrong/20 border border-wrong text-wrong"
                : "opacity-25 border border-border text-muted"
          }`}>
          Truth
        </button>
        <button onClick={() => handlePick(false)} disabled={answered !== null}
          className={`flex-1 py-4 rounded-xl text-base font-bold transition-all active:scale-[0.97] ${
            answered === null
              ? "bg-wrong/10 border border-wrong/30 text-wrong hover:bg-wrong/20"
              : answered === false
                ? isCorrect ? "bg-correct/20 border border-correct text-correct" : "bg-wrong/20 border border-wrong text-wrong"
                : "opacity-25 border border-border text-muted"
          }`}>
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

  const getStyle = (option: "A" | "B") => {
    if (picked === null) return "border-border/50 hover:border-accent/50 hover:bg-surface-light cursor-pointer";
    if (option === challenge.correct) return "border-correct bg-correct/10";
    if (option === picked) return "border-wrong bg-wrong/10";
    return "border-border/30 opacity-30";
  };

  return (
    <div className="flex flex-col items-center gap-5 w-full">
      <div className="bg-surface/60 border border-border/50 rounded-2xl px-5 py-5 w-full text-center">
        <p className="text-foreground text-sm sm:text-base leading-relaxed">{challenge.scenario}</p>
      </div>
      <div className="flex gap-3 w-full">
        <button onClick={() => handlePick("A")} disabled={picked !== null}
          className={`flex-1 py-5 px-3 rounded-xl border transition-all active:scale-[0.97] ${getStyle("A")}`}>
          <span className="text-sm sm:text-base font-medium text-foreground">{challenge.optionA}</span>
        </button>
        <div className="flex items-center px-1">
          <span className="text-muted/30 text-[10px] font-bold uppercase">or</span>
        </div>
        <button onClick={() => handlePick("B")} disabled={picked !== null}
          className={`flex-1 py-5 px-3 rounded-xl border transition-all active:scale-[0.97] ${getStyle("B")}`}>
          <span className="text-sm sm:text-base font-medium text-foreground">{challenge.optionB}</span>
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

  return (
    <div className="flex flex-col items-center gap-5 w-full">
      <div className="bg-surface/60 border border-border/50 rounded-2xl px-5 py-5 w-full text-center">
        <p className="text-foreground text-sm sm:text-base leading-relaxed">{challenge.scenario}</p>
      </div>
      <div className="flex flex-col gap-2.5 w-full">
        {challenge.options.map((opt: string) => {
          const isThis = picked === opt;
          const isAnswer = opt === challenge.blank;
          let style = "border-border/50 hover:border-accent/50 hover:bg-surface-light";
          if (picked !== null) {
            if (isAnswer) style = "border-correct bg-correct/10 text-correct";
            else if (isThis) style = "border-wrong bg-wrong/10 text-wrong";
            else style = "border-border/30 opacity-30";
          }
          return (
            <button key={opt} onClick={() => handlePick(opt)} disabled={picked !== null}
              className={`w-full px-5 py-4 rounded-xl border text-left text-sm font-medium transition-all active:scale-[0.98] ${style}`}>
              {opt}
            </button>
          );
        })}
      </div>
      <FeedbackBox show={picked !== null} correct={isCorrect} text={challenge.explanation} />
    </div>
  );
}

// ────────────────────────────────────────────────────────────
// SPEED PICK (fixed: Lock In button is white, not accent)
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

  const getItemStyle = (item: string) => {
    const isSel = selected.has(item);
    const isRight = challenge.correctItems.includes(item);
    if (!done) return isSel ? "border-accent bg-accent/15 text-accent" : "border-border/50 hover:border-muted text-foreground";
    if (isRight && isSel) return "border-correct bg-correct/15 text-correct";
    if (isRight && !isSel) return "border-correct/30 bg-correct/5 text-correct/50";
    if (!isRight && isSel) return "border-wrong bg-wrong/15 text-wrong";
    return "border-border/20 opacity-20";
  };

  return (
    <div className="flex flex-col items-center gap-5 w-full">
      <div className="w-full flex items-center gap-3">
        <div className="flex-1 h-1.5 bg-surface rounded-full overflow-hidden">
          <motion.div className={`h-full rounded-full ${timeLeft <= 3 ? "bg-wrong" : "bg-accent"}`}
            initial={{ width: "100%" }} animate={{ width: `${(timeLeft / challenge.timeLimit) * 100}%` }}
            transition={{ duration: 0.3 }} />
        </div>
        <span className={`font-mono text-xs font-bold w-5 text-right ${timeLeft <= 3 ? "text-wrong" : "text-accent"}`}>{timeLeft}</span>
      </div>
      <p className="text-sm text-muted text-center">{challenge.prompt}</p>
      <div className="flex flex-wrap gap-2.5 justify-center w-full">
        {allItems.current.map((item: string) => (
          <button key={item} onClick={() => toggleItem(item)} disabled={done}
            className={`px-4 py-3 rounded-xl border text-sm font-medium transition-all active:scale-95 ${getItemStyle(item)}`}>
            {item}
          </button>
        ))}
      </div>
      {!done && (
        <button onClick={finishRound}
          className="mt-1 px-8 py-2.5 rounded-xl bg-foreground text-background text-sm font-bold hover:opacity-80 transition-all active:scale-95">
          Lock In
        </button>
      )}
      {done && (
        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
          className="w-full rounded-xl px-4 py-3 text-sm leading-relaxed bg-surface/60 border border-border/50">
          <span className="text-foreground/60">{challenge.explanation}</span>
        </motion.div>
      )}
    </div>
  );
}

// ────────────────────────────────────────────────────────────
// ODD ONE OUT (tap the one that doesn't belong)
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

  const getStyle = (item: string) => {
    if (picked === null) return "border-border/50 hover:border-accent/50 hover:bg-surface-light";
    if (item === challenge.oddItem) return "border-correct bg-correct/10 text-correct";
    if (item === picked) return "border-wrong bg-wrong/10 text-wrong";
    return "border-border/30 opacity-30";
  };

  return (
    <div className="flex flex-col items-center gap-5 w-full">
      <div className="bg-surface/60 border border-border/50 rounded-2xl px-5 py-5 w-full text-center">
        <p className="text-foreground text-sm sm:text-base leading-relaxed">{challenge.prompt}</p>
      </div>
      <div className="grid grid-cols-2 gap-3 w-full">
        {shuffled.current.map((item: string) => (
          <button key={item} onClick={() => handlePick(item)} disabled={picked !== null}
            className={`py-5 px-4 rounded-xl border text-sm font-medium text-center transition-all active:scale-[0.97] ${getStyle(item)}`}>
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
export default function V4Page() {
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
      router.push(`/v4/results?${encoded}`);
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
          <h2 className="text-xl sm:text-2xl font-bold text-foreground">{currentRound.name}</h2>
          <p className="text-muted text-sm">{currentRound.tagline}</p>
        </motion.div>
      </div>
    );
  }

  // Find round index for dot indicator
  const roundIndex = V4_ROUND_CONFIG.findIndex((r) => r.ids.includes(challenge.id));
  const posInRound = currentRound ? currentRound.ids.indexOf(challenge.id) : 0;
  const roundSize = currentRound ? currentRound.ids.length : 1;

  return (
    <div className="flex min-h-dvh flex-col items-center px-4 py-6 sm:py-8">
      {/* Top bar: round info + dots (NO "X of 15" counter) */}
      <div className="w-full max-w-lg mb-6">
        <div className="flex items-center justify-between mb-3">
          <span className="flex items-center gap-2 text-[11px] text-muted">
            <span className="text-base">{currentRound?.icon}</span>
            <span>{currentRound?.name}</span>
          </span>
          {/* Dot indicators for current round only */}
          <div className="flex gap-1.5">
            {Array.from({ length: roundSize }).map((_, i) => (
              <div key={i} className={`w-1.5 h-1.5 rounded-full transition-colors ${
                i <= posInRound ? "bg-accent" : "bg-border/40"
              }`} />
            ))}
          </div>
        </div>
        {/* Round progress dots (which round out of 6) */}
        <div className="flex gap-1 w-full">
          {V4_ROUND_CONFIG.map((r, i) => (
            <div key={i} className={`flex-1 h-1 rounded-full transition-colors ${
              i < roundIndex ? "bg-accent" : i === roundIndex ? "bg-accent/50" : "bg-border/20"
            }`} />
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
          <button onClick={handleNext}
            className="inline-flex items-center gap-2 rounded-xl bg-accent px-8 py-3 text-sm font-bold text-background transition-all hover:bg-accent-dim active:scale-[0.97]">
            {currentIndex < total - 1 ? "Next" : "See Results"}
            <span className="text-background/60">&rarr;</span>
          </button>
        </motion.div>
      )}

      <footer className="fixed bottom-4 text-[11px] text-muted/40">
        made by{" "}
        <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="text-muted/60 hover:text-accent transition-colors">
          Krishna Goyal
        </a>
      </footer>
    </div>
  );
}

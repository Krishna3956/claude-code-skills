"use client";

import { useMemo, useState } from "react";
import {
  Loader2,
  Globe,
  Sparkles,
  CheckCircle2,
  CircleDashed,
  ExternalLink,
} from "lucide-react";
import { track } from "@/lib/analytics";
import type { QuizBuilderDraft } from "@/lib/quiz-builder";

type Stage =
  | "idle"
  | "crawling"
  | "extracting"
  | "generating"
  | "polishing"
  | "done"
  | "error";

const STAGE_ORDER: Stage[] = ["crawling", "extracting", "generating", "polishing"];
const STAGE_LABEL: Record<Stage, string> = {
  idle: "",
  crawling: "Crawling website",
  extracting: "Extracting product facts",
  generating: "Generating power-user questions",
  polishing: "Applying quality rules",
  done: "Quiz ready",
  error: "Generation failed",
};

export default function HomepageV2Builder() {
  const [url, setUrl] = useState("");
  const [stage, setStage] = useState<Stage>("idle");
  const [error, setError] = useState("");
  const [draft, setDraft] = useState<QuizBuilderDraft | null>(null);
  const [previewNonce, setPreviewNonce] = useState<number | null>(null);

  const isLoading = stage !== "idle" && stage !== "done" && stage !== "error";
  const hasBuilder = stage !== "idle";

  const stageItems = useMemo(() => {
    const activeIndex = STAGE_ORDER.indexOf(stage);
    return STAGE_ORDER.map((s, i) => ({
      key: s,
      label: STAGE_LABEL[s],
      done: stage === "done" || i < activeIndex,
      active: s === stage,
    }));
  }, [stage]);

  const runGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!url.trim() || isLoading) return;

    setError("");
    setDraft(null);

    setStage("crawling");
    const t1 = setTimeout(() => setStage("extracting"), 900);
    const t2 = setTimeout(() => setStage("generating"), 1800);
    const t3 = setTimeout(() => setStage("polishing"), 2800);

    try {
      const res = await fetch("/api/quiz-builder/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: url.trim() }),
      });

      const data = (await res.json()) as {
        success?: boolean;
        error?: string;
        draft?: QuizBuilderDraft;
      };

      if (!res.ok || !data.success || !data.draft) {
        throw new Error(data.error || "Could not generate quiz draft");
      }

      setDraft(data.draft);
      setPreviewNonce(Date.now());
      setStage("done");
      track("quiz_builder_generated", { source: "homepage_v2" });
    } catch (err) {
      setStage("error");
      setError(err instanceof Error ? err.message : "Could not generate quiz draft");
      track("quiz_builder_failed", { source: "homepage_v2" });
    } finally {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    }
  };

  const previewUrl = previewNonce
    ? `/play/generated-preview?embed=true&t=${previewNonce}`
    : "/play/generated-preview?embed=true";

  return (
    <section className="relative overflow-hidden" style={{ background: "var(--m-bg)" }}>
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(99, 91, 255, 0.10), transparent)",
        }}
      />

      <div className="relative mx-auto max-w-[1240px] px-4 pb-12 pt-10 sm:px-6 sm:pb-16 sm:pt-14 md:pb-20 md:pt-20">
        <div
          className={`grid gap-8 transition-all duration-500 ${
            hasBuilder ? "lg:grid-cols-[1.1fr_0.9fr]" : "lg:grid-cols-1"
          }`}
        >
          <div
            className={`transition-all duration-500 ${
              hasBuilder ? "lg:pr-6" : "mx-auto max-w-[760px] text-center"
            }`}
          >
            <p
              className="mb-3 text-xs font-semibold uppercase tracking-widest"
              style={{ color: "var(--m-accent)" }}
            >
              New Builder · Draft mode
            </p>
            <h1
              className="mb-4 text-[2rem] font-bold leading-[1.1] tracking-tight sm:text-4xl md:text-5xl"
              style={{ color: "var(--m-text)" }}
            >
              We turn your product docs into a quiz
            </h1>
            <p
              className={`mb-6 text-sm leading-relaxed md:text-base ${
                hasBuilder ? "max-w-[560px]" : "mx-auto max-w-[620px]"
              }`}
              style={{ color: "var(--m-text-secondary)" }}
            >
              Paste your company website. We crawl docs and product pages, extract factual behavior, and generate a strict 6-question power-user quiz.
            </p>

            <form
              onSubmit={runGenerate}
              className={`flex gap-3 ${
                hasBuilder ? "max-w-[620px]" : "mx-auto max-w-[700px]"
              } flex-col sm:flex-row`}
            >
              <div className="relative flex-1">
                <Globe
                  className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2"
                  style={{ color: "var(--m-text-tertiary)" }}
                />
                <input
                  type="text"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  placeholder="https://company.com"
                  className="h-12 w-full rounded-lg border pl-10 pr-4 text-sm outline-none transition-colors focus:ring-2 sm:h-14"
                  style={{
                    borderColor: "var(--m-border)",
                    background: "var(--m-bg)",
                    color: "var(--m-text)",
                    // @ts-expect-error CSS var
                    "--tw-ring-color": "var(--m-accent)",
                  }}
                />
              </div>
              <button
                type="submit"
                disabled={isLoading || !url.trim()}
                className="h-12 rounded-lg px-6 text-sm font-semibold text-white shadow-md transition-all hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-60 sm:h-14"
                style={{ background: "var(--m-accent)" }}
              >
                {isLoading ? "Generating..." : "Generate Quiz"}
              </button>
            </form>

            {error ? (
              <p className="mt-3 text-sm" style={{ color: "#DC2626" }}>
                {error}
              </p>
            ) : null}
          </div>

          {hasBuilder ? (
            <div
              className="rounded-2xl border p-4 sm:p-5"
              style={{
                borderColor: "var(--m-border)",
                background: "var(--m-bg-elevated, #fff)",
              }}
            >
              <div className="mb-4 flex items-center gap-2">
                <Sparkles className="h-4 w-4" style={{ color: "var(--m-accent)" }} />
                <p className="text-sm font-semibold" style={{ color: "var(--m-text)" }}>
                  Quiz Builder
                </p>
              </div>

              {stage === "error" ? (
                <div
                  className="rounded-xl border p-4"
                  style={{ borderColor: "#FECACA", background: "#FEF2F2" }}
                >
                  <p className="text-sm font-semibold text-red-700">Couldn&apos;t generate quiz</p>
                  <p className="mt-1 text-xs text-red-600">
                    Try another URL or retry in a few seconds.
                  </p>
                </div>
              ) : null}

              {stage !== "done" ? (
                <div className="space-y-3">
                  {stageItems.map((item) => (
                    <div
                      key={item.key}
                      className="flex items-center gap-2 rounded-lg border px-3 py-2"
                      style={{
                        borderColor: "var(--m-border)",
                        background: item.active ? "var(--m-accent-light)" : "var(--m-bg)",
                      }}
                    >
                      {item.done ? (
                        <CheckCircle2 className="h-4 w-4" style={{ color: "var(--m-accent)" }} />
                      ) : item.active ? (
                        <Loader2 className="h-4 w-4 animate-spin" style={{ color: "var(--m-accent)" }} />
                      ) : (
                        <CircleDashed
                          className="h-4 w-4"
                          style={{ color: "var(--m-text-tertiary)" }}
                        />
                      )}
                      <span
                        className="text-sm"
                        style={{
                          color: item.active ? "var(--m-text)" : "var(--m-text-secondary)",
                        }}
                      >
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
              ) : null}

              {stage === "done" && draft ? (
                <div className="space-y-3">
                  <div
                    className="rounded-xl border p-3"
                    style={{ borderColor: "var(--m-border)", background: "var(--m-bg)" }}
                  >
                    <p className="text-sm font-semibold" style={{ color: "var(--m-text)" }}>
                      {draft.toolName}
                    </p>
                    <p className="text-xs" style={{ color: "var(--m-text-secondary)" }}>
                      Live preview using your platform quiz runtime
                    </p>
                  </div>

                  <div
                    className="overflow-hidden rounded-xl border"
                    style={{ borderColor: "var(--m-border)", background: "var(--m-bg)" }}
                  >
                    <iframe
                      title="Generated quiz preview"
                      src={previewUrl}
                      className="h-[560px] w-full border-0"
                    />
                  </div>

                  <div className="flex flex-col gap-2 sm:flex-row">
                    <a
                      href="/play/generated-preview"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex h-11 items-center justify-center gap-2 rounded-lg px-4 text-sm font-semibold text-white"
                      style={{ background: "var(--m-accent)" }}
                    >
                      Open Full Screen <ExternalLink className="h-4 w-4" />
                    </a>
                    <button
                      type="button"
                      onClick={() => {
                        setStage("idle");
                        setDraft(null);
                        setError("");
                        setPreviewNonce(null);
                      }}
                      className="h-11 rounded-lg border px-4 text-sm font-semibold"
                      style={{
                        borderColor: "var(--m-border)",
                        color: "var(--m-text-secondary)",
                        background: "var(--m-bg)",
                      }}
                    >
                      Start Over
                    </button>
                  </div>
                </div>
              ) : null}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}

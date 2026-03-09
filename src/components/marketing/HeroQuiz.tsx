"use client";

import {
  useState,
  useEffect,
  useRef,
  useCallback,
  useLayoutEffect,
} from "react";
import Image from "next/image";

const TOOLS = [
  { slug: "airtable", name: "Airtable", logo: "airtable.jpg" },
  { slug: "notion", name: "Notion", logo: "notion.png" },
  { slug: "figma", name: "Figma", logo: "figma.svg" },
  { slug: "github-copilot", name: "Copilot", logo: "github-copilot.jpg" },
  { slug: "replit", name: "Replit", logo: "replit.png" },
  { slug: "lovable", name: "Lovable", logo: "lovable.png" },
] as const;

const AUTO_CYCLE_MS = 3500;
const SLIDE_DURATION_MS = 600;

function getSlideOffset(index: number, selected: number): string {
  if (index === selected) return "translateX(0%)";
  if (index < selected) return "translateX(-100%)";
  return "translateX(100%)";
}

export default function HeroQuiz() {
  const [selected, setSelected] = useState(0);
  const [autoCycling, setAutoCycling] = useState(true);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const toolbarRef = useRef<HTMLDivElement>(null);
  const btnRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [pill, setPill] = useState({ left: 0, width: 0 });

  const measurePill = useCallback(() => {
    const btn = btnRefs.current[selected];
    const bar = toolbarRef.current;
    if (!btn || !bar) return;
    const barRect = bar.getBoundingClientRect();
    const btnRect = btn.getBoundingClientRect();
    setPill({
      left: btnRect.left - barRect.left,
      width: btnRect.width,
    });
  }, [selected]);

  useLayoutEffect(() => {
    measurePill();
  }, [measurePill]);

  useEffect(() => {
    window.addEventListener("resize", measurePill);
    return () => window.removeEventListener("resize", measurePill);
  }, [measurePill]);

  const stopAutoCycle = useCallback(() => {
    setAutoCycling(false);
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  useEffect(() => {
    if (!autoCycling) return;

    timerRef.current = setInterval(() => {
      setSelected((prev) => (prev + 1) % TOOLS.length);
    }, AUTO_CYCLE_MS);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [autoCycling]);

  const handleTabClick = (i: number) => {
    stopAutoCycle();
    setSelected(i);
  };

  return (
    <div
      className="mx-auto overflow-hidden rounded-2xl shadow-2xl md:ml-auto md:mr-0"
      style={{
        boxShadow:
          "0 25px 60px rgba(99, 91, 255, 0.12), 0 10px 30px rgba(0, 0, 0, 0.08)",
        border: "1px solid var(--m-border)",
        maxWidth: 520,
      }}
    >
      {/* Toolbar with sliding pill */}
      <div
        ref={toolbarRef}
        className="relative flex items-center gap-1 overflow-x-auto px-2 py-1.5 sm:gap-1.5 sm:px-3 sm:py-2"
        style={{
          background: "var(--m-bg-secondary)",
          borderBottom: "1px solid var(--m-border)",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        <div
          className="pointer-events-none absolute rounded-lg"
          style={{
            left: pill.left,
            width: pill.width,
            top: 6,
            bottom: 6,
            background: "var(--m-bg)",
            boxShadow:
              "0 1px 3px rgba(0,0,0,0.08), 0 0 0 1px var(--m-border)",
            transition:
              "left 0.5s cubic-bezier(0.4, 0, 0.15, 1), width 0.5s cubic-bezier(0.4, 0, 0.15, 1)",
          }}
        />

        {TOOLS.map((tool, i) => (
          <button
            key={tool.slug}
            ref={(el) => {
              btnRefs.current[i] = el;
            }}
            onClick={() => handleTabClick(i)}
            className="relative z-[1] flex shrink-0 items-center gap-1.5 rounded-lg px-2 py-1.5 text-[11px] font-medium sm:px-2.5"
            style={{
              color:
                i === selected
                  ? "var(--m-accent)"
                  : "var(--m-text-tertiary)",
              transition: "color 0.4s ease",
            }}
          >
            <Image
              src={`/logos/${tool.logo}`}
              alt={tool.name}
              width={"logoWidth" in tool ? (tool as { logoWidth: number }).logoWidth : 14}
              height={14}
              className="rounded-sm"
              style={{ objectFit: "contain" }}
            />
            {"logoOnly" in tool && tool.logoOnly ? null : (
              <span className="hidden sm:inline">{tool.name}</span>
            )}
          </button>
        ))}
      </div>

      {/* Iframe area - horizontal slide */}
      <div
        className="relative overflow-hidden"
        style={{
          height: "min(calc(100vh - 220px), 480px)",
          minHeight: 280,
          background: "#0D1117",
        }}
      >
        {TOOLS.map((tool, i) => (
          <div
            key={tool.slug}
            className="absolute inset-0"
            style={{
              transform: getSlideOffset(i, selected),
              transition: `transform ${SLIDE_DURATION_MS}ms cubic-bezier(0.4, 0, 0.15, 1)`,
              willChange: "transform",
            }}
          >
            <iframe
              src={`/play/${tool.slug}?embed=true`}
              className="h-full w-full"
              style={{
                border: "none",
                pointerEvents:
                  i === selected && !autoCycling ? "auto" : "none",
              }}
              title={`How well do you know ${tool.name}?`}
              loading={i === 0 ? "eager" : "lazy"}
            />
          </div>
        ))}

        {autoCycling && (
          <div
            className="absolute inset-0 z-10 cursor-pointer"
            onClick={stopAutoCycle}
            onTouchStart={stopAutoCycle}
          />
        )}
      </div>
    </div>
  );
}

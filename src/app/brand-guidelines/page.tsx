"use client";

import { useEffect, useRef } from "react";

const FF = "'Red Hat Display', sans-serif";

function monoSVG(size: number, bgFill: string, textFill: string, hasBg: boolean) {
  const half = size / 2;
  const fs = size * 0.4;
  const yOff = size * 0.04;
  const bg = hasBg ? `<rect width="${size}" height="${size}" fill="${bgFill}"/>` : "";
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${size} ${size}" width="${size}" height="${size}">
  ${bg}
  <rect x="${half}" y="${half}" width="${half * 0.85}" height="${half * 0.85}" rx="0" fill="#FACC15" opacity="0.55"/>
  <text x="${half * 0.5}" y="${half * 0.85 + yOff}" font-family="${FF}" font-weight="800" font-size="${fs}" fill="${textFill}" text-anchor="middle">h</text>
  <text x="${half * 1.42}" y="${half * 0.85 + yOff}" font-family="${FF}" font-weight="800" font-size="${fs}" fill="${textFill}" text-anchor="middle">w</text>
  <text x="${half * 0.5}" y="${half * 1.55 + yOff}" font-family="${FF}" font-weight="800" font-size="${fs}" fill="${textFill}" text-anchor="middle">y</text>
  <text x="${half * 1.42}" y="${half * 1.72 + yOff}" font-family="${FF}" font-weight="800" font-size="${fs}" fill="${textFill}" text-anchor="middle">k</text>
</svg>`;
}

const monoVariants = [
  { name: "Light", bg: "#FFFFFF", text: "#0F172A", hasBg: true, cardBg: "#fff", labelColor: "#0F172A" },
  { name: "Dark", bg: "#0F172A", text: "#F8FAFC", hasBg: true, cardBg: "#0F172A", labelColor: "#F8FAFC" },
  { name: "Black", bg: "#000000", text: "#F8FAFC", hasBg: true, cardBg: "#000", labelColor: "#F8FAFC" },
  { name: "Transparent", bg: "none", text: "#0F172A", hasBg: false, cardBg: "checker", labelColor: "#0F172A" },
  { name: "Dark Transparent", bg: "none", text: "#F8FAFC", hasBg: false, cardBg: "#475569", labelColor: "#F8FAFC" },
];

const lockupVariants = [
  { name: "Light", bg: "#FFFFFF", text: "#0F172A", know: "#E5B800", hasBg: true, cardBg: "#fff", labelColor: "#0F172A" },
  { name: "Dark (Slate)", bg: "#0F172A", text: "#F8FAFC", know: "#FACC15", hasBg: true, cardBg: "#0F172A", labelColor: "#F8FAFC" },
  { name: "Pure Black", bg: "#000000", text: "#F8FAFC", know: "#FACC15", hasBg: true, cardBg: "#000000", labelColor: "#F8FAFC" },
  { name: "Cream", bg: "#FFFBEB", text: "#292524", know: "#D97706", hasBg: true, cardBg: "#FFFBEB", labelColor: "#292524" },
  { name: "Transparent", bg: "none", text: "#0F172A", know: "#E5B800", hasBg: false, cardBg: "checker", labelColor: "#0F172A" },
];

function MonoCard({ v }: { v: (typeof monoVariants)[number] }) {
  const bgStyle =
    v.cardBg === "checker"
      ? { background: "repeating-conic-gradient(#e2e8f0 0% 25%, #fff 0% 50%) 50% / 12px 12px" }
      : { background: v.cardBg };

  return (
    <div style={{ ...bgStyle, borderRadius: 12, padding: 24, boxShadow: "0 1px 3px rgba(0,0,0,0.08)", display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
      <div style={{ minHeight: 100, display: "flex", alignItems: "center", justifyContent: "center" }} dangerouslySetInnerHTML={{ __html: monoSVG(100, v.bg, v.text, v.hasBg) }} />
      <div style={{ fontSize: 12, fontWeight: 700, color: v.labelColor, textAlign: "center" }}>{v.name}</div>
    </div>
  );
}

function LockupRow({ v, idx }: { v: (typeof lockupVariants)[number]; idx: number }) {
  const wmRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          const wm = wmRef.current;
          if (!wm) return;
          const howwell = wm.querySelector<HTMLElement>(".wm-howwell");
          const caret = wm.querySelector<HTMLElement>(".wm-caret");
          const doEl = wm.querySelector<HTMLElement>(".wm-do");
          const you = wm.querySelector<HTMLElement>(".wm-you");
          const know = wm.querySelector<HTMLElement>(".wm-know");
          const qmark = wm.querySelector<HTMLElement>(".wm-qmark");
          if (!howwell || !caret || !doEl || !you || !know || !qmark) return;

          const hwWidth = howwell.getBoundingClientRect().width;
          const gapCenter = hwWidth + 7;
          caret.style.left = gapCenter - caret.getBoundingClientRect().width / 2 + "px";
          doEl.style.left = gapCenter - doEl.getBoundingClientRect().width / 2 + 6 + "px";
          doEl.style.bottom = "30px";
          const youLeft = hwWidth + 14;
          you.style.left = youLeft + "px";
          const knowLeft = youLeft + you.getBoundingClientRect().width;
          know.style.left = knowLeft + "px";
          qmark.style.left = knowLeft + know.getBoundingClientRect().width + 1 + "px";
        });
      });
    }, 300);
    return () => clearTimeout(timer);
  }, [idx]);

  const bgStyle =
    v.cardBg === "checker"
      ? { background: "repeating-conic-gradient(#e2e8f0 0% 25%, #fff 0% 50%) 50% / 12px 12px" }
      : { background: v.cardBg };

  const monoBg = v.hasBg ? v.bg : "#FFFFFF";

  const monoHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52" width="52" height="52">
    ${v.hasBg ? `<rect width="52" height="52" fill="${monoBg}"/>` : ""}
    <rect x="26" y="26" width="22" height="22" rx="0" fill="#FACC15" opacity="0.55"/>
    <text x="15.5" y="23" font-family="${FF}" font-weight="800" font-size="21" fill="${v.text}" text-anchor="middle">h</text>
    <text x="37" y="23" font-family="${FF}" font-weight="800" font-size="21" fill="${v.text}" text-anchor="middle">w</text>
    <text x="15.5" y="40" font-family="${FF}" font-weight="800" font-size="21" fill="${v.text}" text-anchor="middle">y</text>
    <text x="37" y="44.5" font-family="${FF}" font-weight="800" font-size="21" fill="${v.text}" text-anchor="middle">k</text>
  </svg>`;

  return (
    <div style={{ ...bgStyle, borderRadius: 12, padding: "36px 28px 24px", boxShadow: "0 1px 3px rgba(0,0,0,0.08)", marginBottom: 20, display: "flex", alignItems: "flex-end", gap: 16, flexWrap: "wrap" }}>
      <div dangerouslySetInnerHTML={{ __html: monoHTML }} style={{ flexShrink: 0 }} />
      <div
        ref={wmRef}
        style={{ flex: 1, position: "relative", fontFamily: "'Caveat', cursive", fontWeight: 400, height: 56, color: v.text, minWidth: 280 }}
      >
        <span className="wm-howwell" style={{ position: "absolute", bottom: 0, left: 0, lineHeight: 1, fontSize: 32 }}>how well</span>
        <span className="wm-caret" style={{ position: "absolute", bottom: -2, lineHeight: 1, fontSize: 16 }}>^</span>
        <span className="wm-do" style={{ position: "absolute", lineHeight: 1, fontSize: 20, transform: "rotate(-8deg)" }}>do</span>
        <span className="wm-you" style={{ position: "absolute", bottom: 0, lineHeight: 1, fontSize: 32 }}>you </span>
        <span className="wm-know" style={{ position: "absolute", bottom: 0, lineHeight: 1, fontSize: 32, color: v.know, padding: "1px 6px" }}>know</span>
        <span className="wm-qmark" style={{ position: "absolute", bottom: 0, lineHeight: 1, fontSize: 32 }}>?</span>
      </div>
      <div style={{ marginLeft: "auto", color: v.labelColor, alignSelf: "center" }}>
        <div style={{ fontSize: 13, fontWeight: 700, textAlign: "right" }}>{v.name}</div>
      </div>
    </div>
  );
}

function ColorSwatch({ color }: { color: string }) {
  return <span style={{ display: "inline-block", width: 14, height: 14, borderRadius: 3, verticalAlign: "middle", marginRight: 6, border: "1px solid rgba(0,0,0,0.1)", background: color }} />;
}

export default function BrandGuidelinesPage() {
  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400;700&family=Red+Hat+Display:wght@800;900&display=swap');
      `}</style>
      <div style={{ background: "#f0f0f0", fontFamily: "'Red Hat Display', sans-serif", padding: "40px 20px", minHeight: "100vh" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h1 style={{ textAlign: "center", fontSize: 28, color: "#0F172A", marginBottom: 4 }}>HWYK — Brand Asset Kit</h1>
          <p style={{ textAlign: "center", color: "#64748b", fontSize: 13, marginBottom: 40 }}>All approved brand assets in one place</p>

          {/* MONOGRAM */}
          <h2 style={{ fontSize: 18, color: "#0F172A", margin: "48px 0 16px", paddingBottom: 8, borderBottom: "2px solid #e2e8f0" }}>1. Monogram (Icon)</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 20, marginBottom: 24 }}>
            {monoVariants.map((v) => (
              <MonoCard key={v.name} v={v} />
            ))}
          </div>

          {/* LOCKUP */}
          <h2 style={{ fontSize: 18, color: "#0F172A", margin: "48px 0 16px", paddingBottom: 8, borderBottom: "2px solid #e2e8f0" }}>2. Full Brand Lockup</h2>
          {lockupVariants.map((v, i) => (
            <LockupRow key={v.name} v={v} idx={i} />
          ))}

          {/* SPECS */}
          <h2 style={{ fontSize: 18, color: "#0F172A", margin: "48px 0 16px", paddingBottom: 8, borderBottom: "2px solid #e2e8f0" }}>3. Brand Specs</h2>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13, marginTop: 16, background: "#fff", borderRadius: 8, overflow: "hidden", boxShadow: "0 1px 3px rgba(0,0,0,0.08)" }}>
            <thead>
              <tr><th colSpan={2} style={{ background: "#f8fafc", textAlign: "left", padding: "10px 16px", fontWeight: 700, color: "#0F172A", borderBottom: "1px solid #e2e8f0" }}>Typography</th></tr>
            </thead>
            <tbody>
              <tr><td style={{ padding: "8px 16px", borderBottom: "1px solid #f1f5f9", color: "#334155" }}>Monogram font</td><td style={{ padding: "8px 16px", borderBottom: "1px solid #f1f5f9", color: "#334155" }}>Red Hat Display, weight 800</td></tr>
              <tr><td style={{ padding: "8px 16px", borderBottom: "1px solid #f1f5f9", color: "#334155" }}>Wordmark font</td><td style={{ padding: "8px 16px", borderBottom: "1px solid #f1f5f9", color: "#334155" }}>Caveat, weight 400</td></tr>
              <tr><td style={{ padding: "8px 16px", borderBottom: "1px solid #f1f5f9", color: "#334155" }}>Wordmark size</td><td style={{ padding: "8px 16px", borderBottom: "1px solid #f1f5f9", color: "#334155" }}>32px (do: 20px, caret: 16px)</td></tr>
              <tr><td style={{ padding: "8px 16px", borderBottom: "1px solid #f1f5f9", color: "#334155" }}>Monogram icon</td><td style={{ padding: "8px 16px", borderBottom: "1px solid #f1f5f9", color: "#334155" }}>52×52px</td></tr>
            </tbody>
            <thead>
              <tr><th colSpan={2} style={{ background: "#f8fafc", textAlign: "left", padding: "10px 16px", fontWeight: 700, color: "#0F172A", borderBottom: "1px solid #e2e8f0" }}>Colors</th></tr>
            </thead>
            <tbody>
              <tr><td style={{ padding: "8px 16px", borderBottom: "1px solid #f1f5f9", color: "#334155" }}>Primary text (light)</td><td style={{ padding: "8px 16px", borderBottom: "1px solid #f1f5f9", color: "#334155" }}><ColorSwatch color="#0F172A" />#0F172A</td></tr>
              <tr><td style={{ padding: "8px 16px", borderBottom: "1px solid #f1f5f9", color: "#334155" }}>Primary text (dark)</td><td style={{ padding: "8px 16px", borderBottom: "1px solid #f1f5f9", color: "#334155" }}><ColorSwatch color="#F8FAFC" />#F8FAFC</td></tr>
              <tr><td style={{ padding: "8px 16px", borderBottom: "1px solid #f1f5f9", color: "#334155" }}>Brand yellow (k-box)</td><td style={{ padding: "8px 16px", borderBottom: "1px solid #f1f5f9", color: "#334155" }}><ColorSwatch color="#FACC15" />#FACC15 @ 55%</td></tr>
              <tr><td style={{ padding: "8px 16px", borderBottom: "1px solid #f1f5f9", color: "#334155" }}>Yellow &quot;know&quot; (light)</td><td style={{ padding: "8px 16px", borderBottom: "1px solid #f1f5f9", color: "#334155" }}><ColorSwatch color="#E5B800" />#E5B800</td></tr>
              <tr><td style={{ padding: "8px 16px", borderBottom: "1px solid #f1f5f9", color: "#334155" }}>Yellow &quot;know&quot; (dark)</td><td style={{ padding: "8px 16px", borderBottom: "1px solid #f1f5f9", color: "#334155" }}><ColorSwatch color="#FACC15" />#FACC15</td></tr>
              <tr><td style={{ padding: "8px 16px", borderBottom: "1px solid #f1f5f9", color: "#334155" }}>Cream bg</td><td style={{ padding: "8px 16px", borderBottom: "1px solid #f1f5f9", color: "#334155" }}><ColorSwatch color="#FFFBEB" />#FFFBEB</td></tr>
              <tr><td style={{ padding: "8px 16px", borderBottom: "1px solid #f1f5f9", color: "#334155" }}>Amber &quot;know&quot; (cream)</td><td style={{ padding: "8px 16px", borderBottom: "1px solid #f1f5f9", color: "#334155" }}><ColorSwatch color="#D97706" />#D97706</td></tr>
            </tbody>
            <thead>
              <tr><th colSpan={2} style={{ background: "#f8fafc", textAlign: "left", padding: "10px 16px", fontWeight: 700, color: "#0F172A", borderBottom: "1px solid #e2e8f0" }}>Elements</th></tr>
            </thead>
            <tbody>
              <tr><td style={{ padding: "8px 16px", borderBottom: "1px solid #f1f5f9", color: "#334155" }}>Caret</td><td style={{ padding: "8px 16px", borderBottom: "1px solid #f1f5f9", color: "#334155" }}>^ (Caveat)</td></tr>
              <tr><td style={{ padding: "8px 16px", borderBottom: "1px solid #f1f5f9", color: "#334155" }}>&quot;do&quot; rotation</td><td style={{ padding: "8px 16px", borderBottom: "1px solid #f1f5f9", color: "#334155" }}>-8°</td></tr>
              <tr><td style={{ padding: "8px 16px", color: "#334155" }}>&quot;do&quot; offset</td><td style={{ padding: "8px 16px", color: "#334155" }}>+6px right, 30px above baseline</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

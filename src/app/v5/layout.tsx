import { Instrument_Serif, DM_Sans } from "next/font/google";

const serif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-v5-serif",
  display: "swap",
});

const sans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-v5-sans",
  display: "swap",
});

export default function V5Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${serif.variable} ${sans.variable} v5-theme`}>
      <style>{`
        .v5-theme {
          --v5-bg: #1C1917;
          --v5-bg-elevated: #292524;
          --v5-bg-surface: #292524;
          --v5-bg-surface-light: #3a3532;
          --v5-accent: #D97757;
          --v5-accent-dim: #C4643F;
          --v5-accent-subtle: rgba(217,119,87,0.12);
          --v5-text: #F5F0EB;
          --v5-text-secondary: #A8A29E;
          --v5-text-tertiary: #78716C;
          --v5-border: #3a3532;
          --v5-border-subtle: #292524;
          --v5-correct: #86EFAC;
          --v5-wrong: #FCA5A5;
          background: var(--v5-bg);
          color: var(--v5-text);
          min-height: 100dvh;
          font-family: var(--font-v5-sans), ui-sans-serif, system-ui, sans-serif;
        }
      `}</style>
      {children}
    </div>
  );
}

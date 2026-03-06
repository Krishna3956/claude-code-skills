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

export default function V6Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${serif.variable} ${sans.variable} v5-theme`}>
      <style>{`
        .v5-theme {
          --v5-bg: #FAFAF8;
          --v5-bg-elevated: #FFFFFF;
          --v5-bg-surface: #FFFFFF;
          --v5-bg-surface-light: #F5F3EF;
          --v5-accent: #D97757;
          --v5-accent-dim: #C4643F;
          --v5-accent-subtle: rgba(217,119,87,0.08);
          --v5-text: #1C1917;
          --v5-text-secondary: #57534E;
          --v5-text-tertiary: #A8A29E;
          --v5-border: #E7E5E0;
          --v5-border-subtle: #F0EDE8;
          --v5-correct: #16A34A;
          --v5-wrong: #DC2626;
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

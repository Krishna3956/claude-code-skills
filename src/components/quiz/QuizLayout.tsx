import {
  Instrument_Serif,
  DM_Sans,
  Inter,
  Space_Grotesk,
  Plus_Jakarta_Sans,
  IBM_Plex_Sans,
  Outfit,
  Open_Sans,
  Poppins,
  Nunito_Sans,
  Playfair_Display,
  Lora,
  Source_Serif_4,
} from "next/font/google";
import { Geist } from "next/font/google";
import type { QuizConfig, QuizFont, QuizSerifFont } from "./types";

const instrumentSerif = Instrument_Serif({ weight: "400", subsets: ["latin"], variable: "--font-v5-serif", display: "swap" });
const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-v5-sans", display: "swap" });
const inter = Inter({ subsets: ["latin"], variable: "--font-v5-sans", display: "swap" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-v5-sans", display: "swap" });
const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-v5-sans", display: "swap" });
const ibmPlexSans = IBM_Plex_Sans({ weight: ["300", "400", "500", "600", "700"], subsets: ["latin"], variable: "--font-v5-sans", display: "swap" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-v5-sans", display: "swap" });
const geist = Geist({ subsets: ["latin"], variable: "--font-v5-sans", display: "swap" });
const openSans = Open_Sans({ subsets: ["latin"], variable: "--font-v5-sans", display: "swap" });
const poppins = Poppins({ weight: ["300", "400", "500", "600", "700"], subsets: ["latin"], variable: "--font-v5-sans", display: "swap" });
const nunitoSans = Nunito_Sans({ subsets: ["latin"], variable: "--font-v5-sans", display: "swap" });

const playfairDisplay = Playfair_Display({ subsets: ["latin"], variable: "--font-v5-serif", display: "swap" });
const lora = Lora({ subsets: ["latin"], variable: "--font-v5-serif", display: "swap" });
const sourceSerif4 = Source_Serif_4({ subsets: ["latin"], variable: "--font-v5-serif", display: "swap" });

const sansMap: Record<QuizFont, { variable: string }> = {
  "dm-sans": dmSans,
  "inter": inter,
  "space-grotesk": spaceGrotesk,
  "plus-jakarta-sans": plusJakartaSans,
  "ibm-plex-sans": ibmPlexSans,
  "outfit": outfit,
  "geist": geist,
  "open-sans": openSans,
  "poppins": poppins,
  "nunito-sans": nunitoSans,
};

const serifMap: Record<QuizSerifFont, { variable: string }> = {
  "instrument-serif": instrumentSerif,
  "playfair-display": playfairDisplay,
  "lora": lora,
  "source-serif-4": sourceSerif4,
};

export default function QuizLayout({ config, children }: { config: QuizConfig; children: React.ReactNode }) {
  const sans = sansMap[config.sansFont ?? "dm-sans"];
  const serif = serifMap[config.serifFont ?? "instrument-serif"];

  return (
    <div className={`${serif.variable} ${sans.variable} v5-theme`}>
      <style>{`
        .v5-theme {
          --v5-bg: ${config.bgColor};
          --v5-bg-elevated: ${config.bgElevated};
          --v5-bg-surface: ${config.bgSurface};
          --v5-bg-surface-light: ${config.bgSurfaceLight};
          --v5-accent: ${config.accentColor};
          --v5-accent-dim: ${config.accentColorDim};
          --v5-accent-subtle: ${config.accentColorSubtle};
          --v5-text: ${config.textColor};
          --v5-text-secondary: ${config.textSecondary};
          --v5-text-tertiary: ${config.textTertiary};
          --v5-border: ${config.borderColor};
          --v5-border-subtle: ${config.borderSubtle};
          --v5-cta-text: ${config.ctaTextColor ?? "#FFFFFF"};
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

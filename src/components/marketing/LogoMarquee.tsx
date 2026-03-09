"use client";

import Image from "next/image";

const LOGOS = [
  { name: "ChatGPT", file: "chatgpt.svg" },
  { name: "Figma", file: "figma.svg" },
  { name: "Cursor", file: "cursor.png" },
  { name: "Notion", file: "notion.png" },
  { name: "Vercel", file: "vercel.svg" },
  { name: "Slack", file: "slack.png" },
  { name: "HubSpot", file: "hubspot.png" },
  { name: "Claude Code", file: "claude-ai-icon.webp" },
  { name: "Postman", file: "postman.png" },
  { name: "Linear", file: "linear.jpg" },
  { name: "Docker", file: "docker.svg" },
  { name: "Canva", file: "canva.jpg" },
  { name: "Zapier", file: "zapier.png" },
  { name: "Perplexity", file: "perplexity.png" },
  { name: "Obsidian", file: "obsidian.png" },
  { name: "Windsurf", file: "windsurf.svg" },
  { name: "GitHub Copilot", file: "github-copilot.jpg" },
  { name: "Loom", file: "loom.png" },
  { name: "Airtable", file: "airtable.jpg" },
  { name: "Gemini", file: "gemini.png" },
  { name: "Midjourney", file: "midjourney.jpg" },
  { name: "Replit", file: "replit.png" },
  { name: "Bolt.new", file: "bolt.png" },
  { name: "Lovable", file: "lovable.png" },
  { name: "Emergent", file: "emergent.jpg" },
];

const ROW_1 = LOGOS.slice(0, 13);
const ROW_2 = LOGOS.slice(13);

function LogoItem({ name, file }: { name: string; file: string }) {
  return (
    <div className="flex shrink-0 items-center gap-2 px-5">
      <Image
        src={`/logos/${file}`}
        alt={name}
        width={22}
        height={22}
        className="rounded"
        style={{ objectFit: "contain" }}
      />
      <span
        className="whitespace-nowrap text-sm font-medium"
        style={{ color: "var(--m-text-tertiary)" }}
      >
        {name}
      </span>
    </div>
  );
}

function MarqueeRow({
  logos,
  reverse,
  speed,
}: {
  logos: typeof LOGOS;
  reverse?: boolean;
  speed: number;
}) {
  return (
    <div className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute bottom-0 left-0 top-0 z-10 w-12 sm:w-24"
        style={{ background: "linear-gradient(to right, var(--m-bg), transparent)" }}
      />
      <div
        className="pointer-events-none absolute bottom-0 right-0 top-0 z-10 w-12 sm:w-24"
        style={{ background: "linear-gradient(to left, var(--m-bg), transparent)" }}
      />
      <div
        className="flex"
        style={{
          animation: `${reverse ? "marquee-reverse" : "marquee"} ${speed}s linear infinite`,
          width: "max-content",
          willChange: "transform",
        }}
      >
        {logos.map((logo, i) => (
          <LogoItem key={`a-${i}`} {...logo} />
        ))}
        {logos.map((logo, i) => (
          <LogoItem key={`b-${i}`} {...logo} />
        ))}
      </div>
    </div>
  );
}

export default function LogoMarquee() {
  return (
    <section
      className="pb-12 pt-2 sm:pb-16 sm:pt-4"
      style={{ background: "var(--m-bg)" }}
    >
      <p
        className="mb-6 text-center text-xs font-medium uppercase tracking-widest"
        style={{ color: "var(--m-text-tertiary)" }}
      >
        We&apos;ve built challenges for
      </p>

      <div className="flex flex-col gap-3">
        <MarqueeRow logos={ROW_1} speed={40} />
        <MarqueeRow logos={ROW_2} reverse speed={35} />
      </div>
    </section>
  );
}

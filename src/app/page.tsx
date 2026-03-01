import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4">
      <main className="flex max-w-xl flex-col items-center text-center gap-8">
        <div className="text-5xl">🧠</div>

        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
          How Claude Code Are You?
        </h1>

        <p className="text-muted text-base sm:text-lg max-w-md leading-relaxed">
          Test your knowledge of Claude Code&apos;s features — from CLAUDE.md to
          Subagents, Hooks to MCP.
        </p>

        <div className="flex flex-col items-center gap-2 text-sm text-muted">
          <div className="flex gap-6">
            <span>18 questions</span>
            <span className="text-border">|</span>
            <span>~3 minutes</span>
            <span className="text-border">|</span>
            <span>no signup</span>
          </div>
        </div>

        <Link
          href="/quiz"
          className="mt-4 inline-flex items-center gap-2 rounded-lg bg-accent px-8 py-3.5 text-base font-bold text-background transition-all hover:bg-accent-dim active:scale-95"
        >
          Start Test
          <span aria-hidden="true">&rarr;</span>
        </Link>

        <div className="mt-8 flex flex-col items-center gap-3 text-xs text-muted">
          <div className="flex items-center gap-4">
            <span className="text-accent font-mono">7</span>
            <span>skill dimensions</span>
            <span className="text-border">·</span>
            <span>spider-web profile</span>
            <span className="text-border">·</span>
            <span>shareable card</span>
          </div>
        </div>
      </main>

      <footer className="fixed bottom-6 text-xs text-muted">
        Built by{" "}
        <a
          href="https://www.linkedin.com/in/krgoyal/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:underline"
        >
          Krishna Goyal
        </a>
      </footer>
    </div>
  );
}

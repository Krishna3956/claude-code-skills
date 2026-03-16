import Link from "next/link";
import Image from "next/image";

export interface QuizCardData {
  slug: string;
  toolName: string;
  logoFile: string;
  category: string;
  paused?: boolean;
}

export default function QuizCard({ quiz }: { quiz: QuizCardData }) {
  return (
    <Link
      href={`/play/${quiz.slug}`}
      className="group flex flex-col items-center rounded-xl border p-6 text-center transition-all hover:-translate-y-0.5 hover:shadow-lg"
      style={{
        background: "var(--m-bg)",
        borderColor: "var(--m-border)",
      }}
    >
      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-white">
        <Image
          src={`/logos/${quiz.logoFile}`}
          alt={quiz.toolName}
          width={36}
          height={36}
          className="rounded"
          style={{ objectFit: "contain" }}
        />
      </div>
      <h3
        className="mb-1 text-base font-semibold"
        style={{ color: "var(--m-text)" }}
      >
        How {quiz.toolName} Are You?
      </h3>
      <p className="mb-4 text-xs" style={{ color: "var(--m-text-tertiary)" }}>
        10 questions &middot; ~3 min
      </p>
      <span
        className="text-sm font-medium transition-colors group-hover:opacity-80"
        style={{ color: "var(--m-accent)" }}
      >
        Play Now &rarr;
      </span>
    </Link>
  );
}

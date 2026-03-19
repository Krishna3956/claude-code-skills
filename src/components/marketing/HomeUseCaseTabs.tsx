"use client";

import { useState } from "react";

type HomeTabCase = {
  key: string;
  label: string;
  before: string;
  after: string;
  metrics: Array<{ value: string; label: string }>;
};

export default function HomeUseCaseTabs({ cases }: { cases: HomeTabCase[] }) {
  const [active, setActive] = useState(cases[0]?.key ?? "");
  const selected = cases.find((item) => item.key === active) ?? cases[0];

  return (
    <div className="marketing-card rounded-[32px] p-6 sm:p-8">
      <div className="flex flex-wrap gap-3">
        {cases.map((item) => (
          <button
            key={item.key}
            type="button"
            onClick={() => setActive(item.key)}
            className={`rounded-xl px-4 py-3 text-sm font-semibold transition ${
              item.key === active ? "bg-[var(--mk-accent)] text-white" : "bg-[var(--mk-bg-soft)] text-[var(--mk-text-soft)]"
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <div className="rounded-[18px] border border-[var(--mk-border)] bg-[var(--mk-bg-soft)] p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--mk-text-muted)]">Before</p>
          <p className="mt-3 text-base leading-8 text-[var(--mk-text-soft)]">{selected?.before}</p>
        </div>
        <div className="rounded-[18px] border border-[var(--mk-border)] bg-white p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--mk-accent)]">After</p>
          <p className="mt-3 text-base leading-8 text-[var(--mk-text)]">{selected?.after}</p>
        </div>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        {selected?.metrics.map((metric) => (
          <div key={metric.label} className="rounded-xl border border-[var(--mk-border)] bg-[var(--mk-bg-soft)] px-4 py-5">
            <p className="text-2xl font-semibold text-[var(--mk-text)]">{metric.value}</p>
            <p className="mt-2 text-sm text-[var(--mk-text-muted)]">{metric.label}</p>
          </div>
        )) ?? null}
      </div>
    </div>
  );
}

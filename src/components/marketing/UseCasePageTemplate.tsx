import Link from "next/link";
import CTASection from "@/components/marketing/CTASection";
import FadeIn from "@/components/marketing/FadeIn";
import type { UseCaseTemplateData } from "@/lib/marketing-data";

export default function UseCasePageTemplate({ data }: { data: UseCaseTemplateData }) {
  return (
    <>
      <section className="relative overflow-hidden border-b border-[var(--mk-border)] bg-white">
        <div className="pointer-events-none absolute inset-0 marketing-grid opacity-35" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-full bg-[radial-gradient(circle_at_top_left,rgba(110,231,200,0.18),transparent_36%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-18 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-24">
          <FadeIn>
            <p className="marketing-kicker text-xs font-semibold uppercase">{data.eyebrow}</p>
            <h1 className="mt-5 max-w-3xl text-4xl leading-tight text-[var(--mk-text)] sm:text-5xl lg:text-6xl">
              {data.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--mk-text-soft)]">
              {data.description}
            </p>
            <p className="mt-4 text-sm uppercase tracking-[0.16em] text-[var(--mk-text-muted)]">{data.persona}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href={data.liveHref} className="rounded-2xl px-5 py-3 text-sm font-semibold marketing-button-primary">
                See a live example
              </Link>
              <Link href="#early-access" className="rounded-2xl px-5 py-3 text-sm font-semibold marketing-button-secondary">
                Get Early Access
              </Link>
            </div>
          </FadeIn>

          <FadeIn delay={0.08}>
            <div className="marketing-card rounded-[22px] p-6 sm:p-8">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--mk-text-muted)]">
                    Team view
                  </p>
                  <h2 className="mt-2 text-2xl text-[var(--mk-text)]">{data.teamViewTitle}</h2>
                </div>
                <span className="rounded-full bg-[var(--mk-accent-soft)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--mk-accent)]">
                  Live program
                </span>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                {data.teamViewMetrics.map((metric) => (
                  <div key={metric.label} className="rounded-xl border border-[var(--mk-border)] bg-[var(--mk-bg-soft)] px-4 py-4">
                    <p className="text-2xl font-semibold text-[var(--mk-text)]">{metric.value}</p>
                    <p className="mt-2 text-sm text-[var(--mk-text-muted)]">{metric.label}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-[18px] border border-[var(--mk-border)] bg-[var(--mk-bg-soft)] p-5">
                <p className="text-sm leading-7 text-[var(--mk-text-soft)]">{data.teamViewSummary}</p>
                <div className="mt-5 space-y-3">
                  {data.teamViewInsights.map((item) => (
                    <div key={item} className="flex gap-3 rounded-xl border border-[var(--mk-border)] bg-white px-4 py-4">
                      <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[var(--mk-accent)]" />
                      <p className="text-sm leading-7 text-[var(--mk-text-soft)]">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="mx-auto max-w-7xl bg-white px-4 py-18 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
          <FadeIn>
            <p className="marketing-kicker text-xs font-semibold uppercase">The problem</p>
            <h2 className="mt-4 text-3xl text-[var(--mk-text)] sm:text-4xl">{data.problemHeading}</h2>
            <div className="mt-5 space-y-4 text-base leading-8 text-[var(--mk-text-soft)]">
              {data.problemCopy.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.08}>
            <div className="grid gap-4 sm:grid-cols-2">
              {data.metrics.map((metric) => (
                <div key={metric.label} className="marketing-card-soft rounded-[18px] px-5 py-6">
                  <p className="text-3xl font-semibold text-[var(--mk-text)]">{metric.value}</p>
                  <p className="mt-3 text-sm text-[var(--mk-text-muted)]">{metric.label}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="border-y border-[var(--mk-border)] bg-[var(--mk-bg-soft)]">
        <div className="mx-auto max-w-7xl px-4 py-18 sm:px-6 lg:px-8">
          <FadeIn>
            <p className="marketing-kicker text-xs font-semibold uppercase">Before and after</p>
            <h2 className="mt-4 text-3xl text-[var(--mk-text)] sm:text-4xl">What changes when the education becomes interactive</h2>
          </FadeIn>
          <div className="mt-8 overflow-hidden rounded-[22px] border border-[var(--mk-border)] bg-white">
            {data.beforeAfter.map(([before, after], index) => (
              <div key={before} className={`grid gap-4 px-5 py-5 sm:grid-cols-2 sm:px-8 ${index !== data.beforeAfter.length - 1 ? "border-b border-[var(--mk-border)]" : ""}`}>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--mk-text-muted)]">Before</p>
                  <p className="mt-2 text-sm leading-7 text-[var(--mk-text-soft)]">{before}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--mk-accent)]">After</p>
                  <p className="mt-2 text-sm leading-7 text-[var(--mk-text)]">{after}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl bg-white px-4 py-18 sm:px-6 lg:px-8">
        <FadeIn>
          <p className="marketing-kicker text-xs font-semibold uppercase">Workflow</p>
          <h2 className="mt-4 text-3xl text-[var(--mk-text)] sm:text-4xl">How your team uses How Well You Know</h2>
        </FadeIn>
        <div className="mt-10 grid gap-5 lg:grid-cols-4">
          {data.workflow.map((step, index) => (
            <FadeIn key={step.title} delay={index * 0.04}>
              <div className="marketing-card-soft h-full rounded-[20px] p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--mk-accent)]">
                  Step {index + 1}
                </p>
                <h3 className="mt-4 text-xl text-[var(--mk-text)]">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--mk-text-soft)]">{step.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 pb-18 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="marketing-card rounded-[22px] p-8 sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--mk-accent)]">Placeholder testimonial</p>
            <p className="mt-4 text-2xl leading-10 text-[var(--mk-text)]">&quot;{data.quote.text}&quot;</p>
            <p className="mt-5 text-sm uppercase tracking-[0.16em] text-[var(--mk-text-muted)]">{data.quote.role}</p>
          </div>
        </FadeIn>
      </section>

      <CTASection id="early-access" source={data.ctaSource} />
    </>
  );
}

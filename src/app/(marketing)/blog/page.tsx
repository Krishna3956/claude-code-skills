import type { Metadata } from "next";
import FadeIn from "@/components/marketing/FadeIn";
import { BLOG_POSTS } from "@/lib/marketing-data";

export const metadata: Metadata = {
  title: "Blog",
  description: "Essays and product education perspectives from How Well You Know.",
};

export default function BlogPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-[var(--mk-border)] bg-white">
        <div className="pointer-events-none absolute inset-0 marketing-grid opacity-30" />
        <div className="relative mx-auto max-w-7xl px-4 py-18 sm:px-6 lg:px-8 lg:py-24">
          <FadeIn>
            <p className="marketing-kicker text-xs font-semibold uppercase">Blog</p>
            <h1 className="mt-5 max-w-4xl text-4xl leading-tight text-[var(--mk-text)] sm:text-5xl lg:text-6xl">
              Notes on product education, onboarding, and why your users still do not read docs.
            </h1>
          </FadeIn>
        </div>
      </section>

      <section className="mx-auto max-w-7xl bg-white px-4 py-18 sm:px-6 lg:px-8">
        <div className="grid gap-5 lg:grid-cols-3">
          {BLOG_POSTS.map((post, index) => (
            <FadeIn key={post.slug} delay={index * 0.04}>
              <article className="overflow-hidden rounded-[20px] border border-[var(--mk-border)] bg-white shadow-[0_10px_30px_rgba(21,32,24,0.04)]">
                <div className="h-44 bg-[linear-gradient(135deg,rgba(31,143,104,0.18),transparent),linear-gradient(135deg,#ecf6ef,#f7faf7)]" />
                <div className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--mk-accent)]">{post.category}</p>
                  <h2 className="mt-4 text-2xl text-[var(--mk-text)]">{post.title}</h2>
                  <p className="mt-4 text-sm leading-7 text-[var(--mk-text-soft)]">{post.excerpt}</p>
                  <div className="mt-6 flex items-center justify-between text-sm text-[var(--mk-text-muted)]">
                    <span>{post.author}</span>
                    <span>{post.date}</span>
                  </div>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </section>
    </>
  );
}

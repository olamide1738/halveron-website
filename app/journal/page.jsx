import Link from "next/link";
import { Section, SectionHeading } from "../../components/Section";
import { CTASection } from "../../components/CTASection";
import { Reveal } from "../../components/Reveal";
import { journalArticles } from "../../lib/journal";

export const metadata = {
  title: "Journal & Insights · Digital Product Strategy & Engineering",
  description:
    "Practical write-ups, engineering benchmarks, and product design essays from the Halveron studio team.",
};

export default function JournalPage() {
  const featured = journalArticles[0];
  const rest = journalArticles.slice(1);

  return (
    <>
      {/* 1. HERO BANNER */}
      <section className="relative overflow-hidden bg-[#FAFAFC] dark:bg-[#0B0F17] text-[#0F172A] dark:text-white pt-24 pb-20 md:pt-36 md:pb-28 border-b border-[#0F172A]/10 dark:border-white/10 transition-colors duration-300">
        <div className="container-hal relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#2F6BFF]/30 bg-[#2F6BFF]/10 px-4 py-1.5 font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-[#2F6BFF]">
              <span className="h-2 w-2 rounded-full bg-[#2F6BFF] animate-pulse" />
              <span>Studio Journal &amp; Insights</span>
            </div>

            <h1 className="heading-display mt-6 text-4xl font-extrabold leading-[1.08] tracking-[-0.03em] sm:text-5xl md:text-6xl lg:text-7xl text-[#0F172A] dark:text-white">
              Practical thoughts on{" "}
              <span className="text-[#2F6BFF]">strategy, code</span> &amp; design.
            </h1>

            <p className="mt-6 max-w-2xl text-base sm:text-lg text-[#64748B] dark:text-[#94A3B8] leading-relaxed">
              No buzzwords or theoretical fluff. Real lessons from building and launching digital products for visionary companies worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* 2. FEATURED ARTICLE SPOTLIGHT */}
      {featured && (
        <Section className="py-16">
          <Reveal>
            <div className="agency-card p-8 md:p-12 shadow-card">
              <div className="flex flex-wrap items-center gap-3">
                <span className="tag-pill text-[#2F6BFF] border-[#2F6BFF]/30 bg-[#2F6BFF]/10 font-bold">
                  Featured Essay
                </span>
                <span className="tag-pill">{featured.category}</span>
                <span className="font-mono text-xs text-[#64748B]">
                  {featured.readingTime} · {featured.publishedAt}
                </span>
              </div>

              <h2 className="heading-display mt-6 text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0F172A] dark:text-white">
                <Link
                  href={`/journal/${featured.slug}`}
                  className="hover:text-[#2F6BFF] transition-colors"
                >
                  {featured.title}
                </Link>
              </h2>

              <p className="mt-4 max-w-3xl text-base sm:text-lg text-[#64748B] dark:text-[#94A3B8] leading-relaxed">
                {featured.excerpt}
              </p>

              <div className="mt-8 flex items-center justify-between border-t border-[#0F172A]/10 dark:border-white/10 pt-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#2F6BFF]/10 font-mono text-xs font-bold text-[#2F6BFF]">
                    {featured.author.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <span className="heading-display block text-sm font-bold text-[#0F172A] dark:text-white">
                      {featured.author.name}
                    </span>
                    <span className="font-sans text-xs text-[#64748B] dark:text-[#94A3B8]">
                      {featured.author.role}
                    </span>
                  </div>
                </div>

                <Link
                  href={`/journal/${featured.slug}`}
                  className="link-button text-xs py-2 px-5"
                >
                  <span>Read Article</span>
                  <span className="text-[#2F6BFF]">→</span>
                </Link>
              </div>
            </div>
          </Reveal>
        </Section>
      )}

      {/* 3. RECENT ESSAYS GRID */}
      <Section paper className="py-20">
        <SectionHeading
          eyebrow="Recent Writing"
          title="Field notes from our product sprints."
        />

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {rest.map((article, idx) => (
            <Reveal key={article.slug} delay={idx * 80}>
              <article className="agency-card flex h-full flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="tag-pill">{article.category}</span>
                    <span className="font-mono text-xs text-[#64748B]">
                      {article.readingTime}
                    </span>
                  </div>

                  <h3 className="heading-display mt-5 text-xl sm:text-2xl font-bold text-[#0F172A] dark:text-white">
                    <Link
                      href={`/journal/${article.slug}`}
                      className="hover:text-[#2F6BFF] transition-colors"
                    >
                      {article.title}
                    </Link>
                  </h3>

                  <p className="mt-3 text-sm text-[#64748B] dark:text-[#94A3B8] leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>

                <div className="mt-8 border-t border-[#0F172A]/10 dark:border-white/10 pt-4 flex items-center justify-between">
                  <span className="font-mono text-xs text-[#64748B]">
                    {article.publishedAt}
                  </span>
                  <Link
                    href={`/journal/${article.slug}`}
                    className="font-sans text-xs font-bold text-[#2F6BFF] hover:underline"
                  >
                    Read Essay →
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 4. CTA */}
      <CTASection
        title="Looking for a partner to build your next product?"
        lead="Let's build something exceptional. Book a discovery call today."
      />
    </>
  );
}

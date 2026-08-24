import Link from "next/link";
import { Section, SectionHeading } from "../../components/Section";
import { CTASection } from "../../components/CTASection";
import { Reveal } from "../../components/Reveal";
import { journalArticles } from "../../lib/journal";

export const metadata = {
  title: "Journal & Insights · Digital Product Strategy & Engineering",
  description:
    "Practical write-ups, engineering benchmarks, and product design essays from the Halveron studio team in Lagos.",
};

export default function JournalPage() {
  const featured = journalArticles[0];
  const rest = journalArticles.slice(1);

  return (
    <>
      {/* 1. HERO BANNER */}
      <section className="relative overflow-hidden bg-[#FEFAF7] dark:bg-[#0B0F17] text-[#111111] dark:text-white pt-24 pb-20 md:pt-36 md:pb-28 border-b border-[#111111]/10 dark:border-white/10 transition-colors duration-300">
        <div className="container-hal relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-xs border border-[#111111]/20 dark:border-white/20 px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.16em] text-[#2F6BFF]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#2F6BFF]" />
              <span>03 / Studio Journal &amp; Field Notes</span>
            </div>

            <h1 className="serif-display mt-8 text-5xl leading-[1.04] tracking-tight md:text-7xl lg:text-8xl text-[#111111] dark:text-white">
              Practical thoughts on{" "}
              <span className="serif-italic text-[#2F6BFF]">strategy, code</span> &amp; design.
            </h1>

            <p className="mt-8 max-w-2xl text-lg md:text-xl font-light text-[#444444] dark:text-[#CCCCCC] leading-relaxed">
              No buzzwords or theoretical fluff. Real lessons from building and launching digital products for visionary founders worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* 2. FEATURED ARTICLE SPOTLIGHT */}
      {featured && (
        <Section className="py-16">
          <Reveal>
            <div className="rounded-md border border-[#111111]/15 dark:border-white/10 bg-white dark:bg-[#121826] p-8 md:p-12 shadow-sm transition-all duration-300 hover:border-[#2F6BFF]/50">
              <div className="flex flex-wrap items-center gap-3">
                <span className="tag-pill text-[#2F6BFF] border-[#2F6BFF]/40 bg-[#2F6BFF]/5 font-bold">
                  Featured Essay
                </span>
                <span className="tag-pill">{featured.category}</span>
                <span className="font-mono text-xs text-[#888888]">
                  {featured.readingTime} · {featured.publishedAt}
                </span>
              </div>

              <h2 className="serif-display mt-6 text-3xl sm:text-4xl md:text-5xl font-normal text-[#111111] dark:text-white">
                <Link
                  href={`/journal/${featured.slug}`}
                  className="hover:text-[#2F6BFF] transition-colors"
                >
                  {featured.title}
                </Link>
              </h2>

              <p className="mt-4 text-base sm:text-lg text-[#555555] dark:text-[#CCCCCC] leading-relaxed max-w-3xl">
                {featured.excerpt}
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-[#111111]/10 dark:border-white/10 pt-6">
                <div className="font-mono text-xs text-[#777777]">
                  By <span className="font-bold text-[#111111] dark:text-white">{featured.author.name}</span> · {featured.author.role}
                </div>
                <Link
                  href={`/journal/${featured.slug}`}
                  className="link-button-solid"
                >
                  Read Full Article ↗
                </Link>
              </div>
            </div>
          </Reveal>
        </Section>
      )}

      {/* 3. RECENT ESSAYS GRID */}
      <Section paper className="py-20">
        <SectionHeading
          eyebrow="Recent Publications"
          title="Field notes from our design & engineering sprints."
          lead="Deep dives into web performance benchmarks, design systems, and rapid prototyping workflows."
        />

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {rest.map((article, idx) => (
            <Reveal key={article.slug} delay={idx * 80}>
              <article className="rounded-md border border-[#111111]/15 dark:border-white/10 bg-white dark:bg-[#121826] p-8 flex flex-col justify-between shadow-sm transition-all duration-300 hover:border-[#2F6BFF]/50">
                <div>
                  <div className="flex items-center justify-between border-b border-[#111111]/10 dark:border-white/10 pb-4">
                    <span className="tag-pill">{article.category}</span>
                    <span className="font-mono text-xs text-[#888888]">
                      {article.readingTime}
                    </span>
                  </div>

                  <h3 className="serif-display mt-6 text-2xl sm:text-3xl font-normal text-[#111111] dark:text-white">
                    <Link
                      href={`/journal/${article.slug}`}
                      className="hover:text-[#2F6BFF] transition-colors"
                    >
                      {article.title}
                    </Link>
                  </h3>

                  <p className="mt-3 text-sm text-[#555555] dark:text-[#CCCCCC] leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-[#111111]/10 dark:border-white/10 flex items-center justify-between">
                  <span className="font-mono text-xs text-[#888888]">
                    {article.publishedAt}
                  </span>
                  <Link
                    href={`/journal/${article.slug}`}
                    className="link-button text-xs py-2 px-4"
                  >
                    Read Essay ↗
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 4. CTA */}
      <CTASection
        title="Have an idea ready to turn into reality?"
        lead="Book a short 20-minute discovery call to review requirements, technical feasibility, and fixed pricing."
      />
    </>
  );
}

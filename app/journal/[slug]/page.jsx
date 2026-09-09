import Link from "next/link";
import { notFound } from "next/navigation";
import { Section } from "../../../components/Section";
import { CTASection } from "../../../components/CTASection";
import { journalArticles } from "../../../lib/journal";

export function generateStaticParams() {
  return journalArticles.map((article) => ({
    slug: article.slug,
  }));
}

export function generateMetadata({ params }) {
  const article = journalArticles.find((a) => a.slug === params.slug);
  if (!article) return {};

  return {
    title: `${article.title} · Halveron Journal`,
    description: article.excerpt,
  };
}

export default function ArticlePage({ params }) {
  const article = journalArticles.find((a) => a.slug === params.slug);
  if (!article) notFound();

  const related = journalArticles
    .filter((a) => a.slug !== article.slug)
    .slice(0, 2);

  return (
    <>
      {/* 1. ARTICLE HEADER */}
      <section className="relative overflow-hidden bg-[#FAFAFC] dark:bg-[#0B0F17] text-[#0F172A] dark:text-white pt-24 pb-16 md:pt-36 md:pb-24 border-b border-[#0F172A]/10 dark:border-white/10 transition-colors duration-300">
        <div className="container-hal relative z-10">
          <div className="max-w-3xl">
            <Link
              href="/journal"
              className="inline-flex items-center gap-2 font-mono text-xs text-[#2F6BFF] hover:underline mb-8"
            >
              ← Back to All Journal Essays
            </Link>

            <div className="flex flex-wrap items-center gap-3">
              <span className="tag-pill text-[#2F6BFF] border-[#2F6BFF]/30 bg-[#2F6BFF]/10 font-bold">
                {article.category}
              </span>
              <span className="font-mono text-xs text-[#64748B]">
                {article.readingTime} · {article.publishedAt}
              </span>
            </div>

            <h1 className="heading-display mt-6 text-3xl sm:text-4xl md:text-5xl font-extrabold leading-[1.12] text-[#0F172A] dark:text-white">
              {article.title}
            </h1>

            <p className="mt-4 text-base sm:text-lg text-[#64748B] dark:text-[#94A3B8] leading-relaxed">
              {article.subtitle}
            </p>

            <div className="mt-8 flex items-center gap-3 border-t border-[#0F172A]/10 dark:border-white/10 pt-6 font-sans text-xs text-[#64748B]">
              <span>Published by</span>
              <span className="heading-display font-bold text-[#0F172A] dark:text-white">
                {article.author.name}
              </span>
              <span>· {article.author.role}</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ARTICLE BODY CONTENT */}
      <Section className="py-16 md:py-24">
        <div className="mx-auto max-w-3xl">
          <article className="prose prose-lg dark:prose-invert text-[#334155] dark:text-[#E2E8F0]">
            <div
              className="space-y-6 text-base sm:text-lg leading-relaxed whitespace-pre-line"
              dangerouslySetInnerHTML={{
                __html: article.content
                  .replace(/### (.*)/g, '<h3 class="heading-display text-2xl font-bold text-[#0F172A] dark:text-white mt-10 mb-4">$1</h3>')
                  .replace(/> (.*)/g, '<blockquote class="border-l-4 border-[#2F6BFF] pl-5 italic text-lg text-[#2F6BFF] my-6 font-sans font-medium">$1</blockquote>')
                  .replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-[#0F172A] dark:text-white">$1</strong>')
                  .replace(/`([^`]+)`/g, '<code class="font-mono text-xs bg-[#0F172A]/5 dark:bg-white/10 px-1.5 py-0.5 rounded">$1</code>'),
              }}
            />
          </article>

          {/* Author Card Footer */}
          <div className="mt-16 agency-card p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-card">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-wider text-[#64748B] font-bold">
                About the Author
              </span>
              <h4 className="heading-display mt-1 text-xl font-bold text-[#0F172A] dark:text-white">
                {article.author.name}
              </h4>
              <p className="font-sans text-xs text-[#64748B] dark:text-[#94A3B8] mt-0.5">
                {article.author.role} at Halveron Studio
              </p>
            </div>

            <Link href="/contact" className="link-button shrink-0">
              Work with Our Team ↗
            </Link>
          </div>

          {/* Related Articles */}
          {related.length > 0 && (
            <div className="mt-20 border-t border-[#0F172A]/10 dark:border-white/10 pt-12">
              <span className="font-mono text-xs uppercase tracking-wider text-[#2F6BFF] font-bold block mb-6">
                Related Reading
              </span>
              <div className="grid gap-6 sm:grid-cols-2">
                {related.map((rel) => (
                  <Link
                    key={rel.slug}
                    href={`/journal/${rel.slug}`}
                    className="agency-card group flex flex-col justify-between"
                  >
                    <div>
                      <span className="tag-pill">{rel.category}</span>
                      <h4 className="heading-display mt-4 text-lg font-bold text-[#0F172A] dark:text-white group-hover:text-[#2F6BFF] transition-colors">
                        {rel.title}
                      </h4>
                    </div>
                    <span className="font-sans text-xs text-[#64748B] mt-4 block">
                      {rel.readingTime} ↗
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </Section>

      {/* 3. CTA */}
      <CTASection
        title="Ready to engineer your next digital product?"
        lead="Let's review your product roadmap and build something your customers will love."
      />
    </>
  );
}

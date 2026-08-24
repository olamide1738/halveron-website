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
      <section className="relative overflow-hidden bg-[#FEFAF7] dark:bg-[#0B0F17] text-[#111111] dark:text-white pt-24 pb-16 md:pt-36 md:pb-24 border-b border-[#111111]/10 dark:border-white/10 transition-colors duration-300">
        <div className="container-hal relative z-10">
          <div className="max-w-3xl">
            <Link
              href="/journal"
              className="inline-flex items-center gap-2 font-mono text-xs text-[#2F6BFF] hover:underline mb-8"
            >
              ← Back to All Journal Essays
            </Link>

            <div className="flex flex-wrap items-center gap-3">
              <span className="tag-pill text-[#2F6BFF] border-[#2F6BFF]/40 bg-[#2F6BFF]/5 font-bold">
                {article.category}
              </span>
              <span className="font-mono text-xs text-[#888888]">
                {article.readingTime} · {article.publishedAt}
              </span>
            </div>

            <h1 className="serif-display mt-6 text-4xl sm:text-5xl md:text-6xl font-normal leading-[1.08] text-[#111111] dark:text-white">
              {article.title}
            </h1>

            <p className="mt-6 text-lg sm:text-xl font-light text-[#555555] dark:text-[#CCCCCC] leading-relaxed">
              {article.subtitle}
            </p>

            <div className="mt-8 flex items-center gap-3 border-t border-[#111111]/10 dark:border-white/10 pt-6 font-mono text-xs text-[#777777]">
              <span>Published by</span>
              <span className="font-bold text-[#111111] dark:text-white">
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
          <article className="prose prose-lg dark:prose-invert prose-headings:font-normal prose-headings:serif-display prose-h3:text-2xl prose-h3:mt-8 prose-p:text-[#444444] dark:prose-p:text-[#CCCCCC] prose-p:leading-relaxed prose-blockquote:border-l-[#2F6BFF] prose-blockquote:italic prose-blockquote:font-serif prose-blockquote:text-xl text-[#222222] dark:text-[#E2E8F0]">
            <div
              className="space-y-6 text-base sm:text-lg leading-relaxed whitespace-pre-line"
              dangerouslySetInnerHTML={{
                __html: article.content
                  .replace(/### (.*)/g, '<h3 class="serif-display text-3xl font-normal text-[#111111] dark:text-white mt-10 mb-4">$1</h3>')
                  .replace(/> (.*)/g, '<blockquote class="border-l-2 border-[#2F6BFF] pl-5 italic text-xl text-[#2F6BFF] my-6 font-serif">$1</blockquote>')
                  .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                  .replace(/`([^`]+)`/g, '<code class="font-mono text-xs bg-[#111111]/5 dark:bg-white/10 px-1.5 py-0.5 rounded-2xs">$1</code>'),
              }}
            />
          </article>

          {/* Author Card Footer */}
          <div className="mt-16 rounded-md border border-[#111111]/15 dark:border-white/10 bg-white dark:bg-[#121826] p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-sm">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#888888]">
                About the Author
              </span>
              <h4 className="serif-display mt-1 text-2xl font-normal text-[#111111] dark:text-white">
                {article.author.name}
              </h4>
              <p className="font-mono text-xs text-[#666666] dark:text-[#AAAAAA] mt-0.5">
                {article.author.role} at Halveron Studio
              </p>
            </div>

            <Link href="/contact" className="link-button shrink-0">
              Work with Our Team ↗
            </Link>
          </div>

          {/* Related Articles */}
          {related.length > 0 && (
            <div className="mt-20 border-t border-[#111111]/10 dark:border-white/10 pt-12">
              <span className="font-mono text-xs uppercase tracking-widest text-[#2F6BFF] font-bold block mb-6">
                Related Reading
              </span>
              <div className="grid gap-6 sm:grid-cols-2">
                {related.map((rel) => (
                  <Link
                    key={rel.slug}
                    href={`/journal/${rel.slug}`}
                    className="swiss-card group flex flex-col justify-between"
                  >
                    <div>
                      <span className="tag-pill">{rel.category}</span>
                      <h4 className="serif-display mt-4 text-xl font-normal text-[#111111] dark:text-white group-hover:text-[#2F6BFF] transition-colors">
                        {rel.title}
                      </h4>
                    </div>
                    <span className="font-mono text-xs text-[#888888] mt-4 block">
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

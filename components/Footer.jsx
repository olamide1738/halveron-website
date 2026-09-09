"use client";

import Link from "next/link";
import { Logomark } from "./Logo";
import { NewsletterForm } from "./NewsletterForm";
import { nav, services, site, legal } from "../lib/site";

// Clean vector icons for agency social links
const socialIcons = {
  LinkedIn: (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.64a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28z" />
    </svg>
  ),
  X: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  ),
  GitHub: (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  ),
  Dribbble: (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 0 1 1.93 5.314c-.281-.055-2.023-.377-3.922-.047-.323-.833-.679-1.688-1.077-2.527 2.052-1.06 2.96-2.614 3.069-2.74zm-4.78 1.902c.381.796.726 1.609 1.037 2.404-2.887.893-5.467.923-5.759.923-.056 0-.097-.002-.122-.003a27.69 27.69 0 0 1-.222-2.584c2.587-.803 4.686-.757 5.066-.74zm-6.697 4.792c.333 0 2.583-.02 5.253-.822.257.545.497 1.109.718 1.687-3.376 1.053-6.529 3.013-6.685 3.111a8.514 8.514 0 0 1-1.094-3.526c.216-.013.914-.05 1.808-.45zm2.046 5.263c.277-.168 2.879-1.745 6.096-2.668.74 2.003 1.053 3.738 1.134 4.225a8.498 8.498 0 0 1-7.23-1.557zm8.441-2.457c-.097-.473-.418-2.072-1.123-3.96 1.636-.264 3.05.02 3.16.042a8.528 8.528 0 0 1-2.037 3.918zM12 3.518c2.09 0 4.004.757 5.493 2.016-.073.109-.908 1.344-2.822 2.327-.406-.014-2.44-.06-4.992.735a26.04 26.04 0 0 1-2.271-4.003A8.47 8.47 0 0 1 12 3.518z" />
    </svg>
  ),
};

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-[#0F172A]/10 dark:border-white/10 bg-[#FAFAFC] dark:bg-[#07090D] text-[#0F172A] dark:text-white transition-colors duration-300">
      <div className="container-hal pt-16 md:pt-20 pb-12">
        {/* 1. Header Pitch & Action Card */}
        <div className="rounded-3xl border border-[#0F172A]/10 dark:border-white/10 bg-white dark:bg-[#101623] p-8 md:p-12 shadow-sm mb-16">
          <div className="grid gap-8 lg:grid-cols-[1.3fr_0.9fr] lg:items-center">
            <div>
              <h3 className="heading-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0F172A] dark:text-white leading-tight">
                Have a project in mind? Let&apos;s build something extraordinary.
              </h3>
              <p className="mt-3 max-w-xl text-sm sm:text-base text-[#64748B] dark:text-[#94A3B8] leading-relaxed">
                Whether you need a complete bespoke website overhaul, dynamic e-commerce platform, or distinctive brand identity, we are ready to bring your vision to life.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col items-start lg:items-end gap-3.5">
              <a
                href={site.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="link-button-solid w-full sm:w-auto text-center"
              >
                <span>Book Discovery Call</span>
                <span className="text-white/80">↗</span>
              </a>
              <Link
                href="/contact"
                className="link-button w-full sm:w-auto text-center"
              >
                <span>Send Project Brief</span>
                <span className="text-[#2F6BFF]">→</span>
              </Link>
              <div className="pt-1 font-mono text-xs text-[#64748B] dark:text-[#94A3B8]">
                Direct:{" "}
                <a
                  href={`mailto:${site.email}`}
                  className="font-semibold text-[#0F172A] dark:text-white hover:text-[#2F6BFF] underline underline-offset-4"
                >
                  {site.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Structured 4-Column Navigation Grid */}
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-12 py-6 border-b border-[#0F172A]/10 dark:border-white/10 pb-16">
          {/* Col 1: Studio Brand & Identity (4 cols) */}
          <div className="lg:col-span-4">
            <Link
              href="/"
              className="group inline-flex items-center gap-3 mb-4"
              aria-label="Halveron Home"
            >
              <Logomark size={32} />
              <div className="flex items-center gap-1.5">
                <span className="font-display text-xl font-extrabold tracking-[-0.03em] text-[#0F172A] dark:text-white uppercase transition-colors group-hover:text-[#2F6BFF]">
                  HALVERON
                </span>
                <span className="font-mono text-xs font-bold text-[#2F6BFF]">®</span>
              </div>
            </Link>
            <p className="font-sans text-sm text-[#64748B] dark:text-[#94A3B8] leading-relaxed max-w-sm mb-6">
              {site.description}
            </p>

            <div className="space-y-2 font-mono text-xs text-[#475569] dark:text-[#CBD5E1]">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>{site.location}</span>
              </div>
              <div className="text-[#64748B] dark:text-[#94A3B8]">{site.hours}</div>
            </div>

            {/* Social Icons Pill Row */}
            <div className="mt-6 flex items-center gap-2">
              {site.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow Halveron on ${s.label}`}
                  title={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-[#0F172A]/15 dark:border-white/15 bg-white/70 dark:bg-white/5 text-[#475569] dark:text-[#CBD5E1] hover:border-[#2F6BFF] hover:text-[#2F6BFF] hover:scale-105 transition-all shadow-2xs"
                >
                  {socialIcons[s.label] ?? s.label.substring(0, 1)}
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Services List (3 cols) */}
          <div className="lg:col-span-3">
            <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-[#2F6BFF] mb-5">
              <span>01</span>
              <span>Services</span>
            </div>
            <ul className="space-y-3 font-sans text-sm">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services#${s.slug}`}
                    className="group inline-flex items-center gap-1.5 text-[#475569] dark:text-[#CBD5E1] hover:text-[#2F6BFF] font-medium transition-all hover:translate-x-1"
                  >
                    <span>{s.title}</span>
                    <span className="opacity-0 group-hover:opacity-100 text-xs text-[#2F6BFF] transition-opacity">
                      ↗
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Agency Navigation (2 cols) */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-[#2F6BFF] mb-5">
              <span>02</span>
              <span>Agency</span>
            </div>
            <ul className="space-y-3 font-sans text-sm">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center gap-1.5 text-[#475569] dark:text-[#CBD5E1] hover:text-[#2F6BFF] font-medium transition-all hover:translate-x-1"
                  >
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/careers"
                  className="group inline-flex items-center gap-1.5 text-[#475569] dark:text-[#CBD5E1] hover:text-[#2F6BFF] font-medium transition-all hover:translate-x-1"
                >
                  <span>Careers</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Newsletter & Dispatch (3 cols) */}
          <div className="lg:col-span-3">
            <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-[#2F6BFF] mb-5">
              <span>03</span>
              <span>Studio Dispatch</span>
            </div>
            <p className="font-sans text-xs text-[#64748B] dark:text-[#94A3B8] leading-relaxed mb-4">
              Quarterly design essays, engineering breakdowns, and new work debuts delivered straight to your inbox.
            </p>
            <NewsletterForm />
          </div>
        </div>

        {/* 3. Massive Architectural Wordmark */}
        <div className="overflow-hidden pt-12 pb-4 select-none pointer-events-none text-center">
          <span className="font-display font-black text-[14vw] sm:text-[15vw] tracking-[-0.05em] leading-none text-center text-[#0F172A]/[0.04] dark:text-white/[0.04] uppercase transition-colors block">
            HALVERON
          </span>
        </div>

        {/* 4. Bottom Legal & Back to Top Utility Bar */}
        <div className="flex flex-col justify-between gap-4 border-t border-[#0F172A]/10 dark:border-white/10 pt-8 font-mono text-xs text-[#64748B] md:flex-row md:items-center">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <span>
              © {new Date().getFullYear()} {legal.entityName.toUpperCase()}.
            </span>
            <span>·</span>
            <span>{legal.registrationNumber}</span>
          </div>

          <div className="flex flex-wrap items-center gap-6">
            <nav aria-label="Legal" className="flex flex-wrap gap-x-6 gap-y-2">
              <Link href="/privacy" className="line-btm-ani hover:text-[#2F6BFF]">
                Privacy Policy
              </Link>
              <Link href="/terms" className="line-btm-ani hover:text-[#2F6BFF]">
                Terms of Service
              </Link>
            </nav>

            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Back to top"
              className="group flex items-center gap-1.5 text-[#0F172A] dark:text-white hover:text-[#2F6BFF] dark:hover:text-[#2F6BFF] font-semibold transition-colors cursor-pointer"
            >
              <span>Back to top</span>
              <span className="transition-transform group-hover:-translate-y-0.5">↑</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

import Link from "next/link";
import { site } from "../lib/site";

export function CTASection({
  title = "Let's build something exceptional together.",
  lead = "Tell us what you're planning. We'll share our honest feedback, timeline estimates, and exact fixed pricing.",
}) {
  return (
    <section className="relative overflow-hidden bg-[#070A10] text-white py-24 md:py-32 border-t border-white/10">
      {/* Ambient background glow */}
      <div
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[500px] w-[800px] rounded-full opacity-20 blur-3xl"
        style={{
          background: "radial-gradient(circle, rgba(47,107,255,0.8) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="container-hal relative z-10 text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 rounded-full border border-[#2F6BFF]/40 bg-[#2F6BFF]/10 px-4 py-1.5 font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-[#2F6BFF]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#2F6BFF] animate-pulse" />
          <span>Start Your Project</span>
        </div>

        <h2 className="heading-display mx-auto mt-6 text-3xl font-extrabold leading-[1.12] tracking-[-0.03em] sm:text-4xl md:text-5xl lg:text-6xl text-white">
          {title}
        </h2>

        <p className="mx-auto mt-5 max-w-xl text-base md:text-lg text-[#CBD5E1] leading-relaxed">
          {lead}
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <a
            href={site.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="link-button-solid text-sm py-3.5 px-8"
          >
            <span>Book Discovery Call</span>
            <span className="text-white/80">↗</span>
          </a>
          <Link
            href="/contact"
            className="link-button text-sm py-3.5 px-8 text-white border-white/20 bg-white/5 hover:bg-white/10 hover:border-white"
          >
            <span>Send Project Brief</span>
            <span className="text-[#2F6BFF]">↗</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

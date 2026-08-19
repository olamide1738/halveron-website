import Link from "next/link";
import { site } from "../lib/site";

export function CTASection({
  title = "Let's build something exceptional together.",
  lead = "Tell us what you're planning. We'll share our honest feedback, timeline estimates, and exact fixed pricing.",
}) {
  return (
    <section className="relative overflow-hidden bg-[#111111] dark:bg-[#07090D] text-white py-24 md:py-32 border-t border-white/10">
      <div className="container-hal relative z-10 text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 rounded-xs border border-white/20 px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.16em] text-[#2F6BFF]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#2F6BFF]" />
          <span>Start Your Project</span>
        </div>

        <h2 className="serif-display mx-auto mt-6 text-4xl font-normal leading-[1.08] tracking-tight md:text-6xl text-white">
          {title}
        </h2>

        <p className="mx-auto mt-6 max-w-xl text-base md:text-lg text-[#CCCCCC] leading-relaxed">
          {lead}
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href={site.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="link-button-solid text-white"
          >
            Book Discovery Call <span className="text-white">↗</span>
          </a>
          <Link href="/contact" className="link-button text-white border-white/40 hover:border-white">
            Send Project Brief ↗
          </Link>
        </div>
      </div>
    </section>
  );
}

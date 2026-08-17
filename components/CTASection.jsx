import { Button } from "./Button";
import { GapDivider } from "./Section";
import { site } from "../lib/site";

// The dark "let's close the gap" call-to-action band reused at the foot of most pages.
export function CTASection({
  title = "Let's close the gap.",
  lead = "Tell us what you're building. We'll show you how we'd take it from idea to launch to scale.",
}) {
  return (
    <section className="relative overflow-hidden bg-ink text-white py-20 md:py-28">
      {/* Ambient Liquid Orbs */}
      <div
        className="pointer-events-none absolute -left-20 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-cobalt/20 blur-3xl animate-fluid-blob"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-20 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-cobalt-light/20 blur-3xl animate-fluid-blob-slow"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-dotgrid-dark opacity-60"
        aria-hidden="true"
      />
      <div className="container-hal relative z-10 text-center">
        <div className="mx-auto flex justify-center">
          <GapDivider />
        </div>
        <h2 className="h-display mx-auto mt-8 max-w-2xl text-3xl font-bold leading-tight text-white md:text-5xl">
          {title}
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-lg text-[#B9C1D0] leading-relaxed">{lead}</p>
        <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button href={site.bookingUrl} external variant="glassCobalt" className="group">
            Book a discovery call
          </Button>
          <Button href="/contact" variant="glassDark" className="group">
            Send us a brief
          </Button>
        </div>
      </div>
    </section>
  );
}

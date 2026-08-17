import { Section, Eyebrow } from "../../components/Section";
import { WorkGrid } from "../../components/WorkGrid";

export const metadata = {
  title: "Selected Work — Halveron Digital Product Studio",
  description:
    "Explore high-fidelity UI visual case studies of mobile apps, SaaS platforms, and bespoke web platforms shipped by Halveron.",
};

export default function WorkPage() {
  return (
    <>
      {/* 1. HERO BANNER */}
      <section className="relative overflow-hidden bg-ink text-white py-24 md:py-32">
        <div
          className="pointer-events-none absolute inset-0 bg-dotgrid-dark opacity-60"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-0 glow-cobalt"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -right-20 top-1/4 h-96 w-96 rounded-full bg-cobalt/20 blur-3xl animate-fluid-blob"
          aria-hidden="true"
        />

        <div className="container-hal relative z-10">
          <div className="max-w-3xl">
            <Eyebrow className="text-cobalt-light">Design & Engineering Portfolio</Eyebrow>
            <h1 className="h-display mt-4 text-4xl leading-[1.08] text-white md:text-6xl lg:text-7xl font-bold tracking-tight">
              Selected Projects &{" "}
              <span className="bg-gradient-to-r from-white via-cobalt-light to-white bg-clip-text text-transparent">
                Case Studies.
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-[#B9C1D0] md:text-xl leading-relaxed">
              High-fidelity visual interfaces of bespoke web platforms, iOS/Android mobile apps, and multi-tenant SaaS platforms shipped by our studio.
            </p>
          </div>
        </div>
      </section>

      {/* 2. VISUAL PROJECTS GRID */}
      <Section className="relative overflow-hidden py-20">
        <WorkGrid />
      </Section>
    </>
  );
}

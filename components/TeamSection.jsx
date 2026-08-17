import Image from "next/image";
import { Section, SectionHeading } from "./Section";
import { Reveal } from "./Reveal";
import { team } from "../lib/site";

export function TeamSection() {
  return (
    <Section paper className="relative overflow-hidden py-24">
      {/* Ambient Liquid Gradient Blobs */}
      <div
        className="pointer-events-none absolute -left-20 top-1/3 h-80 w-80 rounded-full bg-cobalt/15 blur-3xl animate-fluid-blob"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-20 bottom-10 h-80 w-80 rounded-full bg-cobalt-light/20 blur-3xl animate-fluid-blob-slow"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-dotgrid opacity-40"
        aria-hidden="true"
      />

      <div className="relative z-10">
        <SectionHeading
          eyebrow="Leadership & Team"
          title="The senior team in your kickoff is the team that builds your product."
          lead="No bait-and-switch to juniors after signing. Every member of Halveron brings deep industry experience and full accountability to your vision."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member, idx) => {
            return (
              <Reveal key={member.name} delay={idx * 90}>
                <div className="glass-card-light group flex h-full flex-col justify-between overflow-hidden rounded-3xl p-6 transition-all duration-300">
                  <div>
                    {/* Avatar Portrait Frame with Glowing Border */}
                    <div className="relative aspect-square w-full overflow-hidden rounded-2xl border border-white/80 dark:border-white/10 bg-ink shadow-md transition-all duration-300 group-hover:shadow-xl group-hover:border-cobalt/40">
                      {member.avatar ? (
                        <Image
                          src={member.avatar}
                          alt={member.name}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center bg-ink font-display text-2xl font-bold text-white">
                          {member.name.split(" ").map((n) => n[0]).join("")}
                        </div>
                      )}

                      {/* Active Status Badge */}
                      <div className="absolute top-3 right-3 flex items-center gap-1.5 rounded-full border border-white/20 bg-ink/70 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-white backdrop-blur-md">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        Senior
                      </div>
                    </div>

                    {/* Member Details */}
                    <div className="mt-5">
                      <h3 className="h-display text-lg font-bold text-ink dark:text-white group-hover:text-cobalt transition-colors">
                        {member.name}
                      </h3>
                      <p className="mt-1 font-mono text-xs font-semibold uppercase tracking-[0.12em] text-cobalt">
                        {member.role}
                      </p>
                      <p className="mt-3 text-sm text-slate dark:text-[#B9C1D0] leading-relaxed">
                        {member.bio}
                      </p>
                    </div>
                  </div>

                  {/* Social / Contact Link Button */}
                  {member.links && member.links.length > 0 && (
                    <div className="mt-6 border-t border-line/60 dark:border-white/10 pt-4">
                      {member.links.map((link) => (
                        <a
                          key={link.label}
                          href={link.href}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center justify-between w-full rounded-xl border border-white/80 dark:border-white/10 bg-white/60 dark:bg-white/5 px-3.5 py-2 font-mono text-xs font-semibold uppercase tracking-[0.12em] text-slate dark:text-[#B9C1D0] backdrop-blur-md transition-all hover:border-cobalt/40 hover:bg-cobalt hover:text-white"
                        >
                          <span>{link.label}</span>
                          <span>→</span>
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </Section>
  );
}

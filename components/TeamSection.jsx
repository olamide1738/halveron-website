import Image from "next/image";
import { Section, SectionHeading } from "./Section";
import { Reveal } from "./Reveal";
import { team } from "../lib/site";

export function TeamSection() {
  return (
    <Section paper className="relative overflow-hidden py-24">
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
                <div className="rounded-md border border-[#111111]/15 dark:border-white/10 bg-white dark:bg-[#121826] flex h-full flex-col justify-between p-6 shadow-sm transition-all duration-300 hover:border-[#2F6BFF]/50">
                  <div>
                    {/* Avatar Portrait Frame */}
                    <div className="relative aspect-square w-full overflow-hidden rounded-xs border border-[#111111]/15 dark:border-white/10 bg-[#0B0F17]">
                      {member.avatar ? (
                        <Image
                          src={member.avatar}
                          alt={member.name}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                          className="object-cover transition-transform duration-500 hover:scale-105"
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center font-mono text-2xl font-bold text-white">
                          {member.name.split(" ").map((n) => n[0]).join("")}
                        </div>
                      )}

                      {/* Active Status Badge */}
                      <div className="absolute top-3 right-3 flex items-center gap-1.5 rounded-xs border border-white/20 bg-black/80 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-white">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#2F6BFF]" />
                        Senior
                      </div>
                    </div>

                    {/* Member Details */}
                    <div className="mt-5">
                      <h3 className="serif-display text-2xl font-normal text-[#111111] dark:text-white">
                        {member.name}
                      </h3>
                      <p className="mt-1 font-mono text-xs font-semibold uppercase tracking-[0.14em] text-[#2F6BFF]">
                        {member.role}
                      </p>
                      <p className="mt-3 text-sm text-[#555555] dark:text-[#CCCCCC] leading-relaxed">
                        {member.bio}
                      </p>
                    </div>
                  </div>

                  {/* Social / Contact Link Button */}
                  {member.links && member.links.length > 0 && (
                    <div className="mt-6 border-t border-[#111111]/10 dark:border-white/10 pt-4">
                      {member.links.map((link) => (
                        <a
                          key={link.label}
                          href={link.href}
                          target="_blank"
                          rel="noreferrer"
                          className="link-button w-full text-center text-[11px] py-2"
                        >
                          {link.label} ↗
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

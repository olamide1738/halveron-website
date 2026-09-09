import Image from "next/image";
import { team } from "../lib/site";
import { PlaceholderCard } from "./PlaceholderCard";

export function TeamGrid() {
  if (!team || team.length === 0) {
    return (
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {[1, 2, 3, 4].map((n) => (
          <PlaceholderCard
            key={n}
            label={`Team member ${String(n).padStart(2, "0")}`}
            pill="Profile coming"
            className="min-h-[13rem]"
          />
        ))}
      </div>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {team.map((m) => (
        <article
          key={m.name}
          className="agency-card flex flex-col justify-between"
        >
          <div>
            <div className="relative aspect-square w-full overflow-hidden rounded-xl border border-[#0F172A]/10 dark:border-white/10 bg-[#0B0F17]">
              {m.avatar || m.photo ? (
                <Image
                  src={m.avatar || m.photo}
                  alt={m.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center font-mono text-2xl font-bold text-white bg-gradient-to-br from-[#2F6BFF]/20 to-[#0B0F17]">
                  {m.name.split(" ").map((n) => n[0]).join("")}
                </div>
              )}
            </div>

            <div className="mt-5">
              <h3 className="heading-display text-xl font-bold text-[#0F172A] dark:text-white">
                {m.name}
              </h3>
              <p className="mt-1 font-mono text-xs font-semibold uppercase tracking-wider text-[#2F6BFF]">
                {m.role}
              </p>
              {m.bio && (
                <p className="mt-2.5 text-sm text-[#64748B] dark:text-[#94A3B8] leading-relaxed">
                  {m.bio}
                </p>
              )}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

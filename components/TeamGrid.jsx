import Image from "next/image";
import { team } from "../lib/site";
import { PlaceholderCard } from "./PlaceholderCard";

export function TeamGrid() {
  if (team.length === 0) {
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
          className="rounded-md border border-[#111111]/15 dark:border-white/10 bg-white dark:bg-[#121826] flex flex-col justify-between p-6 shadow-sm transition-all duration-300 hover:border-[#2F6BFF]/50"
        >
          <div>
            <div className="relative aspect-square w-full overflow-hidden rounded-xs border border-[#111111]/15 dark:border-white/10 bg-[#0B0F17]">
              {m.avatar || m.photo ? (
                <Image
                  src={m.avatar || m.photo}
                  alt={m.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center font-mono text-2xl font-bold text-white">
                  {m.name.split(" ").map((n) => n[0]).join("")}
                </div>
              )}
            </div>

            <div className="mt-5">
              <h3 className="serif-display text-2xl font-normal text-[#111111] dark:text-white">
                {m.name}
              </h3>
              <p className="mt-1 font-mono text-xs font-semibold uppercase tracking-[0.14em] text-[#2F6BFF]">
                {m.role}
              </p>
              {m.bio && (
                <p className="mt-3 text-sm text-[#555555] dark:text-[#CCCCCC] leading-relaxed">
                  {m.bio}
                </p>
              )}
            </div>
          </div>

          {m.links?.length > 0 && (
            <div className="mt-6 border-t border-[#111111]/10 dark:border-white/10 pt-4">
              {m.links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-button w-full text-center text-[11px] py-2"
                >
                  {l.label} ↗
                </a>
              ))}
            </div>
          )}
        </article>
      ))}
    </div>
  );
}

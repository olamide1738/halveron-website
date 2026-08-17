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
          className="glass-card-light group flex flex-col justify-between overflow-hidden rounded-3xl p-6 transition-all duration-300"
        >
          <div>
            <div className="relative aspect-square w-full overflow-hidden rounded-2xl border border-white/80 dark:border-white/10 bg-ink shadow-md transition-all duration-300 group-hover:shadow-xl group-hover:border-cobalt/40">
              {m.avatar || m.photo ? (
                <Image
                  src={m.avatar || m.photo}
                  alt={m.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-ink font-display text-2xl font-bold text-white">
                  {m.name.split(" ").map((n) => n[0]).join("")}
                </div>
              )}
            </div>

            <div className="mt-5">
              <h3 className="h-display text-lg font-bold text-ink dark:text-white group-hover:text-cobalt transition-colors">
                {m.name}
              </h3>
              <p className="mt-1 font-mono text-xs font-semibold uppercase tracking-[0.12em] text-cobalt dark:text-cobalt-light">
                {m.role}
              </p>
              {m.bio && (
                <p className="mt-3 text-sm text-slate dark:text-[#B9C1D0] leading-relaxed">
                  {m.bio}
                </p>
              )}
            </div>
          </div>

          {m.links?.length > 0 && (
            <div className="mt-6 border-t border-line/60 dark:border-white/10 pt-4">
              {m.links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between w-full rounded-xl border border-white/80 dark:border-white/10 bg-white/60 dark:bg-white/5 px-3.5 py-2 font-mono text-xs font-semibold uppercase tracking-[0.12em] text-slate dark:text-[#B9C1D0] backdrop-blur-md transition-all hover:border-cobalt/40 hover:bg-cobalt hover:text-white"
                >
                  <span>{l.label}</span>
                  <span>→</span>
                </a>
              ))}
            </div>
          )}
        </article>
      ))}
    </div>
  );
}

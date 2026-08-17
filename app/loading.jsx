// Route-level loading state, shown while a server component streams in.
// Skeleton mirrors the shared page shape: dark hero, then a content band.
export default function Loading() {
  return (
    <div aria-busy="true" aria-live="polite">
      <span className="sr-only">Loading…</span>

      <section className="bg-ink">
        <div className="container-hal py-20 md:py-28">
          <div className="h-3 w-32 animate-pulse rounded-sm bg-white/10" />
          <div className="mt-6 h-10 w-full max-w-2xl animate-pulse rounded-lg bg-white/10" />
          <div className="mt-3 h-10 w-3/5 max-w-xl animate-pulse rounded-lg bg-white/10" />
          <div className="mt-7 h-5 w-full max-w-md animate-pulse rounded-sm bg-white/5" />
        </div>
      </section>

      <section className="bg-white">
        <div className="container-hal py-20">
          <div className="grid gap-6 md:grid-cols-3">
            {[1, 2, 3].map((n) => (
              <div key={n} className="rounded-2xl border border-line p-7">
                <div className="h-3 w-10 animate-pulse rounded-sm bg-line" />
                <div className="mt-4 h-5 w-2/3 animate-pulse rounded-sm bg-line" />
                <div className="mt-3 h-4 w-full animate-pulse rounded-sm bg-paper" />
                <div className="mt-2 h-4 w-4/5 animate-pulse rounded-sm bg-paper" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

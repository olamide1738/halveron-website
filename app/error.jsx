"use client";

// Route-level error boundary. Must be a client component — Next.js requirement.

import { useEffect } from "react";
import { Button } from "../components/Button";
import { site } from "../lib/site";

export default function Error({ error, reset }) {
  useEffect(() => {
    // Surface the real error to your monitoring provider. Console for now so
    // nothing is swallowed silently in production.
    console.error("[route error]", error);
  }, [error]);

  return (
    <section className="bg-white">
      <div className="container-hal flex min-h-[60vh] flex-col justify-center py-24">
        <div className="max-w-xl">
          <div className="flex items-center" aria-hidden="true">
            <span className="h-[3px] w-16 rounded-sm bg-ink/20" />
            <span className="mx-1.5 h-3 w-4 rounded-sm bg-cobalt" />
            <span className="h-[3px] w-16 rounded-sm bg-ink/20" />
          </div>

          <p className="mt-8 font-mono text-xs uppercase tracking-[0.2em] text-cobalt">
            Something broke
          </p>
          <h1 className="h-display mt-3 text-4xl leading-tight md:text-5xl">
            That didn&apos;t work.
          </h1>
          <p className="mt-5 text-lg text-slate">
            An unexpected error stopped this page from loading. It&apos;s been
            logged on our side. Try again — and if it keeps happening, tell us
            and we&apos;ll fix it properly.
          </p>

          {error?.digest && (
            <p className="mt-4 font-mono text-xs text-mute">
              Reference: {error.digest}
            </p>
          )}

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button variant="dark" onClick={reset} className="group">
              Try again
            </Button>
            <Button href={`mailto:${site.email}`} variant="ghost" className="group">
              Report the problem
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

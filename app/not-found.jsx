import Link from "next/link";
import { Button } from "../components/Button";
import { GapMotif } from "../components/PlaceholderCard";
import { nav, site } from "../lib/site";

export const metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <section className="bg-white">
      <div className="container-hal flex min-h-[60vh] flex-col justify-center py-24">
        <div className="max-w-xl">
          <GapMotif />
          <p className="mt-8 font-mono text-xs uppercase tracking-[0.2em] text-cobalt">
            Error 404
          </p>
          <h1 className="h-display mt-3 text-4xl leading-tight md:text-5xl">
            There&apos;s a gap here.
          </h1>
          <p className="mt-5 text-lg text-[#555555] dark:text-[#CCCCCC]">
            This page doesn&apos;t exist. It may have moved, or the link that
            sent you here was incorrect. Closing gaps is our thing, so here
            are the ways back.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link href="/" className="link-button-solid">
              Back to Home ↗
            </Link>
            <a href={site.bookingUrl} target="_blank" rel="noopener noreferrer" className="link-button">
              Book a Discovery Call ↗
            </a>
          </div>

          <nav aria-label="Site sections" className="mt-12 border-t border-line pt-6">
            <h2 className="font-mono text-[11px] uppercase tracking-[0.16em] text-mute">
              Or try one of these
            </h2>
            <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[15px] font-medium text-slate transition-colors hover:text-cobalt"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
}

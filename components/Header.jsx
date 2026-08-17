"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "./Logo";
import { Button } from "./Button";
import { ThemeToggle } from "./ThemeToggle";
import { nav, site } from "../lib/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Close the mobile menu whenever the route changes. Without this the panel
  // stays open over the new page after a tap.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // A nav item is active on its own page and on any page beneath it.
  const isActive = (href) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-white/40 dark:border-white/10 bg-white/75 dark:bg-[#121826]/80 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(22,30,46,0.04)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] transition-colors duration-300">
      <div className="container-hal flex h-16 items-center justify-between">
        <Link href="/" aria-label="Halveron home" className="shrink-0">
          <Logo size={34} />
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {nav.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`relative text-[15px] font-medium transition-colors ${
                  active
                    ? "text-ink dark:text-white after:absolute after:-bottom-1.5 after:left-0 after:h-[2px] after:w-full after:rounded-sm after:bg-cobalt after:content-['']"
                    : "text-slate dark:text-[#B9C1D0] hover:text-ink dark:hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <Button href={site.bookingUrl} external size="sm" variant="dark" className="group">
            Book a discovery call
          </Button>
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-line md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="relative block h-4 w-5">
            <span
              className={`absolute left-0 block h-0.5 w-5 bg-ink transition-all ${
                open ? "top-1.5 rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute left-0 top-1.5 block h-0.5 w-5 bg-ink transition-all ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 block h-0.5 w-5 bg-ink transition-all ${
                open ? "top-1.5 -rotate-45" : "top-3"
              }`}
            />
          </span>
        </button>
      </div>

      {open && (
        <div className="border-t border-line/60 dark:border-white/10 bg-white/95 dark:bg-[#121826]/95 backdrop-blur-xl md:hidden">
          <nav className="container-hal flex flex-col py-4" aria-label="Mobile">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={`py-3 text-[15px] font-medium ${
                  isActive(item.href) ? "text-cobalt" : "text-slate dark:text-[#B9C1D0]"
                }`}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-3 flex items-center justify-between gap-3 border-t border-line/60 dark:border-white/10 pt-3">
              <span className="font-mono text-xs text-slate dark:text-mute">Theme</span>
              <ThemeToggle />
            </div>
            <Button
              href={site.bookingUrl}
              external
              variant="dark"
              className="group mt-3"
            >
              Book a discovery call
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}

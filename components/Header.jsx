"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./ThemeToggle";
import { SoundToggle } from "./SoundToggle";
import { CapabilitiesDeckModal } from "./CapabilitiesDeckModal";
import { Logomark } from "./Logo";
import { nav, site } from "../lib/site";
import { sound } from "../lib/sound";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [deckOpen, setDeckOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? "border-b border-[#0F172A]/10 dark:border-white/10 bg-white/85 dark:bg-[#0B0F17]/85 backdrop-blur-xl shadow-sm py-3.5"
            : "border-b border-transparent bg-transparent py-5 md:py-6"
        }`}
      >
        <div className="container-hal flex items-center justify-between">
          {/* Brand Logo & Name */}
          <Link
            href="/"
            onClick={() => sound.playClick()}
            aria-label="Halveron Home"
            className="group flex items-center gap-3 shrink-0"
          >
            <Logomark size={34} />
            <div className="flex items-center gap-1.5">
              <span className="font-display text-xl font-extrabold tracking-[-0.03em] text-[#0F172A] dark:text-white uppercase transition-colors group-hover:text-[#2F6BFF]">
                HALVERON
              </span>
              <span className="font-mono text-xs font-bold text-[#2F6BFF]">®</span>
            </div>
          </Link>

          {/* Octave-style Rounded Nav Pill */}
          <nav
            className="hidden items-center gap-1 rounded-full border border-[#0F172A]/10 dark:border-white/10 bg-white/70 dark:bg-white/5 px-3 py-1.5 backdrop-blur-md lg:flex shadow-xs"
            aria-label="Primary"
          >
            {nav.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => sound.playClick()}
                  onMouseEnter={() => sound.playHover()}
                  aria-current={active ? "page" : undefined}
                  className={`rounded-full px-4 py-1.5 font-sans text-[13px] font-semibold transition-all duration-200 ${
                    active
                      ? "bg-[#2F6BFF] text-white shadow-xs"
                      : "text-[#475569] dark:text-[#CBD5E1] hover:text-[#0F172A] dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/10"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Action Tools & CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              type="button"
              onClick={() => {
                sound.playClick();
                setDeckOpen(true);
              }}
              className="hidden xl:inline-flex items-center gap-2 rounded-full border border-[#0F172A]/15 dark:border-white/15 bg-white/50 dark:bg-white/5 px-4 py-2 font-sans text-[12px] font-semibold text-[#0F172A] dark:text-white hover:border-[#2F6BFF] transition-all cursor-pointer"
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#2F6BFF]">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
              </svg>
              <span>Studio Deck</span>
            </button>

            <SoundToggle />
            <ThemeToggle />

            <a
              href={site.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => sound.playClick()}
              className="link-button-solid text-[13px] py-2.5 px-5"
            >
              <span>Start a Project</span>
              <span className="text-white/80">↗</span>
            </a>
          </div>

          {/* Mobile Actions Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <SoundToggle />
            <ThemeToggle />
            <button
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#0F172A]/20 dark:border-white/20 bg-white/60 dark:bg-white/5 text-[#0F172A] dark:text-white"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => {
                sound.playClick();
                setOpen((v) => !v);
              }}
            >
              <span className="relative block h-4 w-5">
                <span
                  className={`absolute left-0 block h-[2px] w-5 bg-current transition-all duration-300 ${
                    open ? "top-2 rotate-45" : "top-0.5"
                  }`}
                />
                <span
                  className={`absolute left-0 top-2 block h-[2px] w-5 bg-current transition-all duration-300 ${
                    open ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`absolute left-0 block h-[2px] w-5 bg-current transition-all duration-300 ${
                    open ? "top-2 -rotate-45" : "top-3.5"
                  }`}
                />
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Drawer Menu */}
        {open && (
          <div className="fixed inset-x-0 top-[65px] bottom-0 z-50 flex flex-col justify-between border-t border-[#0F172A]/10 dark:border-white/10 bg-[#FAFAFC] dark:bg-[#0B0F17] p-8 lg:hidden overflow-y-auto animate-riseIn">
            <nav className="flex flex-col space-y-3 pt-2" aria-label="Mobile Navigation">
              {nav.map((item, idx) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center justify-between rounded-xl p-3.5 font-display text-lg font-bold ${
                    isActive(item.href)
                      ? "bg-[#2F6BFF] text-white"
                      : "text-[#0F172A] dark:text-white hover:bg-black/5 dark:hover:bg-white/5"
                  }`}
                  onClick={() => {
                    sound.playClick();
                    setOpen(false);
                  }}
                >
                  <span>{item.label}</span>
                  <span className={`font-mono text-xs ${isActive(item.href) ? "text-white/80" : "text-[#2F6BFF]"}`}>
                    0{idx + 1}
                  </span>
                </Link>
              ))}
            </nav>

            <div className="pt-6 space-y-3 border-t border-[#0F172A]/10 dark:border-white/10">
              <button
                type="button"
                onClick={() => {
                  setOpen(false);
                  setDeckOpen(true);
                }}
                className="link-button w-full text-center block"
              >
                View Studio Deck 2026 ↗
              </button>
              <a
                href={site.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="link-button-solid w-full text-center block"
              >
                Start a Project ↗
              </a>
              <div className="text-center font-mono text-xs text-[#64748B] pt-2">
                {site.location} · {site.email}
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Capabilities Deck Modal */}
      <CapabilitiesDeckModal
        isOpen={deckOpen}
        onClose={() => setDeckOpen(false)}
      />
    </>
  );
}

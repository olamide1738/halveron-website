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
            ? "border-b border-[#111111]/10 dark:border-white/10 bg-[#FEFAF7]/90 dark:bg-[#0B0F17]/90 backdrop-blur-md shadow-xs py-3"
            : "border-b border-transparent bg-transparent py-5 md:py-6"
        }`}
      >
        <div className="container-hal flex items-center justify-between">
          {/* Halveron Brand Mark & Wordmark */}
          <Link
            href="/"
            onClick={() => sound.playClick()}
            aria-label="Halveron Home"
            className="group flex items-center gap-2.5 shrink-0"
          >
            <Logomark size={32} />
            <span className="font-mono text-xl font-bold tracking-tight text-[#111111] dark:text-white uppercase transition-colors group-hover:text-[#2F6BFF]">
              HALVERON
            </span>
            <span className="font-mono text-xs font-bold text-[#2F6BFF]">®</span>
          </Link>

          {/* Numbered Swiss Navigation */}
          <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
            {nav.map((item, idx) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => sound.playClick()}
                  onMouseEnter={() => sound.playHover()}
                  aria-current={active ? "page" : undefined}
                  className={`line-btm-ani group flex items-center gap-1.5 font-mono text-[12px] uppercase tracking-[0.14em] transition-colors ${
                    active
                      ? "active font-bold text-[#2F6BFF]"
                      : "text-[#111111] dark:text-[#CCCCCC] hover:text-[#2F6BFF] dark:hover:text-[#2F6BFF]"
                  }`}
                >
                  <span className="text-[10px] text-[#2F6BFF] opacity-70 group-hover:opacity-100">
                    0{idx + 1}
                  </span>
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Actions (Deck Modal, Sound Toggle, Theme Toggle & 3D CTA) */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              type="button"
              onClick={() => {
                sound.playClick();
                setDeckOpen(true);
              }}
              className="hidden xl:inline-flex items-center gap-1.5 rounded-xs border border-[#111111]/20 dark:border-white/20 px-3 py-1.5 font-mono text-[11px] font-bold text-[#111111] dark:text-white hover:border-[#2F6BFF] transition-colors cursor-pointer"
            >
              <span>📄</span>
              <span>Deck 2026</span>
            </button>

            <SoundToggle />
            <ThemeToggle />

            <a
              href={site.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => sound.playClick()}
              className="link-button text-[11px] py-2.5 px-4"
            >
              Inquire <span className="text-[#2F6BFF]">↗</span>
            </a>
          </div>

          {/* Mobile Actions Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <SoundToggle />
            <ThemeToggle />
            <button
              className="flex h-9 w-9 items-center justify-center rounded-xs border border-[#111111]/30 dark:border-white/30 text-[#111111] dark:text-white"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => {
                sound.playClick();
                setOpen((v) => !v);
              }}
            >
              <span className="relative block h-4 w-5">
                <span
                  className={`absolute left-0 block h-[1.5px] w-5 bg-current transition-all duration-300 ${
                    open ? "top-2 rotate-45" : "top-0.5"
                  }`}
                />
                <span
                  className={`absolute left-0 top-2 block h-[1.5px] w-5 bg-current transition-all duration-300 ${
                    open ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`absolute left-0 block h-[1.5px] w-5 bg-current transition-all duration-300 ${
                    open ? "top-2 -rotate-45" : "top-3.5"
                  }`}
                />
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Drawer Menu */}
        {open && (
          <div className="fixed inset-x-0 top-[60px] bottom-0 z-50 flex flex-col justify-between border-t border-[#111111]/15 dark:border-white/10 bg-[#FEFAF7] dark:bg-[#0B0F17] p-8 lg:hidden overflow-y-auto animate-riseIn">
            <nav className="flex flex-col space-y-4 pt-4" aria-label="Mobile Navigation">
              {nav.map((item, idx) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-baseline justify-between border-b border-[#111111]/10 dark:border-white/10 pb-4 font-mono text-base uppercase tracking-wider ${
                    isActive(item.href) ? "text-[#2F6BFF] font-bold" : "text-[#111111] dark:text-white"
                  }`}
                  onClick={() => {
                    sound.playClick();
                    setOpen(false);
                  }}
                >
                  <span>{item.label}</span>
                  <span className="text-xs text-[#2F6BFF]">0{idx + 1}</span>
                </Link>
              ))}
            </nav>

            <div className="pt-8 space-y-3">
              <button
                type="button"
                onClick={() => {
                  setOpen(false);
                  setDeckOpen(true);
                }}
                className="link-button w-full text-center block"
              >
                View Capabilities Deck 2026 ↗
              </button>
              <a
                href={site.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="link-button-solid w-full text-center block"
              >
                Start a Project ↗
              </a>
              <div className="text-center font-mono text-xs text-[#777777] pt-2">
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

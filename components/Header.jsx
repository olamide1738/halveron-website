"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./ThemeToggle";
import { Logomark } from "./Logo";
import { nav, site } from "../lib/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
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
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "border-b border-[#0F172A]/10 dark:border-white/10 bg-white/85 dark:bg-[#0B0F17]/85 backdrop-blur-xl shadow-xs py-3.5"
          : "border-b border-transparent bg-transparent py-5 md:py-6"
      }`}
    >
      <div className="container-hal flex items-center justify-between">
        {/* Brand Logo & Name */}
        <Link
          href="/"
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

        {/* Streamlined Octave Navigation Pill */}
        <nav
          className="hidden items-center gap-1 rounded-full border border-[#0F172A]/10 dark:border-white/10 bg-white/70 dark:bg-white/5 px-3 py-1.5 backdrop-blur-md md:flex shadow-xs"
          aria-label="Primary"
        >
          {nav.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
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
          <ThemeToggle />

          <Link
            href="/contact"
            className="link-button-solid text-[13px] py-2.5 px-5"
          >
            <span>Get in Touch</span>
            <span className="text-white/80">↗</span>
          </Link>
        </div>

        {/* Mobile Actions Button */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#0F172A]/20 dark:border-white/20 bg-white/60 dark:bg-white/5 text-[#0F172A] dark:text-white"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
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
        <div className="fixed inset-x-0 top-[65px] bottom-0 z-50 flex flex-col justify-between border-t border-[#0F172A]/10 dark:border-white/10 bg-[#FAFAFC] dark:bg-[#0B0F17] p-8 md:hidden overflow-y-auto animate-riseIn">
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
                onClick={() => setOpen(false)}
              >
                <span>{item.label}</span>
                <span className={`font-mono text-xs ${isActive(item.href) ? "text-white/80" : "text-[#2F6BFF]"}`}>
                  0{idx + 1}
                </span>
              </Link>
            ))}
          </nav>

          <div className="pt-6 space-y-3 border-t border-[#0F172A]/10 dark:border-white/10">
            <Link
              href="/contact"
              className="link-button-solid w-full text-center block"
              onClick={() => setOpen(false)}
            >
              Get in Touch ↗
            </Link>
            <div className="text-center font-mono text-xs text-[#64748B] pt-2">
              {site.location} · {site.email}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

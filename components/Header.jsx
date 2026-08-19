"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./ThemeToggle";
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
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-[#111111]/10 dark:border-white/10 bg-[#FEFAF7]/85 dark:bg-[#0E1117]/85 backdrop-blur-md shadow-xs py-3"
          : "border-b border-transparent bg-transparent py-4 md:py-6"
      }`}
    >
      <div className="container-hal flex items-center justify-between">
        {/* Brand Logo in Swiss Style */}
        <Link href="/" aria-label="Halveron Home" className="group flex items-center gap-1.5 shrink-0">
          <span className="font-mono text-xl font-bold tracking-tight text-[#111111] dark:text-white uppercase transition-colors group-hover:text-[#FF512F]">
            HALVERON
          </span>
          <span className="font-mono text-xs font-bold text-[#FF512F]">®</span>
        </Link>

        {/* Numbered Swiss Navigation */}
        <nav className="hidden items-center gap-10 md:flex" aria-label="Primary">
          {nav.map((item, idx) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`line-btm-ani group flex items-center gap-1.5 font-mono text-[13px] uppercase tracking-[0.14em] transition-colors ${
                  active
                    ? "active font-bold text-[#FF512F]"
                    : "text-[#111111] dark:text-[#CCCCCC] hover:text-[#FF512F] dark:hover:text-[#FF512F]"
                }`}
              >
                <span className="text-[10px] text-[#FF512F] opacity-70 group-hover:opacity-100">
                  0{idx + 1}
                </span>
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Actions (Theme Toggle & 3D Shadow-Pop CTA) */}
        <div className="hidden md:flex items-center gap-5">
          <ThemeToggle />
          <a
            href={site.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="link-button text-[11px]"
          >
            Inquire Project <span className="text-[#FF512F]">↗</span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button
            className="flex h-10 w-10 items-center justify-center rounded-sm border border-[#111111]/30 dark:border-white/30 text-[#111111] dark:text-white"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
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

      {/* Mobile Swiss Drawer Menu */}
      {open && (
        <div className="fixed inset-x-0 top-[65px] bottom-0 z-40 flex flex-col justify-between border-t border-[#111111]/15 dark:border-white/10 bg-[#FEFAF7] dark:bg-[#0E1117] p-8 md:hidden overflow-y-auto animate-riseIn">
          <nav className="flex flex-col space-y-4 pt-4" aria-label="Mobile Navigation">
            {nav.map((item, idx) => (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-baseline justify-between border-b border-[#111111]/10 dark:border-white/10 pb-4 font-mono text-lg uppercase tracking-wider ${
                  isActive(item.href) ? "text-[#FF512F] font-bold" : "text-[#111111] dark:text-white"
                }`}
                onClick={() => setOpen(false)}
              >
                <span>{item.label}</span>
                <span className="text-xs text-[#FF512F]">0{idx + 1}</span>
              </Link>
            ))}
          </nav>

          <div className="pt-8 space-y-4">
            <a
              href={site.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="link-button-solid w-full text-center"
            >
              Start a Project ↗
            </a>
            <div className="text-center font-mono text-xs text-[#777777]">
              {site.location} · {site.email}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

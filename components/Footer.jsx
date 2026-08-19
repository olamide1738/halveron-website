import Link from "next/link";
import { NewsletterForm } from "./NewsletterForm";
import { nav, services, site } from "../lib/site";

export function Footer() {
  return (
    <footer className="border-t border-[#111111]/15 dark:border-white/10 bg-[#FEFAF7] dark:bg-[#07090D] text-[#111111] dark:text-white transition-colors duration-300">
      <div className="container-hal pt-20 pb-12">
        {/* Giant Swiss Typographic Wordmark */}
        <div className="border-b border-[#111111]/15 dark:border-white/10 pb-12">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#FF512F]">
                Digital Product Studio & Web Agency
              </span>
              <h2 className="serif-display mt-2 text-6xl font-normal tracking-tight md:text-8xl lg:text-9xl text-[#111111] dark:text-white">
                HALVERON<span className="text-[#FF512F]">®</span>
              </h2>
            </div>
            <div className="max-w-xs pb-2">
              <p className="font-mono text-xs uppercase tracking-wider text-[#666666] dark:text-[#AAAAAA]">
                Turning ambitious ideas into finished, high-performing websites and mobile products.
              </p>
            </div>
          </div>
        </div>

        {/* Numbered Columns */}
        <div className="grid gap-10 py-16 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-[#FF512F]">
              <span>01</span>
              <span>Studio</span>
            </div>
            <ul className="mt-5 space-y-3 font-mono text-xs uppercase tracking-wider">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="line-btm-ani text-[#444444] dark:text-[#CCCCCC] hover:text-[#FF512F]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/careers"
                  className="line-btm-ani text-[#444444] dark:text-[#CCCCCC] hover:text-[#FF512F]"
                >
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-[#FF512F]">
              <span>02</span>
              <span>Services</span>
            </div>
            <ul className="mt-5 space-y-3 font-mono text-xs uppercase tracking-wider">
              {services.slice(0, 5).map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services#${s.slug}`}
                    className="line-btm-ani text-[#444444] dark:text-[#CCCCCC] hover:text-[#FF512F]"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-[#FF512F]">
              <span>03</span>
              <span>Contact</span>
            </div>
            <div className="mt-5 space-y-3 font-mono text-xs uppercase tracking-wider text-[#444444] dark:text-[#CCCCCC]">
              <p>
                <a
                  href={`mailto:${site.email}`}
                  className="line-btm-ani hover:text-[#FF512F]"
                >
                  {site.email}
                </a>
              </p>
              <p>
                <a
                  href={site.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="line-btm-ani text-[#FF512F] font-bold"
                >
                  Book Discovery Call ↗
                </a>
              </p>
              <p className="text-[#888888] pt-2">
                Lagos (UTC+1) · Global Overlap
              </p>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-[#FF512F]">
              <span>04</span>
              <span>Updates</span>
            </div>
            <div className="mt-5">
              <p className="font-mono text-xs text-[#666666] dark:text-[#AAAAAA] mb-4">
                Quarterly studio briefings and new project releases.
              </p>
              <NewsletterForm />
            </div>
          </div>
        </div>

        {/* Legal & Copyright */}
        <div className="flex flex-col justify-between gap-4 border-t border-[#111111]/15 dark:border-white/10 pt-8 font-mono text-xs text-[#777777] md:flex-row md:items-center">
          <span>
            © {new Date().getFullYear()} HALVERON STUDIO. ALL RIGHTS RESERVED.
          </span>

          <nav aria-label="Legal" className="flex flex-wrap gap-x-6 gap-y-2">
            <Link href="/privacy" className="line-btm-ani hover:text-[#FF512F]">
              Privacy Policy
            </Link>
            <Link href="/terms" className="line-btm-ani hover:text-[#FF512F]">
              Terms of Service
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}

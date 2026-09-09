import Link from "next/link";
import { Logomark } from "./Logo";
import { NewsletterForm } from "./NewsletterForm";
import { nav, services, site } from "../lib/site";

export function Footer() {
  return (
    <footer className="border-t border-[#0F172A]/10 dark:border-white/10 bg-[#FAFAFC] dark:bg-[#07090D] text-[#0F172A] dark:text-white transition-colors duration-300">
      <div className="container-hal pt-20 pb-12">
        {/* Typographic Wordmark & Studio Brand */}
        <div className="border-b border-[#0F172A]/10 dark:border-white/10 pb-12">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Logomark size={36} />
                <span className="font-mono text-xs font-bold uppercase tracking-[0.14em] text-[#2F6BFF]">
                  Creative Digital &amp; Web Design Agency
                </span>
              </div>
              <h2 className="heading-display text-5xl font-extrabold tracking-[-0.04em] sm:text-7xl md:text-8xl lg:text-9xl text-[#0F172A] dark:text-white">
                HALVERON<span className="text-[#2F6BFF]">®</span>
              </h2>
            </div>
            <div className="max-w-xs pb-2">
              <p className="font-sans text-sm text-[#64748B] dark:text-[#94A3B8] leading-relaxed">
                We craft visually stunning, user-friendly, and high-performing websites that elevate your brand.
              </p>
            </div>
          </div>
        </div>

        {/* Navigation & Contact Columns */}
        <div className="grid gap-10 py-16 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-[#2F6BFF]">
              <span>01</span>
              <span>Services</span>
            </div>
            <ul className="mt-5 space-y-3 font-sans text-sm">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services#${s.slug}`}
                    className="line-btm-ani text-[#475569] dark:text-[#CBD5E1] hover:text-[#2F6BFF] font-medium"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-[#2F6BFF]">
              <span>02</span>
              <span>Agency</span>
            </div>
            <ul className="mt-5 space-y-3 font-sans text-sm">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="line-btm-ani text-[#475569] dark:text-[#CBD5E1] hover:text-[#2F6BFF] font-medium"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/careers"
                  className="line-btm-ani text-[#475569] dark:text-[#CBD5E1] hover:text-[#2F6BFF] font-medium"
                >
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-[#2F6BFF]">
              <span>03</span>
              <span>Contact</span>
            </div>
            <div className="mt-5 space-y-3 font-sans text-sm text-[#475569] dark:text-[#CBD5E1]">
              <p>
                <a
                  href={`mailto:${site.email}`}
                  className="line-btm-ani hover:text-[#2F6BFF] font-medium"
                >
                  {site.email}
                </a>
              </p>
              <p>
                <a
                  href={site.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="line-btm-ani text-[#2F6BFF] font-bold"
                >
                  Book Discovery Call ↗
                </a>
              </p>
              <p className="text-xs text-[#94A3B8] pt-2 font-mono">
                {site.location}
              </p>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-[#2F6BFF]">
              <span>04</span>
              <span>Stay Updated</span>
            </div>
            <div className="mt-5">
              <p className="font-sans text-xs text-[#64748B] dark:text-[#94A3B8] mb-4">
                Quarterly design insights, agency news, and new project launches.
              </p>
              <NewsletterForm />
            </div>
          </div>
        </div>

        {/* Legal & Copyright */}
        <div className="flex flex-col justify-between gap-4 border-t border-[#0F172A]/10 dark:border-white/10 pt-8 font-mono text-xs text-[#64748B] md:flex-row md:items-center">
          <span>
            © {new Date().getFullYear()} HALVERON AGENCY LTD. ALL RIGHTS RESERVED.
          </span>

          <nav aria-label="Legal" className="flex flex-wrap gap-x-6 gap-y-2">
            <Link href="/privacy" className="line-btm-ani hover:text-[#2F6BFF]">
              Privacy Policy
            </Link>
            <Link href="/terms" className="line-btm-ani hover:text-[#2F6BFF]">
              Terms of Service
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}

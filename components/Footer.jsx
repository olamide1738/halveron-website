import Link from "next/link";
import { Logomark } from "./Logo";
import { NewsletterForm } from "./NewsletterForm";
import { nav, services, site } from "../lib/site";

export function Footer() {
  return (
    <footer className="border-t border-ink-line bg-ink text-white">
      <div className="container-hal py-16">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <span className="inline-flex items-center gap-3">
              <Logomark size={36} reversed />
              <span className="font-display text-[18px] font-bold tracking-[2px] text-white">
                HALVERON
              </span>
            </span>
            <p className="mt-4 max-w-xs text-sm text-[#8b93a5]">
              {site.tagline}
            </p>
            <p className="mt-4 font-mono text-xs uppercase tracking-[0.14em] text-[#6b7690]">
              {site.location}
            </p>
          </div>

          <FooterCol title="Company">
            {nav.map((item) => (
              <FooterLink key={item.href} href={item.href}>
                {item.label}
              </FooterLink>
            ))}
            <FooterLink href="/careers">Careers</FooterLink>
          </FooterCol>

          <FooterCol title="Services">
            {services.slice(0, 5).map((s) => (
              <FooterLink key={s.slug} href={`/services#${s.slug}`}>
                {s.title}
              </FooterLink>
            ))}
          </FooterCol>

          <FooterCol title="Connect">
            <FooterLink href={`mailto:${site.email}`} external>
              {site.email}
            </FooterLink>
            {site.socials.map((s) => (
              <FooterLink key={s.href} href={s.href} external>
                {s.label}
              </FooterLink>
            ))}
          </FooterCol>
        </div>

        <div className="mt-14 border-t border-ink-line pt-10">
          <div className="max-w-sm">
            <NewsletterForm />
          </div>
        </div>

        <div className="mt-12 flex flex-col justify-between gap-4 border-t border-ink-line pt-6 font-mono text-xs text-[#6b7690] md:flex-row md:items-center">
          <span>
            © {new Date().getFullYear()} Halveron. All rights reserved.
          </span>

          <nav aria-label="Legal" className="flex flex-wrap gap-x-6 gap-y-2">
            <Link href="/privacy" className="transition-colors hover:text-white">
              Privacy
            </Link>
            <Link href="/terms" className="transition-colors hover:text-white">
              Terms
            </Link>
            <span className="tracking-[0.14em]">
              CLOSING THE GAP BETWEEN IDEA &amp; REALITY
            </span>
          </nav>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }) {
  return (
    <div>
      <h3 className="font-mono text-[11px] uppercase tracking-[0.16em] text-cobalt-light">
        {title}
      </h3>
      <ul className="mt-4 space-y-2.5">{children}</ul>
    </div>
  );
}

function FooterLink({ href, children, external = false }) {
  const cls =
    "text-sm text-[#B9C1D0] transition-colors hover:text-white";
  return (
    <li>
      {external ? (
        <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
          {children}
        </a>
      ) : (
        <Link href={href} className={cls}>
          {children}
        </Link>
      )}
    </li>
  );
}

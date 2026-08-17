import Script from "next/script";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { CookieNotice } from "../components/CookieNotice";
import { BackToTop } from "../components/BackToTop";
import { site } from "../lib/site";
import "./globals.css";

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Halveron — Premium digital product studio",
    template: "%s — Halveron",
  },
  description: site.description,
  openGraph: {
    title: "Halveron — Premium digital product studio",
    description: site.description,
    url: site.url,
    siteName: "Halveron",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Halveron — Premium digital product studio",
    description: site.description,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&family=Outfit:wght@400;500;600;700;800;900&family=Plus+Jakarta+Sans:ital,wght@0,300..800;1,300..800&display=swap"
          rel="stylesheet"
        />
        <meta name="color-scheme" content="light dark" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var stored = localStorage.getItem('color-scheme');
                  var systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  var theme = stored || (systemDark ? 'dark' : 'light');
                  if (theme === 'dark') {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                  var meta = document.querySelector('meta[name="color-scheme"]');
                  if (meta) meta.content = theme;
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-ink focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <CookieNotice />
        <BackToTop />

        {/* Privacy-focused analytics, loaded only once you set
            site.analyticsDomain. Nothing is requested until then. */}
        {site.analyticsDomain && (
          <Script
            defer
            data-domain={site.analyticsDomain}
            src="https://plausible.io/js/script.js"
            strategy="afterInteractive"
          />
        )}
      </body>
    </html>
  );
}

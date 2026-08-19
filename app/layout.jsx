import Script from "next/script";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { CookieNotice } from "../components/CookieNotice";
import { BackToTop } from "../components/BackToTop";
import { CustomCursor } from "../components/CustomCursor";
import { site } from "../lib/site";
import "./globals.css";

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Halveron® · Digital Product Studio & Web Agency",
    template: "%s · Halveron",
  },
  description: site.description,
  openGraph: {
    title: "Halveron® · Digital Product Studio & Web Agency",
    description: site.description,
    url: site.url,
    siteName: "Halveron",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Halveron® · Digital Product Studio & Web Agency",
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
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=JetBrains+Mono:wght@400;500;600&family=Plus+Jakarta+Sans:ital,wght@0,300..800;1,300..800&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap"
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
        <CustomCursor />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-sm focus:bg-[#111111] focus:px-4 focus:py-2 focus:text-white font-mono text-xs uppercase"
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

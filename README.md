# Halveron — Website

The marketing site for Halveron, built with **Next.js 14 (App Router)** and **Tailwind CSS**. Multi-page, statically exportable, and wired to the locked Halveron brand system.

---

## Quick start

```bash
# 1. Install dependencies
npm install

# 2. Set up environment variables (needed for the contact form)
cp .env.example .env.local
#    then fill in the three values — see "The contact form" below

# 3. Run the dev server
npm run dev
# → open http://localhost:3000

# 4. Build for production
npm run build
npm start
```

Requires Node 18.17+ (Node 20 LTS recommended).

---

## Before you go live — edit these

All contact details and the booking link live in **one file**: `lib/site.js`, at the top in the `site` object. Search for `TODO` and replace:

| Field | What to set it to |
|-------|-------------------|
| `url` | Your real domain, e.g. `https://halveron.com` |
| `email` | Your real inbox |
| `phone` | Your real number |
| `whatsapp` | Your WhatsApp click-to-chat link (`https://wa.me/234...`) |
| `bookingUrl` | Your Cal.com or Calendly link — this is the primary CTA site-wide |
| `socials` | Real profile URLs (or delete the ones you don't use) |
| `analyticsDomain` | Your Plausible domain. **Leave empty and no analytics script loads and no cookie notice appears.** |
| `legal` | Registered entity name, CAC number, address, privacy inbox — used by `/privacy` and `/terms` |

Everything else on the site — services, process, pricing, FAQs, work slots — is also driven from `lib/site.js`, so you can update copy without touching the pages.

### Proof arrays — empty on purpose

Four arrays near the bottom of `lib/site.js` ship as `[]`:

| Array | Renders when populated | Renders when empty |
|-------|------------------------|--------------------|
| `testimonials` | Quote cards on `/` and `/work` | Dashed "awaiting first case study" slots |
| `clients` | Named client marks on `/` | A note that clients are named only with permission |
| `team` | Team cards on `/about` (monogram avatars — no photography needed) | "Profile coming" slots |
| `openings` | Role listings on `/careers` | "No open roles" + speculative-application CTA |

Add an entry and the real section renders automatically — **no component edits needed.** The shapes are documented in comments above each array.

> **Do not fill these with invented quotes, logos, or names.** Unverifiable social proof is the first thing a diligent prospect checks, and the fastest way to lose a technical buyer.

There is also a `stats` array carrying the home-page credibility figures. The `~50%` cost-advantage claim in it is currently **unsourced** — substantiate it (state the comparison basis) or soften it before launch.

---

## Project structure

```
halveron-website/
├── app/
│   ├── layout.jsx          # Root layout: fonts, <Header>, <Footer>, metadata, analytics
│   ├── globals.css         # Tailwind + brand base styles
│   ├── icon.svg            # Favicon (the Halveron mark)
│   ├── not-found.jsx       # Custom 404
│   ├── error.jsx           # Route error boundary ("use client" — Next requirement)
│   ├── loading.jsx         # Route-level skeleton
│   ├── page.jsx            # Home
│   ├── services/page.jsx   # Services (anchored sections per service)
│   ├── work/page.jsx       # Work — placeholder case-study slots
│   ├── about/page.jsx      # About — story, principles, team, stats
│   ├── contact/page.jsx    # Contact — booking CTA + working form + FAQ accordion
│   ├── careers/page.jsx    # Careers — reads `openings`
│   ├── privacy/page.jsx    # Privacy policy (NDPA + GDPR shaped)
│   ├── terms/page.jsx      # Terms of use
│   └── api/contact/route.js # POST handler: validation, honeypot, rate limit, Resend
├── components/
│   ├── Logo.jsx            # Logomark + wordmark (reversible for dark bg)
│   ├── Header.jsx          # Sticky nav, mobile menu, active-link state ("use client")
│   ├── Footer.jsx          # Site footer + newsletter + legal links
│   ├── Button.jsx          # Button/link with variants
│   ├── Section.jsx         # Section, Eyebrow, GapDivider, SectionHeading
│   ├── CTASection.jsx      # Reusable dark "close the gap" CTA band
│   ├── PlaceholderCard.jsx # Shared honest empty-state card + gap motif
│   ├── Testimonials.jsx    # Quotes or placeholders
│   ├── ClientLogos.jsx     # Client marks or placeholder
│   ├── TeamGrid.jsx        # Team cards with monogram avatars
│   ├── StatBand.jsx        # Dark stats band, reads `stats`
│   ├── ContactForm.jsx     # Real submit states ("use client")
│   ├── NewsletterForm.jsx  # Footer signup ("use client")
│   ├── CookieNotice.jsx    # Only renders if analytics is enabled ("use client")
│   ├── LegalLayout.jsx     # Shared shell for /privacy and /terms
│   └── Reveal.jsx          # Scroll reveal, degrades safely ("use client")
├── lib/
│   └── site.js             # ← ALL content & config lives here
├── .env.example            # Contact-form environment variables
├── tailwind.config.js      # Brand tokens (colours, fonts, animations)
├── postcss.config.js
├── next.config.js
├── jsconfig.json
└── package.json
```

---

## Brand system in code

The locked Halveron identity is encoded so you can't accidentally drift off-brand:

- **Colours** (`tailwind.config.js`): `ink` `#161E2E`, `slate` `#2E3A52`, `paper` `#F3F5F8`, `cobalt` `#2F6BFF`, plus `line`/`mute` neutrals. Cobalt is used sparingly as the single accent, per the brand guidelines.
- **Type**: Space Grotesk (display), Inter (body), IBM Plex Mono (labels/eyebrows), loaded via `next/font/google` and exposed as CSS variables.
- **The measured-gap motif**: the `<GapDivider>` component and the `gapClose` keyframe animation (the gap closes on page load) express the core brand idea.

---

## The contact form

`/contact` posts JSON to `app/api/contact/route.js`, which validates, screens for bots, rate-limits, and sends the brief by email via the **Resend REST API** (called with plain `fetch` — no SDK dependency). The footer newsletter form posts to the same route with `type: "newsletter"`.

**Setup:** copy `.env.example` to `.env.local` and fill in all three variables.

```bash
cp .env.example .env.local
```

| Variable | Notes |
|----------|-------|
| `RESEND_API_KEY` | From https://resend.com/api-keys |
| `CONTACT_TO_EMAIL` | Inbox that receives briefs and signups |
| `CONTACT_FROM_EMAIL` | Must be a **domain you've verified in Resend**, not a free mailbox |

If any are missing the route returns a clear `503` with a "not configured" message and logs it — it never reports a fake success, so you won't silently lose leads.

**What the route does:**

- Length caps and format checks on every field; returns `400` with the offending `field` name so the UI can point at it
- A honeypot field (`company_url`). If filled, the route returns `200 {ok:true}` without sending, so bots don't retry
- Fixed-window in-memory rate limit — 5 requests/minute per IP. Note this is **per server instance**, so on multi-instance or serverless hosting it's a speed bump, not a guarantee. Put a WAF or Turnstile in front if you get targeted
- HTML-escapes all user input before interpolating it into the email body

The primary CTA everywhere is still the **booking link**; the form is the secondary path.

---

## Analytics & cookies

Set `site.analyticsDomain` in `lib/site.js` to your Plausible domain to enable analytics. While it's empty:

- no script tag is rendered,
- no third-party request is made,
- and `<CookieNotice>` renders nothing.

Plausible is cookieless, so the notice is informational rather than a consent gate. **If you switch to a tool that sets cookies or tracks across sites, this is no longer sufficient** — you'll need real consent-before-load logic.

---

## Legal pages

`/privacy` and `/terms` are structured documents shaped for Nigeria's NDPA and the GDPR, driven by the `legal` object in `lib/site.js`.

> ⚠️ **These are drafts, not legal advice.** Fill in the `TODO` fields (registered entity name, CAC number, registered address, privacy inbox) and have a lawyer review both before launch.

---

## Deploying

This is a standard Next.js app and deploys anywhere that supports Node:

- **Vercel** (easiest): push to a Git repo and import. Zero config. Add the three contact env vars in project settings.
- **Netlify**: uses the Next.js runtime automatically. Same env vars.
- **Static export**: ~~add `output: "export"`~~ — **no longer available.** The contact form needs a server to run `app/api/contact/route.js`. If you must export statically, swap the form to a third-party endpoint (Formspree, Netlify Forms) first.

Every page except `/api/contact` is statically prerendered, so hosting cost and TTFB stay low regardless.

---

## Notes

- The **Work** page ships with four honestly-labelled "case study in progress" placeholders. Replace entries in `workSlots` (in `lib/site.js`) with real projects, and build out individual case-study pages under `app/work/[slug]/` when you're ready.
- Accessibility: skip-link, keyboard focus rings, semantic landmarks, `aria-current` on the active nav link, `aria-live` form status, and a `prefers-reduced-motion` block are all in place. The FAQ uses native `<details>/<summary>` so it's keyboard- and screen-reader-accessible with no JavaScript.
- `<Reveal>` applies its hidden state **after** mount, never in the server HTML — if JS fails, content stays visible rather than disappearing.
- No third-party JS beyond React/Next — fast by default.

### Still to do

- **Open Graph image.** `layout.jsx` declares `card: "summary_large_image"` but no image exists, so **social shares currently render blank.** Add `app/opengraph-image.jsx` using Next's built-in `ImageResponse` (~20 lines, zero deps).
- **`app/sitemap.js` and `app/robots.js`** — Next-native, ~12 lines each.
- **Blog / insights.** Planned as MDX under `content/posts/*.mdx` + `app/insights/[slug]/page.jsx`. Needs `npm i @next/mdx @mdx-js/loader @mdx-js/react`.

Built to the Halveron Brand Guidelines v1.0.

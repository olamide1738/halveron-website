// Contact + newsletter endpoint.
//
// Sends through the Resend REST API with plain fetch() rather than the `resend`
// SDK, so this adds zero dependencies.
//
// Required env (see .env.example):
//   RESEND_API_KEY    — from resend.com/api-keys
//   CONTACT_TO_EMAIL  — inbox that receives briefs
//   CONTACT_FROM_EMAIL— verified sender on your Resend domain
//
// With env unset the route returns a clear 503 instead of crashing, so a
// misconfigured deploy is obvious rather than silently dropping leads.

const RESEND_ENDPOINT = "https://api.resend.com/emails";

// Simple fixed-window rate limit, keyed by IP. In-memory, so it resets on
// redeploy and is per-instance — enough to stop casual bot floods, not a
// substitute for a real WAF. Swap for Upstash/Redis if you need strict limits.
const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 5;
const hits = new Map();

function rateLimited(ip) {
  const now = Date.now();
  const entry = hits.get(ip);

  if (!entry || now > entry.resetAt) {
    hits.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }

  entry.count += 1;
  if (entry.count > MAX_PER_WINDOW) return true;

  // Opportunistic cleanup so the map cannot grow without bound.
  if (hits.size > 5_000) {
    for (const [key, value] of hits) {
      if (now > value.resetAt) hits.delete(key);
    }
  }

  return false;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX = { name: 120, email: 200, company: 160, brief: 5_000 };

function clean(value, max) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

// Escape user input before interpolating into the notification email's HTML.
function esc(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return json({ error: "Malformed request." }, 400);
  }

  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0].trim() ||
    request.headers.get("x-real-ip") ||
    "unknown";

  if (rateLimited(ip)) {
    return json(
      { error: "Too many submissions. Please try again in a minute." },
      429,
    );
  }

  // Honeypot: a field hidden from humans via CSS. Anything filling it is a bot.
  // Return 200 so the bot believes it succeeded and does not retry.
  if (clean(body.company_url, 200)) {
    console.warn(`[contact] honeypot triggered from ${ip}`);
    return json({ ok: true });
  }

  const isNewsletter = body.type === "newsletter";
  const email = clean(body.email, MAX.email);

  if (!EMAIL_RE.test(email)) {
    return json({ error: "Please enter a valid email address.", field: "email" }, 400);
  }

  let subject;
  let html;

  if (isNewsletter) {
    subject = `Newsletter signup — ${email}`;
    html = `<h2>New newsletter signup</h2><p><strong>Email:</strong> ${esc(email)}</p>`;
  } else {
    const name = clean(body.name, MAX.name);
    const brief = clean(body.brief, MAX.brief);

    if (name.length < 2) {
      return json({ error: "Please enter your name.", field: "name" }, 400);
    }
    if (brief.length < 20) {
      return json(
        {
          error: "Please give us at least a sentence or two about the project.",
          field: "brief",
        },
        400,
      );
    }

    const company = clean(body.company, MAX.company);
    const budget = clean(body.budget, 60);
    const timeline = clean(body.timeline, 60);

    subject = `New brief — ${name}${company ? ` (${company})` : ""}`;
    html = `
      <h2>New project brief</h2>
      <table cellpadding="6" style="border-collapse:collapse;font-family:sans-serif">
        <tr><td><strong>Name</strong></td><td>${esc(name)}</td></tr>
        <tr><td><strong>Email</strong></td><td>${esc(email)}</td></tr>
        <tr><td><strong>Company</strong></td><td>${esc(company) || "—"}</td></tr>
        <tr><td><strong>Budget</strong></td><td>${esc(budget) || "—"}</td></tr>
        <tr><td><strong>Timeline</strong></td><td>${esc(timeline) || "—"}</td></tr>
      </table>
      <h3>Brief</h3>
      <p style="white-space:pre-wrap;font-family:sans-serif">${esc(brief)}</p>
      <hr />
      <p style="color:#6B7488;font-size:12px">Sent from the halveron.com contact form · ${esc(ip)}</p>
    `;
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !to || !from) {
    // Loud in logs, honest to the user — never a silent success.
    console.error(
      "[contact] Missing email env vars. Set RESEND_API_KEY, CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL.",
    );
    return json(
      {
        error:
          "The form isn't configured yet. Please email us directly and we'll reply the same day.",
      },
      503,
    );
  }

  try {
    const res = await fetch(RESEND_ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject,
        html,
      }),
    });

    if (!res.ok) {
      const detail = await res.text();
      console.error(`[contact] Resend error ${res.status}: ${detail}`);
      return json(
        { error: "We couldn't send that just now. Please email us directly." },
        502,
      );
    }
  } catch (err) {
    console.error("[contact] Network error calling Resend:", err);
    return json(
      { error: "We couldn't send that just now. Please email us directly." },
      502,
    );
  }

  return json({ ok: true });
}

function json(payload, status = 200) {
  return Response.json(payload, { status });
}

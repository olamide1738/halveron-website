"use client";

import { useState } from "react";

// Footer newsletter signup. Posts to the same /api/contact route with a
// `type: "newsletter"` flag so there is only one endpoint to configure.
export function NewsletterForm() {
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [message, setMessage] = useState(null);

  async function onSubmit(event) {
    event.preventDefault();
    if (status === "sending") return;

    const form = event.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());

    setStatus("sending");
    setMessage(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...payload, type: "newsletter" }),
      });
      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        setStatus("error");
        setMessage(data.error ?? "That didn't work. Please try again.");
        return;
      }

      setStatus("success");
      setMessage("You're on the list.");
      form.reset();
    } catch {
      setStatus("error");
      setMessage("Couldn't reach the server. Please try again.");
    }
  }

  return (
    <div>
      <h3 className="font-mono text-[11px] uppercase tracking-[0.16em] text-cobalt-light">
        Notes on shipping
      </h3>
      <p className="mt-4 text-sm text-[#8b93a5]">
        Occasional writing on building products properly. No cadence promises,
        no spam.
      </p>

      <form onSubmit={onSubmit} className="mt-4">
        <div className="absolute left-[-9999px]" aria-hidden="true">
          <label htmlFor="nl_company_url">Company URL</label>
          <input id="nl_company_url" name="company_url" tabIndex={-1} autoComplete="off" />
        </div>

        <label htmlFor="nl-email" className="sr-only">
          Email address
        </label>
        <div className="flex gap-2">
          <input
            id="nl-email"
            name="email"
            type="email"
            required
            placeholder="you@company.com"
            className="min-w-0 flex-1 rounded-lg border border-ink-line bg-ink-soft px-3 py-2 text-sm text-white placeholder:text-[#6b7690] focus:border-cobalt-light focus:outline-none"
          />
          <button
            type="submit"
            disabled={status === "sending"}
            aria-busy={status === "sending"}
            className="shrink-0 rounded-lg bg-white px-4 py-2 text-sm font-medium text-ink transition-colors hover:bg-paper disabled:opacity-60"
          >
            {status === "sending" ? "…" : "Join"}
          </button>
        </div>

        <div aria-live="polite">
          {message && (
            <p
              className={`mt-2 text-xs ${
                status === "error" ? "text-red-300" : "text-cobalt-light"
              }`}
            >
              {message}
            </p>
          )}
        </div>
      </form>
    </div>
  );
}

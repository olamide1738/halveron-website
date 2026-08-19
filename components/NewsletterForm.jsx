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
      <form onSubmit={onSubmit} className="mt-2">
        <div className="absolute left-[-9999px]" aria-hidden="true">
          <label htmlFor="nl_company_url">Company URL</label>
          <input id="nl_company_url" name="company_url" tabIndex={-1} autoComplete="off" />
        </div>

        <label htmlFor="nl-email" className="sr-only">
          Email address
        </label>
        <div className="flex flex-col sm:flex-row gap-2">
          <input
            id="nl-email"
            name="email"
            type="email"
            required
            placeholder="your-email@company.com"
            className="min-w-0 flex-1 rounded-sm border border-[#111111]/30 dark:border-white/20 bg-transparent px-3.5 py-2.5 font-mono text-xs text-[#111111] dark:text-white placeholder:text-[#888888] focus:border-[#FF512F] focus:outline-none"
          />
          <button
            type="submit"
            disabled={status === "sending"}
            aria-busy={status === "sending"}
            className="link-button px-4 py-2.5 text-[11px] disabled:opacity-60"
          >
            {status === "sending" ? "…" : "Subscribe ↗"}
          </button>
        </div>

        <div aria-live="polite">
          {message && (
            <p
              className={`mt-2 font-mono text-xs ${
                status === "error" ? "text-red-500" : "text-[#FF512F]"
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

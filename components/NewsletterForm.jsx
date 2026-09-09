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
            placeholder="Enter your email"
            className="min-w-0 flex-1 rounded-full border border-[#0F172A]/15 dark:border-white/15 bg-white/60 dark:bg-white/5 px-4 py-2.5 font-sans text-xs text-[#0F172A] dark:text-white placeholder:text-[#64748B] dark:placeholder:text-[#94A3B8] focus:border-[#2F6BFF] focus:outline-none transition-colors"
          />
          <button
            type="submit"
            disabled={status === "sending"}
            aria-busy={status === "sending"}
            className="link-button-solid px-5 py-2.5 text-xs shrink-0 disabled:opacity-60"
          >
            {status === "sending" ? "…" : "Subscribe ↗"}
          </button>
        </div>

        <div aria-live="polite">
          {message && (
            <p
              className={`mt-2 font-mono text-xs ${
                status === "error" ? "text-red-500" : "text-[#2F6BFF]"
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

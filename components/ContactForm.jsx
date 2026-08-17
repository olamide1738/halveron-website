"use client";

import { useState } from "react";
import { Button } from "./Button";
import { site } from "../lib/site";

const BUDGETS = [
  "Under $10k",
  "$10k – $25k",
  "$25k – $60k",
  "$60k – $150k",
  "$150k+",
  "Not sure yet",
];

const TIMELINES = ["ASAP", "1–3 months", "3–6 months", "Just exploring"];

export function ContactForm() {
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [error, setError] = useState(null);
  const [field, setField] = useState(null);

  async function onSubmit(event) {
    event.preventDefault();
    if (status === "sending") return;

    const form = event.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());

    setStatus("sending");
    setError(null);
    setField(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        setStatus("error");
        setError(data.error ?? "Something went wrong. Please try again.");
        setField(data.field ?? null);
        return;
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setError(
        "We couldn't reach the server. Check your connection, or email us directly.",
      );
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-3xl border border-white/15 bg-[#161E2E]/90 p-8 md:p-10 text-white backdrop-blur-xl shadow-2xl">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/20 text-emerald-400">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h2 className="h-display mt-5 text-2xl font-bold text-white">Brief received.</h2>
        <p className="mt-2 text-base leading-relaxed text-[#B9C1D0]">
          Thanks — we&apos;ve got it. You&apos;ll hear back from a senior person here within one business day.
        </p>
        <p className="mt-6 text-sm text-[#8C98B3]">
          In a hurry?{" "}
          <a
            href={site.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-cobalt-light font-bold hover:underline"
          >
            Book a call directly.
          </a>
        </p>
      </div>
    );
  }

  const sending = status === "sending";

  return (
    <div className="rounded-3xl border border-white/15 bg-[#161E2E]/90 p-8 md:p-10 text-white backdrop-blur-xl shadow-2xl">
      <h2 className="h-display text-2xl font-bold text-white">Send us a brief</h2>
      <p className="mt-2 text-sm text-[#B9C1D0]">
        Give us the outline and we&apos;ll come back within one business day with a scoped proposal.
      </p>

      <form className="mt-6 space-y-4" onSubmit={onSubmit} noValidate>
        <div className="absolute left-[-9999px]" aria-hidden="true">
          <label htmlFor="company_url">Company URL</label>
          <input id="company_url" name="company_url" tabIndex={-1} autoComplete="off" />
        </div>

        <Field
          label="Name"
          name="name"
          placeholder="Your name"
          invalid={field === "name"}
        />
        <Field
          label="Email"
          name="email"
          type="email"
          placeholder="you@company.com"
          invalid={field === "email"}
        />
        <Field
          label="Company"
          name="company"
          placeholder="Company (optional)"
          required={false}
        />
        <div className="grid gap-4 sm:grid-cols-2">
          <SelectField label="Budget" name="budget" options={BUDGETS} />
          <SelectField label="Timeline" name="timeline" options={TIMELINES} />
        </div>

        <div>
          <label htmlFor="brief" className="mb-1.5 block font-mono text-[11px] uppercase tracking-[0.14em] text-[#8C98B3]">
            Project brief
          </label>
          <textarea
            id="brief"
            name="brief"
            rows={4}
            required
            aria-invalid={field === "brief" || undefined}
            placeholder="What are you building, and what does success look like?"
            className={`w-full rounded-xl border bg-white/5 px-4 py-3 text-[15px] text-white placeholder:text-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-cobalt-light transition-colors ${
              field === "brief"
                ? "border-red-500 focus:border-red-500"
                : "border-white/15 hover:border-white/30 focus:border-cobalt-light"
            }`}
          />
        </div>

        <div aria-live="polite">
          {error && (
            <p className="rounded-xl bg-red-500/10 border border-red-500/20 px-4 py-3 text-sm text-red-400">
              {error}
            </p>
          )}
        </div>

        <Button
          variant="primary"
          className="w-full justify-center shadow-lg"
          disabled={sending}
          aria-busy={sending}
        >
          {sending ? "Sending…" : "Send brief"}
        </Button>

        <p className="text-center text-xs text-[#8C98B3]">
          We reply within one business day. Prefer a live conversation?{" "}
          <a
            href={site.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-cobalt-light font-bold hover:underline"
          >
            Book a call instead.
          </a>
        </p>
      </form>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required = true,
  invalid = false,
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block font-mono text-[11px] uppercase tracking-[0.14em] text-[#8C98B3]">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        aria-invalid={invalid || undefined}
        className={`w-full rounded-xl border bg-white/5 px-4 py-3 text-[15px] text-white placeholder:text-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-cobalt-light transition-colors ${
          invalid
            ? "border-red-500 focus:border-red-500"
            : "border-white/15 hover:border-white/30 focus:border-cobalt-light"
        }`}
      />
    </div>
  );
}

function SelectField({ label, name, options }) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block font-mono text-[11px] uppercase tracking-[0.14em] text-[#8C98B3]">
        {label}
      </label>
      <div className="relative">
        <select
          id={name}
          name={name}
          className="w-full appearance-none rounded-xl border border-white/15 hover:border-white/30 bg-white/5 px-4 py-3 pr-10 text-[15px] text-white focus:border-cobalt-light focus:outline-none focus:ring-2 focus:ring-cobalt-light cursor-pointer transition-colors"
        >
          {options.map((o) => (
            <option key={o} className="bg-[#161E2E] text-white">
              {o}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-[#8C98B3]">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
      </div>
    </div>
  );
}

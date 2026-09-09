"use client";

import { useState } from "react";
import { site } from "../lib/site";

const BUDGETS = [
  "Under $10k",
  "$10k to $25k",
  "$25k to $60k",
  "$60k to $150k",
  "$150k+",
  "Not sure yet",
];

const TIMELINES = ["ASAP (Immediate)", "1 to 3 months", "3 to 6 months", "Just exploring"];

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
      <div className="rounded-3xl border border-[#0F172A]/10 dark:border-white/10 bg-white dark:bg-[#121826] p-8 md:p-10 text-[#0F172A] dark:text-white shadow-card">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#2F6BFF]/10 text-[#2F6BFF]">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h2 className="heading-display mt-5 text-2xl sm:text-3xl font-bold text-[#0F172A] dark:text-white">Brief received.</h2>
        <p className="mt-2 text-base leading-relaxed text-[#64748B] dark:text-[#CBD5E1]">
          Thanks, we&apos;ve got it. You&apos;ll hear back from a senior maker here within one business day.
        </p>
        <p className="mt-6 font-mono text-xs text-[#94A3B8]">
          In a hurry?{" "}
          <a
            href={site.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#2F6BFF] font-bold hover:underline"
          >
            Book a 20-min strategy call instead ↗
          </a>
        </p>
      </div>
    );
  }

  const sending = status === "sending";

  return (
    <div className="rounded-3xl border border-[#0F172A]/10 dark:border-white/10 bg-white dark:bg-[#121826] p-8 md:p-10 text-[#0F172A] dark:text-white shadow-card">
      <div className="flex items-center justify-between border-b border-[#0F172A]/10 dark:border-white/10 pb-4">
        <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#2F6BFF]">
          Project Inquiry Brief
        </span>
        <span className="font-mono text-xs text-[#94A3B8]">
          Step 01 / 01
        </span>
      </div>

      <h2 className="heading-display mt-5 text-2xl font-bold text-[#0F172A] dark:text-white">Send us a brief</h2>
      <p className="mt-1.5 text-sm text-[#64748B] dark:text-[#94A3B8]">
        Give us the outline and we&apos;ll come back within 24 hours with a scoped proposal.
      </p>

      <form className="mt-6 space-y-4" onSubmit={onSubmit} noValidate>
        <div className="absolute left-[-9999px]" aria-hidden="true">
          <label htmlFor="company_url">Company URL</label>
          <input id="company_url" name="company_url" tabIndex={-1} autoComplete="off" />
        </div>

        <Field
          label="Your Name"
          name="name"
          placeholder="e.g. Alex Morgan"
          invalid={field === "name"}
        />
        <Field
          label="Email Address"
          name="email"
          type="email"
          placeholder="alex@company.com"
          invalid={field === "email"}
        />
        <Field
          label="Company / Project Name"
          name="company"
          placeholder="Company Name (optional)"
          required={false}
        />
        <div className="grid gap-4 sm:grid-cols-2">
          <SelectField label="Estimated Budget" name="budget" options={BUDGETS} />
          <SelectField label="Target Timeline" name="timeline" options={TIMELINES} />
        </div>

        <div>
          <label htmlFor="brief" className="mb-1.5 block font-mono text-[11px] uppercase tracking-wider text-[#64748B] font-bold">
            Project Outline &amp; Goals
          </label>
          <textarea
            id="brief"
            name="brief"
            rows={4}
            required
            aria-invalid={field === "brief" || undefined}
            placeholder="What are you building, and what does success look like for your business?"
            className={`w-full rounded-xl border bg-white/50 dark:bg-white/5 px-4 py-3 text-sm text-[#0F172A] dark:text-white placeholder:text-[#94A3B8] focus:outline-none focus:border-[#2F6BFF] transition-colors ${
              field === "brief"
                ? "border-red-500"
                : "border-[#0F172A]/15 dark:border-white/15 hover:border-[#0F172A]/40 dark:hover:border-white/30"
            }`}
          />
        </div>

        <div aria-live="polite">
          {error && (
            <p className="rounded-xl bg-red-500/10 border border-red-500/20 px-4 py-3 font-mono text-xs text-red-500">
              {error}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="link-button-solid w-full text-center"
          disabled={sending}
          aria-busy={sending}
        >
          {sending ? "Sending Brief…" : "Send Project Brief ↗"}
        </button>

        <p className="text-center font-mono text-[11px] text-[#64748B] pt-2">
          We reply within 24 hours. Prefer a direct conversation?{" "}
          <a
            href={site.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#2F6BFF] font-bold hover:underline"
          >
            Book a call instead ↗
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
      <label htmlFor={name} className="mb-1.5 block font-mono text-[11px] uppercase tracking-wider text-[#64748B] font-bold">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        aria-invalid={invalid || undefined}
        className={`w-full rounded-xl border bg-white/50 dark:bg-white/5 px-4 py-3 text-sm text-[#0F172A] dark:text-white placeholder:text-[#94A3B8] focus:outline-none focus:border-[#2F6BFF] transition-colors ${
          invalid
            ? "border-red-500"
            : "border-[#0F172A]/15 dark:border-white/15 hover:border-[#0F172A]/40 dark:hover:border-white/30"
        }`}
      />
    </div>
  );
}

function SelectField({ label, name, options }) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block font-mono text-[11px] uppercase tracking-wider text-[#64748B] font-bold">
        {label}
      </label>
      <div className="relative">
        <select
          id={name}
          name={name}
          className="w-full appearance-none rounded-xl border border-[#0F172A]/15 dark:border-white/15 hover:border-[#0F172A]/40 dark:hover:border-white/30 bg-white/50 dark:bg-[#121826] px-4 py-3 pr-10 text-sm text-[#0F172A] dark:text-white focus:border-[#2F6BFF] focus:outline-none cursor-pointer transition-colors"
        >
          {options.map((o) => (
            <option key={o} className="bg-[#FAFAFC] dark:bg-[#121826] text-[#0F172A] dark:text-white">
              {o}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-[#64748B]">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
      </div>
    </div>
  );
}

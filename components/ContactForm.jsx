"use client";

import { useState } from "react";
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
      <div className="rounded-md border border-[#111111]/15 dark:border-white/10 bg-white dark:bg-[#121826] p-8 md:p-10 text-[#111111] dark:text-white shadow-sm">
        <div className="flex h-10 w-10 items-center justify-center rounded-xs bg-[#2F6BFF]/10 text-[#2F6BFF] font-bold font-mono">
          ✓
        </div>
        <h2 className="serif-display mt-5 text-3xl font-normal text-[#111111] dark:text-white">Brief received.</h2>
        <p className="mt-2 text-base leading-relaxed text-[#555555] dark:text-[#CCCCCC]">
          Thanks — we&apos;ve got it. You&apos;ll hear back from a senior practitioner here within one business day.
        </p>
        <p className="mt-6 font-mono text-xs text-[#888888]">
          In a hurry?{" "}
          <a
            href={site.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#2F6BFF] font-bold hover:underline"
          >
            Book a call directly ↗
          </a>
        </p>
      </div>
    );
  }

  const sending = status === "sending";

  return (
    <div className="rounded-md border border-[#111111]/15 dark:border-white/10 bg-white dark:bg-[#121826] p-8 md:p-10 text-[#111111] dark:text-white shadow-sm">
      <div className="flex items-center justify-between border-b border-[#111111]/10 dark:border-white/10 pb-4">
        <span className="font-mono text-xs font-bold uppercase tracking-[0.16em] text-[#2F6BFF]">
          Project Inquiry Brief
        </span>
        <span className="font-mono text-xs text-[#888888]">
          Step 01 / 01
        </span>
      </div>

      <h2 className="serif-display mt-5 text-3xl font-normal text-[#111111] dark:text-white">Send us a brief</h2>
      <p className="mt-2 text-sm text-[#555555] dark:text-[#CCCCCC]">
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
          <label htmlFor="brief" className="mb-1.5 block font-mono text-[11px] uppercase tracking-[0.14em] text-[#777777]">
            Project Outline &amp; Goals
          </label>
          <textarea
            id="brief"
            name="brief"
            rows={4}
            required
            aria-invalid={field === "brief" || undefined}
            placeholder="What are you building, and what does success look like for your business?"
            className={`w-full rounded-xs border bg-transparent px-4 py-3 text-sm text-[#111111] dark:text-white placeholder:text-[#888888] focus:outline-none focus:border-[#2F6BFF] transition-colors ${
              field === "brief"
                ? "border-red-500"
                : "border-[#111111]/20 dark:border-white/20 hover:border-[#111111]/50 dark:hover:border-white/40"
            }`}
          />
        </div>

        <div aria-live="polite">
          {error && (
            <p className="rounded-xs bg-red-500/10 border border-red-500/20 px-4 py-3 font-mono text-xs text-red-500">
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

        <p className="text-center font-mono text-[11px] text-[#777777] pt-2">
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
      <label htmlFor={name} className="mb-1.5 block font-mono text-[11px] uppercase tracking-[0.14em] text-[#777777]">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        aria-invalid={invalid || undefined}
        className={`w-full rounded-xs border bg-transparent px-4 py-3 text-sm text-[#111111] dark:text-white placeholder:text-[#888888] focus:outline-none focus:border-[#2F6BFF] transition-colors ${
          invalid
            ? "border-red-500"
            : "border-[#111111]/20 dark:border-white/20 hover:border-[#111111]/50 dark:hover:border-white/40"
        }`}
      />
    </div>
  );
}

function SelectField({ label, name, options }) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block font-mono text-[11px] uppercase tracking-[0.14em] text-[#777777]">
        {label}
      </label>
      <div className="relative">
        <select
          id={name}
          name={name}
          className="w-full appearance-none rounded-xs border border-[#111111]/20 dark:border-white/20 hover:border-[#111111]/50 dark:hover:border-white/40 bg-transparent px-4 py-3 pr-10 text-sm text-[#111111] dark:text-white focus:border-[#2F6BFF] focus:outline-none cursor-pointer transition-colors"
        >
          {options.map((o) => (
            <option key={o} className="bg-[#FEFAF7] dark:bg-[#121826] text-[#111111] dark:text-white">
              {o}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-[#777777]">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
      </div>
    </div>
  );
}

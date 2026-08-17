"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { site } from "../lib/site";

const STORAGE_KEY = "halveron:analytics-notice";

// Analytics notice.
//
// Only rendered when analytics is actually switched on (site.analyticsDomain is
// set). No analytics configured means no script, no notice, nothing to consent
// to — which is the honest default rather than a banner for its own sake.
export function CookieNotice() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!site.analyticsDomain) return;
    try {
      if (!localStorage.getItem(STORAGE_KEY)) setVisible(true);
    } catch {
      // Private mode or storage disabled — don't nag on every page load.
    }
  }, []);

  function dismiss() {
    try {
      localStorage.setItem(STORAGE_KEY, "dismissed");
    } catch {
      /* ignore */
    }
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="region"
      aria-label="Analytics notice"
      className="fixed inset-x-4 bottom-4 z-[60] mx-auto max-w-xl rounded-2xl border border-ink-line bg-ink p-5 text-white shadow-[0_16px_50px_rgba(22,30,46,0.35)] md:inset-x-auto md:right-6 md:bottom-6"
    >
      <p className="text-sm leading-relaxed text-[#B9C1D0]">
        We use privacy-focused, aggregate-only analytics to see which pages get
        read. No advertising trackers, no cross-site profiling, no selling your
        data.{" "}
        <Link href="/privacy" className="text-cobalt-light hover:underline">
          Read the privacy policy
        </Link>
        .
      </p>
      <div className="mt-4 flex justify-end">
        <button
          onClick={dismiss}
          className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-ink transition-colors hover:bg-paper"
        >
          Got it
        </button>
      </div>
    </div>
  );
}

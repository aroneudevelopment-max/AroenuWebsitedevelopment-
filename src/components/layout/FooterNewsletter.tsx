"use client";

import React from "react";

/**
 * FooterNewsletter
 * - Non-submitting newsletter shell.
 * - No fake success (per brief). Stores nothing. Just a visible pending state.
 */
export function FooterNewsletter() {
  return (
    <div className="mt-6 max-w-sm">
      <label
        htmlFor="footer-newsletter-email"
        className="text-label uppercase tracking-widest text-zinc-500 block mb-3"
      >
        Newsletter
      </label>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex flex-col sm:flex-row gap-2"
        aria-label="Newsletter sign-up (pending backend)"
      >
        <input
          id="footer-newsletter-email"
          type="email"
          name="email"
          placeholder="you@company.com"
          disabled
          className="flex-1 px-4 py-3 rounded-full border border-zinc-300 surface-paper text-sm text-ink placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-orange disabled:opacity-60"
          aria-describedby="footer-newsletter-hint"
        />
        <button
          type="submit"
          disabled
          className="px-5 py-3 rounded-full text-sm font-medium bg-ink text-paper opacity-60 cursor-not-allowed"
        >
          Subscribe
        </button>
      </form>
      <p
        id="footer-newsletter-hint"
        className="mt-2 text-caption text-zinc-400"
      >
        Pending backend integration. No data is collected yet.
      </p>
    </div>
  );
}

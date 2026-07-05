"use client";

import React, { useState } from "react";

/**
 * CookieConsentShell
 * - Visible until the user has made a choice (stored in localStorage).
 * - Three actions: Manage Preferences, Reject Non-Essential, Accept All.
 * - No analytics or marketing scripts fire until consent is set.
 * - This is a UI shell only; final consent plumbing lives in the backend phase.
 */
export function CookieConsentShell() {
  const [isVisible, setIsVisible] = useState(() => {
    if (typeof window === "undefined") {
      return false;
    }

    try {
      const consent = window.localStorage.getItem("aroneu-consent");
      return !consent;
    } catch {
      return true;
    }
  });

  if (!isVisible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie preferences"
      className="fixed bottom-0 left-0 right-0 z-50 surface-paper border-t border-zinc-200 shadow-2xl"
    >
      <div className="container-aroneu py-4 flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-zinc-600 max-w-2xl md:mx-0">
          Aroneu uses essential cookies to keep the site working. Optional
          analytics and marketing cookies are off until you accept.
        </p>
        <div className="flex w-full flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-end md:w-auto">
          <button
            onClick={() => setIsVisible(false)}
            className="w-full text-left text-sm text-ink underline underline-offset-4 hover:text-zinc-500 sm:w-auto sm:text-center"
          >
            Manage preferences
          </button>
          <button
            onClick={() => {
              try {
                window.localStorage.setItem("aroneu-consent", "essential");
              } catch {}
              setIsVisible(false);
            }}
            className="w-full px-4 py-2 rounded-full text-sm font-medium border border-zinc-300 text-ink hover:bg-zinc-100 transition-colors sm:w-auto"
          >
            Reject non-essential
          </button>
          <button
            onClick={() => {
              try {
                window.localStorage.setItem("aroneu-consent", "all");
              } catch {}
              setIsVisible(false);
            }}
            className="w-full px-4 py-2 rounded-full text-sm font-medium bg-ink text-paper hover:opacity-90 transition-opacity sm:w-auto"
          >
            Accept all
          </button>
        </div>
      </div>
    </div>
  );
}

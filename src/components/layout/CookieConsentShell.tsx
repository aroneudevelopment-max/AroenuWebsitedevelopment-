"use client";

import React, { useState, useEffect } from "react";

/**
 * CookieConsentShell
 * - Visible until the user has made a choice (stored in localStorage).
 * - Three actions: Manage Preferences, Reject Non-Essential, Accept All.
 * - No analytics or marketing scripts fire until consent is set.
 * - This is a UI shell only; final consent plumbing lives in the backend phase.
 */
export function CookieConsentShell() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    try {
      const consent = window.localStorage.getItem("aroneu-consent");
      if (!consent) {
        setIsVisible(true);
      }
    } catch {
      setIsVisible(true);
    }
  }, []);

  if (!isVisible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie preferences"
      className="fixed bottom-0 left-0 right-0 z-50 surface-paper border-t border-zinc-200 shadow-2xl"
    >
      <div className="container-aroneu py-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <p className="text-sm text-zinc-600 max-w-2xl">
          Aroneu uses essential cookies to keep the site working. Optional
          analytics and marketing cookies are off until you accept.
        </p>
        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={() => setIsVisible(false)}
            className="text-sm text-ink underline underline-offset-4 hover:text-zinc-500"
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
            className="px-4 py-2 rounded-full text-sm font-medium border border-zinc-300 text-ink hover:bg-zinc-100 transition-colors"
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
            className="px-4 py-2 rounded-full text-sm font-medium bg-ink text-paper hover:opacity-90 transition-opacity"
          >
            Accept all
          </button>
        </div>
      </div>
    </div>
  );
}

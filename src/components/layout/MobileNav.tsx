"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { primaryNavigation } from "@/lib/navigation";
import { routes } from "@/lib/routes";

/**
 * MobileNav
 * - 44x44 hamburger button (visible < md)
 * - Slide-down panel with primary nav and CTA
 * - Closes on link click and on Escape
 * - Locks body scroll while open
 */
export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!isOpen) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
        triggerRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen]);

  return (
    <div className="md:hidden">
      <button
        ref={triggerRef}
        onClick={() => setIsOpen((v) => !v)}
        aria-expanded={isOpen}
        aria-controls="mobile-menu-panel"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        className="inline-flex w-11 h-11 items-center justify-center rounded-md text-ink hover:bg-zinc-100 transition-colors"
      >
        {isOpen ? (
          /* Close icon */
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M5 5l12 12M17 5L5 17"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
            />
          </svg>
        ) : (
          /* Hamburger icon */
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M3 6h16M3 11h16M3 16h16"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
            />
          </svg>
        )}
      </button>

      {isOpen && (
        <>
          <div
            aria-hidden="true"
            className="fixed inset-0 bg-ink/40 z-40"
            onClick={() => setIsOpen(false)}
          />
          <div
            id="mobile-menu-panel"
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-label="Primary Navigation"
            className="fixed top-0 right-0 bottom-0 w-[min(85vw,360px)] surface-paper z-50 shadow-2xl flex flex-col p-6"
          >
            <div className="flex items-center justify-between mb-8">
              <span className="text-label uppercase tracking-widest text-zinc-500">
                Menu
              </span>
              <button
                onClick={() => setIsOpen(false)}
                aria-label="Close menu"
                className="inline-flex w-11 h-11 items-center justify-center rounded-md text-ink hover:bg-zinc-100"
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M5 5l12 12M17 5L5 17"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>

            <nav
              className="flex flex-col gap-2 flex-grow"
              aria-label="Mobile primary navigation"
            >
              {primaryNavigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-3 px-3 -mx-3 text-lg text-ink hover:bg-zinc-100 rounded-md transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <Link
              href={routes.bookACall}
              onClick={() => setIsOpen(false)}
              className="mt-6 px-5 py-3 rounded-full text-base font-medium text-center bg-ink text-paper hover:opacity-90 transition-opacity"
            >
              Book a call
            </Link>
          </div>
        </>
      )}
    </div>
  );
}

import React from "react";
import dynamic from "next/dynamic";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { SkipLink } from "./SkipLink";

const CookieConsentShell = dynamic(
  () => import("./CookieConsentShell").then((mod) => mod.CookieConsentShell),
);

const BackToTopButton = dynamic(
  () => import("./BackToTopButton").then((mod) => mod.BackToTopButton),
);

/**
 * SiteShell
 * - Top bar: SkipLink, Header (logo + desktop nav + CTA), MobileNav button on the right.
 * - Main content.
 * - Footer.
 * - Cookie consent shell.
 */
export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SkipLink />
      <div className="header-bar sticky top-0 z-30 surface-paper border-b border-zinc-200">
        <div className="mx-auto max-w-[1180px] px-6 py-4 md:px-12">
          <Header />
        </div>
      </div>
      <main id="main-content" className="flex-grow">
        {children}
      </main>
      <Footer />
      <BackToTopButton />
      <CookieConsentShell />
    </>
  );
}

import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { SkipLink } from './SkipLink';
import { MobileNav } from './MobileNav';
import { CookieConsentShell } from './CookieConsentShell';

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SkipLink />
      <div className="relative">
        <Header />
        <div className="absolute top-0 right-0 p-4">
          <MobileNav />
        </div>
      </div>
      <main id="main-content" className="flex-grow">
        {children}
      </main>
      <Footer />
      <CookieConsentShell />
    </>
  );
}

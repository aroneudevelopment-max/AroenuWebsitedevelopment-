const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '..', 'src');
const layoutDir = path.join(srcDir, 'components', 'layout');
const libDir = path.join(srcDir, 'lib');
const appDir = path.join(srcDir, 'app');

if (!fs.existsSync(layoutDir)) {
  fs.mkdirSync(layoutDir, { recursive: true });
}

function writeFile(filePath, content) {
  fs.writeFileSync(filePath, content.trim() + '\n', 'utf8');
}

// 1. Route Registry
const routesContent = `
export const routes = {
  home: "/",
  capabilityTeams: "/capability-teams",
  aiWorkspace: "/ai-workspace",
  howItWorks: "/how-it-works",
  about: "/about",
  caseStudies: "/case-studies",
  insights: "/insights",
  careers: "/careers",
  contact: "/contact",
  resources: "/resources",
  privacy: "/privacy",
  imprint: "/imprint",
  terms: "/terms",
  cookiePolicy: "/cookie-policy",
};
`;
writeFile(path.join(libDir, 'routes.ts'), routesContent);

// 2. Navigation Registry
const navigationContent = `
import { routes } from './routes';

export const primaryNavigation = [
  { label: "Capability Teams", href: routes.capabilityTeams },
  { label: "AI Workspace", href: routes.aiWorkspace },
  { label: "How it works", href: routes.howItWorks },
  { label: "About", href: routes.about },
  { label: "Insights", href: routes.insights },
];

export const footerNavigation = {
  company: [
    { label: "About", href: routes.about },
    { label: "Careers", href: routes.careers },
    { label: "Contact", href: routes.contact },
  ],
  capability: [
    { label: "Capability Teams", href: routes.capabilityTeams },
    { label: "AI Workspace", href: routes.aiWorkspace },
    { label: "How it works", href: routes.howItWorks },
  ],
  knowledge: [
    { label: "Insights", href: routes.insights },
    { label: "Case Studies", href: routes.caseStudies },
    { label: "Resources", href: routes.resources },
  ],
  legal: [
    { label: "Privacy Policy", href: routes.privacy },
    { label: "Imprint", href: routes.imprint },
    { label: "Terms of Service", href: routes.terms },
    { label: "Cookie Policy", href: routes.cookiePolicy },
  ]
};
`;
writeFile(path.join(libDir, 'navigation.ts'), navigationContent);

// 3. Skip Link
const skipLinkContent = `
import React from 'react';

export function SkipLink() {
  return (
    <a 
      href="#main-content" 
      className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-white focus:text-black"
    >
      Skip to main content
    </a>
  );
}
`;
writeFile(path.join(layoutDir, 'SkipLink.tsx'), skipLinkContent);

// 4. Header
const headerContent = `
import React from 'react';
import Link from 'next/link';
import { primaryNavigation } from '@/lib/navigation';
import { routes } from '@/lib/routes';

export function Header() {
  return (
    <header className="header-aroneu flex items-center justify-between p-4 border-b">
      <div className="logo-container">
        <Link href={routes.home} className="font-bold text-xl">Aroneu</Link>
      </div>
      
      <nav className="desktop-nav hidden md:flex space-x-6" aria-label="Primary Navigation">
        {primaryNavigation.map((item) => (
          <Link key={item.href} href={item.href} className="nav-link font-maven-pro text-base hover:text-gray-600">
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="header-actions hidden md:flex">
        <Link href={routes.contact} className="cta-button bg-black text-white px-4 py-2 rounded">
          Book a call
        </Link>
      </div>
      
      {/* Mobile Nav toggle will be inserted by SiteShell */}
    </header>
  );
}
`;
writeFile(path.join(layoutDir, 'Header.tsx'), headerContent);

// 5. Mobile Nav
const mobileNavContent = `
"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { primaryNavigation } from '@/lib/navigation';
import { routes } from '@/lib/routes';

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mobile-nav-container md:hidden">
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        className="p-2"
        aria-label="Toggle Menu"
      >
        Menu
      </button>

      {isOpen && (
        <div id="mobile-menu" className="absolute top-16 left-0 right-0 bg-white shadow-md z-40 p-4">
          <nav className="flex flex-col space-y-4" aria-label="Mobile Navigation">
            {primaryNavigation.map((item) => (
              <Link 
                key={item.href} 
                href={item.href} 
                className="font-maven-pro text-lg block py-2 border-b"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link 
              href={routes.contact} 
              className="mt-4 bg-black text-white text-center px-4 py-3 rounded block"
              onClick={() => setIsOpen(false)}
            >
              Book a call
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
}
`;
writeFile(path.join(layoutDir, 'MobileNav.tsx'), mobileNavContent);

// 6. Footer
const footerContent = `
import React from 'react';
import Link from 'next/link';
import { footerNavigation, routes } from '@/lib/routes';

export function Footer() {
  return (
    <footer className="footer-aroneu bg-gray-50 pt-16 pb-8 border-t">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          <div className="brand-col">
            <Link href="/" className="font-bold text-2xl mb-4 block">Aroneu</Link>
            <p className="source-line text-sm mb-4">
              Governable capability, made <em className="font-newsreader italic">new</em>.
            </p>
          </div>

          <div className="nav-col">
            <h3 className="font-bold mb-4 uppercase text-xs tracking-wider">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/about">About</Link></li>
              <li><Link href="/careers">Careers</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="nav-col">
            <h3 className="font-bold mb-4 uppercase text-xs tracking-wider">Capability</h3>
            <ul className="space-y-2">
              <li><Link href="/capability-teams">Capability Teams</Link></li>
              <li><Link href="/ai-workspace">AI Workspace</Link></li>
              <li><Link href="/how-it-works">How it works</Link></li>
            </ul>
          </div>

          <div className="nav-col">
            <h3 className="font-bold mb-4 uppercase text-xs tracking-wider">Knowledge</h3>
            <ul className="space-y-2">
              <li><Link href="/insights">Insights</Link></li>
              <li><Link href="/case-studies">Case Studies</Link></li>
              <li><Link href="/resources">Resources</Link></li>
            </ul>
          </div>
          
        </div>

        <div className="legal-strip border-t pt-8 flex flex-col md:flex-row justify-between text-sm text-gray-500">
          <p className="copyright">&copy; {new Date().getFullYear()} Aroneu GmbH. All rights reserved.</p>
          <ul className="flex flex-wrap space-x-4 mt-4 md:mt-0">
            <li><Link href="/privacy">Privacy Policy</Link></li>
            <li><Link href="/imprint">Imprint</Link></li>
            <li><Link href="/terms">Terms of Service</Link></li>
            <li><Link href="/cookie-policy">Cookie Policy</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
`;
writeFile(path.join(layoutDir, 'Footer.tsx'), footerContent);

// 7. Cookie Consent Shell
const cookieContent = `
"use client";

import React, { useState, useEffect } from 'react';

export function CookieConsentShell() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Scaffold logic for consent. 
    // In actual implementation, check localStorage.
    const consent = localStorage.getItem('aroneu-consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg z-50 p-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="mb-4 md:mb-0 text-sm">
          <p>We use cookies to improve your experience. Essential cookies are always required.</p>
        </div>
        <div className="flex space-x-4">
          <button onClick={() => setIsVisible(false)} className="text-sm underline">Manage Preferences</button>
          <button onClick={() => setIsVisible(false)} className="text-sm underline">Reject Non-Essential</button>
          <button 
            onClick={() => {
              localStorage.setItem('aroneu-consent', 'all');
              setIsVisible(false);
            }} 
            className="bg-black text-white px-4 py-2 rounded text-sm font-bold"
          >
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
}
`;
writeFile(path.join(layoutDir, 'CookieConsentShell.tsx'), cookieContent);

// 8. Site Shell
const siteShellContent = `
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
`;
writeFile(path.join(layoutDir, 'SiteShell.tsx'), siteShellContent);

// 9. Root Layout Update
const rootLayoutContent = `
import type { Metadata } from "next";
import "./globals.css";
import { SiteShell } from "@/components/layout/SiteShell";

export const metadata: Metadata = {
  title: "Aroneu",
  description: "Aroneu builds governable India capability teams for European companies, run on an AI workspace.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB" className="antialiased">
      <body className="min-h-screen flex flex-col font-maven-pro text-gray-900 bg-white">
        <SiteShell>
          {children}
        </SiteShell>
      </body>
    </html>
  );
}
`;
writeFile(path.join(appDir, 'layout.tsx'), rootLayoutContent);

console.log('Layout scaffolding complete.');

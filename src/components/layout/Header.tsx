import React from "react";
import Link from "next/link";
import { primaryNavigation } from "@/lib/navigation";
import { routes } from "@/lib/routes";
import { AroneuLogo } from "@/components/brand/AroneuLogo";
import { MobileNav } from "./MobileNav";

/**
 * Header
 * - Logo (left)
 * - Desktop primary nav (center, hidden < md)
 * - Primary CTA (right, hidden < md)
 * - Mobile menu button (right, shown < md) - handed to MobileNav separately.
 */
export function Header() {
  return (
    <header className="header-aroneu min-w-0 flex flex-1 items-center justify-between gap-4">
      <div className="logo-container shrink-0">
        <Link
          href={routes.home}
          className="brand-link inline-flex items-center"
          aria-label="Aroneu Home"
        >
          <AroneuLogo variant="horizontal" tone="ink" />
        </Link>
      </div>

      <nav
        className="desktop-nav hidden min-w-0 md:flex items-center gap-6 lg:gap-8"
        aria-label="Primary Navigation"
      >
        {primaryNavigation.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="nav-link text-sm text-ink hover:text-zinc-500 transition-colors whitespace-nowrap"
          >
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="header-actions hidden md:flex shrink-0">
        <Link
          href={routes.contact}
          className="px-5 py-2.5 rounded-full text-sm font-medium bg-ink text-paper hover:opacity-90 transition-opacity"
        >
          Book a call
        </Link>
      </div>

      <MobileNav />
    </header>
  );
}

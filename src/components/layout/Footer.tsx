import React from "react";
import Link from "next/link";
import { footerNavigation } from "@/lib/navigation";
import { AroneuLogo } from "@/components/brand/AroneuLogo";

/**
 * Footer
 * - Brand column with logo, tagline, and two-places line.
 * - Three nav columns (Company / Capability / Knowledge).
 * - Legal strip with copyright and legal links.
 */
export function Footer() {
  return (
    <footer className="footer-aroneu surface-sand pt-16 pb-8 border-t border-zinc-200">
      <div className="container-aroneu">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
          {/* Brand column */}
          <div className="md:col-span-5">
            <Link
              href="/"
              className="brand-link mb-6 inline-block"
              aria-label="Aroneu Home"
            >
              <AroneuLogo variant="horizontal" tone="ink" />
            </Link>
            <p className="text-base mb-3 text-ink">Governable capability, made new.</p>
            <p className="text-sm text-zinc-500 mb-6">
              Two places, one standard of work.
            </p>
          </div>

          {/* Nav columns */}
          <div className="md:col-span-2">
            <h3 className="text-label uppercase tracking-widest text-ink mb-4">
              Company
            </h3>
            <ul className="space-y-2">
              {footerNavigation.company.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-zinc-600 hover:text-ink transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-label uppercase tracking-widest text-ink mb-4">
              Capability
            </h3>
            <ul className="space-y-2">
              {footerNavigation.capability.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-zinc-600 hover:text-ink transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-label uppercase tracking-widest text-ink mb-4">
              Knowledge
            </h3>
            <ul className="space-y-2">
              {footerNavigation.knowledge.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-zinc-600 hover:text-ink transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-200 pt-8 flex flex-col md:flex-row justify-between gap-6 text-caption text-zinc-500">
          <div>
            <p>&copy; {new Date().getFullYear()} Aroneu. All rights reserved.</p>
          </div>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {footerNavigation.legal.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="hover:text-ink transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

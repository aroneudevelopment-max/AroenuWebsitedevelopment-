import React from 'react';
import Link from 'next/link';
import { primaryNavigation } from '@/lib/navigation';
import { routes } from '@/lib/routes';
import { AroneuLogo } from '@/components/brand/AroneuLogo';

export function Header() {
  return (
    <header className="header-aroneu flex items-center justify-between p-4 border-b">
      <div className="logo-container">
        <Link href={routes.home} className="brand-link" aria-label="Aroneu Home">
          <AroneuLogo variant="horizontal" tone="ink" />
        </Link>
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

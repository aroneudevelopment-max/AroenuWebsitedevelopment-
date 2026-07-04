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

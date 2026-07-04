import React from 'react';
import Link from 'next/link';
import { footerNavigation } from '@/lib/navigation';
import { routes } from '@/lib/routes';
import { AroneuLogo } from '@/components/brand/AroneuLogo';

export function Footer() {
  return (
    <footer className="footer-aroneu bg-gray-50 pt-16 pb-8 border-t">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          <div className="brand-col">
            <Link href="/" className="brand-link mb-6 block" aria-label="Aroneu Home">
              <AroneuLogo variant="horizontal" tone="ink" />
            </Link>
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

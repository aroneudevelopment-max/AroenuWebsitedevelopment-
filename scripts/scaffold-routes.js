const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '..', 'src');
const appDir = path.join(srcDir, 'app');
const marketingDir = path.join(appDir, '(marketing)');
const legalDir = path.join(appDir, '(legal)');

const routes = [
  { path: '', group: marketingDir }, // root page
  { path: 'capability-teams', group: marketingDir },
  { path: 'ai-workspace', group: marketingDir },
  { path: 'how-it-works', group: marketingDir },
  { path: 'about', group: marketingDir },
  { path: 'case-studies', group: marketingDir },
  { path: 'case-studies/[slug]', group: marketingDir },
  { path: 'insights', group: marketingDir },
  { path: 'insights/[slug]', group: marketingDir },
  { path: 'careers', group: marketingDir },
  { path: 'careers/[slug]', group: marketingDir },
  { path: 'contact', group: marketingDir },
  { path: 'resources', group: marketingDir },
  { path: 'resources/[slug]', group: marketingDir },
  { path: 'privacy', group: legalDir },
  { path: 'imprint', group: legalDir },
  { path: 'terms', group: legalDir },
  { path: 'cookie-policy', group: legalDir },
];

routes.forEach(route => {
  const routeDir = path.join(route.group, route.path);
  if (!fs.existsSync(routeDir)) {
    fs.mkdirSync(routeDir, { recursive: true });
  }

  const pagePath = path.join(routeDir, 'page.tsx');
  if (!fs.existsSync(pagePath)) {
    let title = route.path ? route.path.split('/').pop().replace(/-/g, ' ').toUpperCase() : 'HOME';
    const content = `
import React from 'react';

export default function Page() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">${title}</h1>
      <p>Aroneu route scaffold — final page content will be placed in a later packet.</p>
    </div>
  );
}
    `;
    fs.writeFileSync(pagePath, content.trim() + '\n', 'utf8');
  } else {
      // Overwrite the root page.tsx to ensure it has the correct placeholder.
      if (route.path === '') {
          const content = `
import React from 'react';

export default function Page() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">HOME</h1>
      <p>Aroneu route scaffold — final page content will be placed in a later packet.</p>
    </div>
  );
}
          `;
          fs.writeFileSync(pagePath, content.trim() + '\n', 'utf8');
      }
  }
});

// Create not-found.tsx and error.tsx if missing
const notFoundPath = path.join(appDir, 'not-found.tsx');
if (!fs.existsSync(notFoundPath)) {
  fs.writeFileSync(notFoundPath, `
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] p-8">
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </div>
  );
}
  `, 'utf8');
}

const errorPath = path.join(appDir, 'error.tsx');
if (!fs.existsSync(errorPath)) {
  fs.writeFileSync(errorPath, `
"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] p-8">
      <h2>Something went wrong!</h2>
      <button onClick={() => reset()}>Try again</button>
      <div className="mt-4">
        <Link href="/">Return Home</Link>
      </div>
    </div>
  );
}
  `, 'utf8');
}

console.log('Route shells scaffolding complete.');

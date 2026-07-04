const fs = require('fs');
const path = require('path');

const dirs = [
  'src/lib/cms',
  'src/lib/forms',
  'src/lib/analytics',
  'src/lib/storage',
  'src/components/seo',
  'src/components/ui',
  'src/components/layout',
  'src/components/sections',
  'src/components/forms',
  'src/components/mockups',
  'src/components/states',
  'docs',
  'src/app/(marketing)',
  'src/app/(marketing)/capability-teams',
  'src/app/(marketing)/ai-workspace',
  'src/app/(marketing)/how-it-works',
  'src/app/(marketing)/about',
  'src/app/(marketing)/case-studies',
  'src/app/(marketing)/case-studies/[slug]',
  'src/app/(marketing)/insights',
  'src/app/(marketing)/insights/[slug]',
  'src/app/(marketing)/careers',
  'src/app/(marketing)/careers/[slug]',
  'src/app/(marketing)/contact',
  'src/app/(marketing)/resources',
  'src/app/(marketing)/resources/[slug]',
  'src/app/(legal)',
  'src/app/(legal)/privacy',
  'src/app/(legal)/imprint',
  'src/app/(legal)/terms',
  'src/app/(legal)/cookie-policy'
];

dirs.forEach(d => {
  fs.mkdirSync(path.join(__dirname, d), { recursive: true });
});

const pageContent = `export default function Page() {
  return (
    <main>
      <h1>Aroneu route scaffold — content will be placed in later packet.</h1>
    </main>
  );
}
`;

const routes = [
  'src/app/(marketing)/page.tsx',
  'src/app/(marketing)/capability-teams/page.tsx',
  'src/app/(marketing)/ai-workspace/page.tsx',
  'src/app/(marketing)/how-it-works/page.tsx',
  'src/app/(marketing)/about/page.tsx',
  'src/app/(marketing)/case-studies/page.tsx',
  'src/app/(marketing)/case-studies/[slug]/page.tsx',
  'src/app/(marketing)/insights/page.tsx',
  'src/app/(marketing)/insights/[slug]/page.tsx',
  'src/app/(marketing)/careers/page.tsx',
  'src/app/(marketing)/careers/[slug]/page.tsx',
  'src/app/(marketing)/contact/page.tsx',
  'src/app/(marketing)/resources/page.tsx',
  'src/app/(marketing)/resources/[slug]/page.tsx',
  'src/app/(legal)/privacy/page.tsx',
  'src/app/(legal)/imprint/page.tsx',
  'src/app/(legal)/terms/page.tsx',
  'src/app/(legal)/cookie-policy/page.tsx',
];

routes.forEach(r => {
  fs.writeFileSync(path.join(__dirname, r), pageContent);
});

// Create SEO files
fs.writeFileSync(path.join(__dirname, 'src/lib/seo.ts'), '// Safe placeholders for SEO');
fs.writeFileSync(path.join(__dirname, 'src/components/seo/JsonLd.tsx'), `export default function JsonLd() { return null; }`);

// Create robots/sitemap
fs.writeFileSync(path.join(__dirname, 'src/app/robots.ts'), `import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/preview/', '/staging/', '/*/success'],
    },
    sitemap: 'https://aroneu.de/sitemap.xml',
  }
}`);
fs.writeFileSync(path.join(__dirname, 'src/app/sitemap.ts'), `import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://aroneu.de',
      lastModified: new Date(),
    },
  ]
}`);

// Create env example
fs.writeFileSync(path.join(__dirname, '.env.example'), `NEXT_PUBLIC_SITE_URL=https://aroneu.de
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=
SANITY_API_READ_TOKEN=
HUBSPOT_ACCESS_TOKEN=
HUBSPOT_CONTACT_FORM_ID=
RESEND_API_KEY=
POSTMARK_SERVER_TOKEN=
CALCOM_EMBED_URL=
HUBSPOT_MEETINGS_URL=
TURNSTILE_SITE_KEY=
TURNSTILE_SECRET_KEY=
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=
NEXT_PUBLIC_GA4_ID=
NEXT_PUBLIC_CLARITY_ID=
CV_STORAGE_BUCKET=
CV_STORAGE_REGION=`);

// Create README & build notes
fs.writeFileSync(path.join(__dirname, 'README.md'), '# Aroneu Frontend');
fs.writeFileSync(path.join(__dirname, 'docs/aroneu-build-notes.md'), '# Aroneu Build Notes');

// lib/routes and navigation
fs.writeFileSync(path.join(__dirname, 'src/lib/routes.ts'), 'export const routes = {}');
fs.writeFileSync(path.join(__dirname, 'src/lib/navigation.ts'), 'export const navigation = {}');

import type { Metadata } from "next";
import { Maven_Pro, Newsreader } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { SiteShell } from "@/components/layout/SiteShell";
import JsonLd from "@/components/seo/JsonLd";
import { buildPageMetadata } from "@/lib/seo";
import { organizationSchema, websiteSchema } from "@/lib/schema";

const mavenPro = Maven_Pro({
  subsets: ["latin"],
  variable: "--font-maven-pro",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  style: ["italic"],
  variable: "--font-newsreader",
});

export const metadata: Metadata = {
  ...buildPageMetadata({
    title: "Aroneu - Governable India capability teams",
    description:
      "Senior India teams European companies can govern, supported by an AI Workspace that makes work, decisions, and controls visible.",
    path: "/",
    ogTitle: "Make India capability governable.",
    ogDescription:
      "Aroneu builds senior India capability teams for European companies, with the governance, visibility, and accountability needed to trust work at distance.",
  }),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB" className={`antialiased ${mavenPro.variable} ${newsreader.variable}`}>
      <head>
        <Script
          async
          src="https://plausible.io/js/pa-gXSYT7tKA5FZ9kdhMx2yS.js"
          strategy="afterInteractive"
        />
        <Script id="plausible-init" strategy="afterInteractive">
          {`window.plausible=window.plausible||function(){(plausible.q=plausible.q||[]).push(arguments)},plausible.init=plausible.init||function(i){plausible.o=i||{}};plausible.init();`}
        </Script>
      </head>
      <body className="min-h-screen flex flex-col">
        <JsonLd data={[organizationSchema(), websiteSchema()]} />
        <SiteShell>
          {children}
        </SiteShell>
      </body>
    </html>
  );
}

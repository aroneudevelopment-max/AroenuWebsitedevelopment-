import type { Metadata } from "next";
import { Maven_Pro, Newsreader } from "next/font/google";
import "./globals.css";
import { SiteShell } from "@/components/layout/SiteShell";

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
  title: "Aroneu",
  description: "Aroneu builds governable India capability teams for European companies, run on an AI workspace.",
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-32.png', type: 'image/png', sizes: '32x32' },
      { url: '/favicon-16.png', type: 'image/png', sizes: '16x16' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB" className="antialiased">
      <body className={`min-h-screen flex flex-col ${mavenPro.variable} ${newsreader.variable}`}>
        <SiteShell>
          {children}
        </SiteShell>
      </body>
    </html>
  );
}

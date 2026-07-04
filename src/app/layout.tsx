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

import type { Metadata } from "next";
import "./globals.css";

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
      <body className="min-h-screen flex flex-col">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-white focus:text-black">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}

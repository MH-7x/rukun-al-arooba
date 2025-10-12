import type { Metadata } from "next";
import "../globals.css";

import localFont from "next/font/local";
import { APP } from "@/lib/App";
import Script from "next/script";
import { RukunAlAroobaSchema } from "@/lib/list";

import GTM from "@/components/GTM";
import ArNavbar from "@/components/arabic/ArNavbar";

const NotoSansArabic = localFont({
  src: [
    {
      path: "../NotoSansArabic-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../NotoSansArabic-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../NotoSansArabic-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  adjustFontFallback: "Arial",
  display: "swap",
  fallback: ["Helvetica", "Arial", "sans-serif"],
  preload: true,
  variable: "--font-graphik",
});

export const metadata: Metadata = {
  applicationName: APP.name,
  robots: {
    "max-image-preview": "large",
    follow: true,
    googleBot: {
      notranslate: true,
      "max-image-preview": "large",
      index: true,
      follow: true,
    },
    index: true,
    notranslate: true,
  },
  icons: {
    icon: [
      { url: "/icons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/icons/apple-touch-icon.png",
    shortcut: "/icons/favicon-32x32.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="rtl">
      <head>
        <Script
          id="Business-Schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(RukunAlAroobaSchema),
          }}
          strategy="beforeInteractive"
          key="Business-Schema"
        />
      </head>
      <body className={`${NotoSansArabic.className} antialiased`}>
        {children}
        <ArNavbar />
        <GTM />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import "animate.css";

import localFont from "next/font/local";
import Footer from "@/components/base/footer";
import { APP } from "@/lib/App";
import Script from "next/script";
import { RukunAlAroobaSchema } from "@/lib/list";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const GraphikFont = localFont({
  src: [
    {
      path: "./Graphik-Regular-Trial.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./Graphik-Medium-Trial.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./Graphik-Bold-Trial.woff2",
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
    <html lang="en">
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
      <body className={`${GraphikFont.className} antialiased`}>
        <Navbar />
        {children}
        <Footer />
        <GoogleAnalytics />
      </body>
    </html>
  );
}

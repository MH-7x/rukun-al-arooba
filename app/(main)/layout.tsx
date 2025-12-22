import type { Metadata } from "next";
import "../globals.css";
// Keep Navbar static to prevent Layout Shift (CLS) at the top of the page
import Navbar from "@/components/Navbar";
import "animate.css";
import localFont from "next/font/local";
import { APP } from "@/lib/App";
import { RukunAlAroobaSchema } from "@/lib/list";
import GTM from "@/components/GTM";
// 1. Import dynamic from Next.js
import dynamic from "next/dynamic";

// 2. Lazy Load the Footer
// We use ssr: true (default) because Footer text is important for SEO
const Footer = dynamic(() => import("@/components/base/footer"));

// 3. Lazy Load the Chat Box
// We use ssr: false because chat widgets are client-only and don't help SEO.
// This removes it entirely from the initial HTML sent from the server.
const WtChatBox = dynamic(() => import("@/components/WtChatBox"));

const GraphikFont = localFont({
  src: [
    {
      path: "../Graphik-Regular-Trial.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../Graphik-Medium-Trial.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../Graphik-Bold-Trial.woff2",
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
        {/* 4. OPTIMIZATION: Use standard script tag for JSON-LD.
            Next/Script is for loading JS libraries, not data blocks. */}
        <script
          id="Business-Schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(RukunAlAroobaSchema),
          }}
        />
      </head>
      <body className={`${GraphikFont.className} antialiased`}>
        <Navbar />

        {children}

        {/* This will now load in the background */}
        <WtChatBox />

        {/* This will load only when needed */}
        <Footer />

        <GTM />
      </body>
    </html>
  );
}

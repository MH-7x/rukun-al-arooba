import type { Metadata } from "next";
import "../globals.css";

import localFont from "next/font/local";
import { APP } from "@/lib/App";
import Script from "next/script";
import { RukunAlAroobaSchema } from "@/lib/list";
const navItems = [
  {
    title: "اثاث مستعمل",
    link: createEncodedUrl("أثاث-مستعمل"),
  },
  {
    title: "اثاث مستعمل الشارقة",
    link: createEncodedUrl("أثاث-مستعمل-الشارقة"),
  },
  {
    title: "اثاث مستعمل دبي",
    link: createEncodedUrl("اثاث-مستعمل-دبي"),
  },
  {
    title: "اثاث مستعمل ابوظبي",
    link: createEncodedUrl("اثاث-مستعمل-ابوظبي"),
  },
  {
    title: "اثاث مستعمل عجمان",
    link: createEncodedUrl("اثاث-مستعمل-عجمان"),
  },
  {
    title: "اثاث مستعمل العين",
    link: createEncodedUrl("اثاث-مستعمل-العين"),
  },
  {
    title: "اثاث مستعمل راس الخيمة",
    link: createEncodedUrl("اثاث-مستعمل-راس-الخيمة"),
  },
];
import GTM from "@/components/GTM";
import ArNavbar from "@/components/arabic/ArNavbar";
import Image from "next/image";
import { createEncodedUrl } from "@/lib/utils";
import WtChatBox from "@/components/WtChatBox";
import {
  Facebook,
  Instagram,
  Linkedin,
  MessageCircle,
  Pin,
} from "lucide-react";

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
const socialLinks = [
  "https://www.facebook.com/rukun.al.arooba.used.furniture/",
  "https://www.linkedin.com/in/rukun-al-arooba-used-furniture",
  "https://www.pinterest.com/rukun_al_arooba_used_furniture/",
  "https://wa.me/+971556461731?text=I%20Contact%20You%20For%20Used%20Furniture",
  "https://www.instagram.com/rukun.al.arooba.used.furniture/",
];
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar-AE" dir="rtl" suppressHydrationWarning>
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
      <body
        className={`${NotoSansArabic.className} antialiased`}
        suppressHydrationWarning
      >
        <ArNavbar />
        {children}
        <WtChatBox />
        <div
          className="blue-bg md:px-20 px-4 py-2 text-sm text-white leading-relaxed"
          dir="rtl"
        >
          <p>
            <a href="https://buyingusedfurnitureuae.com">
              شركة شراء أثاث مستعمل
            </a>{" "}
            من أقدم الشركات المتخصصة في شراء وبيع الأثاث المستعمل في الإمارات.
            مقرنا في الشارقة، ونشتغل في هالمجال من أكثر من ١٠ سنوات.
          </p>
          <p>
            نشتري كل أنواع الأثاث والأجهزة المستعملة:{" "}
            <a href="https://buyingusedfurnitureuae.com/شراء-الأثاث-المنزلي">
              الأثاث المنزلي
            </a>{" "}
            من غرف نوم وصالونات ومجالس،{" "}
            <a href="https://buyingusedfurnitureuae.com/شراء-الاثاث-المكتبي-المستعمل">
              الأثاث المكتبي
            </a>{" "}
            بكل أنواعه، أثاث الفنادق،{" "}
            <a href="https://buyingusedfurnitureuae.com/شراء-الأجهزة-المنزلية">
              الأجهزة المنزلية
            </a>{" "}
            مثل الثلاجات والغسالات والمكيفات،{" "}
            <a href="https://buyingusedfurnitureuae.com/شراء-الالكترونيات-المستعملة">
              والإلكترونيات المستعملة
            </a>{" "}
            كالتلفزيونات واللابتوبات.
          </p>
          <p>
            خدماتنا تغطي الإمارات كلها:{" "}
            <a href="https://buyingusedfurnitureuae.com/شراء-اثاث-مستعمل-دبي">
              شراء اثاث مستعمل دبي
            </a>
            ،{" "}
            <a href="https://buyingusedfurnitureuae.com/شراء-اثاث-مستعمل-الشارقة">
              شراء اثاث مستعمل الشارقة
            </a>
            ،{" "}
            <a href="https://buyingusedfurnitureuae.com/شراء-اثاث-مستعمل-ابوظبي">
              شراء اثاث مستعمل أبوظبي
            </a>
            ،{" "}
            <a href="https://buyingusedfurnitureuae.com/شراء-اثاث-مستعمل-عجمان">
              شراء اثاث مستعمل عجمان
            </a>
            ،{" "}
            <a href="https://buyingusedfurnitureuae.com/شراء-اثاث-مستعمل-العين">
              شراء اثاث مستعمل العين
            </a>
            ، وشراء اثاث مستعمل رأس الخيمة.
          </p>
          <p>
            نوفر تقييم مجاني، فك وتغليف احترافي، ورد سريع عبر الواتساب. لو عندك
            أثاث تبي تبيعه، تواصل معنا وبنوصلك بأسرع وقت. تعرف أكثر عن الشركة.
          </p>
        </div>
        <footer className="bg-gray-100">
          <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="flex justify-center ">
              <Image
                src={"/rukun-al-arooba-used-furniture.svg"}
                alt="شعار ركن العربية للأثاث المستعمل"
                width={200}
                height={200}
              />
            </div>

            <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500">
              كورنر أرابيا شركة أثاث مستعمل في الإمارات العربية المتحدة. نشتري
              ونبيع جميع أنواع الأثاث والأجهزة المستعملة في جميع أنحاء الإمارات.
            </p>

            <ul className="mt-12 flex flex-wrap justify-center gap-x-6 gap-y-3 md:gap-x-8 lg:gap-x-12">
              {navItems.map((item, i) => (
                <li key={i}>
                  <a
                    className="text-gray-700 transition hover:text-gray-700/75"
                    href={item.link}
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>

            <div className="flex items-center justify-center mt-2 gap-4 max-w-4xl mx-auto bg-red-200">
              {[Facebook, Linkedin, Pin, MessageCircle, Instagram].map(
                (Icon, idx) => (
                  <a
                    key={idx}
                    href={socialLinks[idx]}
                    rel="noopener noreferrer"
                    target="_blank"
                    title="Follow Us On Social Media"
                    className="w-8 h-8 flex items-center justify-center rounded-full bg-white/5 text-pretty hover:bg-[#ffdb5e] hover:text-[#144e5a] hover:-translate-y-1 transition-all duration-300"
                  >
                    <Icon size={16} />
                  </a>
                ),
              )}
            </div>
            <div className="w-full flex flex-wrap items-center justify-between mt-3 text-sm text-gray-500 gap-x-5 gap-y-2">
              <p>&copy; {new Date().getFullYear()} جميع الحقوق محفوظة</p>
              <p>
                تصميم وصيانة بواسطة{" "}
                <a
                  rel="noreferrer"
                  target="_blank"
                  className="blue font-medium underline"
                  href="https://wa.me/923471309916?text=Hi%20Mashal%20Are%20You%20Available%20For%20Work"
                >
                  مشعل حریرہ
                </a>
              </p>
            </div>
          </div>
        </footer>

        <GTM />
      </body>
    </html>
  );
}

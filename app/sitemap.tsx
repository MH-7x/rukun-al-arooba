import { APP } from "@/lib/App";
import { MetadataRoute } from "next";
const pages: MetadataRoute.Sitemap = [
  {
    url: "/",
    changeFrequency: "daily",
    priority: 1.0,
    images: ["/modern-furniture-showroom-sharjah.jpg"],
    lastModified: "2025-12-09",
  },
  {
    url: "/about-us",
    changeFrequency: "yearly",
    priority: 0.5,
    images: ["/Rukun-Al-Arooba-Used-Furniture.jpg"],
    lastModified: "2025-10-26",
  },
  {
    url: "/contact-us",
    changeFrequency: "yearly",
    priority: 0.6,
    images: ["/Background-with-text.jpg"],
    lastModified: "2025-10-26",
  },
  {
    url: "/how-we-work",
    changeFrequency: "yearly",
    priority: 0.6,
    images: ["/before-after-refurbishment-furniture.jpg"],
    lastModified: "2025-10-26",
  },

  // Furniture Buyers
  {
    url: "/abu-shagara-used-furniture-market",
    changeFrequency: "weekly",
    priority: 0.8,
    images: ["/abu-shagara-used-furniture-market.jpg"],
    lastModified: "2025-10-26",
  },
  {
    url: "/used-furniture-abu-dhabi",
    changeFrequency: "weekly",
    priority: 0.8,
    images: ["/furniture/used-furniture-abu-dhabi.jpg"],
    lastModified: "2025-12-09",
  },
  {
    url: "/used-furniture-buyers-in-dubai",
    changeFrequency: "weekly",
    priority: 0.9,
    images: ["/furniture/used-furniture-buyers-in-dubai.jpg"],
    lastModified: "2025-10-26",
  },
  {
    url: "/used-furniture-buyers-in-sharjah",
    changeFrequency: "weekly",
    priority: 0.9,
    images: ["/used-furniture-buyers-in-sharjah.jpg"],
    lastModified: "2025-10-26",
  },
  {
    url: "/used-furniture-in-ajman",
    changeFrequency: "weekly",
    priority: 0.8,
    images: ["/abu-shagara-used-furniture-market.jpg"],
    lastModified: "2025-10-26",
  },

  // Services
  {
    url: "/buy-or-sell-used-refrigerators",
    changeFrequency: "monthly",
    priority: 0.7,
    images: ["/service/used-bed-buyers-in-dubai.jpg"],
    lastModified: "2025-10-26",
  },
  {
    url: "/used-beds-buyers-in-dubai",
    changeFrequency: "weekly",
    priority: 0.8,
    images: ["/service/used-bed-buyers-in-dubai.jpg"],
    lastModified: "2025-10-26",
  },
  {
    url: "/used-beds-for-sale",
    changeFrequency: "weekly",
    priority: 0.9,
    images: ["/service/used-beds-for-sale.jpg"],
    lastModified: "2025-10-26",
  },
  {
    url: "/used-electronics-buyers-in-dubai",
    changeFrequency: "monthly",
    priority: 0.7,
    images: ["/service/used-electronics-buyers-in-dubai.jpg"],
    lastModified: "2025-10-26",
  },
  {
    url: "/used-home-appliances-dubai",
    changeFrequency: "monthly",
    priority: 0.7,
    images: ["/service/used-home-appliances-dubai.jpg"],
    lastModified: "2025-10-26",
  },
  {
    url: "/used-office-furniture-buyers-dubai",
    changeFrequency: "monthly",
    priority: 0.7,
    images: ["/service/used-home-appliances-dubai.jpg"],
    lastModified: "2025-10-26",
  },
  {
    url: "/used-sofa-for-sale-uae",
    changeFrequency: "weekly",
    priority: 0.9,
    images: ["/images/used-sofa-for-sale.jpg"],
    lastModified: "2025-10-26",
  },
  {
    url: "/blogs",
    changeFrequency: "weekly",
    priority: 0.8,
    images: ["/images/used-sofa-for-sale.jpg"],
    lastModified: "2025-12-09",
  },
  {
    url: `/${decodeURIComponent("أثاث-مستعمل")}`,
    changeFrequency: "monthly",
    priority: 0.9,
    images: ["/ar/used-furniture-ar.jpg"],
    lastModified: "2025-10-31",
  },
  {
    url: `/${decodeURIComponent("أثاث-مستعمل-الشارقة")}`,
    changeFrequency: "monthly",
    priority: 0.9,
    images: ["/ar/used-furniture-sharjah-ar.jpg"],
    lastModified: "2025-10-31",
  },
  {
    url: `/${decodeURIComponent("اثاث-مستعمل-دبي")}`,
    changeFrequency: "monthly",
    priority: 0.9,
    images: ["/ar/used-furniture-dubai-ar.jpg"],
    lastModified: "2025-10-31",
  },
  {
    url: `/${decodeURIComponent("اثاث-مستعمل-العين")}`,
    changeFrequency: "monthly",
    priority: 0.9,
    images: ["/ar/used-furniture-al-ain-ar.jpg"],
    lastModified: "2025-12-10",
  },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map((page) => ({
    ...page,
    url: `${APP.url}${page.url}`,
    images: page.images ? page.images.map((img) => `${APP.url}${img}`) : [],
    lastModified: page.lastModified,
  }));
}

import { APP } from "@/lib/App";
import { MetadataRoute } from "next";
const pages: MetadataRoute.Sitemap = [
  {
    url: "/",
    changeFrequency: "daily",
    priority: 1.0,
    images: ["/modern-furniture-showroom-sharjah.jpg"],
  },
  {
    url: "/about-us",
    changeFrequency: "yearly",
    priority: 0.5,
    images: ["/Rukun-Al-Arooba-Used-Furniture.jpg"],
  },
  {
    url: "/contact-us",
    changeFrequency: "yearly",
    priority: 0.6,
    images: ["/Background-with-text.jpg"],
  },
  {
    url: "/how-we-work",
    changeFrequency: "yearly",
    priority: 0.6,
    images: ["/before-after-refurbishment-furniture.jpg"],
  },

  // Furniture Buyers
  {
    url: "/abu-shagara-used-furniture-market",
    changeFrequency: "weekly",
    priority: 0.8,
    images: ["/abu-shagara-used-furniture-market.jpg"],
  },
  {
    url: "/used-furniture-abu-dhabi",
    changeFrequency: "weekly",
    priority: 0.8,
    images: ["/furniture/used-furniture-abu-dhabi.jpg"],
  },
  {
    url: "/used-furniture-buyers-in-dubai",
    changeFrequency: "weekly",
    priority: 0.9,
    images: ["/furniture/used-furniture-buyers-in-dubai.jpg"],
  },
  {
    url: "/used-furniture-buyers-in-sharjah",
    changeFrequency: "weekly",
    priority: 0.9,
    images: ["/used-furniture-buyers-in-sharjah.jpg"],
  },
  {
    url: "/used-furniture-in-ajman",
    changeFrequency: "weekly",
    priority: 0.8,
    images: ["/abu-shagara-used-furniture-market.jpg"],
  },

  // Services
  {
    url: "/buy-or-sell-used-refrigerators",
    changeFrequency: "monthly",
    priority: 0.7,
    images: ["/service/used-bed-buyers-in-dubai.jpg"],
  },
  {
    url: "/used-beds-buyers-in-dubai",
    changeFrequency: "weekly",
    priority: 0.8,
    images: ["/service/used-bed-buyers-in-dubai.jpg"],
  },
  {
    url: "/used-beds-for-sale",
    changeFrequency: "weekly",
    priority: 0.9,
    images: ["/service/used-beds-for-sale.jpg"],
  },
  {
    url: "/used-electronics-buyers-in-dubai",
    changeFrequency: "monthly",
    priority: 0.7,
    images: ["/service/used-electronics-buyers-in-dubai.jpg"],
  },
  {
    url: "/used-home-appliances-dubai",
    changeFrequency: "monthly",
    priority: 0.7,
    images: ["/service/used-home-appliances-dubai.jpg"],
  },
  {
    url: "/used-office-furniture-buyers-dubai",
    changeFrequency: "monthly",
    priority: 0.7,
    images: ["/service/used-home-appliances-dubai.jpg"],
  },
  {
    url: "/used-sofa-for-sale-uae",
    changeFrequency: "weekly",
    priority: 0.9,
    images: ["/images/used-sofa-for-sale.jpg"],
  },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const today = new Date().toISOString().split("T")[0]; // Format: YYYY-MM-DD
  return pages.map((page) => ({
    ...page,
    url: `${APP.url}${page.url}`,
    images: page.images ? page.images.map((img) => `${APP.url}${img}`) : [],
    lastModified: today,
  }));
}

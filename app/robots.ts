import { APP } from "@/lib/App";
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/server/", "/private/", "/admin/"],
      },
      {
        userAgent: ["GPTBot", "ClaudeBot", "PerplexityBot", "Google-Extended"],
        allow: "/",
      },
    ],
    sitemap: [`${APP.url}/sitemap.xml`],
    host: `${APP.url}`,
  };
}

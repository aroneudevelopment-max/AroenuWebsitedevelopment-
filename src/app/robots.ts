import { MetadataRoute } from "next";
import { buildAbsoluteUrl } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: ["/", "/images/", "/videos/", "/fonts/"],
      disallow: ["/api/", "/preview/", "/staging/", "/*/success"],
    },
    sitemap: buildAbsoluteUrl("/sitemap.xml"),
  };
}

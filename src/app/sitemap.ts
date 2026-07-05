import { MetadataRoute } from "next";
import { buildAbsoluteUrl } from "@/lib/seo";

const publicRoutes = [
  "/",
  "/capability-teams",
  "/ai-workspace",
  "/how-it-works",
  "/about",
  "/insights",
  "/case-studies",
  "/careers",
  "/resources",
  "/contact",
  "/privacy",
  "/imprint",
  "/terms",
  "/cookie-policy",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return publicRoutes.map((path) => ({
    url: buildAbsoluteUrl(path),
    lastModified: new Date(),
  }));
}

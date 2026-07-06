import type { Metadata } from "next";

export const SITE_NAME = "Aroneu";
export const SITE_LEGAL_NAME = "Aroneu GmbH";
export const SITE_URL = "https://aroneu.de";
export const DEFAULT_OG_IMAGE = "/images/aroneu/aroneu-logo-preview.png";

type MetadataInput = {
  title: string;
  description: string;
  path: string;
  ogTitle?: string;
  ogDescription?: string;
  image?: string;
  noIndex?: boolean;
};

export function buildAbsoluteUrl(path: string) {
  if (!path || path === "/") {
    return SITE_URL;
  }

  return new URL(path, `${SITE_URL}/`).toString();
}

export function buildPageMetadata({
  title,
  description,
  path,
  ogTitle,
  ogDescription,
  image = DEFAULT_OG_IMAGE,
  noIndex = false,
}: MetadataInput): Metadata {
  const canonical = buildAbsoluteUrl(path);

  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      type: "website",
      url: canonical,
      siteName: SITE_NAME,
      title: ogTitle ?? title,
      description: ogDescription ?? description,
      images: [
        {
          url: buildAbsoluteUrl(image),
          alt: `${SITE_NAME} visual`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle ?? title,
      description: ogDescription ?? description,
      images: [buildAbsoluteUrl(image)],
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
    },
  };
}

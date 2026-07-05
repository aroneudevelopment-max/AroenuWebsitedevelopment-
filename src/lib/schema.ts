import { FAQItem } from "@/lib/content/types";
import { buildAbsoluteUrl, SITE_LEGAL_NAME, SITE_NAME, SITE_URL } from "@/lib/seo";

type SchemaObject = Record<string, unknown>;

type BreadcrumbItem = {
  name: string;
  path: string;
};

function withContext(schema: SchemaObject): SchemaObject {
  return {
    "@context": "https://schema.org",
    ...schema,
  };
}

export function organizationSchema() {
  return withContext({
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_LEGAL_NAME,
    url: SITE_URL,
    logo: buildAbsoluteUrl("/favicon.svg"),
  });
}

export function websiteSchema() {
  return withContext({
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: SITE_NAME,
    url: SITE_URL,
    publisher: {
      "@id": `${SITE_URL}/#organization`,
    },
    inLanguage: "en-GB",
  });
}

export function webPageSchema({
  path,
  name,
  description,
  type = "WebPage",
}: {
  path: string;
  name: string;
  description: string;
  type?: string;
}) {
  return withContext({
    "@type": type,
    "@id": `${buildAbsoluteUrl(path)}#webpage`,
    url: buildAbsoluteUrl(path),
    name,
    description,
    isPartOf: {
      "@id": `${SITE_URL}/#website`,
    },
    about: {
      "@id": `${SITE_URL}/#organization`,
    },
    inLanguage: "en-GB",
  });
}

export function collectionPageSchema({
  path,
  name,
  description,
}: {
  path: string;
  name: string;
  description: string;
}) {
  return webPageSchema({
    path,
    name,
    description,
    type: "CollectionPage",
  });
}

export function serviceSchema({
  path,
  name,
  description,
}: {
  path: string;
  name: string;
  description: string;
}) {
  return withContext({
    "@type": "Service",
    "@id": `${buildAbsoluteUrl(path)}#service`,
    name,
    description,
    url: buildAbsoluteUrl(path),
    provider: {
      "@id": `${SITE_URL}/#organization`,
    },
    areaServed: "Europe",
  });
}

export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return withContext({
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: buildAbsoluteUrl(item.path),
    })),
  });
}

export function faqPageSchema(faqs: FAQItem[]) {
  return withContext({
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  });
}

import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/preview/', '/staging/', '/*/success'],
    },
    sitemap: 'https://aroneu.de/sitemap.xml',
  }
}
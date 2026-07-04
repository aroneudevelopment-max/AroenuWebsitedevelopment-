import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://aroneu.de',
      lastModified: new Date(),
    },
  ]
}
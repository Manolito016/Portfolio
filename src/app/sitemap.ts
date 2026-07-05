import type { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site';
import { allRoutes } from '@/config/navigation';

export default function sitemap(): MetadataRoute.Sitemap {
  return allRoutes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '/' ? 'daily' : 'weekly',
    priority: route === '/' ? 1 : 0.8,
  }));
}

import { MetadataRoute } from 'next';

// Enable static generation
export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/_next/'],
    },
    sitemap: 'https://www.thehilabs.com/sitemap.xml',
  };
}
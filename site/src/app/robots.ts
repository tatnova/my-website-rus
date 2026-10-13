import type { MetadataRoute } from 'next';

// Сайт открыт для всех поисковых и ИИ-краулеров (Googlebot, Bingbot, OAI-SearchBot, PerplexityBot и др.).
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: 'https://beauty.adsnew.org/sitemap.xml',
  };
}

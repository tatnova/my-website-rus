import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';
import { SITE_URL } from '@/lib/site';

// Сайт открыт для всех поисковых и ИИ-краулеров (Googlebot, Bingbot, OAI-SearchBot, PerplexityBot и др.).
// /l/ — служебные копии нишевых лендингов: у каждого лендинга свой поддомен и свой robots.txt.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/', disallow: '/l/' },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}

import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';
import { getArticles, getCases } from '@/lib/content';

import { LANDINGS_LIVE, SITE_URL } from '@/lib/site';

// Только страницы с содержанием.
// /massage — старая страница массажа. Когда лендинги опубликованы, её заменяет massage.adsnew.org.
const pages = [
  ...(LANDINGS_LIVE ? [] : ['/massage']),
  '/',
  '/cases',
  '/blog',
  '/blog/kak-zapolnit-zapis',
  '/blog/pochemu-reklama-ne-daet-rezultata-i-kak-eto-ispravit',
  '/blog/oshibki-v-reklame-iz-za-kotoryh-vy-teryaete-klientov',
  '/privacy-policy',
  '/links',
  '/about',
  '/services',
  '/reviews',
  '/faq',
  '/contact',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const all = [...pages, ...getArticles().map((a) => `/blog/${a.slug}`), ...getCases().map((c) => `/cases/${c.slug}`)];
  return all.map((path) => ({ url: `${SITE_URL}${path === '/' ? '' : path}` }));
}

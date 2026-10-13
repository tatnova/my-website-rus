import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';
import { getCases } from '@/lib/content';

import { SITE_URL } from '@/lib/site';

// Только страницы с содержанием. Незаполненные страницы (about, contact, faq, reviews, services)
// добавим сюда, когда они будут готовы.
const pages = [
  '/',
  '/massage',
  '/cases',
  '/blog',
  '/blog/kak-zapolnit-zapis',
  '/blog/pochemu-reklama-ne-daet-rezultata-i-kak-eto-ispravit',
  '/blog/oshibki-v-reklame-iz-za-kotoryh-vy-teryaete-klientov',
  '/privacy-policy',
  '/links',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const all = [...pages, ...getCases().map((c) => `/cases/${c.slug}`)];
  return all.map((path) => ({ url: `${SITE_URL}${path === '/' ? '' : path}` }));
}

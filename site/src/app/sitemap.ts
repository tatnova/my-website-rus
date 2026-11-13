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
  '/blog/chto-podarit-klientam-salona-krasoty-na-novyj-god',
  '/blog/kuda-propali-klienty-salon-krasoty',
  '/blog/kak-zapolnit-zapis',
  '/blog/pochemu-reklama-ne-daet-rezultata-i-kak-eto-ispravit',
  '/blog/oshibki-v-reklame-iz-za-kotoryh-vy-teryaete-klientov',
  '/privacy-policy',
  '/privacy-policy/ai-agent',
  '/links',
  '/about',
  '/services',
  '/razbor',
  '/reviews',
  '/faq',
  '/contact',
];

// Дата последнего обновления для страниц, где она известна точно.
const lastModified: Record<string, string> = {
  '/blog/chto-podarit-klientam-salona-krasoty-na-novyj-god': '2026-11-24',
  '/blog/kuda-propali-klienty-salon-krasoty': '2026-11-10',
  '/cases/massazh-israel-740-zayavok': '2026-11-10',
};

export default function sitemap(): MetadataRoute.Sitemap {
  const all = [...pages, ...getArticles().map((a) => `/blog/${a.slug}`), ...getCases().map((c) => `/cases/${c.slug}`),
    '/en/cases',
    ...getCases('en').map((c) => `/en/cases/${c.slug}`),
  ];
  return all.map((path) => ({
    url: `${SITE_URL}${path === '/' ? '' : path}`,
    ...(lastModified[path] ? { lastModified: lastModified[path] } : {}),
  }));
}

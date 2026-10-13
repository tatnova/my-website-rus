import type { MetadataRoute } from 'next';

const SITE_URL = 'https://beauty.adsnew.org';

// Только страницы с содержанием. Незаполненные страницы (about, contact, faq, reviews, services)
// добавим сюда, когда они будут готовы.
const pages = [
  '/',
  '/massage',
  '/cases',
  '/cases/massazh-israel-740-zayavok',
  '/cases/massage-canada-body',
  '/cases/spa-salon-california-256-clients',
  '/blog',
  '/blog/kak-zapolnit-zapis',
  '/blog/pochemu-reklama-ne-daet-rezultata-i-kak-eto-ispravit',
  '/blog/oshibki-v-reklame-iz-za-kotoryh-vy-teryaete-klientov',
  '/privacy-policy',
];

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map((path) => ({ url: `${SITE_URL}${path === '/' ? '' : path}` }));
}

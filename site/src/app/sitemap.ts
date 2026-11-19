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
  '/blog/rabotat-li-salonu-krasoty-31-dekabrya',
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

// Дата последнего заметного изменения страниц, которые написаны в коде (не в content/).
// Меняя такую страницу, обновите дату здесь. У кейсов и статей дата берётся из поля «Дата обновления»
// (updated), а если его нет — из даты публикации.
const lastModified: Record<string, string> = {
  '/blog/rabotat-li-salonu-krasoty-31-dekabrya': '2026-11-19',
  '/blog/chto-podarit-klientam-salona-krasoty-na-novyj-god': '2026-11-17',
  '/massage': '2026-11-13',
  '/': '2026-11-13',
  '/cases': '2026-11-13',
  '/blog': '2026-11-19',
  '/blog/kuda-propali-klienty-salon-krasoty': '2026-11-13',
  '/blog/kak-zapolnit-zapis': '2026-11-13',
  '/blog/pochemu-reklama-ne-daet-rezultata-i-kak-eto-ispravit': '2026-11-13',
  '/blog/oshibki-v-reklame-iz-za-kotoryh-vy-teryaete-klientov': '2026-11-13',
  '/privacy-policy': '2026-10-27',
  '/privacy-policy/ai-agent': '2026-10-27',
  '/links': '2026-10-13',
  '/about': '2026-10-16',
  '/services': '2026-11-10',
  '/razbor': '2026-11-13',
  '/reviews': '2026-10-13',
  '/faq': '2026-10-13',
  '/contact': '2026-10-13',
  '/en/cases': '2026-10-21',
};

const latest = (...dates: string[]) => dates.filter(Boolean).sort().at(-1) ?? '';

export default function sitemap(): MetadataRoute.Sitemap {
  const cases = getCases();
  const enCases = getCases('en');
  const articles = getArticles();
  const updated = (x: { updated: string; date: string }) => x.updated || x.date;
  const newestCase = latest(...cases.map(updated));
  const newestEnCase = latest(...enCases.map(updated));
  const newestArticle = latest(...articles.map(updated));

  const dates = new Map<string, string>(Object.entries(lastModified));
  // Списки и главная показывают карточки, поэтому новый или обновлённый кейс/статья обновляет и их.
  dates.set('/', latest(lastModified['/'], newestCase, newestArticle));
  dates.set('/cases', latest(lastModified['/cases'], newestCase));
  dates.set('/en/cases', latest(lastModified['/en/cases'], newestEnCase));
  dates.set('/blog', latest(lastModified['/blog'], newestArticle));
  for (const a of articles) dates.set(`/blog/${a.slug}`, updated(a));
  for (const c of cases) dates.set(`/cases/${c.slug}`, updated(c));
  for (const c of enCases) dates.set(`/en/cases/${c.slug}`, updated(c));

  const all = [...pages, ...articles.map((a) => `/blog/${a.slug}`), ...cases.map((c) => `/cases/${c.slug}`),
    '/en/cases',
    ...enCases.map((c) => `/en/cases/${c.slug}`),
  ];
  return all.map((path) => {
    const lastModified = dates.get(path);
    // Подсказка при сборке: у страницы нет даты, значит её забыли добавить в список выше.
    if (!lastModified) console.warn(`sitemap: нет lastmod для ${path}`);
    return {
      url: `${SITE_URL}${path === '/' ? '' : path}`,
      ...(lastModified ? { lastModified } : {}),
    };
  });
}

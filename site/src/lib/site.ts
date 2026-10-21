// Адрес основного сайта. Сейчас это beauty.adsnew.org (Vercel).
// После переезда на Cloudflare в настройках сборки задаётся SITE_URL=https://adsnew.org.
export const SITE_URL = (process.env.SITE_URL || 'https://beauty.adsnew.org').replace(/\/$/, '');

// Адрес нишевого лендинга, например https://massage.adsnew.org.
// До переезда лендинги доступны только для проверки по адресу /l/<ниша> и закрыты от индексации.
export const LANDINGS_LIVE = process.env.LANDINGS_LIVE === '1';
export const nicheUrl = (subdomain: string) => `https://${subdomain}.adsnew.org`;

// Адрес лендинга ниши на нужном языке. Английская версия: massage.adsnew.org/en/.
// Пока лендинги не опубликованы, ссылки ведут на проверочные копии /l/<ниша> и /en/l/<ниша>.
export const landingUrl = (n: { id: string; subdomain: string }, lang: 'ru' | 'en' = 'ru') =>
  LANDINGS_LIVE
    ? `${nicheUrl(n.subdomain)}/${lang === 'en' ? 'en/' : ''}`
    : `${SITE_URL}${lang === 'en' ? '/en' : ''}/l/${n.id}`;

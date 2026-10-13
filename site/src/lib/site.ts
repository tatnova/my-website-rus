// Адрес основного сайта. Сейчас это beauty.adsnew.org (Vercel).
// После переезда на Cloudflare в настройках сборки задаётся SITE_URL=https://adsnew.org.
export const SITE_URL = (process.env.SITE_URL || 'https://beauty.adsnew.org').replace(/\/$/, '');

// Адрес нишевого лендинга, например https://massage.adsnew.org.
// До переезда лендинги доступны только для проверки по адресу /l/<ниша> и закрыты от индексации.
export const LANDINGS_LIVE = process.env.LANDINGS_LIVE === '1';
export const nicheUrl = (subdomain: string) => `https://${subdomain}.adsnew.org`;

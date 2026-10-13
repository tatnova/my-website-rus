// Cloudflare Pages Function: выбирает сайт по домену. Логика — в routing/router.mjs.
import { route } from '../routing/router.mjs';

let cached = null;

async function loadData(context) {
  if (cached) return cached;
  const res = await context.env.ASSETS.fetch(new URL('/_data/routing.json', context.request.url));
  cached = res.ok ? await res.json() : { niches: {}, redirects: {} };
  return cached;
}

export async function onRequest(context) {
  const data = await loadData(context);
  const serveAsset = async (path, search = '') => {
    const res = await context.env.ASSETS.fetch(new URL(path + search, context.request.url));
    return new Response(res.body, res);
  };
  const response = (await route(context.request, data, serveAsset)) ?? (await context.next());
  // Временные адреса (*.pages.dev) нужны только для проверки: закрываем их от поисковиков,
  // чтобы они не соперничали с adsnew.org.
  const host = new URL(context.request.url).hostname;
  if (host.endsWith('.pages.dev')) {
    const res = new Response(response.body, response);
    res.headers.set('X-Robots-Tag', 'noindex, nofollow');
    return res;
  }
  return response;
}

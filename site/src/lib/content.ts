// Чтение контента из папки content/ (её редактирует Pages CMS).
// Работает только при сборке, на сервере: страницы получают уже готовые данные.
import { readdirSync, readFileSync } from 'node:fs';
import path from 'node:path';
import { parse } from 'yaml';
import { marked } from 'marked';

const CONTENT = path.join(process.cwd(), 'content');

export type CaseMeta = {
  slug: string;
  title: string;
  card_title: string;
  seo_title: string;
  description: string;
  lead: string;
  niche_label: string;
  summary_problem: string;
  summary_action: string;
  summary_result: string;
  niches: string[];
  country: string;
  city: string;
  goal: string;
  period: string;
  ad_budget: string;
  fee: string;
  total_spend: string;
  leads: string;
  cpl: string;
  clients: string;
  conversion: string;
  avg_check: string;
  revenue: string;
  profit: string;
  cover: string;
  proof: { image: string; caption?: string }[];
  creatives: { image: string; caption?: string }[];
  old_urls: string[];
  show_on_home: boolean;
  draft: boolean;
  order: number;
};

export type Case = CaseMeta & { html: string };

export type Review = {
  slug: string;
  author: string;
  niches: string[];
  country: string;
  text: string;
  image: string;
  screenshot: string;
  case: string;
  date: string;
  show_on_home: boolean;
  draft: boolean;
  order: number;
};

export type Niche = {
  id: string;
  name: string;
  published: boolean;
  subdomain: string;
  seo_title: string;
  description: string;
  accent: string;
  badge: string;
  hero_title: string;
  hero_accent: string;
  hero_text: string;
  hero_image: string;
  hero_image_alt: string;
  hero_stat_value: string;
  hero_stat_label: string;
  stats: { value: string; label: string; case?: string }[];
  contact_message: string;
  whatsapp_label: string;
  telegram_label: string;
  cases_title: string;
  about_text: string;
  reviews_title: string;
  faq: { q: string; a: string }[];
  prices: { service: string; price: string; note?: string }[];
  final_title: string;
  final_text: string;
};

export type Settings = {
  name: string;
  whatsapp_phone: string;
  whatsapp_display: string;
  telegram_username: string;
  main_domain: string;
  socials: { label: string; url: string }[];
  about_photo: string;
  about_text: string;
};

// Подписи метрик кейса в том порядке, в каком они показываются. Пустые поля не показываются.
export const CASE_METRICS: [keyof CaseMeta, string][] = [
  ['period', 'Срок'],
  ['ad_budget', 'Рекламный бюджет'],
  ['fee', 'Гонорар'],
  ['total_spend', 'Вложения всего'],
  ['leads', 'Заявки'],
  ['cpl', 'Цена заявки'],
  ['conversion', 'Конверсия в запись'],
  ['clients', 'Клиенты'],
  ['avg_check', 'Средний чек'],
  ['revenue', 'Выручка'],
  ['profit', 'Чистая прибыль'],
];

function files(dir: string, ext: RegExp) {
  return readdirSync(path.join(CONTENT, dir))
    .filter((f) => ext.test(f))
    .sort();
}

function frontmatter(raw: string): { data: Record<string, unknown>; body: string } {
  const m = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!m) return { data: {}, body: raw };
  return { data: (parse(m[1]) as Record<string, unknown>) ?? {}, body: m[2] };
}

const str = (v: unknown) => (v === null || v === undefined ? '' : String(v).trim());
const list = (v: unknown) => (Array.isArray(v) ? v.map(str).filter(Boolean) : []);
const images = (v: unknown) =>
  (Array.isArray(v) ? v : [])
    .map((x) => (typeof x === 'string' ? { image: x } : (x as { image?: unknown; caption?: unknown })))
    .map((x) => ({ image: str(x?.image), caption: str(x?.caption) }))
    .filter((x) => x.image);

let casesCache: Case[] | null = null;

// Все опубликованные кейсы (черновики не попадают на сайт).
export function getCases(): Case[] {
  if (casesCache) return casesCache;
  casesCache = files('cases', /\.md$/)
    .map((file) => {
      const { data, body } = frontmatter(readFileSync(path.join(CONTENT, 'cases', file), 'utf8'));
      const c: Case = {
        slug: file.replace(/\.md$/, ''),
        title: str(data.title),
        card_title: str(data.card_title) || str(data.title),
        seo_title: str(data.seo_title) || str(data.title),
        description: str(data.description),
        lead: str(data.lead),
        niche_label: str(data.niche_label),
        summary_problem: str(data.summary_problem),
        summary_action: str(data.summary_action),
        summary_result: str(data.summary_result),
        niches: list(data.niches),
        country: str(data.country),
        city: str(data.city),
        goal: str(data.goal),
        period: str(data.period),
        ad_budget: str(data.ad_budget),
        fee: str(data.fee),
        total_spend: str(data.total_spend),
        leads: str(data.leads),
        cpl: str(data.cpl),
        clients: str(data.clients),
        conversion: str(data.conversion),
        avg_check: str(data.avg_check),
        revenue: str(data.revenue),
        profit: str(data.profit),
        cover: str(data.cover),
        proof: images(data.proof),
        creatives: images(data.creatives),
        old_urls: list(data.old_urls),
        show_on_home: data.show_on_home === true,
        draft: data.draft === true,
        order: Number(data.order) || 999,
        html: marked.parse(body, { async: false }) as string,
      };
      return c;
    })
    .filter((c) => !c.draft && c.title)
    .sort((a, b) => a.order - b.order || a.slug.localeCompare(b.slug));
  return casesCache;
}

export function getCase(slug: string) {
  return getCases().find((c) => c.slug === slug);
}

export function getReviews(): Review[] {
  return files('reviews', /\.md$/)
    .map((file) => {
      const { data } = frontmatter(readFileSync(path.join(CONTENT, 'reviews', file), 'utf8'));
      return {
        slug: file.replace(/\.md$/, ''),
        author: str(data.author),
        niches: list(data.niches),
        country: str(data.country),
        text: str(data.text),
        image: str(data.image),
        screenshot: str(data.screenshot),
        case: str(data.case),
        date: str(data.date),
        show_on_home: data.show_on_home === true,
        draft: data.draft === true,
        order: Number(data.order) || 999,
      };
    })
    .filter((r) => !r.draft && r.text)
    .sort((a, b) => a.order - b.order);
}

export function getNiches(): Niche[] {
  return files('niches', /\.ya?ml$/).map((file) => {
    const d = (parse(readFileSync(path.join(CONTENT, 'niches', file), 'utf8')) ?? {}) as Record<string, unknown>;
    const arr = <T,>(v: unknown) => (Array.isArray(v) ? (v as T[]) : []);
    return {
      id: file.replace(/\.ya?ml$/, ''),
      name: str(d.name),
      published: d.published === true,
      subdomain: str(d.subdomain) || file.replace(/\.ya?ml$/, ''),
      seo_title: str(d.seo_title),
      description: str(d.description),
      accent: str(d.accent) || '#e8a16b',
      badge: str(d.badge),
      hero_title: str(d.hero_title),
      hero_accent: str(d.hero_accent),
      hero_text: str(d.hero_text),
      hero_image: str(d.hero_image),
      hero_image_alt: str(d.hero_image_alt),
      hero_stat_value: str(d.hero_stat_value),
      hero_stat_label: str(d.hero_stat_label),
      stats: arr<{ value: unknown; label: unknown; case?: unknown }>(d.stats)
        .map((s) => ({ value: str(s?.value), label: str(s?.label), case: str(s?.case) }))
        .filter((s) => s.value),
      contact_message: str(d.contact_message),
      whatsapp_label: str(d.whatsapp_label) || 'WhatsApp',
      telegram_label: str(d.telegram_label) || 'Telegram',
      cases_title: str(d.cases_title) || 'Кейсы',
      about_text: str(d.about_text),
      reviews_title: str(d.reviews_title) || 'Отзывы',
      faq: arr<{ q: unknown; a: unknown }>(d.faq)
        .map((f) => ({ q: str(f?.q), a: str(f?.a) }))
        .filter((f) => f.q && f.a),
      prices: arr<{ service: unknown; price: unknown; note?: unknown }>(d.prices)
        .map((p) => ({ service: str(p?.service), price: str(p?.price), note: str(p?.note) }))
        .filter((p) => p.service && p.price),
      final_title: str(d.final_title),
      final_text: str(d.final_text),
    };
  });
}

export function getNiche(id: string) {
  return getNiches().find((n) => n.id === id);
}

export function getSettings(): Settings {
  const d = (parse(readFileSync(path.join(CONTENT, 'settings.yml'), 'utf8')) ?? {}) as Record<string, unknown>;
  return {
    name: str(d.name),
    whatsapp_phone: str(d.whatsapp_phone),
    whatsapp_display: str(d.whatsapp_display),
    telegram_username: str(d.telegram_username),
    main_domain: str(d.main_domain),
    socials: (Array.isArray(d.socials) ? d.socials : [])
      .map((s: { label?: unknown; url?: unknown }) => ({ label: str(s?.label), url: str(s?.url) }))
      .filter((s) => s.label && s.url),
    about_photo: str(d.about_photo),
    about_text: str(d.about_text),
  };
}

// Короткий markdown в одну строку (жирный, курсив, ссылки) для подзаголовков.
export function inlineMarkdown(text: string) {
  return marked.parseInline(text, { async: false }) as string;
}

export function nicheName(id: string) {
  return getNiche(id)?.name ?? NICHE_NAMES[id] ?? id;
}

// Названия ниш, у которых ещё нет файла лендинга.
const NICHE_NAMES: Record<string, string> = {
  massage: 'Массаж',
  cosmetology: 'Косметология',
  hair: 'Салоны и парикмахерские',
  nails: 'Маникюр',
  fitness: 'Фитнес',
  medspa: 'Медспа',
  education: 'Обучение',
  other: 'Другие ниши',
};

function yamlFile(name: string): Record<string, unknown> {
  return (parse(readFileSync(path.join(CONTENT, name), 'utf8')) ?? {}) as Record<string, unknown>;
}

// Общие вопросы и ответы (главная и /faq).
export type FaqItem = { q: string; a: string; topic: string; show_on_home: boolean };

export function getFaq(): FaqItem[] {
  const d = yamlFile('faq.yml');
  return (Array.isArray(d.faq) ? d.faq : [])
    .map((f: { q?: unknown; a?: unknown; topic?: unknown; show_on_home?: unknown }) => ({
      q: str(f?.q),
      a: str(f?.a),
      topic: str(f?.topic) || 'results',
      show_on_home: f?.show_on_home === true,
    }))
    .filter((f) => f.q && f.a);
}

// Услуги (главная и /services).
export function getServices(): { title: string; text: string; includes: string[]; featured: boolean }[] {
  const d = yamlFile('services.yml');
  return (Array.isArray(d.services) ? d.services : [])
    .map((x: { title?: unknown; text?: unknown; includes?: unknown; featured?: unknown }) => ({
      title: str(x?.title),
      text: str(x?.text),
      includes: list(x?.includes),
      featured: x?.featured === true,
    }))
    .filter((x) => x.title);
}

import Link from 'next/link';
import ResponsiveImage from '@/components/ResponsiveImage';
import { CASE_METRICS, getCase, getNiche, getSettings, nicheName, type Case, type CaseMeta, type Lang, type Niche } from '@/lib/content';
import { landingUrl } from '@/lib/site';

// Страница кейса на русском (/cases/<адрес>) и английском (/en/cases/<адрес>).
const TEXT = {
  ru: {
    eyebrow: 'Кейс по рекламе',
    back: '← Все кейсы',
    switch: 'English version',
    result: 'Результат в цифрах',
    creatives: 'Рекламные макеты',
    proof: 'Скриншоты из рекламного кабинета',
    landingsTitle: 'Реклама для вашей ниши',
    landingsText: 'Как я работаю с проектами в этой нише, другие кейсы и ответы на частые вопросы:',
    landingLink: (name: string) => `${name}: реклама и кейсы →`,
    waButton: 'Написать в WhatsApp',
    waText: (title: string) => `Здравствуйте! Прочитала кейс «${title}». Моя ниша и город: `,
    summary: { niche: 'Ниша', place: 'Где', period: 'Срок', result: 'Результат' },
    resultSub: (cpl: string) => (cpl ? `цена заявки ${cpl}` : ''),
    ctaTitle: 'Хотите обсудить продвижение своего бизнеса?',
    ctaText: 'Напишите мне в WhatsApp или Telegram — разберём ваш проект, бюджет и точки роста.',
    metrics: {} as Partial<Record<keyof CaseMeta, string>>,
  },
  en: {
    eyebrow: 'Ad case study',
    back: '← All case studies',
    switch: 'Русская версия',
    result: 'Results in numbers',
    creatives: 'Ad creatives',
    proof: 'Ads Manager screenshots',
    landingsTitle: 'Ads for your niche',
    landingsText: 'How I work with businesses in this niche, more case studies and answers to common questions:',
    landingLink: (name: string) => `${name}: ads and case studies →`,
    waButton: 'Message me on WhatsApp',
    waText: (title: string) => `Hi! I read your case study "${title}". My business and city: `,
    summary: { niche: 'Niche', place: 'Location', period: 'Period', result: 'Result' },
    resultSub: (cpl: string) => (cpl ? `cost per lead ${cpl}` : ''),
    ctaTitle: 'Want to talk about growing your business?',
    ctaText: "Message me on WhatsApp or Telegram and we'll go through your project, budget and growth points.",
    metrics: {
      period: 'Period',
      ad_budget: 'Ad budget',
      fee: 'Fee',
      total_spend: 'Total investment',
      leads: 'Leads',
      cpl: 'Cost per lead',
      conversion: 'Conversion to booking',
      clients: 'Clients',
      avg_check: 'Average ticket',
    } as Partial<Record<keyof CaseMeta, string>>,
  },
};

export default function CaseArticle({ c, lang }: { c: Case; lang: Lang }) {
  const t = TEXT[lang];
  const s = getSettings();
  // Готовый текст: человеку проще начать, а в переписке сразу видно, с какого кейса он пришёл.
  const wa = `https://wa.me/${s.whatsapp_phone}?text=${encodeURIComponent(t.waText(c.card_title || c.title))}`;
  const tg = `https://t.me/${s.telegram_username}`;
  const metrics = CASE_METRICS.filter(([key]) => c[key]).map(([key, label]) => [key, t.metrics[key] ?? label] as const);
  const other: Lang = lang === 'ru' ? 'en' : 'ru';
  const otherVersion = getCase(c.slug, other);
  // Перелинковка: лендинги ниш этого кейса на том же языке (если есть), иначе русские.
  const landings = c.niches
    .map((id) => getNiche(id, lang) ?? (lang === 'en' ? undefined : getNiche(id)))
    .filter((n): n is Niche => !!n && n.published);
  const resultSub = t.resultSub(c.cpl);
  const place = [c.country, c.city].filter(Boolean).join(', ');
  const eyebrow = [t.eyebrow, c.niche_label || c.niches.map(nicheName).join(', ').toLowerCase(), place]
    .filter(Boolean)
    .join(' · ');

  return (
    <main className="bg-[#fff8f1] text-gray-900">
      <article className="mx-auto max-w-3xl px-5 py-10 md:py-16">
        <div className="flex items-center justify-between gap-4">
          <Link href={lang === 'en' ? '/en/cases' : '/cases'} className="text-sm font-bold text-[#c97d45]">
            {t.back}
          </Link>
          {otherVersion && (
            <Link href={`${other === 'en' ? '/en' : ''}/cases/${c.slug}`} hrefLang={other} className="text-sm font-bold text-gray-600 hover:text-black">
              {t.switch}
            </Link>
          )}
        </div>

        <p className="mt-8 text-xs font-black uppercase tracking-[0.25em] text-[#c97d45]">{eyebrow}</p>

        <h1 className="mt-4 text-3xl font-black leading-tight md:text-5xl">{c.title}</h1>

        {/* Первый экран: та же цифра, что в объявлении, и сразу кнопка WhatsApp */}
        {c.summary_result && (
          <div className="mt-5 rounded-2xl bg-white px-5 py-3 shadow-sm">
            <div className="flex flex-wrap items-baseline gap-x-3">
              <span className="text-3xl font-black text-[#c97d45] md:text-4xl">{c.summary_result}</span>
              {resultSub && <span className="text-sm font-semibold text-gray-600">{resultSub}</span>}
            </div>
            <dl className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-700">
              {(
                [
                  [t.summary.niche, c.niche_label || c.niches.map(nicheName).join(', ').toLowerCase()],
                  [t.summary.place, place],
                  [t.summary.period, c.period],
                ] as const
              )
                .filter(([, v]) => v)
                .map(([k, v]) => (
                  <div key={k} className="flex gap-1">
                    <dt className="text-gray-400">{k}:</dt>
                    <dd className="font-semibold">{v}</dd>
                  </div>
                ))}
            </dl>
          </div>
        )}

        <div className="mt-5 flex flex-wrap gap-3">
          <a href={wa} target="_blank" className="rounded-full bg-[#25D366] px-6 py-3.5 text-base font-bold text-white shadow-sm">
            {t.waButton}
          </a>
          <a href={tg} target="_blank" className="rounded-full border border-gray-300 bg-white px-6 py-3.5 text-base font-bold">
            Telegram
          </a>
        </div>

        {c.lead && <p className="mt-6 text-lg leading-8 text-gray-600">{c.lead}</p>}

        {metrics.length > 0 && (
          <section className="mt-10 rounded-3xl bg-white p-5 shadow-sm md:p-7">
            <h2 className="text-2xl font-black">{t.result}</h2>
            <dl className="mt-5 grid grid-cols-2 gap-3">
              {metrics.map(([key, label]) => (
                <div key={key} className="border-b border-gray-100 pb-3">
                  <dt className="text-xs font-bold uppercase tracking-widest text-gray-400">{label}</dt>
                  <dd className="mt-1 text-xl font-black text-[#c97d45]">{c[key] as string}</dd>
                </div>
              ))}
            </dl>
          </section>
        )}

        <div
          className="case-body mt-10 text-[18px] leading-8 text-gray-800"
          dangerouslySetInnerHTML={{ __html: c.html }}
        />

        <Gallery title={t.creatives} items={c.creatives} />
        <Gallery title={t.proof} items={c.proof} />

        {landings.length > 0 && (
          <section className="mt-12 rounded-3xl bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-black">{t.landingsTitle}</h2>
            <p className="mt-3 text-gray-600">{t.landingsText}</p>
            <div className="mt-5 flex flex-wrap gap-3">
              {landings.map((n) => (
                <a
                  key={n.id}
                  href={landingUrl(n, getNiche(n.id, lang) ? lang : 'ru')}
                  className="rounded-full border border-[#e8a16b] px-5 py-2.5 text-sm font-bold text-[#a35f2c] hover:bg-[#fff1e4]"
                >
                  {t.landingLink(n.name)}
                </a>
              ))}
            </div>
          </section>
        )}

        <section className="mt-12 rounded-3xl bg-black p-6 text-white">
          <h2 className="text-2xl font-black">{t.ctaTitle}</h2>
          <p className="mt-3 text-white/70">{t.ctaText}</p>
          <div className="mt-5 flex flex-wrap gap-3">
            <a href={wa} target="_blank" className="rounded-full bg-white px-6 py-3 text-sm font-bold text-black">
              WhatsApp
            </a>
            <a href={tg} target="_blank" className="rounded-full border border-white/30 px-6 py-3 text-sm font-bold text-white">
              Telegram
            </a>
          </div>
        </section>
      </article>

      {/* На телефоне кнопка WhatsApp всегда видна */}
      <a
        href={wa}
        target="_blank"
        className="fixed bottom-4 left-4 right-4 z-50 rounded-full bg-[#25D366] px-5 py-4 text-center text-base font-bold text-white shadow-xl md:hidden"
      >
        {t.waButton}
      </a>
      <div className="h-20 md:hidden" />
    </main>
  );
}

function Gallery({ title, items }: { title: string; items: { image: string; caption?: string }[] }) {
  if (!items.length) return null;
  return (
    <section className="mt-12">
      <h2 className="text-2xl font-black">{title}</h2>
      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        {items.map((item) => (
          <figure key={item.image} className="overflow-hidden rounded-2xl bg-white shadow-sm">
            <ResponsiveImage
              src={item.image}
              alt={item.caption || title}
              sizes="(min-width: 768px) 360px, 100vw"
              className="h-auto w-full"
            />
            {item.caption && <figcaption className="p-3 text-sm text-gray-500">{item.caption}</figcaption>}
          </figure>
        ))}
      </div>
    </section>
  );
}

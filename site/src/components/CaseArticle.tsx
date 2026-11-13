import Link from 'next/link';
import ResponsiveImage from '@/components/ResponsiveImage';
import MidCta, { splitInMiddle } from '@/components/MidCta';
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
    ctaText: 'Похожая задача? Напишите нишу и город, и я скажу, с чего начать именно вам.',
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
    ctaText: "Similar situation? Tell me your business and city, and I'll suggest where to start.",
    metrics: {
      period: 'Period',
      ad_budget: 'Ad budget',
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
  // Сверху — до 4 главных цифр кейса, в порядке важности для читателя.
  const TOP: (keyof CaseMeta)[] = ['leads', 'clients', 'cpl', 'ad_budget', 'conversion', 'period'];
  const labels = new Map(CASE_METRICS);
  const metrics: { key: string; label: string; value: string }[] = TOP.filter((key) => c[key] && labels.has(key))
    .slice(0, 4)
    .map((key) => ({ key, label: t.metrics[key] ?? labels.get(key) ?? key, value: c[key] as string }));
  // Если цифр в карточке кейса нет, показываем хотя бы главный результат.
  if (!metrics.length && c.summary_result) metrics.push({ key: 'summary_result', label: t.summary.result, value: c.summary_result });
  const [bodyTop, bodyBottom] = splitInMiddle(c.html);
  const other: Lang = lang === 'ru' ? 'en' : 'ru';
  const otherVersion = getCase(c.slug, other);
  // Перелинковка: лендинги ниш этого кейса на том же языке (если есть), иначе русские.
  const landings = c.niches
    .map((id) => getNiche(id, lang) ?? (lang === 'en' ? undefined : getNiche(id)))
    .filter((n): n is Niche => !!n && n.published);
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

        {c.lead && <p className="mt-5 text-lg leading-8 text-gray-600">{c.lead}</p>}

        {/* Обложка: живое фото клиента или подходящее фото ниши */}
        {c.cover && !c.html.includes(c.cover) && (
          <figure className="mt-8 overflow-hidden rounded-3xl bg-white shadow-sm">
            <ResponsiveImage
              src={c.cover}
              alt={c.cover_alt || c.card_title || c.title}
              sizes="(min-width: 768px) 768px, 100vw"
              priority
              className="aspect-[2/1] h-auto w-full object-cover"
            />
          </figure>
        )}

        {/* Итог в цифрах сразу под обложкой: человек видит результат, не прокручивая */}
        {metrics.length > 0 && (
          <section className="mt-6 rounded-3xl bg-white p-5 shadow-sm md:p-6">
            <h2 className="text-xs font-black uppercase tracking-[0.2em] text-gray-400">{t.result}</h2>
            <dl className="mt-4 grid grid-cols-2 gap-x-4 gap-y-5 md:grid-cols-4">
              {metrics.map(({ key, label, value }) => (
                <div key={key} className="flex flex-col-reverse">
                  <dt className="mt-1 text-sm font-semibold text-gray-500">{label}</dt>
                  <dd className="text-2xl font-black leading-tight text-[#c97d45] md:text-3xl">{value}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-5 border-t border-gray-100 pt-4 text-sm text-gray-600">
              {[
                [t.summary.niche, c.niche_label || c.niches.map(nicheName).join(', ').toLowerCase()],
                [t.summary.place, place],
              ]
                .filter(([, v]) => v)
                .map(([k, v]) => `${k}: ${v}`)
                .join(' · ')}
            </p>
          </section>
        )}

        <div className="case-body mt-10 text-[18px] leading-8 text-gray-800" dangerouslySetInnerHTML={{ __html: bodyTop }} />

        <MidCta text={t.ctaText} message={t.waText(c.card_title || c.title)} button={t.waButton} />

        {bodyBottom && <div className="case-body text-[18px] leading-8 text-gray-800" dangerouslySetInnerHTML={{ __html: bodyBottom }} />}

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

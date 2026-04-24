import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Кейсы продвижения бьюти-бизнеса | Реклама, заявки и прибыль',
  description:
    'Кейсы продвижения салонов красоты, мастеров и студий: страна, ниша, вложения, заявки, стоимость лида, выручка и прибыль.',
};

const contacts = [
  { label: 'WhatsApp', href: 'https://wa.me/972537086545' },
  { label: 'Telegram', href: 'https://t.me/mailovaja' },
  { label: 'Instagram', href: '#instagram' },
  { label: 'YouTube', href: '#youtube' },
  { label: 'Facebook', href: '#facebook' },
  { label: 'TikTok', href: '#tiktok' },
];

const cases = [
  {
    country: 'Израиль',
    city: 'Петах-Тиква',
    niche: 'Массаж',
    title: 'Продвижение массажа в Израиле',
    investment: '6 174 ₪',
    leads: '740',
    leadPrice: '5,7 ₪',
    revenue: '37 000 ₪',
    profit: '30 762 ₪',
    href: '/cases/massazh-israel-740-zayavok',
  },
  {
    country: 'США',
    city: 'США',
    niche: 'Парикмахерская',
    title: 'Продвижение парикмахерской в США',
    investment: '—',
    leads: 'стабильный поток',
    leadPrice: '—',
    revenue: '—',
    profit: '—',
    href: '/cases/parikmaherskaya-usa-meta-ads',
  },
];

export default function CasesPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Кейсы продвижения бьюти-бизнеса',
    description:
      'Кейсы продвижения салонов красоты и бьюти-специалистов: вложения, заявки, цена лида, выручка и прибыль.',
    url: 'https://beauty.adsnew.org/cases',
    mainEntity: cases.map((item) => ({
      '@type': 'Article',
      headline: `${item.title}: ${item.leads} заявок`,
      url: `https://beauty.adsnew.org${item.href}`,
    })),
  };

  return (
    <main className="min-h-screen bg-[#f7f2ea] text-[#1f1a17]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="px-5 py-14 md:px-10 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#9b6b43]">
            Кейсы
          </p>

          <h1 className="max-w-5xl text-4xl font-semibold leading-tight md:text-6xl">
            Кейсы продвижения бьюти-бизнеса
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#5f5148]">
            Краткий список кейсов: страна, ниша, вложения, заявки, стоимость лида,
            выручка и прибыль. Для подробностей откройте полный кейс.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://wa.me/972537086545"
              target="_blank"
              className="rounded-full bg-[#1f1a17] px-6 py-3 text-sm font-semibold text-white transition hover:opacity-80"
            >
              WhatsApp
            </a>

            <a
              href="https://t.me/mailovaja"
              target="_blank"
              className="rounded-full border border-[#1f1a17] px-6 py-3 text-sm font-semibold transition hover:bg-[#1f1a17] hover:text-white"
            >
              Telegram
            </a>
          </div>
        </div>
      </section>

      <section className="px-5 pb-20 md:px-10 lg:px-20">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[28px] bg-white shadow-sm">
          <div className="hidden grid-cols-[1.1fr_1fr_1fr_0.8fr_0.8fr_0.8fr_0.8fr_0.8fr] gap-4 border-b border-black/10 bg-[#1f1a17] px-6 py-4 text-sm font-semibold text-white lg:grid">
            <div>Кейс</div>
            <div>Страна</div>
            <div>Ниша</div>
            <div>Вложили</div>
            <div>Заявки</div>
            <div>Цена лида</div>
            <div>Выручка</div>
            <div>Прибыль</div>
          </div>

          <div className="divide-y divide-black/10">
            {cases.map((item) => (
              <article key={item.href}>
                <Link
                  href={item.href}
                  className="hidden grid-cols-[1.1fr_1fr_1fr_0.8fr_0.8fr_0.8fr_0.8fr_0.8fr] gap-4 px-6 py-5 text-sm transition hover:bg-[#f7f2ea] lg:grid"
                >
                  <div className="font-semibold text-[#1f1a17]">
                    {item.title}
                    <span className="mt-1 block text-xs font-normal text-[#5f5148]">
                      Читать кейс →
                    </span>
                  </div>
                  <div>{item.country}</div>
                  <div>{item.niche}</div>
                  <div>{item.investment}</div>
                  <div>{item.leads}</div>
                  <div>{item.leadPrice}</div>
                  <div>{item.revenue}</div>
                  <div>{item.profit}</div>
                </Link>

                <div className="p-5 lg:hidden">
                  <Link href={item.href} className="block">
                    <h2 className="text-lg font-semibold">{item.title}</h2>
                    <p className="mt-1 text-sm text-[#5f5148]">
                      {item.country} · {item.city} · {item.niche}
                    </p>

                    <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                      <div className="rounded-2xl bg-[#f7f2ea] p-3">
                        <span className="block text-xs text-[#5f5148]">Вложили</span>
                        <b>{item.investment}</b>
                      </div>
                      <div className="rounded-2xl bg-[#f7f2ea] p-3">
                        <span className="block text-xs text-[#5f5148]">Заявки</span>
                        <b>{item.leads}</b>
                      </div>
                      <div className="rounded-2xl bg-[#f7f2ea] p-3">
                        <span className="block text-xs text-[#5f5148]">Цена лида</span>
                        <b>{item.leadPrice}</b>
                      </div>
                      <div className="rounded-2xl bg-[#f7f2ea] p-3">
                        <span className="block text-xs text-[#5f5148]">Прибыль</span>
                        <b>{item.profit}</b>
                      </div>
                    </div>

                    <p className="mt-4 text-sm font-semibold text-[#9b6b43]">
                      Читать кейс →
                    </p>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 pb-20 md:px-10 lg:px-20">
        <div className="mx-auto max-w-7xl rounded-[32px] bg-[#1f1a17] p-7 text-white md:p-10">
          <h2 className="text-3xl font-semibold">
            Хотите рассчитать, сколько заявок может дать реклама?
          </h2>

          <p className="mt-4 max-w-2xl text-white/70">
            Напишите мне удобным способом — разберём нишу, бюджет, упаковку и точки роста.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            {contacts.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#1f1a17] transition hover:opacity-80"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
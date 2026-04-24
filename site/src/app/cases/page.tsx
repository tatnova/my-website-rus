import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Кейсы продвижения бьюти-бизнеса | Реклама для салонов, мастеров и студий',
  description:
    'Кейсы продвижения салонов красоты, мастеров массажа и бьюти-специалистов: заявки, стоимость лида, вложения, прибыль и результаты рекламы.',
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
    niche: 'Мастер ручного массажа',
    direction: 'Продвижение массажа',
    title:
      'Продвижение массажа в Израиле: вложили 6 174 ₪ — получили 37 000 ₪ и 740 заявок',
    description:
      'Кейс продвижения мастера массажа с нуля: без клиентской базы, с пустым Instagram и ограниченным бюджетом.',
    results: [
      '740 заявок',
      '5,7 ₪ за заявку',
      '37 000 ₪ выручки',
      '30 762 ₪ чистой прибыли',
      'окупаемость почти x6',
    ],
    href: '/cases/massazh-israel-740-zayavok',
  },
  {
    country: 'США',
    city: 'США',
    niche: 'Парикмахерская',
    direction: 'Meta Ads для парикмахерской',
    title:
      'Продвижение парикмахерской в США через Meta Ads: стабильный поток заявок',
    description:
      'Кейс продвижения парикмахерской через рекламу: упаковка предложения, запуск Meta Ads и получение заявок.',
    results: [
      'стабильный поток заявок',
      'рост записей',
      'реклама стала источником клиентов',
    ],
    href: '/cases/parikmaherskaya-usa-meta-ads',
  },
];

const groupedCases = cases.reduce<Record<string, typeof cases>>((acc, item) => {
  acc[item.country] = acc[item.country] || [];
  acc[item.country].push(item);
  return acc;
}, {});

export default function CasesPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Кейсы продвижения бьюти-бизнеса',
    description:
      'Реальные кейсы продвижения салонов красоты, мастеров массажа и бьюти-специалистов: заявки, стоимость лида, вложения и прибыль.',
    url: 'https://beauty.adsnew.org/cases',
    mainEntity: cases.map((item) => ({
      '@type': 'Article',
      headline: item.title,
      description: item.description,
      about: item.direction,
      url: `https://beauty.adsnew.org${item.href}`,
    })),
  };

  return (
    <main className="min-h-screen bg-[#f7f2ea] text-[#1f1a17]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="px-5 py-16 md:px-10 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#9b6b43]">
            Кейсы
          </p>

          <h1 className="max-w-5xl text-4xl font-semibold leading-tight md:text-6xl">
            Кейсы продвижения бьюти-бизнеса: заявки, стоимость лида и прибыль
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#5f5148]">
            Здесь собраны реальные кейсы продвижения салонов красоты, мастеров
            массажа, парикмахерских и бьюти-специалистов. В каждом кейсе показано,
            сколько вложили в рекламу, сколько заявок получили, какая была цена
            заявки и какой результат принесла система продвижения.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://wa.me/972537086545"
              target="_blank"
              className="rounded-full bg-[#1f1a17] px-6 py-3 text-sm font-semibold text-white transition hover:opacity-80"
            >
              Написать в WhatsApp
            </a>

            <a
              href="https://t.me/mailovaja"
              target="_blank"
              className="rounded-full border border-[#1f1a17] px-6 py-3 text-sm font-semibold transition hover:bg-[#1f1a17] hover:text-white"
            >
              Написать в Telegram
            </a>
          </div>
        </div>
      </section>

      <section className="px-5 pb-16 md:px-10 lg:px-20">
        <div className="mx-auto max-w-6xl rounded-[32px] bg-white p-6 shadow-sm md:p-10">
          <h2 className="text-2xl font-semibold md:text-4xl">
            Что можно увидеть в кейсах
          </h2>

          <div className="mt-6 grid gap-4 md:grid-cols-4">
            {['Вложения', 'Заявки', 'Цена лида', 'Прибыль'].map((item) => (
              <div
                key={item}
                className="rounded-2xl bg-[#f7f2ea] px-5 py-4 text-sm font-semibold"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 pb-20 md:px-10 lg:px-20">
        <div className="mx-auto max-w-6xl space-y-14">
          {Object.entries(groupedCases).map(([country, items]) => (
            <div key={country}>
              <h2 className="text-3xl font-semibold md:text-5xl">
                Кейсы: {country}
              </h2>

              <div className="mt-8 grid gap-6 md:grid-cols-2">
                {items.map((item) => (
                  <article
                    key={item.href}
                    className="rounded-[32px] bg-white p-6 shadow-sm md:p-8"
                  >
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#9b6b43]">
                      {item.niche} · {item.city}
                    </p>

                    <h3 className="mt-4 text-2xl font-semibold leading-tight">
                      {item.title}
                    </h3>

                    <p className="mt-4 leading-7 text-[#5f5148]">
                      {item.description}
                    </p>

                    <div className="mt-6 grid gap-3">
                      {item.results.map((result) => (
                        <div
                          key={result}
                          className="rounded-2xl bg-[#f7f2ea] px-4 py-3 text-sm font-semibold"
                        >
                          {result}
                        </div>
                      ))}
                    </div>

                    <div className="mt-7 flex flex-wrap gap-3">
                      <Link
                        href={item.href}
                        className="rounded-full bg-[#9b6b43] px-6 py-3 text-sm font-semibold text-white transition hover:opacity-80"
                      >
                        Читать кейс
                      </Link>

                      <a
                        href="https://wa.me/972537086545"
                        target="_blank"
                        className="rounded-full border border-[#9b6b43] px-6 py-3 text-sm font-semibold text-[#9b6b43] transition hover:bg-[#9b6b43] hover:text-white"
                      >
                        Обсудить проект
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-5 pb-20 md:px-10 lg:px-20">
        <div className="mx-auto max-w-6xl rounded-[36px] bg-[#1f1a17] p-8 text-white md:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#d8b18a]">
            Связаться
          </p>

          <h2 className="mt-4 max-w-4xl text-3xl font-semibold md:text-5xl">
            Хотите понять, сколько заявок может дать реклама вашему салону,
            студии или личному бренду?
          </h2>

          <p className="mt-5 max-w-2xl leading-7 text-white/70">
            Напишите мне удобным способом — разберём вашу нишу, текущую ситуацию,
            рекламу, упаковку и точки роста.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
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
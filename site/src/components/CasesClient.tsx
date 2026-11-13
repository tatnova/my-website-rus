'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import ResponsiveImage from '@/components/ResponsiveImage';

export type CaseItem = {
  country: string;
  city: string;
  niche: string;
  nicheNames: string[];
  goal: string;
  title: string;
  investment: string;
  leads: string;
  clients: string;
  leadPrice: string;
  cover: string;
  coverAlt: string;
  href: string;
};


// Варианты фильтров берутся из самих кейсов, чтобы не было пустых результатов.
const unique = (values: string[]) => Array.from(new Set(values.filter(Boolean)));

// Кейсы приходят из content/cases/ (см. app/cases/page.tsx).
export default function CasesClient({
  cases,
  contacts,
}: {
  cases: CaseItem[];
  contacts: { label: string; href: string }[];
}) {
  const countries = ['Все страны', ...unique(cases.map((c) => c.country))];
  const niches = ['Все ниши', ...unique(cases.flatMap((c) => c.nicheNames))];
  const goals = ['Все цели', ...unique(cases.map((c) => c.goal))];
  const wa = contacts.find((c) => c.label === 'WhatsApp')?.href ?? '';
  const [country, setCountry] = useState('Все страны');
  const [niche, setNiche] = useState('Все ниши');
  const [goal, setGoal] = useState('Все цели');

  const filteredCases = useMemo(() => {
    return cases.filter((item) => {
      const countryOk = country === 'Все страны' || item.country === country;
      const nicheOk = niche === 'Все ниши' || item.nicheNames.includes(niche);
      const goalOk = goal === 'Все цели' || item.goal === goal;

      return countryOk && nicheOk && goalOk;
    });
  }, [cases, country, niche, goal]);

  return (
    <main className="min-h-screen bg-[#f7f2ea] pb-24 text-[#1f1a17]">
      <section className="px-5 pt-8 pb-6 md:px-10 md:pt-14 md:pb-8 lg:px-20">
        <div className="mx-auto max-w-7xl">
                    <h1 className="max-w-5xl text-3xl font-semibold leading-tight md:text-6xl">
            Кейсы продвижения бьюти-бизнеса: заявки, стоимость лида и прибыль
          </h1>

          <p className="mt-4 max-w-3xl text-base leading-7 text-[#5f5148] md:mt-6 md:text-lg md:leading-8">
            Реальные кейсы продвижения салонов, мастеров и студий. В каждом
            кейсе показано: сколько вложили, сколько заявок получили, какая
            была цена лида, выручка и прибыль.
          </p>
        </div>
      </section>

      <section className="z-20 border-y md:sticky md:top-0 border-black/10 bg-[#f7f2ea]/95 px-3 py-3 md:px-5 md:py-4 backdrop-blur md:px-10 lg:px-20">
        <div className="mx-auto grid max-w-7xl grid-cols-3 gap-2 md:gap-3">
          <Select value={country} onChange={setCountry} options={countries} />
          <Select value={niche} onChange={setNiche} options={niches} />
          <Select value={goal} onChange={setGoal} options={goals} />
        </div>
      </section>

      <section className="px-5 py-6 md:px-10 md:py-12 lg:px-20">
        {/* Карточки с обложкой: фото ниши, сфера и страна, 3 главные цифры */}
        <div className="mx-auto grid max-w-7xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredCases.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group flex flex-col overflow-hidden rounded-[28px] bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="relative aspect-[3/2] overflow-hidden bg-[#efe6da]">
                {item.cover ? (
                  <ResponsiveImage
                    src={item.cover}
                    alt={item.coverAlt}
                    sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center p-6 text-center text-lg font-semibold text-[#9b6b43]">
                    {item.niche}
                  </div>
                )}
                <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-[#1f1a17] backdrop-blur">
                  {[item.niche, item.country].filter(Boolean).join(' · ')}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-5">
                <h2 className="text-lg font-semibold leading-snug">{item.title}</h2>

                <div className="mt-4 grid grid-cols-3 gap-2 text-sm">
                  {(
                    [
                      ['Заявки', item.leads],
                      ['Клиенты', item.clients],
                      ['Цена заявки', item.leadPrice],
                      ['Бюджет', item.investment],
                    ] as const
                  )
                    .filter(([, value]) => value)
                    .slice(0, 3)
                    .map(([label, value]) => (
                      <Info key={label} label={label} value={value} />
                    ))}
                </div>

                <p className="mt-auto pt-4 text-sm font-semibold text-[#9b6b43]">Читать кейс →</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="px-5 pb-24 md:px-10 lg:px-20">
        <Link
          href="/blog/kuda-propali-klienty-salon-krasoty"
          className="block rounded-[28px] border border-black/10 bg-white p-6 transition hover:shadow-md md:p-8"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-[#a35f2c]">Статья</span>
          <span className="mt-2 block text-xl font-black md:text-2xl">
            Почему клиенты перестали ходить в салон красоты и как их вернуть: 7 причин (2026) →
          </span>
          <span className="mt-2 block text-sm text-gray-600">528 комментариев клиенток о том, почему они уходят, примеры из Израиля и США и чек-лист.</span>
        </Link>
      </section>

      <a
        href={wa}
        target="_blank"
        className="fixed bottom-4 left-4 right-4 z-50 rounded-full bg-[#1f1a17] px-5 py-4 text-center text-sm font-semibold text-white shadow-xl md:left-auto md:right-6 md:w-auto"
      >
        Написать в WhatsApp
      </a>
    </main>
  );
}

function Select({
  value,
  onChange,
  options,
}: {
  value: string;
  onChange: (value: string) => void;
  options: string[];
}) {
  return (
    <select
      value={value}
      onChange={(event) => onChange(event.target.value)}
      className="w-full min-w-0 truncate rounded-full border border-black/10 bg-white px-3 py-2 text-xs outline-none md:px-5 md:py-3 md:text-sm"
    >
      {options.map((item) => (
        <option key={item} value={item}>
          {item}
        </option>
      ))}
    </select>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl bg-[#f7f2ea] p-3">
      <span className="block text-xs text-[#5f5148]">{label}</span>
      <b>{value}</b>
    </div>
  );
}
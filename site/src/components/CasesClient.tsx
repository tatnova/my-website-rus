'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';

type CaseItem = {
  country: string;
  city: string;
  niche: string;
  goal: string;
  title: string;
  investment: string;
  leads: string;
  leadPrice: string;
  revenue: string;
  profit: string;
  href: string;
};

const contacts = [
  { label: 'WhatsApp', href: 'https://wa.me/972537086545' },
  { label: 'Telegram', href: 'https://t.me/mailovaja' },
  { label: 'Instagram', href: '#instagram' },
  { label: 'YouTube', href: '#youtube' },
  { label: 'Facebook', href: '#facebook' },
  { label: 'TikTok', href: '#tiktok' },
];

const cases: CaseItem[] = [
  {
    country: 'Израиль',
    city: 'Петах-Тиква',
    niche: 'Массаж',
    goal: 'Заполнение записи',
    title:
      '740 заявок по 5,7 ₪ и 30 762 ₪ прибыли для мастера массажа в Израиле',
    investment: '6 174 ₪',
    leads: '740',
    leadPrice: '5,7 ₪',
    revenue: '37 000 ₪',
    profit: '30 762 ₪',
    href: '/cases/massazh-israel-740-zayavok',
  },
 {
  country: 'Канада',
  city: 'Канада',
  niche: 'Массаж',
  goal: 'Заполнение записи',
  title:
    '183 заявки по 5,7$ и 40 клиентов с чеком $120 для массажа в Канаде',
  investment: '1073$',
  leads: '183',
  leadPrice: '5,7$',
  revenue: '4 800$',
  profit: '—',
  href: '/cases/massage-canada-body',
},
];

const countries = ['Все страны', 'Израиль', 'Канада', 'США', 'ОАЭ'];
const niches = [
  'Все ниши',
  'Массаж',
  'Парикмахерская',
  'Салон красоты',
  'Косметология',
  'Брови',
];
const goals = [
  'Все цели',
  'Заполнение записи',
  'Стабильный поток заявок',
  'Снижение стоимости лида',
];

export default function CasesClient() {
  const [country, setCountry] = useState('Все страны');
  const [niche, setNiche] = useState('Все ниши');
  const [goal, setGoal] = useState('Все цели');

  const filteredCases = useMemo(() => {
    return cases.filter((item) => {
      const countryOk = country === 'Все страны' || item.country === country;
      const nicheOk = niche === 'Все ниши' || item.niche === niche;
      const goalOk = goal === 'Все цели' || item.goal === goal;

      return countryOk && nicheOk && goalOk;
    });
  }, [country, niche, goal]);

  return (
    <main className="min-h-screen bg-[#f7f2ea] pb-24 text-[#1f1a17]">
      <section className="px-5 py-14 md:px-10 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#9b6b43]">
            Кейсы
          </p>

          <h1 className="max-w-5xl text-4xl font-semibold leading-tight md:text-6xl">
            Кейсы продвижения бьюти-бизнеса: заявки, стоимость лида и прибыль
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#5f5148]">
            Реальные кейсы продвижения салонов, мастеров и студий. В каждом
            кейсе показано: сколько вложили, сколько заявок получили, какая
            была цена лида, выручка и прибыль.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://wa.me/972537086545"
              target="_blank"
              className="rounded-full bg-[#1f1a17] px-6 py-3 text-sm font-semibold text-white transition hover:opacity-80"
            >
              Получить разбор в WhatsApp
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

      <section className="px-5 pb-10 md:px-10 lg:px-20">
        <div className="mx-auto grid max-w-7xl gap-4 rounded-[32px] bg-white p-6 shadow-sm md:grid-cols-4 md:p-8">
          <div>
            <p className="text-sm text-[#5f5148]">Формат</p>
            <h2 className="mt-2 text-2xl font-semibold">База кейсов</h2>
          </div>

          <Stat title="В кейсах" value="вложения" />
          <Stat title="Показатели" value="заявки и лиды" />
          <Stat title="Главное" value="прибыль" />
        </div>
      </section>

      <section className="sticky top-0 z-20 border-y border-black/10 bg-[#f7f2ea]/95 px-5 py-4 backdrop-blur md:px-10 lg:px-20">
        <div className="mx-auto grid max-w-7xl gap-3 md:grid-cols-3">
          <Select value={country} onChange={setCountry} options={countries} />
          <Select value={niche} onChange={setNiche} options={niches} />
          <Select value={goal} onChange={setGoal} options={goals} />
        </div>
      </section>

      <section className="px-5 py-12 md:px-10 lg:px-20">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[28px] bg-white shadow-sm">
          <div className="hidden grid-cols-[1.6fr_0.7fr_0.7fr_0.8fr_0.7fr_0.8fr_0.8fr_0.8fr] gap-4 bg-[#1f1a17] px-6 py-4 text-sm font-semibold text-white lg:grid">
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
            {filteredCases.map((item) => (
              <article key={item.href}>
                <Link
                  href={item.href}
                  className="hidden grid-cols-[1.6fr_0.7fr_0.7fr_0.8fr_0.7fr_0.8fr_0.8fr_0.8fr] gap-4 px-6 py-5 text-sm transition hover:bg-[#f7f2ea] lg:grid"
                >
                  <div>
                    <h2 className="font-semibold">{item.title}</h2>
                    <p className="mt-1 text-xs text-[#5f5148]">
                      {item.city} · {item.goal} · читать кейс →
                    </p>
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
                      <Info label="Вложили" value={item.investment} />
                      <Info label="Заявки" value={item.leads} />
                      <Info label="Цена лида" value={item.leadPrice} />
                      <Info label="Прибыль" value={item.profit} />
                    </div>

                    <p className="mt-4 text-sm font-semibold text-[#9b6b43]">
                      Читать полный кейс →
                    </p>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 pb-24 md:px-10 lg:px-20">
        <div className="mx-auto max-w-7xl rounded-[36px] bg-[#1f1a17] p-8 text-white md:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#d8b18a]">
            Связаться
          </p>

          <h2 className="mt-4 max-w-4xl text-3xl font-semibold md:text-5xl">
            Хотите понять, сколько заявок может дать реклама вашему проекту?
          </h2>

          <p className="mt-5 max-w-2xl leading-7 text-white/70">
            Напишите мне удобным способом — разберём нишу, бюджет, упаковку и
            точки роста.
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

      <a
        href="https://wa.me/972537086545"
        target="_blank"
        className="fixed bottom-4 left-4 right-4 z-50 rounded-full bg-[#1f1a17] px-5 py-4 text-center text-sm font-semibold text-white shadow-xl md:left-auto md:right-6 md:w-auto"
      >
        Получить разбор в WhatsApp
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
      className="rounded-full border border-black/10 bg-white px-5 py-3 text-sm outline-none"
    >
      {options.map((item) => (
        <option key={item} value={item}>
          {item}
        </option>
      ))}
    </select>
  );
}

function Stat({ title, value }: { title: string; value: string }) {
  return (
    <div className="rounded-2xl bg-[#f7f2ea] p-4">
      <p className="text-sm text-[#5f5148]">{title}</p>
      <p className="text-xl font-semibold">{value}</p>
    </div>
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
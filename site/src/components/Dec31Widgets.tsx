'use client';

import { useState } from 'react';

type DayKind = 'normal' | 'warm' | 'peak' | 'quiet' | 'closed' | 'gift';

const KIND_STYLE: Record<DayKind, string> = {
  normal: 'bg-gray-100 text-gray-500',
  warm: 'bg-[#f6dcc5] text-[#8a5226]',
  peak: 'bg-[#e8a16b] text-white',
  quiet: 'bg-white text-gray-400 border border-dashed border-gray-300',
  closed: 'bg-[#1f1712] text-white/70',
  gift: 'bg-[#c97d45] text-white',
};

type Niche = {
  key: string;
  label: string;
  icon: string;
  verdict: string;
  verdictTone: 'yes' | 'maybe' | 'no';
  days: (day: number) => DayKind;
  legend: [DayKind, string][];
  text: string;
};

const NICHES: Niche[] = [
  {
    key: 'hair',
    label: 'Парикмахерская',
    icon: '✂️',
    verdict: 'Работать: да, 31-го спрашивают укладки',
    verdictTone: 'yes',
    days: (d) => (d >= 29 ? 'peak' : d >= 17 ? 'warm' : 'normal'),
    legend: [
      ['warm', 'окрашивание и стрижки за 1–2 недели до праздника'],
      ['peak', 'укладки: короткие услуги, за день их можно поставить много'],
    ],
    text: 'Во Франции в декабре 2024 записей на укладки было на 28% больше, чем в ноябре, на окрашивание на 27% больше (Planity).',
  },
  {
    key: 'makeup',
    label: 'Визажист',
    icon: '💄',
    verdict: 'Работать: да, самый спрос на вечер',
    verdictTone: 'yes',
    days: (d) => (d === 31 ? 'peak' : d >= 29 ? 'warm' : 'normal'),
    legend: [
      ['warm', 'макияж на корпоративы и праздники'],
      ['peak', '31-е: от 2–3 до 5 клиенток, «чем позднее, тем лучше»'],
    ],
    text: 'Визажисты работают 31-го кто до 13:00, кто до 20–22 часов. Больше 4–5 человек подряд, по их словам, уже в ущерб качеству.',
  },
  {
    key: 'cosmo',
    label: 'Косметология',
    icon: '🧴',
    verdict: 'Работать 31-го не обязательно: деньги раньше',
    verdictTone: 'no',
    days: (d) => (d >= 30 ? 'closed' : d >= 25 ? 'quiet' : d <= 20 ? 'peak' : 'normal'),
    legend: [
      ['peak', 'процедуры, после которых нужно время на восстановление'],
      ['quiet', 'с 25 декабря затишье'],
      ['closed', 'многие закрываются с 30 декабря по 4 января'],
    ],
    text: 'В последнюю неделю декабря процедуры вроде ботокса особо не нужны, хотя до этого спрос растёт. Для клиники деньги в первых трёх неделях декабря.',
  },
  {
    key: 'spa',
    label: 'Массаж и спа',
    icon: '🌿',
    verdict: 'Последние дни года: продавать сертификаты',
    verdictTone: 'maybe',
    days: (d) => (d >= 20 ? 'gift' : 'normal'),
    legend: [['gift', 'сертификаты главным предложением, их покупают и в последний день']],
    text: 'В обсуждениях почти нет запроса на массаж 31-го. Зато сертификаты в декабре дают +508% к выручке (Phorest).',
  },
];

const TONE: Record<Niche['verdictTone'], string> = {
  yes: 'bg-[#e8f6ec] text-[#1f7a3d]',
  maybe: 'bg-[#fff1e4] text-[#a35e27]',
  no: 'bg-gray-100 text-gray-700',
};

// 1 декабря 2026 года — вторник, поэтому сетка начинается с одной пустой клетки.
const WEEKDAYS = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];

export function NicheCalendar() {
  const [active, setActive] = useState(NICHES[0].key);
  const n = NICHES.find((x) => x.key === active) ?? NICHES[0];

  return (
    <div className="mt-8 rounded-[28px] border border-[#f6dcc5] bg-white p-5 shadow-sm md:p-7">
      <div className="text-xs font-bold uppercase tracking-widest text-[#c97d45]">Выберите ваш салон</div>
      <div className="mt-4 grid grid-cols-2 gap-2 md:grid-cols-4" role="tablist">
        {NICHES.map((x) => (
          <button
            key={x.key}
            type="button"
            role="tab"
            aria-selected={x.key === active}
            onClick={() => setActive(x.key)}
            className={`rounded-2xl px-3 py-3 text-left text-sm font-bold transition md:text-[15px] ${
              x.key === active ? 'bg-[#1f1712] text-white shadow-lg' : 'bg-[#fff8f1] text-gray-800 hover:bg-[#fff1e4]'
            }`}
          >
            <span className="mr-1.5" aria-hidden="true">
              {x.icon}
            </span>
            {x.label}
          </button>
        ))}
      </div>

      <div className={`mt-5 inline-flex rounded-full px-4 py-2 text-sm font-black ${TONE[n.verdictTone]}`}>{n.verdict}</div>

      <div className="mt-5">
        <div className="text-sm font-bold text-gray-500">Декабрь 2026</div>
        <div className="mt-2 grid grid-cols-7 gap-1.5 text-center">
          {WEEKDAYS.map((w) => (
            <div key={w} className="text-[11px] font-bold uppercase text-gray-400">
              {w}
            </div>
          ))}
          <div aria-hidden="true" />
          {Array.from({ length: 31 }, (_, i) => i + 1).map((d) => {
            const kind = n.days(d);
            return (
              <div
                key={d}
                className={`flex aspect-square items-center justify-center rounded-lg text-sm font-bold transition-colors duration-300 md:text-base ${KIND_STYLE[kind]} ${
                  d === 31 ? 'ring-2 ring-[#1f1712] ring-offset-1' : ''
                }`}
              >
                {d}
              </div>
            );
          })}
        </div>
      </div>

      <ul className="mt-5 space-y-2">
        {n.legend.map(([kind, label]) => (
          <li key={label} className="flex items-start gap-3 text-[15px] leading-6 text-gray-700">
            <span className={`mt-0.5 h-5 w-5 shrink-0 rounded-md ${KIND_STYLE[kind]}`} aria-hidden="true" />
            {label}
          </li>
        ))}
      </ul>
      <p className="mt-4 rounded-2xl bg-[#fff8f1] p-4 text-[16px] leading-7 text-gray-800">{n.text}</p>
    </div>
  );
}

const POLL = [
  {
    key: 'up',
    label: 'Поднимаю, это нормально',
    answer:
      'Так считает часть мастеров: «Да хоть на 200%». Но мастер, которая подняла прайс на 30 декабря на 50%, получила возмущение, а не выручку. Для салона с постоянными клиентками риск больше, чем разовые +50% за один день.',
  },
  {
    key: 'same',
    label: 'Оставляю обычный прайс',
    answer:
      'Так работает часть мастеров: выходят 31-го по обычному прайсу и с полной записью. Их аргумент: клиентка запомнит наценку и в январе выберет другой салон.',
  },
  {
    key: 'mid',
    label: 'Доплата только вне графика',
    answer:
      'Этот компромисс в обсуждениях поддерживают чаще всего: обычные цены в рабочие часы, доплата за раннее утро, поздний вечер или срочную запись в тот же день. Напишите об этом одной строкой при записи заранее.',
  },
];

export function MarkupPoll() {
  const [picked, setPicked] = useState<string | null>(null);
  const p = POLL.find((x) => x.key === picked);

  return (
    <div className="mt-8 rounded-[28px] bg-[#1f1712] p-6 text-white md:p-8">
      <div className="text-xs font-bold uppercase tracking-widest text-[#f2c29b]">А как у вас?</div>
      <p className="mt-2 text-2xl font-black">Что вы делаете с ценами 30–31 декабря?</p>
      <div className="mt-5 grid gap-2 md:grid-cols-3">
        {POLL.map((x) => (
          <button
            key={x.key}
            type="button"
            onClick={() => setPicked(x.key)}
            aria-pressed={picked === x.key}
            className={`rounded-2xl px-4 py-3 text-left text-[15px] font-bold transition ${
              picked === x.key ? 'bg-[#e8a16b] text-white' : 'bg-white/10 text-white hover:bg-white/20'
            }`}
          >
            {x.label}
          </button>
        ))}
      </div>
      <div aria-live="polite">
        {p ? (
          <p className="mt-5 rounded-2xl bg-white/10 p-5 text-[16px] leading-7 text-white/90">{p.answer}</p>
        ) : (
          <p className="mt-5 text-sm text-white/60">Нажмите на свой вариант, чтобы увидеть, что о нём пишут мастера.</p>
        )}
      </div>
    </div>
  );
}

export function Checklist({ items }: { items: string[] }) {
  const [done, setDone] = useState<boolean[]>(() => items.map(() => false));
  const count = done.filter(Boolean).length;
  const pct = Math.round((count / items.length) * 100);

  return (
    <div className="mt-8 rounded-[28px] border border-[#f6dcc5] bg-white p-5 shadow-sm md:p-7">
      <div className="flex items-center justify-between text-sm font-bold">
        <span className="text-gray-600">
          Готово {count} из {items.length}
        </span>
        <span className="text-[#c97d45]">{count === items.length ? 'Декабрь готов 🎉' : `${pct}%`}</span>
      </div>
      <div className="mt-2 h-3 rounded-full bg-[#fff1e4]">
        <div className="h-3 rounded-full bg-[#e8a16b] transition-all duration-500" style={{ width: `${pct}%` }} />
      </div>
      <ul className="mt-5 space-y-2">
        {items.map((item, i) => (
          <li key={item}>
            <label className="flex cursor-pointer items-start gap-3 rounded-2xl p-3 transition hover:bg-[#fff8f1]">
              <input
                type="checkbox"
                checked={done[i]}
                onChange={() => setDone((prev) => prev.map((v, j) => (j === i ? !v : v)))}
                className="mt-1 h-5 w-5 shrink-0 accent-[#e8a16b]"
              />
              <span className={`text-[16px] leading-7 ${done[i] ? 'text-gray-400 line-through' : 'text-gray-800'}`}>{item}</span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}

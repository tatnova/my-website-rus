'use client';

import { useState } from 'react';

const ILS = 3.65;
const usd = (n: number) => `$${Math.round(n).toLocaleString('ru-RU')}`;
const ils = (n: number) => `${Math.round(n * ILS).toLocaleString('ru-RU')} ₪`;

function Slider({
  label,
  value,
  min,
  max,
  step,
  onChange,
  format,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (v: number) => void;
  format: (v: number) => string;
}) {
  return (
    <label className="block">
      <div className="flex items-baseline justify-between gap-3 text-sm text-white/70">
        <span>{label}</span>
        <span className="text-lg font-black text-[#f2c29b]">{format(value)}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mt-2 w-full accent-[#e8a16b]"
      />
    </label>
  );
}

/** Сколько салон отдаёт январской скидкой тем, кто пришёл бы и без неё. */
export function DiscountCalculator() {
  const [check, setCheck] = useState(99);
  const [discount, setDiscount] = useState(20);
  const [regulars, setRegulars] = useState(100);

  const lost = regulars * check * (discount / 100);
  const discounted = check * (1 - discount / 100);
  const extraVisits = Math.ceil(lost / discounted);

  return (
    <div className="mt-8 rounded-[28px] bg-[#1f1712] p-6 text-white md:p-8">
      <div className="text-xs font-bold uppercase tracking-widest text-[#f2c29b]">Калькулятор</div>
      <p className="mt-2 text-2xl font-black">Сколько стоит ваша январская скидка</p>
      <div className="mt-6 space-y-5">
        <Slider label="Средний чек" value={check} min={30} max={300} step={1} onChange={setCheck} format={(v) => `${usd(v)} (${ils(v)})`} />
        <Slider label="Скидка" value={discount} min={5} max={50} step={5} onChange={setDiscount} format={(v) => `${v}%`} />
        <Slider
          label="Постоянных клиенток, которые пришли бы и без скидки"
          value={regulars}
          min={10}
          max={400}
          step={10}
          onChange={setRegulars}
          format={(v) => String(v)}
        />
      </div>
      <div className="mt-7 grid gap-3 md:grid-cols-2" aria-live="polite">
        <div className="rounded-2xl bg-[#e8a16b] p-5 text-[#1f1712]">
          <div className="text-sm font-bold">Салон отдаёт тем, кто пришёл бы и так</div>
          <div className="mt-1 text-4xl font-black">{usd(lost)}</div>
          <div className="text-sm font-semibold">около {ils(lost)}</div>
        </div>
        <div className="rounded-2xl bg-white/10 p-5">
          <div className="text-sm font-bold text-white/70">Чтобы только вернуть эти деньги, нужно</div>
          <div className="mt-1 text-4xl font-black text-[#f2c29b]">+{extraVisits}</div>
          <div className="text-sm text-white/70">новых визитов по цене со скидкой</div>
        </div>
      </div>
      <p className="mt-4 text-xs text-white/50">Расчёт на ваших цифрах. Курс 1 $ = {ILS} ₪.</p>
    </div>
  );
}

const REASONS = [
  {
    key: 'price',
    label: 'Дорого',
    answer:
      'Обычно нет. Клиентка, которая ходила к вам до праздников, знает ваши цены. Поэтому скидка и не срабатывает: она отвечает на вопрос, который никто не задавал.',
    right: false,
  },
  {
    key: 'date',
    label: 'Никто не назвал дату',
    answer:
      'Да. Лучшие салоны Европы записывают на следующий визит 41% клиенток, средний салон 24%, и загрузка у них 83% против 53% (Kitomba, Zenoti, 2026).',
    right: true,
  },
  {
    key: 'reason',
    label: 'Нет повода',
    answer:
      'Да. На второй визит приходит только 45–55% новых клиенток, а через 30 дней без записи шанс вернуть падает примерно до 20% (JeriCommerce, 2026, оценка).',
    right: true,
  },
  {
    key: 'call',
    label: 'Не дозвонилась',
    answer:
      'Да. 71% клиенток хотя бы раз отказывались от записи, потому что не дозвонились или не смогли записаться онлайн (Zenoti, опрос 1 000 клиенток, 2025).',
    right: true,
  },
];

/** «Почему клиентка не пришла в январе?» — выбор с ответом. */
export function ReasonPicker() {
  const [picked, setPicked] = useState<string | null>(null);
  const r = REASONS.find((x) => x.key === picked);

  return (
    <div className="mt-8 rounded-[28px] border border-[#f6dcc5] bg-[#fff8f1] p-6 md:p-8">
      <div className="text-xs font-bold uppercase tracking-widest text-[#c97d45]">Проверьте себя</div>
      <p className="mt-2 text-2xl font-black text-gray-900">Почему постоянная клиентка не записалась в январе?</p>
      <div className="mt-5 grid grid-cols-2 gap-2 md:grid-cols-4">
        {REASONS.map((x) => (
          <button
            key={x.key}
            type="button"
            onClick={() => setPicked(x.key)}
            aria-pressed={picked === x.key}
            className={`rounded-2xl px-4 py-3 text-left text-[15px] font-bold transition ${
              picked === x.key
                ? x.right
                  ? 'bg-[#e8a16b] text-white'
                  : 'bg-gray-800 text-white'
                : 'bg-white text-gray-800 shadow-sm hover:bg-[#fff1e4]'
            }`}
          >
            {x.label}
          </button>
        ))}
      </div>
      <div aria-live="polite">
        {r ? (
          <p className="mt-5 rounded-2xl bg-white p-5 text-[16px] leading-7 text-gray-700 shadow-sm">{r.answer}</p>
        ) : (
          <p className="mt-5 text-sm text-gray-500">Нажмите на вариант, чтобы увидеть ответ с цифрами.</p>
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
        <span className="text-[#c97d45]">{count === items.length ? 'Январь будет живым 🎉' : `${pct}%`}</span>
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

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title:
    'Продвижение массажа в Канаде: 183 заявки по 5,7$ и клиенты с чеком $120',
  description:
    'Кейс продвижения массажа для женщин в Канаде: 183 заявки, цена заявки 5,7$, 40 клиентов и выручка с чеком $120. Работа с ограниченным бюджетом и сложной аудиторией.',
  keywords: [
    'продвижение массажа в Канаде',
    'реклама массажиста Канада',
    'клиенты на массаж Канада',
    'Meta Ads массаж кейс',
    'реклама для бьюти бизнеса Канада',
  ],
};

const metrics = [
  ['Бюджет', '1073$'],
  ['Заявки', '183'],
  ['Цена заявки', '5,7$'],
  ['Клиенты', '40'],
  ['Конверсия', '20–25%'],
  ['Средний чек', '$120'],
];

export default function CaseCanadaMassage() {
  return (
    <main className="bg-[#fff8f1] text-gray-900">
      <article className="mx-auto max-w-3xl px-5 py-10 md:py-16">

        <a href="/cases" className="text-sm font-bold text-[#e8a16b]">
          ← Все кейсы
        </a>

        <p className="mt-8 text-xs font-black uppercase tracking-[0.25em] text-[#e8a16b]">
          Кейс · массаж · Канада
        </p>

        <h1 className="mt-4 text-3xl font-black leading-tight md:text-5xl">
          Продвижение массажа в Канаде: 183 заявки по 5,7$ и 40 клиентов с чеком $120
        </h1>

        <p className="mt-5 text-lg leading-8 text-gray-600">
          Как привлекать клиентов на массаж для женщин в Канаде при ограниченном бюджете,
          сложной аудитории и отсутствии системной работы с заявками.
        </p>

        <div className="mt-7 flex flex-wrap gap-3">
          <a href="https://wa.me/972537086545" target="_blank" className="rounded-full bg-black px-6 py-3 text-sm font-bold text-white">
            WhatsApp
          </a>
          <a href="https://t.me/mailovaja" target="_blank" className="rounded-full border border-gray-300 px-6 py-3 text-sm font-bold">
            Telegram
          </a>
        </div>

        <section className="mt-10 rounded-3xl bg-white p-5 shadow-sm md:p-7">
          <h2 className="text-2xl font-black">Результат в цифрах</h2>

          <div className="mt-5 grid grid-cols-2 gap-3">
            {metrics.map(([label, value]) => (
              <div key={label} className="border-b border-gray-100 pb-3">
                <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
                  {label}
                </p>
                <p className="mt-1 text-xl font-black text-[#e8a16b]">
                  {value}
                </p>
              </div>
            ))}
          </div>
        </section>

        <div className="mt-10 space-y-10 text-[18px] leading-8 text-gray-800">

          <section>
            <h2 className="text-2xl font-black">Точка А: ситуация до запуска</h2>

            <p className="mt-4">
              Клиент работал в нише массажа для женщин в Канаде.
            </p>

            <ul className="mt-4 list-disc space-y-2 pl-5">
              <li>был Instagram и Facebook</li>
              <li>был сайт</li>
              <li>не было упаковки</li>
              <li>не было ведения соцсетей</li>
              <li>не было CRM</li>
              <li>были проблемы с записью клиентов</li>
            </ul>

            <p className="mt-4">
              Основные сложности: ограниченный бюджет, сложная аудитория,
              большое количество спама и отсутствие бренда.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black">Задача</h2>

            <p className="mt-4">
              Привлечь новых клиентов и выстроить поток заявок,
              который будет конвертироваться в реальные записи.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black">Что сделали</h2>

            <ul className="mt-4 list-disc space-y-2 pl-5">
              <li>запустили рекламу</li>
              <li>проработали оффер</li>
              <li>отстроились от конкурентов</li>
              <li>разработали скрипты обработки заявок</li>
              <li>решили проблему записи клиентов</li>
            </ul>

            <p className="mt-4">
              Основной упор был на то, чтобы не просто получать заявки,
              а доводить их до записи.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black">Результат</h2>

            <ul className="mt-4 list-disc space-y-2 pl-5">
              <li>183 заявки</li>
              <li>цена заявки 5,7$</li>
              <li>40 клиентов</li>
              <li>конверсия 20–25%</li>
              <li>средний чек $120</li>
            </ul>

            <p className="mt-4">
              Несмотря на сложную аудиторию и большое количество нецелевых лидов,
              удалось получить стабильный поток клиентов.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black">Почему это сработало</h2>

            <ul className="mt-4 list-disc space-y-2 pl-5">
              <li>понятный оффер под аудиторию</li>
              <li>работа с обработкой заявок</li>
              <li>скрипты вместо хаотичных ответов</li>
              <li>фокус на записи, а не на заявках</li>
            </ul>
          </section>

          <section className="rounded-3xl bg-black p-6 text-white">
            <h2 className="text-2xl font-black">Хотите такие же результаты?</h2>

            <p className="mt-3 text-white/70">
              Напишите мне — разберём ваш проект и покажу,
              как выстроить поток заявок и клиентов.
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              <a href="https://wa.me/972537086545" target="_blank" className="rounded-full bg-white px-6 py-3 text-sm font-bold text-black">
                WhatsApp
              </a>
              <a href="https://t.me/mailovaja" target="_blank" className="rounded-full border border-white/30 px-6 py-3 text-sm font-bold text-white">
                Telegram
              </a>
            </div>
          </section>

        </div>
      </article>
    </main>
  );
}
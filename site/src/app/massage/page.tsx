import type { Metadata } from 'next';

export const metadata: Metadata = {
  title:
    'Реклама для массажистов и спа-салонов | Клиенты на массаж',
  description:
    'Привлечение клиентов на массаж через рекламу: система заявок, CRM, стратегия и кейсы. Бесплатный разбор и план роста.',
};

export default function MassagePage() {
  return (
    <main className="bg-white text-[#1f1a17]">

      {/* HERO */}
      <section className="px-6 py-20 max-w-5xl mx-auto">
        <p className="text-sm text-[#9b6b43] font-semibold mb-4">
          🔥 Беру только 2 новых проекта в месяц
        </p>

        <h1 className="text-3xl md:text-5xl font-semibold leading-tight">
          Реклама для массажистов и спа-салонов — поток клиентов и полная запись
        </h1>

        <p className="mt-6 text-lg text-[#5f5148]">
          Бесплатно разберу вашу ситуацию и покажу, как получить стабильный поток клиентов через рекламу и систему.
        </p>

        <div className="mt-8 flex gap-4 flex-wrap">
          <a href="https://wa.me/972537086545" className="bg-black text-white px-6 py-3 rounded-full text-sm font-semibold">
            WhatsApp
          </a>
          <a href="https://t.me/mailovaja" className="border px-6 py-3 rounded-full text-sm font-semibold">
            Telegram
          </a>
        </div>
      </section>

      {/* ПРОБЛЕМЫ */}
      <section className="px-6 py-16 bg-[#f7f2ea]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Почему нет стабильных клиентов на массаж
          </h2>

          <ul className="mt-6 space-y-4 text-[#5f5148]">
            <li>— заявки приходят нестабильно</li>
            <li>— люди спрашивают цену и пропадают</li>
            <li>— реклама требует постоянного контроля</li>
            <li>— нет повторных клиентов</li>
          </ul>
        </div>
      </section>

      {/* ПОДХОД */}
      <section className="px-6 py-20 max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold">
          Система привлечения клиентов на массаж
        </h2>

        <div className="mt-8 space-y-6 text-[#5f5148]">
          <p>Реклама (Meta Ads + TikTok)</p>
          <p>Сайт или посадочная страница</p>
          <p>CRM и автоматизация заявок</p>
          <p>Скрипты и конверсия в запись</p>
        </div>
      </section>

      {/* КЕЙСЫ */}
      <section className="px-6 py-20 bg-[#f7f2ea]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Кейсы продвижения массажа
          </h2>

          <div className="mt-8 space-y-6">

            <div>
              <h3 className="font-semibold">
                740 заявок по $1.8 и 30 762 ₪ прибыли
              </h3>
              <p className="text-[#5f5148] mt-2">
                Массаж с нуля: без базы, без клиентов → полная запись за 3 месяца
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                183 заявки по $5.7 и 40 клиентов
              </h3>
              <p className="text-[#5f5148] mt-2">
                Массаж для женщин: выстроена система заявок и записи
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                256 клиентов через систему онлайн-записи
              </h3>
              <p className="text-[#5f5148] mt-2">
                Спа-салон: автоматизация записи без администратора
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ОБО МНЕ */}
      <section className="px-6 py-20 max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold">
          Эксперт по рекламе в бьюти-сфере
        </h2>

        <p className="mt-6 text-[#5f5148]">
          С 2018 года помогаю массажистам и салонам выстраивать систему привлечения клиентов.
          Работаю с проектами в США, Европе и Израиле.
        </p>

        <div className="mt-6 flex gap-4">
          <a href="https://wa.me/972537086545">WhatsApp</a>
          <a href="https://t.me/mailovaja">Telegram</a>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 py-20 bg-[#f7f2ea]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Вопросы по рекламе массажа
          </h2>

          <div className="mt-8 space-y-6 text-[#5f5148]">

            <p><b>С каким бюджетом можно стартовать?</b><br/>От $200 до $10 000</p>

            <p><b>Почему есть заявки, но нет записей?</b><br/>Проблема в обработке — мы это исправляем</p>

            <p><b>Сколько стоит клиент?</b><br/>Зависит от города и конкуренции</p>

            <p><b>Когда будет результат?</b><br/>Первые заявки — уже в начале работы</p>

            <p><b>Вы только рекламу делаете?</b><br/>Нет, выстраиваем систему полностью</p>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold">
          Получите разбор вашего проекта
        </h2>

        <div className="mt-6 flex justify-center gap-4">
          <a href="https://wa.me/972537086545" className="bg-black text-white px-6 py-3 rounded-full">
            WhatsApp
          </a>
          <a href="https://t.me/mailovaja" className="border px-6 py-3 rounded-full">
            Telegram
          </a>
        </div>
      </section>

      {/* FIXED BUTTON */}
      <a
        href="https://wa.me/972537086545"
        className="fixed bottom-4 left-4 right-4 bg-black text-white text-center py-4 rounded-full"
      >
        Написать в WhatsApp
      </a>

    </main>
  );
}
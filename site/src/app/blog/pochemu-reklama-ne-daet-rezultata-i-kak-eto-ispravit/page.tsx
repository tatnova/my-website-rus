import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title:
    'Почему реклама салона красоты не даёт результата: 7 причин и что исправить',

  description:
    'Почему реклама в Instagram, Meta Ads и TikTok не приносит стабильных клиентов салону красоты. Разбираем 7 причин и систему привлечения клиентов.',

  keywords: [
    'реклама салона красоты',
    'маркетинг для бьюти бизнеса',
    'meta ads салон красоты',
    'crm для салона красоты',
    'реклама массажа',
    'beauty salon marketing',
    'spa marketing',
    'beauty salon advertising',
    'маркетинг для массажа',
    'система привлечения клиентов',
    'crm для бьюти бизнеса',
    'instagram ads beauty salon',
    'tiktok ads beauty business',
  ],

  openGraph: {
    title:
      'Почему реклама салона красоты не даёт результата: 7 причин и что исправить',

    description:
      'Почему заявки из Instagram, Meta Ads и TikTok не превращаются в клиентов — и как выстроить систему стабильного потока записей.',

    images: [
      {
        url: '/beauty-marketing-strategy.jpg',
        width: 1200,
        height: 630,
        alt: 'Почему реклама салона красоты не работает',
      },
    ],
  },

  alternates: {
    canonical:
      'https://beauty.adsnew.org/blog/pochemu-reklama-ne-daet-rezultata-i-kak-eto-ispravit',
  },
};

const faqs = [
  {
    q: 'Почему реклама салона красоты не окупается?',
    a: 'Чаще всего проблема не в рекламе, а в воронке: слабый оффер, неудобная запись, отсутствие CRM, плохая обработка заявок или отсутствие аналитики.',
  },
  {
    q: 'Что важнее: реклама или CRM?',
    a: 'Одно без другого работает плохо. Реклама приводит людей, CRM помогает не терять их и превращать в постоянных клиентов.',
  },
  {
    q: 'Сколько нужно бюджета для рекламы салона красоты?',
    a: 'Это зависит от города, конкуренции и ниши, но для тестового запуска часто достаточно бюджета от $300–500.',
  },
  {
    q: 'Почему заявки не превращаются в записи?',
    a: 'Обычно проблема в скорости ответа, отсутствии скриптов, неудобной записи или слабом доверии.',
  },
  {
    q: 'Можно ли масштабировать рекламу без роста хаоса?',
    a: 'Да, если есть система: CRM, аналитика, автоматизация, понятный путь клиента и контроль обработки заявок.',
  },
];

export default function BlogArticle() {
  return (
    <main className="bg-white text-[#1f1a17] selection:bg-[#fff1e4] selection:text-[#e8a16b]">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-[#f3e3d6] bg-gradient-to-br from-[#fff8f1] via-white to-[#f8efe6] px-6 pb-32 pt-40 md:pb-40">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-wrap items-center gap-4 text-xs font-bold uppercase tracking-[0.3em] text-[#e8a16b]">
            <span>Beauty Marketing</span>
            <span>•</span>
            <span>CRM</span>
            <span>•</span>
            <span>Meta Ads</span>
            <span>•</span>
            <span>Instagram Ads</span>
          </div>

          <div className="grid items-center gap-20 lg:grid-cols-2">
            <div>
              <h1 className="max-w-5xl text-5xl font-black leading-[0.95] tracking-tighter md:text-7xl">
                Почему реклама салона красоты не даёт результата:
                <span className="text-[#e8a16b]"> 7 причин </span>
                и что исправить
              </h1>

              <p className="mt-10 max-w-2xl text-2xl leading-relaxed text-gray-600">
                Почему заявки из Instagram, Meta Ads и TikTok не превращаются
                в клиентов — и как выстроить систему, которая делает поток
                записей стабильным.
              </p>

              <div className="mt-12 flex flex-wrap gap-4">
                <a
                  href="https://wa.me/972537086545?text=Здравствуйте!%20Хочу%20разобраться,%20почему%20реклама%20не%20дает%20результат."
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-[#25D366] px-8 py-4 font-bold text-white shadow-xl transition hover:scale-105"
                >
                  💬 Обсудить в WhatsApp
                </a>

                <a
                  href="https://t.me/mailovaja?text=Здравствуйте!%20Хочу%20разобраться,%20почему%20реклама%20не%20дает%20результат."
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-[#0088cc] px-8 py-4 font-bold text-white shadow-xl transition hover:scale-105"
                >
                  ✈️ Telegram
                </a>
              </div>

              <div className="mt-12 flex flex-wrap gap-8 text-sm font-bold uppercase tracking-widest text-gray-400">
                <span>Автор: Татьяна Новикова</span>
                <span>12 минут чтения</span>
                <span>2026</span>
              </div>
            </div>

            <div className="relative">
              <div className="overflow-hidden rounded-[48px] border-8 border-white shadow-2xl">
                <img
                  src="/beauty-marketing-strategy.jpg"
                  alt="Почему реклама салона красоты не работает"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="absolute -bottom-10 -left-10 hidden rounded-[32px] bg-white p-8 shadow-2xl lg:block">
                <div className="text-5xl font-black text-[#e8a16b]">
                  40%
                </div>

                <p className="mt-2 max-w-[180px] text-sm font-bold uppercase tracking-widest text-gray-400">
                  лидов теряются без CRM и автоматизации
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ARTICLE */}
      <article className="px-6 py-40">
        <div className="mx-auto max-w-3xl">
          <p className="text-[22px] leading-[1.9] text-gray-700">
            Многие владельцы салонов красоты, массажных студий и
            бьюти-бизнесов в США, Канаде и Европе сталкиваются с одной и той
            же проблемой: деньги в рекламу вкладываются регулярно, но
            стабильного потока клиентов всё равно нет.
          </p>

          <p className="mt-10 text-[22px] leading-[1.9] text-gray-700">
            Meta Ads, Instagram и TikTok могут приносить заявки, но при этом:
          </p>

          <ul className="mt-12 space-y-6 border-l-4 border-[#e8a16b] pl-8 text-[22px] leading-[1.8] text-gray-700">
            <li>• запись остаётся нестабильной,</li>
            <li>• мастера простаивают,</li>
            <li>• стоимость клиента слишком высокая,</li>
            <li>• а часть обращений вообще теряется.</li>
          </ul>

          <div className="my-32 border-l-4 border-[#e8a16b] pl-10">
            <p className="text-4xl font-black italic leading-tight md:text-6xl">
              “Сегодня заявки есть —
              <br />
              завтра их нет.”
            </p>
          </div>

          <p className="text-[22px] leading-[1.9] text-gray-700">
            Проблема чаще всего не в самой рекламе. В большинстве случаев
            причина — в отсутствии системы: между рекламой, записью, CRM,
            обработкой заявок и повторными продажами.
          </p>

          <p className="mt-10 text-[22px] leading-[1.9] text-gray-700">
            Реклама может давать клики и сообщения, но если клиенту неудобно
            записаться, ему долго отвечают или нет понятного пути до покупки —
            деньги начинают “сливаться”.
          </p>
        </div>

        {/* STATS */}
        <section className="my-40">
          <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
            <div className="rounded-[40px] bg-[#fff8f1] p-12">
              <div className="text-6xl font-black text-[#e8a16b]">5–7x</div>

              <p className="mt-6 text-lg leading-relaxed text-gray-600">
                дороже привлекать нового клиента, чем удерживать текущего
              </p>
            </div>

            <div className="rounded-[40px] bg-black p-12 text-white">
              <div className="text-6xl font-black text-[#e8a16b]">40%</div>

              <p className="mt-6 text-lg leading-relaxed text-gray-300">
                клиентов ищут услуги вне рабочего времени администратора
              </p>
            </div>

            <div className="rounded-[40px] bg-[#fff8f1] p-12">
              <div className="text-6xl font-black text-[#e8a16b]">24/7</div>

              <p className="mt-6 text-lg leading-relaxed text-gray-600">
                онлайн-запись увеличивает конверсию из рекламы
              </p>
            </div>
          </div>
        </section>

        {/* SECTION */}
        <div className="mx-auto max-w-3xl">
          <h2 className="text-4xl font-black leading-tight md:text-6xl">
            Почему реклама салона красоты не работает
          </h2>

          <p className="mt-12 text-[22px] leading-[1.9] text-gray-700">
            Многие бьюти-бизнесы запускают рекламу хаотично:
          </p>

          <ul className="mt-12 space-y-6 text-[22px] leading-[1.8] text-gray-700">
            <li>• тестируют разные объявления,</li>
            <li>• меняют креативы,</li>
            <li>• пробуют новые офферы,</li>
            <li>• увеличивают бюджеты,</li>
          </ul>

          <p className="mt-12 text-[22px] leading-[1.9] text-gray-700">
            но при этом не выстраивают саму систему продаж.
          </p>

          <div className="my-32 rounded-[48px] bg-black p-16 text-white">
            <h3 className="text-4xl font-black leading-tight">
              Реклама отдельно = хаос
            </h3>

            <p className="mt-8 text-xl leading-relaxed text-gray-300">
              Одна из самых больших ошибок:
              <br />
              реклама работает отдельно,
              <br />
              CRM отдельно,
              <br />
              администратор отдельно,
              <br />
              сайт отдельно.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="https://wa.me/972537086545?text=Здравствуйте!%20Хочу%20разобраться,%20почему%20реклама%20не%20дает%20результат."
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-[#25D366] px-8 py-4 font-bold text-white"
              >
                💬 Обсудить проект
              </a>

              <a
                href="https://t.me/mailovaja?text=Здравствуйте!%20Хочу%20разобраться,%20почему%20реклама%20не%20дает%20результат."
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-[#0088cc] px-8 py-4 font-bold text-white"
              >
                ✈️ Telegram
              </a>
            </div>
          </div>

          {/* REASONS */}
          <div className="space-y-40">
            <section>
              <div className="mb-10 text-sm font-black uppercase tracking-[0.3em] text-[#e8a16b]">
                Причина #1
              </div>

              <h3 className="text-4xl font-black leading-tight">
                Нет системы обработки заявок
              </h3>

              <p className="mt-10 text-[22px] leading-[1.9] text-gray-700">
                Даже хорошие лиды могут не превращаться в записи, если клиенту
                отвечают слишком долго, нет CRM, заявки теряются между
                Instagram, WhatsApp и Telegram, а администратор отвечает
                по-разному каждому клиенту.
              </p>
            </section>

            <section>
              <div className="mb-10 text-sm font-black uppercase tracking-[0.3em] text-[#e8a16b]">
                Причина #2
              </div>

              <h3 className="text-4xl font-black leading-tight">
                Сложная или неудобная запись
              </h3>

              <p className="mt-10 text-[22px] leading-[1.9] text-gray-700">
                Современный клиент хочет записаться быстро: без долгих
                переписок, без ожидания ответа администратора и без сложных
                действий.
              </p>

              <p className="mt-10 text-[22px] leading-[1.9] text-gray-700">
                Особенно это критично для мобильного трафика из Instagram и
                TikTok.
              </p>
            </section>

            <section>
              <div className="mb-10 text-sm font-black uppercase tracking-[0.3em] text-[#e8a16b]">
                Причина #3
              </div>

              <h3 className="text-4xl font-black leading-tight">
                Нет понятного оффера
              </h3>

              <p className="mt-10 text-[22px] leading-[1.9] text-gray-700">
                Фраза “Качественные услуги массажа” не продаёт.
              </p>

              <div className="mt-16 rounded-[40px] bg-[#fff8f1] p-12">
                <h4 className="text-2xl font-black">
                  Что работает лучше:
                </h4>

                <ul className="mt-8 space-y-4 text-xl leading-relaxed text-gray-700">
                  <li>• “Антистресс-массаж после сидячей работы”</li>
                  <li>• “Лимфодренаж для женщин после беременности”</li>
                  <li>• “Массаж спины для офисных сотрудников”</li>
                </ul>
              </div>
            </section>

            <section>
              <div className="mb-10 text-sm font-black uppercase tracking-[0.3em] text-[#e8a16b]">
                Причина #4
              </div>

              <h3 className="text-4xl font-black leading-tight">
                Высокая стоимость клиента (CAC)
              </h3>

              <p className="mt-10 text-[22px] leading-[1.9] text-gray-700">
                Многие смотрят только на цену заявки. Но дешёвый лид не всегда
                означает прибыль.
              </p>

              <p className="mt-10 text-[22px] leading-[1.9] text-gray-700">
                Иногда более дорогая заявка оказывается намного выгоднее,
                потому что клиент приходит повторно.
              </p>
            </section>

            <section>
              <div className="mb-10 text-sm font-black uppercase tracking-[0.3em] text-[#e8a16b]">
                Причина #5
              </div>

              <h3 className="text-4xl font-black leading-tight">
                Нет повторных продаж и системы удержания
              </h3>

              <p className="mt-10 text-[22px] leading-[1.9] text-gray-700">
                Большинство салонов теряют деньги не потому, что не могут
                привлечь клиента, а потому что:
              </p>

              <ul className="mt-10 space-y-4 text-[22px] leading-[1.8] text-gray-700">
                <li>• клиент не возвращается,</li>
                <li>• нет напоминаний,</li>
                <li>• нет повторной записи,</li>
                <li>• нет автоматизации.</li>
              </ul>

              <p className="mt-10 text-[22px] leading-[1.9] text-gray-700">
                При этом повторная продажа почти всегда дешевле нового
                привлечения.
              </p>
            </section>

            <section>
              <div className="mb-10 text-sm font-black uppercase tracking-[0.3em] text-[#e8a16b]">
                Причина #6
              </div>

              <h3 className="text-4xl font-black leading-tight">
                Нет аналитики
              </h3>

              <p className="mt-10 text-[22px] leading-[1.9] text-gray-700">
                Очень многие бьюти-бизнесы не знают:
              </p>

              <ul className="mt-10 space-y-4 text-[22px] leading-[1.8] text-gray-700">
                <li>• сколько стоит клиент,</li>
                <li>• какая реклама окупается,</li>
                <li>• какие объявления реально приводят записи,</li>
                <li>• где теряются деньги.</li>
              </ul>

              <p className="mt-10 text-[22px] leading-[1.9] text-gray-700">
                Без аналитики реклама превращается в угадайку.
              </p>
            </section>

            <section>
              <div className="mb-10 text-sm font-black uppercase tracking-[0.3em] text-[#e8a16b]">
                Причина #7
              </div>

              <h3 className="text-4xl font-black leading-tight">
                Реклама существует отдельно от бизнеса
              </h3>

              <p className="mt-10 text-[22px] leading-[1.9] text-gray-700">
                Клиент воспринимает рекламу, сайт, CRM и запись как один путь.
                Если хотя бы один этап слабый — конверсия падает.
              </p>
            </section>
          </div>

          {/* EXTRA SEO BLOCKS */}
          <div className="mt-40 space-y-32">
            <section>
              <h2 className="text-4xl font-black leading-tight md:text-6xl">
                Что делать, если заявки есть, но нет записей
              </h2>

              <p className="mt-12 text-[22px] leading-[1.9] text-gray-700">
                Это одна из самых распространённых ситуаций.
              </p>

              <p className="mt-10 text-[22px] leading-[1.9] text-gray-700">
                Реклама приводит людей. Сообщения приходят. Но до оплаты
                доходит слишком мало клиентов.
              </p>

              <div className="mt-16 rounded-[40px] bg-[#fff8f1] p-12">
                <h3 className="text-3xl font-black">
                  Что помогает исправить ситуацию
                </h3>

                <div className="mt-10 space-y-10">
                  <div>
                    <h4 className="text-2xl font-black">
                      Быстрые ответы
                    </h4>

                    <p className="mt-4 text-xl leading-relaxed text-gray-700">
                      Чем быстрее человек получает ответ, тем выше вероятность
                      записи.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-2xl font-black">
                      CRM и автоматизация
                    </h4>

                    <p className="mt-4 text-xl leading-relaxed text-gray-700">
                      CRM помогает не терять заявки, видеть путь клиента,
                      контролировать повторные записи и понимать эффективность
                      рекламы.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-2xl font-black">
                      Онлайн-запись 24/7
                    </h4>

                    <p className="mt-4 text-xl leading-relaxed text-gray-700">
                      Если человек не может сразу записаться — он уходит.
                      Онлайн-бронирование сильно повышает конверсию из рекламы.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-4xl font-black leading-tight md:text-6xl">
                Как снизить стоимость клиента в бьюти-бизнесе
              </h2>

              <p className="mt-12 text-[22px] leading-[1.9] text-gray-700">
                Снижение стоимости клиента — это не только вопрос рекламы.
              </p>

              <div className="mt-16 grid gap-8 md:grid-cols-2">
                <div className="rounded-[40px] bg-[#faf7f3] p-10">
                  <h3 className="text-2xl font-black">
                    Узкий оффер
                  </h3>

                  <p className="mt-6 text-lg leading-relaxed text-gray-700">
                    Реклама “для всех” почти всегда работает хуже.
                  </p>
                </div>

                <div className="rounded-[40px] bg-[#faf7f3] p-10">
                  <h3 className="text-2xl font-black">
                    Гиперлокальный таргетинг
                  </h3>

                  <p className="mt-6 text-lg leading-relaxed text-gray-700">
                    Для салонов красоты и массажа особенно хорошо работает
                    реклама по району и по радиусу рядом с салоном.
                  </p>
                </div>

                <div className="rounded-[40px] bg-[#faf7f3] p-10">
                  <h3 className="text-2xl font-black">
                    Повторные клиенты
                  </h3>

                  <p className="mt-6 text-lg leading-relaxed text-gray-700">
                    Повторная запись снижает стоимость привлечения в долгую.
                  </p>
                </div>

                <div className="rounded-[40px] bg-[#faf7f3] p-10">
                  <h3 className="text-2xl font-black">
                    Оптимизация сайта
                  </h3>

                  <p className="mt-6 text-lg leading-relaxed text-gray-700">
                    Даже хорошая реклама может не работать, если сайт долго
                    грузится и нет понятного CTA.
                  </p>
                </div>
              </div>
            </section>

            <section className="rounded-[56px] bg-black p-16 text-white">
              <h2 className="text-5xl font-black leading-tight">
                Бьюти-бизнес —
                <br />
                это система,
                <br />
                а не спринт
              </h2>

              <p className="mt-10 max-w-3xl text-2xl leading-relaxed text-gray-300">
                Когда реклама, сайт, CRM, обработка заявок и повторные продажи
                работают вместе — поток клиентов становится стабильнее, а
                бизнес начинает расти предсказуемо.
              </p>
            </section>
          </div>
        </div>

        {/* FAQ */}
        <section className="mt-40 bg-[#faf7f3] py-40">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="text-center text-5xl font-black tracking-tighter">
              Частые вопросы
            </h2>

            <div className="mt-20 space-y-6">
              {faqs.map((faq, i) => (
                <details
                  key={i}
                  className="rounded-[40px] bg-white p-10 shadow-sm"
                >
                  <summary className="cursor-pointer list-none text-2xl font-black">
                    {faq.q}
                  </summary>

                  <p className="mt-8 text-xl leading-relaxed text-gray-600">
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="bg-black px-6 py-40 text-white">
          <div className="mx-auto max-w-5xl text-center">
            <h2 className="text-5xl font-black leading-[1] tracking-tighter md:text-7xl">
              Реклама должна
              <br />
              приносить прибыль,
              <br />
              а не хаос
            </h2>

            <p className="mx-auto mt-12 max-w-3xl text-2xl leading-relaxed text-gray-400">
              Помогу найти слабые места в вашей системе привлечения клиентов:
              реклама, CRM, обработка заявок, повторные продажи и автоматизация.
            </p>

            <div className="mt-16 flex flex-col items-center justify-center gap-6 sm:flex-row">
              <a
                href="https://wa.me/972537086545?text=Здравствуйте!%20Хочу%20разобраться,%20почему%20реклама%20не%20дает%20результат."
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-[#25D366] px-10 py-5 text-xl font-black text-white transition hover:scale-105"
              >
                💬 WhatsApp
              </a>

              <a
                href="https://t.me/mailovaja?text=Здравствуйте!%20Хочу%20разобраться,%20почему%20реклама%20не%20дает%20результат."
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-[#0088cc] px-10 py-5 text-xl font-black text-white transition hover:scale-105"
              >
                ✈️ Telegram
              </a>
            </div>

            <p className="mt-20 text-sm uppercase tracking-[0.4em] text-gray-500">
              Автор: Татьяна Новикова — стратег по маркетингу и системам
              привлечения клиентов для бьюти-бизнеса
            </p>
          </div>
        </section>
      </article>
    </main>
  );
}
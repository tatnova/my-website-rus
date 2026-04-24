import type { Metadata } from 'next';

export const metadata: Metadata = {
  title:
    'Продвижение массажа в Израиле: 740 заявок по 5,7 ₪ и 30 762 ₪ прибыли',
  description:
    'Кейс продвижения мастера ручного массажа в Израиле с нуля: 740 заявок за 3 месяца, цена заявки 5,7 ₪, выручка 37 000 ₪ и чистая прибыль 30 762 ₪.',
  keywords: [
    'продвижение массажа в Израиле',
    'реклама массажа Израиль',
    'клиенты на массаж',
    'заявки на массаж',
    'Meta Ads массаж',
    'реклама для мастера массажа',
    'продвижение бьюти бизнеса Израиль',
  ],
};

const contactLinks = [
  { label: 'WhatsApp', href: 'https://wa.me/972537086545' },
  { label: 'Telegram', href: 'https://t.me/mailovaja' },
  { label: 'Instagram', href: '#instagram' },
  { label: 'YouTube', href: '#youtube' },
  { label: 'Facebook', href: '#facebook' },
  { label: 'TikTok', href: '#tiktok' },
];

const metrics = [
  ['Вложения', '6 174 ₪ (~$1 992)'],
  ['Заявки', '740'],
  ['Цена заявки', '5,7 ₪ (~$1.8)'],
  ['Конверсия в запись', '~25%'],
  ['Новые клиенты', '~185'],
  ['Выручка', '37 000 ₪ (~$12 000)'],
  ['Чистая прибыль', '30 762 ₪ (~$9 946)'],
  ['Окупаемость', 'почти x6'],
];

export default function MassageIsraelCasePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline:
      'Продвижение массажа в Израиле: 740 заявок по 5,7 ₪ и 30 762 ₪ прибыли',
    description:
      'Кейс продвижения мастера ручного массажа в Израиле с нуля через упаковку профиля, контент, скрипты продаж и рекламный запуск.',
    url: 'https://beauty.adsnew.org/cases/massazh-israel-740-zayavok',
    about: [
      'продвижение массажа',
      'реклама для мастера массажа',
      'клиенты на массаж в Израиле',
      'Meta Ads для бьюти-бизнеса',
    ],
  };

  return (
    <main className="bg-[#fff8f1] text-gray-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article>
        <section className="px-6 py-16 lg:py-24">
          <div className="mx-auto max-w-5xl">
            <a
              href="/cases"
              className="mb-8 inline-block text-sm font-bold text-[#e8a16b]"
            >
              ← Все кейсы
            </a>

            <p className="mb-4 text-sm font-black uppercase tracking-[0.3em] text-[#e8a16b]">
              Кейс · Массаж · Израиль
            </p>

            <h1 className="max-w-5xl text-4xl font-black leading-tight md:text-6xl">
              Продвижение массажа в Израиле: 740 заявок по 5,7 ₪ и 30 762 ₪
              чистой прибыли
            </h1>

            <p className="mt-8 max-w-3xl text-xl leading-8 text-gray-600">
              Как мастеру ручного массажа без клиентской базы и опыта в бизнесе
              обеспечить полную запись уже в первый месяц работы.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="https://wa.me/972537086545"
                target="_blank"
                className="rounded-full bg-black px-8 py-4 font-bold text-white transition hover:bg-gray-800"
              >
                Обсудить проект в WhatsApp
              </a>

              <a
                href="https://t.me/mailovaja"
                target="_blank"
                className="rounded-full border border-gray-300 bg-white px-8 py-4 font-bold transition hover:border-[#e8a16b] hover:text-[#e8a16b]"
              >
                Написать в Telegram
              </a>
            </div>
          </div>
        </section>

        <section className="px-6 pb-16">
          <div className="mx-auto max-w-5xl rounded-[40px] bg-white p-8 shadow-sm lg:p-12">
            <h2 className="mb-8 text-3xl font-black">
              Результат продвижения мастера массажа
            </h2>

            <div className="grid gap-4 md:grid-cols-2">
              {metrics.map(([label, value]) => (
                <div
                  key={label}
                  className="rounded-3xl border border-[#f6dcc5] bg-[#fff8f1] p-6"
                >
                  <p className="text-sm font-bold uppercase tracking-widest text-gray-400">
                    {label}
                  </p>
                  <p className="mt-2 text-2xl font-black text-[#e8a16b]">
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ContentSection title="Кратко о кейсе">
          <p>
            В этом кейсе представлена пошаговая стратегия продвижения студии
            ручного массажа, которая позволила получить 740 обращений за 3 месяца
            при минимальном рекламном бюджете.
          </p>
          <p>
            Клиентка стартовала с полного нуля: без клиентской базы, с пустым
            Instagram-аккаунтом и только что завершённым ремонтом в кабинете.
          </p>
        </ContentSection>

        <ContentSection title="Точка А: старт с полного нуля">
          <p>Ко мне обратилась клиентка, которая находилась в самом начале пути.</p>

          <ul>
            <li>
              <strong>Статус:</strong> только что закончила курсы классического
              и лечебного массажа.
            </li>
            <li>
              <strong>Ресурсы:</strong> пустой Instagram-аккаунт, отсутствие
              клиентской базы, свежезавершённый ремонт в кабинете.
            </li>
            <li>
              <strong>Сложности:</strong> ограниченный бюджет и высокая
              конкуренция в бьюти-сфере Израиля.
            </li>
          </ul>
        </ContentSection>

        <ContentSection title="Запрос: чего хотел клиент">
          <p>
            Основной целью было запустить стабильный поток клиентов и сразу
            начать окупать вложения в бизнес.
          </p>
          <p>
            Клиентке требовался не просто красивый профиль, а система, приносящая
            реальные записи.
          </p>
        </ContentSection>

        <CtaBlock />

        <ContentSection title="Что сделали: упаковка и системная стратегия">
          <p>
            Чтобы не допустить слива бюджета, работа велась по системному
            алгоритму: упаковка профиля, подготовка контента, внедрение скриптов
            продаж и рекламный запуск.
          </p>

          <h3>Полная упаковка профиля</h3>
          <p>
            Оформлена шапка профиля, создана структура актуального Highlights и
            разработаны рекомендации по визуалу, чтобы аккаунт вызывал ощущение
            профессионализма и уюта.
          </p>

          <h3>Техническое задание для контента</h3>
          <p>
            Составлено ТЗ для фотографа с акцентом на демонстрацию рук мастера в
            работе, чтобы передать ощущение расслабления через экран.
          </p>
          <p>
            Упор был сделан на отстройку от аппаратных методик в пользу ручного
            массажа.
          </p>

          <h3>Стратегия продаж и скрипты</h3>
          <p>
            Были внедрены готовые скрипты для обработки заявок в Direct и
            WhatsApp, чтобы переводить вопросы «Сколько стоит?» в реальные
            записи.
          </p>

          <h3>Рекламный запуск</h3>
          <p>
            Использовались макеты с чётким оффером, например скульптурный массаж
            лица за 290 шекелей, и указанием локации — Петах-Тиква. Это
            позволило получать лиды по минимальной цене.
          </p>
        </ContentSection>

        <ContentSection title="Точка Б: твёрдые результаты в цифрах">
          <p>
            Результаты за 4 месяца работы, включая активную фазу продвижения 3
            месяца:
          </p>

          <ul>
            <li>
              <strong>Потрачено, включая бюджет и услуги:</strong> 6 174 ₪
              (~$1 992).
            </li>
            <li>
              <strong>Получено заявок:</strong> 740.
            </li>
            <li>
              <strong>Средняя цена заявки:</strong> 5,7 ₪ (~$1.80).
            </li>
            <li>
              <strong>Конверсия в запись:</strong> около 25%.
            </li>
            <li>
              <strong>Новых клиентов:</strong> около 185.
            </li>
            <li>
              <strong>Выручка только с первых визитов:</strong> 37 000 ₪
              (~$12 000).
            </li>
            <li>
              <strong>Чистая прибыль:</strong> 30 762 ₪ (~$9 946).
            </li>
          </ul>
        </ContentSection>

        <ContentSection title="Почему реклама на массаж в Израиле сработала">
          <p>
            Результат получился не за счёт одного рекламного объявления, а за счёт
            связки: упаковка профиля, понятный оффер, локальная реклама,
            обработка заявок и скрипты продаж.
          </p>

          <ul>
            <li>профиль вызывал доверие до запуска рекламы;</li>
            <li>контент показывал именно ручной массаж и работу мастера;</li>
            <li>оффер был конкретным и понятным;</li>
            <li>геолокация Петах-Тиква помогла работать с локальной аудиторией;</li>
            <li>заявки из Direct и WhatsApp быстро переводились в записи.</li>
          </ul>
        </ContentSection>

        <CtaBlock />

        <ContentSection title="Итог кейса">
          <p>
            Клиентка окупила затраты на рекламу и работу специалиста почти в 6
            раз уже на старте.
          </p>
          <p>
            Мастер обеспечил себе статус sold-out — полную запись, а аккаунт
            вырос на 246 целевых подписчиков.
          </p>
          <p>
            Этот кейс показывает, что продвижение массажа в Израиле может давать
            результат даже при старте с нуля, если реклама запускается не
            отдельно, а как часть системы привлечения клиентов.
          </p>
        </ContentSection>

        <ContentSection title="Кому подойдёт такая система продвижения">
          <ul>
            <li>мастерам массажа;</li>
            <li>бьюти-мастерам без клиентской базы;</li>
            <li>специалистам после обучения;</li>
            <li>новым студиям в Израиле;</li>
            <li>салонам и кабинетам, которым нужна полная запись.</li>
          </ul>
        </ContentSection>

        <section className="px-6 pb-20">
          <div className="mx-auto max-w-5xl rounded-[40px] bg-black p-8 text-white lg:p-12">
            <h2 className="text-4xl font-black">
              Хотите понять, сколько заявок может дать реклама вашему проекту?
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
              Напишите мне удобным способом — разберём нишу, бюджет, упаковку,
              рекламу и точки роста.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              {contactLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  className="rounded-full bg-white px-6 py-3 font-bold text-black transition hover:opacity-80"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </section>
      </article>
    </main>
  );
}

function ContentSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="px-6 pb-16">
      <div className="prose prose-lg mx-auto max-w-5xl rounded-[40px] bg-white p-8 shadow-sm prose-headings:font-black prose-h2:text-3xl prose-h3:text-2xl prose-p:leading-8 prose-li:leading-8 lg:p-12">
        <h2>{title}</h2>
        {children}
      </div>
    </section>
  );
}

function CtaBlock() {
  return (
    <section className="px-6 pb-16">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 rounded-[36px] bg-[#1f1a17] p-8 text-white md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-3xl font-black">Хотите такие же результаты?</h2>
          <p className="mt-3 text-white/70">
            Разберём ваш проект и посмотрим, как увеличить поток заявок.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <a
            href="https://wa.me/972537086545"
            target="_blank"
            className="rounded-full bg-white px-6 py-3 font-bold text-black"
          >
            WhatsApp
          </a>
          <a
            href="https://t.me/mailovaja"
            target="_blank"
            className="rounded-full border border-white/30 px-6 py-3 font-bold text-white"
          >
            Telegram
          </a>
        </div>
      </div>
    </section>
  );
}
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Реклама для массажистов и спа-салонов | Клиенты на массаж',
  description:
    'Реклама и система привлечения клиентов для массажистов, массажных кабинетов и спа-салонов: стратегия, Meta Ads, анализ сайта, CRM, скрипты и бесплатный разбор.',
  keywords: [
    'реклама для массажиста',
    'продвижение массажа',
    'клиенты на массаж',
    'реклама массажного кабинета',
    'реклама спа салона',
    'продвижение спа салона',
    'Meta Ads массаж',
  ],
};

const cases = [
  {
    title: '740 заявок по 5,7 ₪ и 30 762 ₪ прибыли',
    subtitle: 'Мастер массажа · старт с нуля',
    href: '/cases/massazh-israel-740-zayavok',
  },
  {
    title: '183 заявки по $5,7 и 40 клиентов',
    subtitle: 'Массаж для женщин · сложная аудитория',
    href: '/cases/massage-canada-body',
  },
  {
    title: '256 клиентов по $19 и $17 920 выручки',
    subtitle: 'Спа-салон · CRM и онлайн-запись',
    href: '/cases/spa-salon-california-256-clients',
  },
];

const reviews = [
  {
    img: '/review1.jpg',
    text: '“Появился стабильный поток клиентов, запись стала заполняться регулярнее.”',
  },
  {
    img: '/review2.jpg',
    text: '“Стало понятно, какие заявки окупаются и как масштабировать рекламу.”',
  },
  {
    img: '/review3.jpg',
    text: '“Реклама начала приводить не просто обращения, а реальные записи.”',
  },
];

const faq = [
  {
    q: 'Подходит ли реклама для массажиста без большой базы клиентов?',
    a: 'Да. Если правильно выстроить оффер, упаковку, рекламу и обработку заявок, можно получать клиентов даже без большой базы.',
  },
  {
    q: 'С каким бюджетом можно запускать рекламу на массаж?',
    a: 'Я работаю с бюджетами от $200 до $10 000 в месяц. Стратегия зависит от страны, ниши, конкуренции и цели.',
  },
  {
    q: 'Вы только запускаете рекламу?',
    a: 'Нет. Работа включает стратегию, анализ сайта, аудит Instagram, рекламу, CRM, скрипты и воронку от заявки до записи.',
  },
  {
    q: 'Можно ли вести заявки сразу в запись?',
    a: 'Да. Для массажных кабинетов и спа-салонов можно выстроить связку рекламы, CRM и онлайн-букинга.',
  },
];

export default function MassagePage() {
  return (
    <main className="bg-white text-gray-900">
      <section className="bg-[#fff8f1] px-5 py-14 md:py-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-black uppercase tracking-[0.25em] text-[#e8a16b]">
            Реклама для массажей
          </p>

          <h1 className="mt-5 max-w-4xl text-4xl font-black leading-tight md:text-6xl">
            Реклама для массажистов, массажных кабинетов и спа-салонов
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            Помогаю получать клиентов на массаж через рекламу в соцсетях,
            стратегию, упаковку, анализ сайта, CRM и систему обработки заявок.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://wa.me/972537086545"
              target="_blank"
              className="rounded-full bg-black px-6 py-3 text-sm font-bold text-white"
            >
              Бесплатный разбор в WhatsApp
            </a>
            <a
              href="https://t.me/mailovaja"
              target="_blank"
              className="rounded-full border border-gray-300 bg-white px-6 py-3 text-sm font-bold"
            >
              Написать в Telegram
            </a>
          </div>
        </div>
      </section>

      <section className="px-5 py-14 md:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-black md:text-4xl">
            Кому подходит продвижение
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {['Массажистам', 'Массажным кабинетам', 'Спа-салонам'].map((item) => (
              <div key={item} className="rounded-3xl bg-[#fff8f1] p-6">
                <h3 className="text-xl font-black">{item}</h3>
                <p className="mt-3 text-gray-600">
                  Если нужны заявки, записи, повторные клиенты и понятная система
                  привлечения.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 px-5 py-14 md:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-black md:text-4xl">
            Что входит в работу
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {[
              'стратегия привлечения клиентов',
              'реклама в соцсетях: Meta Ads, TikTok и другие каналы',
              'анализ сайта и посадочной страницы',
              'аудит Instagram и рекомендации по упаковке',
              'работа с CRM и онлайн-записью, если нужно',
              'скрипты обработки заявок',
              'воронка от заявки до записи',
              'масштабирование рекламных связок',
            ].map((item) => (
              <div key={item} className="rounded-2xl bg-white p-5 font-semibold">
                {item}
              </div>
            ))}
          </div>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-gray-600">
            Ведение Instagram не входит в основную работу. Упаковка Instagram
            может быть отдельной услугой, а аудит и рекомендации по улучшению
            входят в стратегию продвижения.
          </p>
        </div>
      </section>

      <section className="px-5 py-14 md:py-20">
        <div className="mx-auto max-w-6xl rounded-[36px] bg-black p-8 text-white md:p-12">
          <h2 className="text-3xl font-black md:text-5xl">
            С какими бюджетами работаю
          </h2>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-white/70">
            Работаю с рекламными бюджетами от <b className="text-white">$200</b>{' '}
            до <b className="text-white">$10 000</b> в месяц. Стратегия зависит
            от страны, конкуренции, услуги, чека и цели: первые клиенты,
            заполнение записи или масштабирование.
          </p>
        </div>
      </section>

      <section className="bg-[#fff8f1] px-5 py-14 md:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-black md:text-4xl">
            Кейсы продвижения массажа
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {cases.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-3xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <p className="text-sm font-bold uppercase tracking-widest text-[#e8a16b]">
                  Кейс
                </p>
                <h3 className="mt-4 text-xl font-black leading-snug">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm text-gray-500">{item.subtitle}</p>
                <p className="mt-6 text-sm font-bold text-[#e8a16b]">
                  Читать кейс →
                </p>
              </Link>
            ))}
          </div>

          <div className="mt-8">
            <Link href="/cases" className="font-bold text-[#e8a16b]">
              Смотреть все кейсы →
            </Link>
          </div>
        </div>
      </section>

      <section className="px-5 py-14 md:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-black md:text-4xl">Отзывы клиентов</h2>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {reviews.map((item, index) => (
              <div key={index} className="rounded-3xl bg-[#fff8f1] p-5">
                <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-gray-200">
                  <img
                    src={item.img}
                    alt="Отзыв клиента"
                    className="h-full w-full object-cover"
                  />
                </div>
                <p className="mt-5 text-lg leading-7 text-gray-700">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 px-5 py-14 md:py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-black md:text-4xl">
            Частые вопросы о рекламе массажа
          </h2>

          <div className="mt-8 space-y-4">
            {faq.map((item) => (
              <details key={item.q} className="rounded-3xl bg-white p-6">
                <summary className="cursor-pointer text-lg font-black">
                  {item.q}
                </summary>
                <p className="mt-4 leading-7 text-gray-600">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-14 md:py-20">
        <div className="mx-auto max-w-5xl rounded-[36px] bg-black p-8 text-center text-white md:p-12">
          <h2 className="text-3xl font-black md:text-5xl">
            Хотите понять, сколько клиентов может дать реклама?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/70">
            Напишите мне — сделаю бесплатный разбор вашей ситуации и покажу,
            какие точки роста есть в рекламе, упаковке, сайте и обработке заявок.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="https://wa.me/972537086545"
              target="_blank"
              className="rounded-full bg-white px-6 py-3 text-sm font-bold text-black"
            >
              WhatsApp
            </a>
            <a
              href="https://t.me/mailovaja"
              target="_blank"
              className="rounded-full border border-white/30 px-6 py-3 text-sm font-bold text-white"
            >
              Telegram
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
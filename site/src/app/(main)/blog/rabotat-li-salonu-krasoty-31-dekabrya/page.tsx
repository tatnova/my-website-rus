/* eslint-disable @next/next/no-img-element -- маленькие аватары 192px, готовые webp */
import type { Metadata } from 'next';
import Link from 'next/link';
import ContactCta from '@/components/ContactCta';
import ResponsiveImage from '@/components/ResponsiveImage';
import { Checklist, MarkupPoll, NicheCalendar } from '@/components/Dec31Widgets';
import { SITE_URL } from '@/lib/site';

const SLUG = 'rabotat-li-salonu-krasoty-31-dekabrya';
const HERO = '/rabotat-li-salonu-krasoty-31-dekabrya.jpg';
const TITLE =
  'Нужно ли салону красоты работать 31 декабря и поднимать цены перед Новым годом: что решают владельцы, у которых клиентки не обижаются';
const DESCRIPTION =
  'Нужно ли салону красоты работать 31 декабря и поднимать цены перед Новым годом. Что пишут мастера и клиентки, цифры по декабрю и план на последнюю неделю года.';
const PUBLISHED = '2026-11-24';
const MODIFIED = '2026-11-24';

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/blog/${SLUG}` },
  openGraph: {
    type: 'article',
    title: TITLE,
    description: DESCRIPTION,
    images: [HERO],
    publishedTime: PUBLISHED,
    modifiedTime: MODIFIED,
    authors: ['Татьяна Ричманн'],
  },
};

type Voice = {
  avatar: string;
  name: string;
  alt: string;
  quote: string;
  more?: string;
  conclusion: string;
};

function VoiceBubble({ v }: { v: Voice }) {
  return (
    <figure className="mt-8 rounded-[28px] bg-[#fff8f1] p-5 md:p-7">
      <div className="flex items-start gap-4">
        <img
          src={v.avatar}
          alt={v.alt}
          width={64}
          height={64}
          loading="lazy"
          decoding="async"
          className="h-14 w-14 shrink-0 rounded-full border-2 border-white object-cover shadow-md md:h-16 md:w-16"
        />
        <div className="min-w-0 flex-1">
          <blockquote className="relative rounded-2xl rounded-tl-sm bg-white px-5 py-4 text-[18px] font-semibold leading-7 text-gray-900 shadow-sm">
            {v.quote}
          </blockquote>
          <figcaption className="mt-2 pl-1 text-sm font-semibold text-gray-500">{v.name}</figcaption>
        </div>
      </div>
      {v.more && <p className="mt-4 text-sm leading-6 text-gray-600 md:pl-20">{v.more}</p>}
      <p className="mt-3 border-l-4 border-[#e8a16b] pl-4 text-[17px] font-bold leading-7 text-gray-900 md:ml-20">{v.conclusion}</p>
    </figure>
  );
}

const voices: Record<string, Voice> = {
  fifty: {
    avatar: '/img/blog/31-dekabrya/kosmetolog-2.webp',
    name: 'Бьюти-мастер, обсуждение в соцсетях',
    alt: 'Мастер подняла цены на 30 декабря на 50%: мнение мастера',
    quote: 'Подняла прайс на 30 декабря на 50% и получила «столько возмущений»',
    more: 'Теперь она спрашивает коллег, одна ли она так делает. В соседнем обсуждении того же вопроса за 4 дня 30 тысяч просмотров и 77 ответов.',
    conclusion: 'Вопрос не «работать ли», а «как работать, чтобы клиентка вернулась в январе».',
  },
  makeup: {
    avatar: '/img/blog/31-dekabrya/vizazhist.webp',
    name: 'Визажист',
    alt: 'Визажист о праздничной наценке 31 декабря',
    quote: '«Да хоть на 200%. Нас никто не спрашивает, когда поднимают цены на бензин»',
    more: 'Парикмахер в том же обсуждении напоминает, что работу в праздник наёмным сотрудникам и так оплачивают минимум вдвое.',
    conclusion: 'Мастера правы, что праздничный день стоит дороже. Вопрос в том, кто за него платит.',
  },
  hair: {
    avatar: '/img/blog/31-dekabrya/parikmaher.webp',
    name: 'Парикмахер',
    alt: 'Парикмахер о работе 31 декабря: укладки',
    quote: '31-го спрашивают укладки',
    more: 'Окрашивание и стрижки клиентки стараются сделать за 1–2 недели до праздника, а в последний день идут за укладкой.',
    conclusion: 'Для парикмахерской 31 декабря один из самых денежных дней года.',
  },
  cosmo: {
    avatar: '/img/blog/31-dekabrya/kosmetolog-1.webp',
    name: 'Косметолог',
    alt: 'Косметолог о последней неделе декабря',
    quote: 'В последнюю неделю декабря в ботоксе особой нужды нет',
    more: 'Мастер перманентного макияжа пишет, что к 25 декабря у неё уже затишье, а косметологи закрываются с 30 декабря по 4 января.',
    conclusion: 'Для клиники деньги в первых трёх неделях декабря, а не 31-го.',
  },
};

const phorest = [
  { label: 'Услуги', value: 13 },
  { label: 'Клиентки', value: 9 },
  { label: 'Розница', value: 107 },
  { label: 'Подарочные сертификаты', value: 508 },
];

const plan = [
  ['Решите график до 1 декабря.', 'Спросите мастеров, кто готов работать 29–31 декабря и до какого часа. Тех, кто выходит, мотивируйте доплатой от салона, а не наценкой для клиенток.'],
  ['Обычный прайс в рабочие часы.', 'Если доплата нужна, привяжите её к условию: ранний или поздний час, срочная запись. Напишите об этом одной строкой при записи заранее, а не в день визита.'],
  ['Откройте запись на укладки и макияж на 29–31 декабря уже в начале месяца.', 'Отдельно покажите вечерние слоты, их разбирают первыми.'],
  ['Клиника косметологии:', 'процедуры, после которых нужно время на восстановление, предлагайте на 1–20 декабря. Напомните клиенткам об этом в начале месяца.'],
  ['Массаж и спа:', 'сделайте сертификаты главным предложением на 20–31 декабря. Их можно продавать онлайн и в последний день.'],
  ['Лист ожидания на 30–31 декабря.', 'Пятая часть записей на 31-е появляется за последние сутки. Клиентка из листа закроет окно, если кто-то отменит визит.'],
  ['Предоплата на 30–31 декабря.', 'Это снижает неявки в самые загруженные дни.'],
  ['Не загружайте мастеров на 100%.', 'Владельцы салонов советуют держать около 80% загрузки, иначе к январю команда выгорает.'],
  ['Прямо в кресле записывайте на январь.', 'Клиентка, которая пришла 28–31 декабря, самая лёгкая январская запись. Об этом подробно в следующей статье.'],
];

const checklist = [
  'График мастеров на 28 декабря – 10 января утверждён',
  'Решено, кто работает 31-го и до какого часа',
  'Прайс на праздничные дни: обычный или с понятным условием доплаты',
  'Вечерние слоты на укладки и макияж открыты',
  'Процедуры с восстановлением предложены на первую половину декабря',
  'Сертификаты на массаж и спа в продаже',
  'Лист ожидания и предоплата на 30–31 декабря',
  'Запись на январь прямо в декабрьском визите',
];

const faq = [
  {
    q: 'Нужно ли салону красоты работать 31 декабря?',
    a: 'Парикмахерской и визажисту да: 31-го спрашивают укладки и вечерний макияж. Клинике косметологии не обязательно, её деньги в первых трёх неделях декабря. Массажу и спа последние дни года лучше отдать продаже сертификатов.',
  },
  {
    q: 'Можно ли поднимать цены перед Новым годом?',
    a: 'Можно, но мастер, которая подняла прайс на 30 декабря на 50%, получила возмущение, а не выручку. Чаще всего поддерживают компромисс: обычные цены в рабочие часы, доплата только за выход вне графика.',
  },
  {
    q: 'До скольки работают визажисты 31 декабря?',
    a: 'Кто до 13:00, кто до 20–22 часов. Берут от 2–3 до 5 клиенток, больше 4–5 подряд, по их словам, уже в ущерб качеству.',
  },
  {
    q: 'Когда записываться на окрашивание перед Новым годом?',
    a: 'Клиентки стараются сделать окрашивание и стрижку за 1–2 недели до праздника. На 29–31 декабря остаются укладки.',
  },
  {
    q: 'Как салону не потерять записи в последние дни декабря?',
    a: 'Лист ожидания и предоплата на 30–31 декабря. 20% записей на 31-е делают за последние сутки (Planity), поэтому освободившееся окно заполняется, если клиентка о нём узнает.',
  },
];

const cases = [
  {
    href: '/cases/keis-salon-krasoty-illinois-794-obrashcheniya-160-klientov',
    place: 'Салон красоты, Чикаго',
    big: '160',
    unit: 'новых клиентов за 2,5 месяца',
    text: '794 обращения, клиент около $45 при среднем чеке около $150. Одна клиентка приносит $300–600 и больше.',
  },
  {
    href: '/cases/spa-salon-california-256-clients',
    place: 'Спа-салон, Калифорния',
    big: '256',
    unit: 'клиентов',
    text: '$17 920 выручки только с первых визитов, часть клиентов осталась на процедуры с чеком до $250.',
  },
];

function Section({ id, children }: { id?: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-24">
      {children}
    </section>
  );
}

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: TITLE,
  description: DESCRIPTION,
  image: [`${SITE_URL}${HERO}`],
  datePublished: PUBLISHED,
  dateModified: MODIFIED,
  inLanguage: 'ru',
  mainEntityOfPage: `${SITE_URL}/blog/${SLUG}`,
  author: { '@type': 'Person', name: 'Татьяна Ричманн', url: `${SITE_URL}/about` },
  publisher: { '@type': 'Person', name: 'Татьяна Ричманн', url: SITE_URL },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

export default function ArticlePage() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-[#fff1e4] selection:text-[#e8a16b]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <main>
        <section className="relative isolate overflow-hidden">
          <ResponsiveImage
            priority
            sizes="100vw"
            src={HERO}
            alt="Парикмахер делает праздничную укладку клиентке 31 декабря, на фоне новогодняя ёлка"
            className="absolute inset-0 -z-10 h-full w-full object-cover object-[65%_center]"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/85 via-black/65 to-black/25" />
          <div className="mx-auto max-w-6xl px-6 pb-14 pt-10 text-white md:pb-24 md:pt-14">
            <Link href="/blog" className="text-sm font-bold uppercase tracking-widest text-[#f2c29b]">
              ← Все статьи
            </Link>
            <div className="mt-10 max-w-3xl">
              <div className="inline-flex rounded-full bg-white/15 px-3 py-2 text-xs font-bold uppercase tracking-widest text-[#f2c29b] backdrop-blur">
                Декабрь · <time dateTime={PUBLISHED}>24 ноября 2026</time>
              </div>
              <h1 className="mt-5 text-4xl font-extrabold leading-[1.08] md:text-5xl">{TITLE}</h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80 md:text-xl">
                Нужно ли салону красоты работать 31 декабря и поднимать цены перед Новым годом? Этот вопрос каждый ноябрь всплывает
                в соцсетях и в разговорах мастеров и владельцев. Ответ зависит от того, что у вас за салон: для парикмахерской и
                визажиста 31 декабря один из самых денежных дней года, для клиники косметологии пик проходит раньше.
              </p>
            </div>
            <div className="mt-10 grid max-w-3xl grid-cols-3 gap-3 md:gap-4">
              {[
                ['30 тыс.', 'просмотров одного обсуждения за 4 дня'],
                ['>10%', 'годовой выручки салона в декабре'],
                ['20%', 'записей на 31-е за последние сутки'],
              ].map(([big, small]) => (
                <div key={big} className="rounded-2xl bg-white/10 p-4 backdrop-blur md:p-5">
                  <div className="text-2xl font-black text-[#f2c29b] md:text-4xl">{big}</div>
                  <div className="mt-1 text-xs leading-snug text-white/75 md:text-sm">{small}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-3xl px-6 py-12 md:py-16">
          <div className="rounded-[28px] border-l-4 border-[#e8a16b] bg-[#fff8f1] p-6 md:p-8">
            <div className="text-xs font-bold uppercase tracking-widest text-[#c97d45]">Главный вывод</div>
            <p className="mt-3 text-xl font-bold leading-relaxed md:text-2xl">
              31 декабря выгодно работать не всем, а наценка 50% приносит возмущение, а не выручку.
            </p>
            <p className="mt-3 text-[17px] leading-8 text-gray-700">
              Обычный прайс в рабочие часы, доплата мастерам от салона и запись на январь прямо в кресле дают больше, чем разовая
              наценка в один день.
            </p>
          </div>

          <VoiceBubble v={voices.fifty} />

          <nav className="mt-10 rounded-[28px] border border-[#f6dcc5] p-6">
            <div className="text-sm font-black uppercase tracking-widest text-gray-500">Содержание</div>
            <ol className="mt-4 grid gap-2 text-[16px] font-semibold text-gray-700 md:grid-cols-2">
              <li><a href="#dekabr-v-cifrah" className="hover:text-[#c97d45]">Сколько салон зарабатывает в декабре</a></li>
              <li><a href="#komu-rabotat" className="hover:text-[#c97d45]">Кому работать 31 декабря</a></li>
              <li><a href="#nacenka" className="hover:text-[#c97d45]">Праздничная наценка: где граница</a></li>
              <li><a href="#plan" className="hover:text-[#c97d45]">План на последние две недели</a></li>
              <li><a href="#chek-list" className="hover:text-[#c97d45]">Чек-лист на 1 декабря</a></li>
              <li><a href="#faq" className="hover:text-[#c97d45]">Частые вопросы</a></li>
            </ol>
          </nav>

          <Section id="dekabr-v-cifrah">
            <h2 className="mt-14 text-3xl font-black md:text-4xl">Сколько салон зарабатывает в декабре</h2>
            <p className="mt-4 text-[18px] leading-8 text-gray-700">
              По данным Phorest (6 000+ салонов, 2019), декабрь самый денежный месяц: салон получает в нём больше 10% годовой
              выручки, хотя средний месяц даёт 8,3%.
            </p>

            <div className="mt-8 rounded-[28px] bg-[#1f1712] p-6 text-white md:p-7">
              <div className="text-xs font-bold uppercase tracking-widest text-[#f2c29b]">Доля годовой выручки за месяц</div>
              <div className="mt-6 space-y-4">
                <div>
                  <div className="flex justify-between text-sm text-white/70"><span>Декабрь</span><span className="font-bold text-[#f2c29b]">больше 10%</span></div>
                  <div className="mt-2 h-4 rounded-full bg-white/10"><div className="h-4 rounded-full bg-[#e8a16b]" style={{ width: '100%' }} /></div>
                </div>
                <div>
                  <div className="flex justify-between text-sm text-white/70"><span>Средний месяц</span><span className="font-bold text-white">8,3%</span></div>
                  <div className="mt-2 h-4 rounded-full bg-white/10"><div className="h-4 rounded-full bg-white/60" style={{ width: '83%' }} /></div>
                </div>
              </div>

              <div className="mt-10 text-xs font-bold uppercase tracking-widest text-[#f2c29b]">Насколько декабрь больше обычного месяца</div>
              <div className="mt-6 space-y-4">
                {phorest.map((p) => (
                  <div key={p.label}>
                    <div className="flex justify-between text-sm text-white/70">
                      <span>{p.label}</span>
                      <span className="font-bold text-[#f2c29b]">+{p.value}%</span>
                    </div>
                    <div className="mt-2 h-4 rounded-full bg-white/10">
                      <div className="h-4 rounded-full bg-[#e8a16b]" style={{ width: `${Math.max(3, (p.value / 508) * 100)}%` }} />
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-5 text-xs text-white/60">Источник: Phorest, 6 000+ салонов, 2019</p>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-[24px] border border-[#f6dcc5] bg-white p-6 shadow-sm">
                <div className="text-xs font-bold uppercase tracking-widest text-gray-500">Декабрь к ноябрю, Франция 2024</div>
                <div className="mt-5 flex items-end gap-6">
                  {[
                    ['Укладки', 28],
                    ['Окрашивание', 27],
                  ].map(([label, v]) => (
                    <div key={label} className="flex flex-1 flex-col items-center">
                      <div className="text-2xl font-black text-[#c97d45]">+{v}%</div>
                      <div className="mt-2 flex h-28 w-full items-end rounded-xl bg-[#fff1e4]">
                        <div className="w-full rounded-xl bg-[#e8a16b]" style={{ height: `${Number(v) * 3}%` }} />
                      </div>
                      <div className="mt-2 text-sm font-semibold text-gray-700">{label}</div>
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-xs text-gray-500">Источник: Planity</p>
              </div>
              <div className="flex flex-col items-center rounded-[24px] border border-[#f6dcc5] bg-white p-6 text-center shadow-sm">
                <div className="text-xs font-bold uppercase tracking-widest text-gray-500">Записи на 31 декабря</div>
                <div
                  className="mt-5 flex h-36 w-36 items-center justify-center rounded-full"
                  style={{ background: 'conic-gradient(#e8a16b 0 20%, #fff1e4 20% 100%)' }}
                  role="img"
                  aria-label="20% записей на 31 декабря сделаны за последние сутки"
                >
                  <div className="flex h-24 w-24 flex-col items-center justify-center rounded-full bg-white">
                    <span className="text-3xl font-black text-[#c97d45]">20%</span>
                  </div>
                </div>
                <p className="mt-4 text-[15px] font-semibold leading-6 text-gray-700">
                  сделаны за последние сутки. Свободное окно в этот день заполняется, если клиентка о нём узнает.
                </p>
                <p className="mt-2 text-xs text-gray-500">Источник: Planity</p>
              </div>
            </div>
          </Section>

          <Section id="komu-rabotat">
            <h2 className="mt-16 text-3xl font-black md:text-4xl">Кому работать 31 декабря, а кому нет</h2>
            <p className="mt-4 text-[18px] leading-8 text-gray-700">
              Нажмите на свою нишу: календарь покажет, на какие дни декабря приходятся деньги.
            </p>
            <NicheCalendar />
            <VoiceBubble v={voices.hair} />

            <figure className="mt-8 overflow-hidden rounded-[28px]">
              <ResponsiveImage
                src="/vecher-31-dekabrya-makiyazh-ukladka.jpg"
                alt="Клиентка с вечерним макияжем и укладкой перед новогодним вечером у зеркала"
                sizes="(min-width: 768px) 720px, 100vw"
                className="h-72 w-full object-cover md:h-96"
              />
              <figcaption className="bg-[#fff8f1] px-5 py-4 text-[15px] leading-6 text-gray-700">
                Визажисты пишут, что клиентки хотят макияж ближе к выходу: «чем позднее, тем лучше». Вечерние слоты 31-го разбирают
                первыми.
              </figcaption>
            </figure>

            <VoiceBubble v={voices.cosmo} />
          </Section>

          <Section id="nacenka">
            <h2 className="mt-16 text-3xl font-black md:text-4xl">Праздничная наценка: где граница</h2>
            <p className="mt-4 text-[18px] leading-8 text-gray-700">В обсуждениях мастера разделились на три лагеря.</p>
            <VoiceBubble v={voices.makeup} />
            <MarkupPoll />
            <p className="mt-8 text-[18px] leading-8 text-gray-700">
              Мастер, которая подняла цены на 50%, получила возмущение, а не выручку. Для салона с постоянными клиентками риск
              больше, чем разовые +50% за один день.
            </p>
          </Section>

          <Section id="plan">
            <h2 className="mt-16 text-3xl font-black md:text-4xl">Что сделать в салоне: план на последние две недели декабря</h2>
            <ol className="mt-8 space-y-4">
              {plan.map(([t, d], i) => (
                <li key={t} className="flex gap-4 rounded-[24px] border border-[#f6dcc5] bg-white p-5 shadow-sm">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#fff1e4] text-lg font-black text-[#c97d45]">{i + 1}</span>
                  <span className="pt-1.5 text-[17px] leading-8 text-gray-700">
                    <strong className="text-gray-900">{t}</strong> {d}
                  </span>
                </li>
              ))}
            </ol>
            <p className="mt-8 text-[17px] leading-8 text-gray-700">
              Если салон отвечает на сообщения вручную, в последнюю неделю декабря часть заявок теряется просто потому, что
              администратор занят. Здесь помогает ИИ-сотрудник, который отвечает клиенткам в мессенджере круглосуточно, показывает
              свободные окна на 29–31 декабря и записывает в лист ожидания.
            </p>
          </Section>

          <Section id="chek-list">
            <h2 className="mt-16 text-3xl font-black md:text-4xl">Короткий чек-лист на 1 декабря</h2>
            <p className="mt-4 text-[18px] leading-8 text-gray-700">Отмечайте, что уже сделано.</p>
            <Checklist items={checklist} />
          </Section>

          <Section id="faq">
            <h2 className="mt-16 text-3xl font-black md:text-4xl">Частые вопросы о работе салона в новогодние праздники</h2>
            <div className="mt-6 divide-y divide-[#f6dcc5] rounded-[28px] border border-[#f6dcc5]">
              {faq.map((f) => (
                <details key={f.q} className="group p-5 md:p-6">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-lg font-bold">
                    <h3>{f.q}</h3>
                    <span className="mt-1 text-[#c97d45] transition group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-3 text-[16px] leading-7 text-gray-700">{f.a}</p>
                </details>
              ))}
            </div>
          </Section>

          <section className="mt-16 overflow-hidden rounded-[32px] border border-[#f6dcc5] bg-[#fff8f1]">
            <div className="grid md:grid-cols-[220px_1fr]">
              <ResponsiveImage
                src="/tatyana-richmann-portret-chernyj.jpg"
                alt="Татьяна Ричманн, реклама для салонов красоты, клиник и спа"
                sizes="(min-width: 768px) 220px, 100vw"
                className="h-64 w-full object-cover object-top md:h-full"
              />
              <div className="p-6 md:p-8">
                <div className="text-xs font-bold uppercase tracking-widest text-[#c97d45]">Обо мне</div>
                <h2 className="mt-2 text-2xl font-black">Татьяна Ричманн</h2>
                <p className="mt-3 text-[16px] leading-7 text-gray-700">
                  Настраиваю рекламу и путь клиентки для салонов, клиник косметологии, спа и парикмахерских: от объявления до записи.
                  Если хотите разобрать, как ваш салон проходит декабрь и что сделать, чтобы январь не провалился, напишите мне,
                  проконсультирую.
                </p>
              </div>
            </div>
          </section>

          <section className="mt-10">
            <div className="grid gap-4 md:grid-cols-2">
              {cases.map((c) => (
                <Link
                  key={c.href}
                  href={c.href}
                  className="group flex flex-col rounded-[24px] border border-[#f6dcc5] bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="text-xs font-bold uppercase tracking-widest text-gray-500">{c.place}</div>
                  <div className="mt-3 text-3xl font-black text-[#c97d45]">{c.big}</div>
                  <div className="text-sm font-semibold text-gray-800">{c.unit}</div>
                  <p className="mt-3 flex-1 text-sm leading-6 text-gray-600">{c.text}</p>
                  <span className="mt-4 text-sm font-bold text-[#c97d45] group-hover:underline">Читать кейс →</span>
                </Link>
              ))}
            </div>
            <Link href="/cases" className="mt-5 inline-block text-sm font-bold text-[#c97d45] underline">
              Все кейсы
            </Link>
          </section>
        </div>

        <ContactCta
          title="Чтобы декабрь принёс деньги, а январь не провалился"
          text="Напишите мне нишу и город в WhatsApp или Telegram, и я скажу, с чего начать именно вам."
        />
        <div className="h-16" />
      </main>
    </div>
  );
}

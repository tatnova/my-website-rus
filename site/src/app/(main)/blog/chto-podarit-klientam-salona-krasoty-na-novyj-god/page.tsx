/* eslint-disable @next/next/no-img-element -- маленькие аватары 160px, готовые webp */
import type { Metadata } from 'next';
import Link from 'next/link';
import ContactCta from '@/components/ContactCta';
import ResponsiveImage from '@/components/ResponsiveImage';
import { SITE_URL } from '@/lib/site';

const SLUG = 'chto-podarit-klientam-salona-krasoty-na-novyj-god';
const HERO = '/chto-podarit-klientam-salona-krasoty-na-novyj-god.jpg';
const TITLE = 'Что подарить клиентам салона красоты на Новый год: идеи и мини-подарки, которые не выбросят';
const DESCRIPTION =
  'Что подарить клиентам салона красоты на Новый год: идеи для косметологии, парикмахерской и спа, мини-подарки недорого, что не дарить и какой подарок вернёт клиентку в январе.';
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
  dontGift: {
    avatar: '/img/blog/podarki/avatar-0.webp',
    name: 'Аделия, клиентка мастера по ресницам',
    alt: 'Что не дарить клиентам на Новый год: мнение клиентки',
    quote: '«Аромасаше 🤮»',
    more: 'Так ответила клиентка на вопрос о самом бесполезном подарке от мастера. И ещё примерно 25 похожих ответов: аромасаше, ёлочные игрушки, брелоки, мыло и свечи.',
    conclusion: 'То, что предлагают чаще всего, дарят все. К декабрю у клиентки таких вещей несколько.',
  },
  noGift: {
    avatar: '/img/blog/podarki/avatar-1.webp',
    name: 'Клиентка салона',
    alt: 'Нужно ли дарить подарки клиентам салона красоты: мнение клиентки',
    quote: '«Ничего нам не дарите»',
    more: 'И ещё 3 похожих ответа: «Я думала, это клиенты должны дарить…» (Надя, США); в опросе мастера по кератину и восстановлению волос 100% ответили «не вижу смысла»; мастер по ресницам в этом году ничего не готовит.',
    conclusion: 'Подарок не обязателен. Если дарить, то то, что нужно клиентке.',
  },
  ideas: {
    avatar: '/img/blog/podarki/avatar-2.webp',
    name: 'Дарья, фотограф, клиентка салона',
    alt: 'Мини-подарки клиентам салона красоты: идеи от клиентки',
    quote: '«Чай, блеск для губ, крем для рук, канцелярия, сладости»',
    more: 'И ещё 2 похожих ответа: носочки и атласные резинки для волос; патчи для глаз.',
    conclusion: 'Дарите то, что расходуется: уход, чай, сладкое.',
  },
  january: {
    avatar: '/img/blog/podarki/avatar-4.webp',
    name: 'Юлия, владелица спа-гостиной',
    alt: 'Новогодний подарок клиентам спа-салона: сертификат на январь',
    quote: '«Приятнее всего деньги, списать которые можно в январе – феврале»',
    more: 'Мастер перманентного макияжа ответила: «Согласна, это действительно очень приятно».',
    conclusion: 'Сумма или процедура на январь–февраль радует клиентку и возвращает её в салон.',
  },
  cost: {
    avatar: '/img/blog/podarki/avatar-5.webp',
    name: 'Екатерина, мастер маникюра',
    alt: 'Сколько стоят новогодние подарки клиентам салона красоты: мнение мастера',
    quote: '«А если клиентов 50 и больше — это ж разориться можно»',
    conclusion: 'У салона клиенток сотни, поэтому сначала считаем бюджет.',
  },
};

const dontList = [
  ['Аромасаше, ёлочные игрушки, магниты, брелоки.', 'Их дарят почти все, и к декабрю у клиентки их уже несколько. Аромасаше клиентки сами называют самым бесполезным подарком от мастера.'],
  ['Вещи с крупным логотипом салона.', 'Ими не пользуются. Если логотип нужен, то маленький, до 3 см.'],
  ['Скидка «на следующий визит» без срока.', 'О ней забывают до весны.'],
  ['Одинаковый дорогой подарок всем.', 'У салона клиенток сотни, и бюджет быстро вырастает (расчёт ниже).'],
];

const ideas = [
  { niche: 'Косметология, клиника', thing: 'мини-формат домашнего ухода, SPF, бальзам для губ', procedure: 'маска или экспресс-уход к следующей процедуре' },
  { niche: 'Парикмахерская', thing: 'дорожный формат маски или термозащиты', procedure: 'уходовая процедура к окрашиванию или стрижке' },
  { niche: 'Спа, массаж', thing: 'чай, соль для ванны', procedure: '+15 минут к спа-программе или массажу' },
  { niche: 'Салон с несколькими услугами', thing: 'крем для рук, сладости', procedure: 'пробная услуга другого направления салона' },
];

const costRows = [
  ['150', '$750', '$1 500', '$2 250'],
  ['300', '$1 500', '$3 000', '$4 500'],
  ['600', '$3 000', '$6 000', '$9 000'],
];

const checklist = [
  'Посчитать активных клиенток и бюджет по таблице выше.',
  'Выбрать, что дарить: полезную вещь, процедуру на январь или оба варианта для разных клиенток.',
  'Заказать открытки с датами 10–31 января.',
  'Сделать 2–3 подарочных сертификата.',
  'Договориться с администратором: подарок и сразу дата в январе.',
  'В начале января написать тем, кто получил подарок и ещё не записался.',
];

const faq = [
  {
    q: 'Что подарить клиентам салона красоты на Новый год недорого?',
    a: 'То, что расходуется: крем для рук, бальзам для губ, мини-формат ухода, чай или сладости. Ещё дешевле для салона процедура в подарок на январь: маска, уход для волос или +15 минут массажа.',
  },
  {
    q: 'Что подарить клиентам на Новый год от парикмахера?',
    a: 'Дорожный формат маски или термозащиты и открытку с уходовой процедурой к следующему окрашиванию или стрижке в январе.',
  },
  {
    q: 'Когда дарить новогодние подарки клиентам?',
    a: 'Во второй половине декабря, на последнем визите перед праздниками. Некоторые мастера дарят подарки только с 20 декабря. Главное: вручить подарок и сразу предложить дату записи в январе.',
  },
  {
    q: 'Нужно ли вообще дарить подарки клиентам салона?',
    a: 'Не обязательно. Часть клиенток прямо пишет «ничего нам не дарите». Если дарите, то полезное или процедуру на январь, а не сувенир.',
  },
  {
    q: 'Что лучше: подарок или скидка на следующий визит?',
    a: 'Процедура в подарок с конкретными датами, например с 10 по 31 января. Скидку без срока забывают до весны.',
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
            alt="Клиентка салона красоты радуется новогоднему подарку в золотой упаковке"
            className="absolute inset-0 -z-10 h-full w-full object-cover"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/85 via-black/65 to-black/25" />
          <div className="mx-auto max-w-6xl px-6 pb-14 pt-10 text-white md:pb-24 md:pt-14">
            <Link href="/blog" className="text-sm font-bold uppercase tracking-widest text-[#f2c29b]">
              ← Все статьи
            </Link>
            <div className="mt-10 max-w-3xl">
              <div className="inline-flex rounded-full bg-white/15 px-3 py-2 text-xs font-bold uppercase tracking-widest text-[#f2c29b] backdrop-blur">
                Идеи · <time dateTime={PUBLISHED}>24 ноября 2026</time>
              </div>
              <h1 className="mt-5 text-4xl font-extrabold leading-[1.08] md:text-6xl">{TITLE}</h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80 md:text-xl">
                Что подарить клиентам салона красоты на Новый год, если у вас салон, клиника косметологии, спа или парикмахерская?
                В ноябре этот вопрос задают все, только в Threads за первые две недели месяца вышло больше 10 таких веток.
                Ниже суть того, что советуют опытные мастера и сами клиентки: что дарить, что не стоит, сколько это стоит салону
                и как сделать, чтобы подарок вернул клиентку в январе.
              </p>
            </div>
            <div className="mt-10 grid max-w-3xl grid-cols-3 gap-3 md:gap-4">
              {[
                ['10+', 'веток в Threads за 2 недели'],
                ['>10%', 'годовой выручки салона в декабре'],
                ['+508%', 'продаж сертификатов в декабре'],
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
              Лучший подарок салона расходуется или приводит на процедуру в январе.
            </p>
            <p className="mt-3 text-[17px] leading-8 text-gray-700">
              Сувенир клиентка забудет. Процедура с датой и запись прямо у стойки возвращают её в самый пустой месяц.
            </p>
          </div>

          <nav className="mt-10 rounded-[28px] border border-[#f6dcc5] p-6">
            <div className="text-sm font-black uppercase tracking-widest text-gray-500">Содержание</div>
            <ol className="mt-4 grid gap-2 text-[16px] font-semibold text-gray-700 md:grid-cols-2">
              <li><a href="#ne-darit" className="hover:text-[#c97d45]">Что не стоит дарить</a></li>
              <li><a href="#mini-podarki" className="hover:text-[#c97d45]">Мини-подарки недорого</a></li>
              <li><a href="#yanvar" className="hover:text-[#c97d45]">Подарок, который вернёт в январе</a></li>
              <li><a href="#skolko-stoit" className="hover:text-[#c97d45]">Сколько стоит подарок всем</a></li>
              <li><a href="#sertifikaty" className="hover:text-[#c97d45]">Подарочные сертификаты</a></li>
              <li><a href="#chek-list" className="hover:text-[#c97d45]">Чек-лист до 1 декабря</a></li>
              <li><a href="#faq" className="hover:text-[#c97d45]">Когда дарить и другие вопросы</a></li>
            </ol>
          </nav>

          <Section id="ne-darit">
            <h2 className="mt-14 text-3xl font-black md:text-4xl">Что не стоит дарить клиентам на Новый год</h2>
            <VoiceBubble v={voices.dontGift} />
            <ul className="mt-8 space-y-3">
              {dontList.map(([title, text]) => (
                <li key={title} className="flex gap-4 rounded-2xl border border-[#f6dcc5] bg-white p-4 shadow-sm">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#1f1712] text-sm font-black text-white" aria-hidden="true">
                    ✕
                  </span>
                  <span className="pt-1 text-[16px] leading-7 text-gray-700">
                    <strong className="text-gray-900">{title}</strong> {text}
                  </span>
                </li>
              ))}
            </ul>
            <VoiceBubble v={voices.noGift} />
          </Section>

          <Section id="mini-podarki">
            <h2 className="mt-16 text-3xl font-black md:text-4xl">Мини-подарки клиентам салона красоты: недорогие идеи, которыми пользуются</h2>
            <p className="mt-4 text-[18px] leading-8 text-gray-700">
              Главное правило: подарок должен расходоваться или приводить на процедуру. Из того, что клиентки называют приятным: чай,
              сладости, крем для рук, блеск для губ.
            </p>
            <VoiceBubble v={voices.ideas} />
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {ideas.map((i) => (
                <div key={i.niche} className="rounded-[24px] border border-[#f6dcc5] bg-white p-5 shadow-sm">
                  <h3 className="text-lg font-black">{i.niche}</h3>
                  <div className="mt-3 text-xs font-bold uppercase tracking-widest text-gray-500">Подарок-вещь</div>
                  <p className="mt-1 text-[16px] leading-7 text-gray-800">{i.thing}</p>
                  <div className="mt-3 text-xs font-bold uppercase tracking-widest text-[#c97d45]">Процедура на январь</div>
                  <p className="mt-1 text-[16px] leading-7 text-gray-800">{i.procedure}</p>
                </div>
              ))}
            </div>
          </Section>

          <Section id="yanvar">
            <h2 className="mt-16 text-3xl font-black md:text-4xl">Подарок, который возвращает клиентку в январе</h2>
            <p className="mt-4 text-[18px] leading-8 text-gray-700">
              Декабрь и так самый сильный месяц: по данным Phorest (2019), он даёт больше 10% годовой выручки салона, а продажи услуг
              растут на 13%. Клиентки придут и без подарка. Сложно становится в январе, когда запись пустеет. Поэтому лучший подарок
              салона работает на январь:
            </p>
            <VoiceBubble v={voices.january} />
            <ol className="mt-8 space-y-4">
              {[
                ['Процедура с датой.', 'Не «скидка когда-нибудь», а конкретная услуга в подарок с 10 по 31 января. Себестоимость маски или 15 минут массажа для салона обычно ниже, чем у вещи за $10.'],
                ['Запись сразу у стойки.', 'Администратор вручает подарок и тут же предлагает дату в январе. Лучшие салоны повторно записывают 41% клиенток, средние только 24% (Kitomba/Zenoti). Разница в 17 процентных пунктов про эту минуту у стойки.'],
                ['Подарок для подруги.', 'Вторая карточка «приведи подругу, ей процедура в подарок» приводит новую клиентку.'],
              ].map(([t, d], i) => (
                <li key={t} className="flex gap-4 rounded-[24px] border border-[#f6dcc5] bg-white p-5 shadow-sm">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#fff1e4] text-lg font-black text-[#c97d45]">{i + 1}</span>
                  <span className="pt-1.5 text-[17px] leading-8 text-gray-700">
                    <strong className="text-gray-900">{t}</strong> {d}
                  </span>
                </li>
              ))}
            </ol>
            <div className="mt-8 rounded-[28px] bg-[#1f1712] p-6 text-white md:p-7">
              <div className="text-xs font-bold uppercase tracking-widest text-[#f2c29b]">Повторная запись у стойки</div>
              <div className="mt-6 space-y-4">
                <div>
                  <div className="flex justify-between text-sm text-white/70"><span>Лучшие салоны</span><span className="font-bold text-[#f2c29b]">41%</span></div>
                  <div className="mt-2 h-4 rounded-full bg-white/10"><div className="h-4 rounded-full bg-[#e8a16b]" style={{ width: '41%' }} /></div>
                </div>
                <div>
                  <div className="flex justify-between text-sm text-white/70"><span>Средние салоны</span><span className="font-bold text-white">24%</span></div>
                  <div className="mt-2 h-4 rounded-full bg-white/10"><div className="h-4 rounded-full bg-white/60" style={{ width: '24%' }} /></div>
                </div>
              </div>
              <p className="mt-5 text-xs text-white/60">Источник: Kitomba/Zenoti</p>
            </div>
          </Section>

          <Section id="skolko-stoit">
            <h2 className="mt-16 text-3xl font-black md:text-4xl">Сколько стоит подарок всем клиенткам</h2>
            <VoiceBubble v={voices.cost} />
            <p className="mt-8 text-[18px] leading-8 text-gray-700">Примерный расчёт без упаковки и времени администратора:</p>
            <div className="mt-4 overflow-x-auto rounded-[24px] border border-[#f6dcc5]">
              <table className="w-full min-w-[480px] text-left text-[16px]">
                <thead className="bg-[#fff1e4] text-sm font-black text-gray-800">
                  <tr>
                    <th className="p-4">Активных клиенток</th>
                    <th className="p-4">Подарок $5</th>
                    <th className="p-4">Подарок $10</th>
                    <th className="p-4">Подарок $15</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#f6dcc5]">
                  {costRows.map((r) => (
                    <tr key={r[0]}>
                      {r.map((c, i) => (
                        <td key={i} className={`p-4 ${i === 0 ? 'font-black' : 'text-gray-700'}`}>{c}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-6 text-[18px] leading-8 text-gray-700">
              Если бюджет ограничен, дарите вещь только постоянным клиенткам, а остальным открытку с процедурой в январе. Некоторые
              мастера дарят подарки только с 20 декабря, чтобы их получили те, кто пришёл перед праздниками.
            </p>
          </Section>

          <Section id="sertifikaty">
            <h2 className="mt-16 text-3xl font-black md:text-4xl">Подарочные сертификаты: подарок, который покупают у вас</h2>
            <p className="mt-4 text-[18px] leading-8 text-gray-700">
              Если ваши клиентки сами думают, что подарить маме или подруге, сертификат в салон или спа решает этот вопрос. По данным
              Phorest, в декабре продажи подарочных сертификатов вырастают на 508%. Каждый сертификат означает оплату сейчас и новую
              клиентку в январе или феврале.
            </p>
            <ul className="mt-6 list-disc space-y-2 pl-5 text-[17px] leading-8 text-gray-700">
              <li>Сделайте 2–3 сертификата на понятные услуги: спа-программа, уход для волос, чистка лица.</li>
              <li>Расскажите о них на стойке, на сайте и в Instagram уже в конце ноября.</li>
              <li>
                Отвечайте на вопрос «можно купить сертификат?» быстро: 71% клиентов хотя бы раз отказывались от записи, потому что не
                смогли дозвониться или дождаться ответа (Zenoti).
              </li>
            </ul>
          </Section>

          <Section id="chek-list">
            <h2 className="mt-16 text-3xl font-black md:text-4xl">Чек-лист: что сделать до 1 декабря</h2>
            <ol className="mt-8 space-y-3">
              {checklist.map((item, i) => (
                <li key={item} className="flex gap-4 rounded-2xl border border-[#f6dcc5] bg-white p-4 shadow-sm">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#e8a16b] text-sm font-black text-white">{i + 1}</span>
                  <span className="pt-1 text-[16px] leading-7 text-gray-800">{item}</span>
                </li>
              ))}
            </ol>
            <p className="mt-6 text-[17px] leading-8 text-gray-700">
              Напоминания в январе и ответы про сертификаты вечером можно отдать ИИ-сотруднику, который отвечает клиенткам 24/7 и
              предлагает свободные окна. Но это один из вариантов: начать можно и с администратора и списка в таблице.
            </p>
          </Section>

          <Section id="faq">
            <h2 className="mt-16 text-3xl font-black md:text-4xl">Когда дарить новогодние подарки клиентам и другие вопросы</h2>
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
                  Настраиваю рекламу для салонов, клиник и спа в США, Европе и Израиле. Повторные визиты для меня так же важны, как
                  новые заявки.
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
          title="Чтобы январь не провалился"
          text="Напишите мне нишу и город в WhatsApp или Telegram, и я скажу, с чего начать именно вам."
        />
        <div className="h-16" />
      </main>
    </div>
  );
}

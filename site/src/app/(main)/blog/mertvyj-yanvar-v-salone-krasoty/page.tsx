/* eslint-disable @next/next/no-img-element -- маленькие аватары 192px, готовые webp */
import type { Metadata } from 'next';
import Link from 'next/link';
import ContactCta from '@/components/ContactCta';
import ResponsiveImage from '@/components/ResponsiveImage';
import { Checklist, DiscountCalculator, ReasonPicker } from '@/components/JanuaryWidgets';
import { SITE_URL } from '@/lib/site';

const SLUG = 'mertvyj-yanvar-v-salone-krasoty';
const HERO = '/mertvyj-yanvar-v-salone-krasoty.jpg';
const TITLE = 'Мёртвый январь в салоне красоты: что работает вместо скидок';
const DESCRIPTION =
  'Мёртвый январь в салоне красоты: почему скидка не возвращает клиенток, сколько она стоит салону и 5 вещей, которые работают вместо неё. Акции на январь без потери чека, с цифрами по США, Европе и Израилю.';
const PUBLISHED = '2026-12-01';
const MODIFIED = '2026-12-01';

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
  conclusion?: string;
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
            «{v.quote}»
          </blockquote>
          <figcaption className="mt-2 pl-1 text-sm font-semibold text-gray-500">{v.name}</figcaption>
        </div>
      </div>
      {v.conclusion && (
        <p className="mt-3 border-l-4 border-[#e8a16b] pl-4 text-[17px] font-bold leading-7 text-gray-900 md:ml-20">{v.conclusion}</p>
      )}
    </figure>
  );
}

const A = '/img/blog/mertvyj-yanvar';

const januaryVoices: Voice[] = [
  {
    avatar: `${A}/zarabotok.webp`,
    name: 'Бьюти-мастер',
    alt: 'Бьюти-мастер о заработке в январе',
    quote: 'По заработку неплохо, чуть меньше, чем в предыдущие несколько месяцев. Заказов мало',
  },
  {
    avatar: `${A}/bodryj.webp`,
    name: 'Бьюти-мастер',
    alt: 'Бьюти-мастер о январе, который оказался бодрым',
    quote: 'Ждала тухлый январь, а он бодрый оказался',
  },
  {
    avatar: `${A}/klientka.webp`,
    name: 'Клиентка парикмахера',
    alt: 'Клиентка парикмахера о январе у своего мастера',
    quote: 'Сегодня ездила стричься к своему мастеру, сказала, что работы мало… весь декабрь отпахала',
  },
];

const voices: Record<string, Voice> = {
  keratin: {
    avatar: `${A}/keratin.webp`,
    name: 'Мастер по кератину',
    alt: 'Мастер по кератину о том, почему зимой клиентки не записываются',
    quote: 'Думают на зиму в шапку и так сойдёт',
    conclusion: 'Скидка эту мысль не меняет: дешевле не значит нужнее.',
  },
  epil: {
    avatar: `${A}/epilyaciya.webp`,
    name: 'Мастер эпиляции',
    alt: 'Мастер эпиляции о том, почему январь не провалился',
    quote: 'Стабильная база, поэтому не особо что-то поменялось',
    conclusion: 'База работает, только если ей писать.',
  },
  sert: {
    avatar: `${A}/sertifikaty.webp`,
    name: 'Мастер',
    alt: 'Мастер о том, почему январь был полнее декабря: подарочные сертификаты',
    quote: 'Всем подарили деньги и сертификаты на нг',
  },
  owner: {
    avatar: `${A}/vladelica.webp`,
    name: 'Владелица бьюти-студии',
    alt: 'Владелица бьюти-студии о начале января',
    quote: 'Кстати, тоже в этом январе был какой-то ажиотаж в начале его',
    conclusion: 'Сертификат — это январская запись, если напомнить о нём той, кому его подарили.',
  },
  list: {
    avatar: `${A}/chistyj-list.webp`,
    name: 'Бьюти-мастер',
    alt: 'Бьюти-мастер о новых клиентках в январе',
    quote: 'Думаю, срабатывает психология: Новый год с чистого листа, и женщины начинают с внешности. Тоже январь всегда полный был по записям',
  },
  reels: {
    avatar: `${A}/rils.webp`,
    name: 'Бьюти-мастер',
    alt: 'Бьюти-мастер о том, что запись сама не заполнится',
    quote: 'Если сидеть в одной соцсети, выкладывать рилсы и ждать, что запись сама заполнится, то можно долго ждать',
    conclusion: 'Новые клиентки «с чистого листа» есть, но сами они вас не найдут.',
  },
};

const instead = [
  {
    n: '1',
    title: 'Напоминание «пора повторить» вместо рассылки со скидкой',
    id: 'napominanie',
  },
  { n: '2', title: 'Подарок к визиту вместо минуса к цене', id: 'podarok' },
  { n: '3', title: 'Сертификаты, подаренные на праздники', id: 'sertifikaty' },
  { n: '4', title: 'Ответ в первую неделю января', id: 'otvet' },
  { n: '5', title: 'Новые клиентки «с чистого листа»', id: 'novye' },
];

const checklist = [
  'Список клиенток, у которых интервал подходит в январе, готов к 28 декабря',
  'Текст личного сообщения «пора повторить» с двумя окнами написан',
  'Выбран подарок к визиту вместо скидки и дата, до которой он действует',
  'Список проданных сертификатов, по ним запланировано напоминание',
  'Первая неделя января: кто-то отвечает на сообщения и записывает',
  'Реклама с январским предложением запущена до праздников',
];

const faq = [
  {
    q: 'Почему январь — мёртвый сезон в салоне красоты?',
    a: 'Декабрь забирает спрос вперёд: клиентки делают окрашивание, уход и укладки перед праздниками и по своему обычному интервалу возвращаются не раньше февраля. Если в декабре никто не назвал им дату следующего визита, первые недели января остаются пустыми.',
  },
  {
    q: 'Какие акции на январь сделать в салоне красоты?',
    a: 'Вместо скидки всем: личное напоминание «пора повторить» с двумя свободными окнами, подарок к визиту до конкретной даты (уход, маска, 15 минут массажа), напоминание о подаренных сертификатах и понятное январское предложение для новых клиенток в рекламе.',
  },
  {
    q: 'Почему скидки в январе не работают?',
    a: 'Скидку в первую очередь получают постоянные клиентки, которые и так пришли бы. При среднем чеке $99 и скидке 20% салон отдаёт около $20 с каждой. А те, кто пропал, часто не видят рассылку и не записываются не из-за цены, а потому что им не назвали дату и не дали повод.',
  },
  {
    q: 'Когда скидка всё-таки уместна?',
    a: 'Когда она точечная: для клиенток, которые не приходили больше трёх месяцев, с ограниченным сроком и конкретной датой в сообщении. Тогда это повод вернуться, а не подарок всем.',
  },
  {
    q: 'Почему нет клиентов в салоне красоты после Нового года?',
    a: 'Чаще всего не из-за кризиса: клиентки закрыли все процедуры в декабре, новички не получили приглашения на второй визит, а в первую неделю января салон не отвечает на сообщения. 71% клиенток хотя бы раз отказывались от записи, потому что не смогли дозвониться или записаться онлайн (Zenoti, 2025).',
  },
];

const cases = [
  {
    href: '/cases/massazh-israel-740-zayavok',
    place: 'Массаж, Израиль',
    big: '740',
    unit: 'заявок, реклама шла и в январе',
    text: 'С ноября по февраль, без базы и с пустым профилем. До 220 клиенток записались.',
  },
  {
    href: '/cases/keys-prodvizhenie-parikmaherskoj-v-ssha-meta-ads',
    place: 'Парикмахерская, США',
    big: '$15 450',
    unit: 'выручки с первых визитов',
    text: 'Люди спрашивали цену и уходили. После доработки переписки: 78 новых клиентов за 3 месяца.',
  },
];

function Section({ id, children }: { id?: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-24">
      {children}
    </section>
  );
}

function H3({ id, n, children }: { id: string; n: string; children: React.ReactNode }) {
  return (
    <h3 id={id} className="mt-12 flex scroll-mt-24 items-start gap-4 text-2xl font-black md:text-3xl">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#e8a16b] text-xl text-white">{n}</span>
      <span className="pt-1">{children}</span>
    </h3>
  );
}

const P = 'mt-4 text-[18px] leading-8 text-gray-700';

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
            alt="Пустые кресла и зеркала в салоне красоты в январе после праздников"
            className="absolute inset-0 -z-10 h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/85 via-black/65 to-black/30" />
          <div className="mx-auto max-w-6xl px-6 pb-14 pt-10 text-white md:pb-24 md:pt-14">
            <Link href="/blog" className="text-sm font-bold uppercase tracking-widest text-[#f2c29b]">
              ← Все статьи
            </Link>
            <div className="mt-10 max-w-3xl">
              <div className="inline-flex rounded-full bg-white/15 px-3 py-2 text-xs font-bold uppercase tracking-widest text-[#f2c29b] backdrop-blur">
                Январь · <time dateTime={PUBLISHED}>1 декабря 2026</time>
              </div>
              <h1 className="mt-5 text-4xl font-extrabold leading-[1.08] md:text-6xl">{TITLE}</h1>
              <p className="mt-4 text-xl font-bold text-[#f2c29b] md:text-2xl">Акции на январь в салоне красоты, которые не съедают выручку</p>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80 md:text-xl">
                «Мёртвый январь» — так в салонах называют первые недели после праздников. Каждый ноябрь в соцсетях и в разговорах
                мастеров и владельцев звучит один и тот же вопрос: что придумать, чтобы в январе были записи. И почти сразу звучит
                оговорка: «Скидки / купоны — не работают уже давно».
              </p>
            </div>
            <div className="mt-10 grid max-w-3xl grid-cols-3 gap-3 md:gap-4">
              {[
                ['$2 000', 'отдаёт салон скидкой 20% тем, кто пришёл бы и так'],
                ['41% / 24%', 'записывают на следующий визит лучшие и средние салоны'],
                ['+508%', 'продаж сертификатов в декабре, это январские записи'],
              ].map(([big, small]) => (
                <div key={big} className="rounded-2xl bg-white/10 p-4 backdrop-blur md:p-5">
                  <div className="text-xl font-black text-[#f2c29b] md:text-4xl">{big}</div>
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
              Скидку в январе получают те, кто и так пришла бы, а пропавшие клиентки из-за неё не возвращаются.
            </p>
            <p className="mt-3 text-[17px] leading-8 text-gray-700">
              Их возвращают дата, повод и ответ на сообщение. Для салонов в Израиле и США это особенно заметно: праздники там
              короче, а январь начинается сразу, и клиентка, которой никто не написал, просто откладывает визит до весны.
            </p>
          </div>

          <p className={`${P} mt-10`}>При этом у одних январь проваливается, а у других идёт как обычно. Вот как это звучит в одном обсуждении в конце прошлого января:</p>
          {januaryVoices.map((v) => (
            <VoiceBubble key={v.quote} v={v} />
          ))}

          <nav className="mt-10 rounded-[28px] border border-[#f6dcc5] p-6">
            <div className="text-sm font-black uppercase tracking-widest text-gray-500">Содержание</div>
            <ol className="mt-4 grid gap-2 text-[16px] font-semibold text-gray-700 md:grid-cols-2">
              <li><a href="#skolko-stoit" className="hover:text-[#c97d45]">Сколько стоит январская скидка</a></li>
              <li><a href="#pochemu" className="hover:text-[#c97d45]">Почему скидка не возвращает клиенток</a></li>
              <li><a href="#akcii" className="hover:text-[#c97d45]">Какие акции сделать вместо скидки</a></li>
              <li><a href="#kogda-skidka" className="hover:text-[#c97d45]">Когда скидка всё-таки уместна</a></li>
              <li><a href="#chek-list" className="hover:text-[#c97d45]">Чек-лист на январь</a></li>
              <li><a href="#faq" className="hover:text-[#c97d45]">Частые вопросы</a></li>
            </ol>
          </nav>

          <Section id="skolko-stoit">
            <h2 className="mt-14 text-3xl font-black md:text-4xl">Сколько стоит январская скидка</h2>
            <p className={P}>
              Возьмём пример: салон, средний чек $99 (около 360 ₪), в январе дали всем 20%. Каждая постоянная клиентка, которая
              пришла бы и без скидки, приносит на $20 меньше. Если таких в январе 100, салон отдал около $2 000 тем, кого не нужно
              было уговаривать. А те, кто пропал, скидку часто даже не видят: они не открывают рассылку и не заходят в профиль салона.
            </p>
            <p className={P}>Подставьте свои цифры:</p>
            <DiscountCalculator />
            <p className={`${P} mt-8`}>
              Получается, что скидка снижает средний чек ровно в тот месяц, когда выручка и так ниже. Один владелец салона так и
              формулирует задачу на январь: не только не допустить оттока, но и «не допустить сильного снижения среднего чека».
            </p>
          </Section>

          <Section id="pochemu">
            <h2 className="mt-16 text-3xl font-black md:text-4xl">Почему нет клиентов в салоне красоты в январе, даже со скидкой</h2>
            <p className={P}>Клиентка, которая не записалась после праздников, обычно не считает, что у вас дорого. Мастера по волосам описывают это так:</p>
            <VoiceBubble v={voices.keratin} />
            <ReasonPicker />

            <div className="mt-8 rounded-[28px] bg-[#1f1712] p-6 text-white md:p-7">
              <div className="text-xs font-bold uppercase tracking-widest text-[#f2c29b]">Лучшие салоны и средние, Европа 2026</div>
              <div className="mt-6 space-y-5">
                {[
                  ['Записывают на следующий визит', 41, 24],
                  ['Загрузка мастеров', 83, 53],
                ].map(([label, top, avg]) => (
                  <div key={String(label)}>
                    <div className="text-sm font-semibold text-white/80">{label}</div>
                    <div className="mt-2 flex items-center gap-3">
                      <div className="h-4 flex-1 rounded-full bg-white/10">
                        <div className="h-4 rounded-full bg-[#e8a16b]" style={{ width: `${top}%` }} />
                      </div>
                      <span className="w-24 text-right text-sm font-bold text-[#f2c29b]">лучшие {top}%</span>
                    </div>
                    <div className="mt-2 flex items-center gap-3">
                      <div className="h-4 flex-1 rounded-full bg-white/10">
                        <div className="h-4 rounded-full bg-white/50" style={{ width: `${avg}%` }} />
                      </div>
                      <span className="w-24 text-right text-sm font-bold text-white">средние {avg}%</span>
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-5 text-xs text-white/60">Источник: Kitomba, Zenoti, 2026</p>
            </div>
          </Section>

          <Section id="akcii">
            <h2 className="mt-16 text-3xl font-black md:text-4xl">Какие акции на январь сделать в салоне красоты вместо скидки</h2>
            <div className="mt-6 grid gap-2">
              {instead.map((x) => (
                <a
                  key={x.id}
                  href={`#${x.id}`}
                  className="flex items-center gap-3 rounded-2xl border border-[#f6dcc5] bg-white px-4 py-3 text-[16px] font-bold text-gray-800 transition hover:bg-[#fff8f1]"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#fff1e4] text-[#c97d45]">{x.n}</span>
                  {x.title}
                </a>
              ))}
            </div>

            <H3 id="napominanie" n="1">Напоминание «пора повторить» вместо рассылки со скидкой</H3>
            <p className={P}>Когда мастеров спрашивают, почему у них январь не провалился, они отвечают одно и то же:</p>
            <VoiceBubble v={voices.epil} />
            <p className={P}>
              Личное сообщение работает лучше рассылки: имя, что делали в прошлый раз, когда пора повторить, и два свободных окна.
              Повод тут не цена, а интервал: окрашивание, курс ухода, массаж. Для волос это звучит не «скидка на кератин», а «под
              шапкой волосы страдают больше всего, вот два окна на январь».
            </p>
            <div className="mt-6 rounded-[24px] border border-[#f6dcc5] bg-white p-6 shadow-sm">
              <div className="text-xs font-bold uppercase tracking-widest text-gray-500">Сколько это даёт</div>
              <div className="mt-3 flex flex-wrap items-end gap-x-6 gap-y-2">
                <div className="text-4xl font-black text-[#c97d45]">+9</div>
                <div className="pb-1 text-[15px] font-semibold text-gray-700">записей в неделю</div>
                <div className="text-4xl font-black text-[#c97d45]">≈ $46 000</div>
                <div className="pb-1 text-[15px] font-semibold text-gray-700">в год (около 168 000 ₪)</div>
              </div>
              <p className="mt-3 text-[15px] leading-6 text-gray-600">
                Салон на 95 записей в неделю, средний чек $99. Клиентки приходят хотя бы на 4 дня раньше своего обычного интервала.
                Без скидки. Источник: Kitomba, Zenoti.
              </p>
            </div>

            <H3 id="podarok" n="2">Подарок к визиту вместо минуса к цене</H3>
            <p className={P}>
              Вместо «−20%» добавьте к записи до конкретной даты что-то, что стоит вам немного, а клиентке ценно: уход для волос к
              окрашиванию, маску к чистке, 15 минут массажа головы. Чек остаётся прежним, клиентка получает больше, а у салона есть
              понятный повод написать.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-3">
              <div className="rounded-[24px] bg-gray-100 p-5">
                <div className="text-xs font-bold uppercase tracking-widest text-gray-500">Скидка 20%</div>
                <div className="mt-2 text-3xl font-black text-gray-500 line-through">$99</div>
                <div className="text-2xl font-black text-gray-700">$79</div>
                <div className="mt-2 text-sm text-gray-600">чек ниже, повода написать нет</div>
              </div>
              <div className="rounded-[24px] bg-[#fff1e4] p-5">
                <div className="text-xs font-bold uppercase tracking-widest text-[#c97d45]">Подарок к визиту</div>
                <div className="mt-2 text-3xl font-black text-[#c97d45]">$99</div>
                <div className="text-2xl font-black text-gray-800">+ уход</div>
                <div className="mt-2 text-sm text-gray-700">чек прежний, есть дата и повод</div>
              </div>
            </div>

            <H3 id="sertifikaty" n="3">Сертификаты, подаренные на праздники</H3>
            <p className={P}>В одном обсуждении бывшая мастер спросила, почему у неё в январе было больше клиентов, чем в декабре. Ответы:</p>
            <VoiceBubble v={voices.sert} />
            <VoiceBubble v={voices.owner} />
            <p className={P}>
              В декабре продажи сертификатов в салонах растут на 508% (Phorest). Каждый такой сертификат — запись в январе, если
              напомнить о нём не покупательнице, а той, кому его подарили, и предложить дату. Про сертификаты и подарки подробно в
              статье{' '}
              <Link href="/blog/chto-podarit-klientam-salona-krasoty-na-novyj-god" className="font-bold text-[#c97d45] underline">
                «Что подарить клиентам салона красоты на Новый год»
              </Link>
              .
            </p>

            <H3 id="otvet" n="4">Ответ в первую неделю января</H3>
            <p className={P}>
              Мастера могут отдыхать, но запись должна работать. 81% постоянных клиенток хотя бы иногда нужно связаться с салоном
              вне рабочих часов, а 62% выберут салон, который отвечает после закрытия (Zenoti, 2025). Это может быть онлайн-запись,
              администратор на телефоне или ИИ-сотрудник, который отвечает в мессенджере круглосуточно и показывает свободные окна.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-3">
              {[
                ['81%', 'постоянных клиенток пишут салону вне рабочих часов'],
                ['62%', 'выберут салон, который отвечает после закрытия'],
              ].map(([big, small]) => (
                <div key={big} className="rounded-[24px] border border-[#f6dcc5] bg-white p-5 text-center shadow-sm">
                  <div className="text-4xl font-black text-[#c97d45]">{big}</div>
                  <div className="mt-2 text-sm font-semibold leading-5 text-gray-700">{small}</div>
                </div>
              ))}
            </div>

            <H3 id="novye" n="5">Новые клиентки «с чистого листа»</H3>
            <p className={P}>В тех же обсуждениях есть и другое наблюдение:</p>
            <VoiceBubble v={voices.list} />

            <figure className="mt-8 overflow-hidden rounded-[28px]">
              <ResponsiveImage
                src="/klientka-zimoj-v-shapke-ukhod-za-volosami.jpg"
                alt="Девушка с длинными волосами в вязаной шапке: уход за волосами зимой"
                sizes="(min-width: 768px) 720px, 100vw"
                className="h-72 w-full object-cover object-[60%_30%] md:h-96"
              />
              <figcaption className="bg-[#fff8f1] px-5 py-4 text-[15px] leading-6 text-gray-700">
                Январский повод для новых клиенток: уход для волос после праздников и шапок, курс для кожи, восстановительный массаж.
              </figcaption>
            </figure>

            <p className={P}>Таких клиенток привлекает не скидка, а понятное предложение. Но сами они вас не найдут:</p>
            <VoiceBubble v={voices.reels} />
            <p className={P}>
              Рекламу с январским предложением лучше запустить до праздников, чтобы в январе она уже приносила заявки, а не училась.
              Почему клиентки, которые пришли один раз, потом пропадают, я разбирала в статье{' '}
              <Link href="/blog/kuda-propali-klienty-salon-krasoty" className="font-bold text-[#c97d45] underline">
                «Почему клиенты перестали ходить в салон красоты»
              </Link>
              , а про график на праздники — в статье{' '}
              <Link href="/blog/rabotat-li-salonu-krasoty-31-dekabrya" className="font-bold text-[#c97d45] underline">
                «Работать ли салону красоты 31 декабря и поднимать ли цены»
              </Link>
              .
            </p>
          </Section>

          <Section id="kogda-skidka">
            <h2 className="mt-16 text-3xl font-black md:text-4xl">Когда скидка всё-таки уместна</h2>
            <div className="mt-6 rounded-[28px] border-l-4 border-[#e8a16b] bg-[#fff8f1] p-6">
              <p className="text-[18px] leading-8 text-gray-800">
                Скидка не враг, если она точечная: для клиенток, которые не приходили <strong>больше трёх месяцев</strong>, с
                <strong> ограниченным сроком</strong> и с <strong>конкретной датой</strong> в сообщении. Тогда это повод вернуться,
                а не подарок всем, кто пришёл бы и так.
              </p>
            </div>
          </Section>

          <Section id="chek-list">
            <h2 className="mt-16 text-3xl font-black md:text-4xl">Чек-лист: акции на январь в салоне красоты без потери чека</h2>
            <p className={P}>Отмечайте, что уже сделано.</p>
            <Checklist items={checklist} />
          </Section>

          <Section id="faq">
            <h2 className="mt-16 text-3xl font-black md:text-4xl">Частые вопросы про мёртвый январь в салоне</h2>
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
                  Настраиваю рекламу и путь клиентки для салонов, клиник косметологии, спа и парикмахерских в США, Европе и
                  Израиле: от объявления до записи. Для массажного кабинета в Израиле реклама шла с ноября по февраль, вместе с
                  январём, и принесла 740 заявок. Если хотите понять, какое январское предложение подойдёт вашему салону вместо
                  скидки, напишите мне нишу и город, проконсультирую.
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
          title="Чтобы январь не был мёртвым"
          text="Напишите мне нишу и город в WhatsApp или Telegram, и я скажу, какое январское предложение подойдёт вашему салону вместо скидки."
        />
        <div className="h-16" />
      </main>
    </div>
  );
}

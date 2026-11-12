import type { Metadata } from 'next';
import Link from 'next/link';
import MidCta from '@/components/MidCta';
import ResponsiveImage from '@/components/ResponsiveImage';
import { SITE_URL } from '@/lib/site';

const SLUG = 'kuda-propali-klienty-salon-krasoty';
const HERO = '/kuda-propali-klienty-salon-krasoty.jpg';
const TITLE = 'Почему клиенты перестали ходить в салон красоты и как их вернуть: 7 причин (2026)';
const DESCRIPTION =
  'Нет клиентов в салоне красоты: что делать? Разобрала 528 комментариев клиенток: 7 причин, почему клиенты перестали ходить в салон, как вернуть клиентов и чек-лист на ноябрь. Примеры из Израиля и США.';
const PUBLISHED = '2026-11-09';
const MODIFIED = '2026-11-10';

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

const reasons = [
  { label: 'Дорого, услугу урезают первой', count: 160, pct: 30 },
  { label: 'Надоел гель, хочется натуральности', count: 122, pct: 23 },
  { label: 'Жалко времени: 2–3 часа с дорогой', count: 95, pct: 18 },
  { label: 'Делаю сама дома', count: 58, pct: 11 },
  { label: 'Испорченные ногти, аллергия, боль', count: 53, pct: 10 },
  { label: 'Покрытие не держится', count: 24, pct: 5 },
  { label: 'Поведение мастера, молчаливое повышение цены', count: 21, pct: 4 },
];

const voices = [
  {
    initials: 'К',
    color: 'bg-[#e8a16b]',
    text: '«Денег нет на ногти. Посмотрите на цены на продукты.»',
    note: 'Клиентка в Threads · 4 678 отметок «нравится»',
    quote: true,
  },
  {
    initials: 'К',
    color: 'bg-[#c97d45]',
    text: 'Надоело записываться за полтора месяца и отпрашиваться с работы ради маникюра.',
    note: 'Клиентка в Threads, пересказ',
  },
  {
    initials: 'К',
    color: 'bg-[#8a5a3b]',
    text: 'За три года цену поднимали 4–5 раз, и каждый раз я узнавала об этом при оплате.',
    note: 'Клиентка в Threads, пересказ',
  },
  {
    initials: 'К',
    color: 'bg-[#b8875f]',
    text: 'Три часа с дорогой раз в три недели, и нельзя заранее спланировать конкретный день.',
    note: 'Клиентка в Threads, пересказ',
  },
];

const steps = [
  {
    q: 'Обращений стало меньше?',
    a: 'Проблема до первого сообщения: реклама, оффер, профиль, отзывы на картах.',
  },
  {
    q: 'Обращений столько же, а записей меньше?',
    a: 'Проблема в ответах: скорость, первое сообщение, предложение времени. Ориентир: в запись доходит 20–25% обращений.',
  },
  {
    q: 'Новые приходят, но не возвращаются?',
    a: 'Проблема после визита: запись на следующий раз, напоминания, качество, общение.',
  },
];

const checklist = [
  'Посчитать, откуда пришли последние 5 новых клиенток.',
  'Сравнить обращения и записи за октябрь с прошлым годом.',
  'Написать клиенткам, которые не были больше 60 дней, с конкретным свободным окном.',
  'Добавить в прайс короткую или базовую услугу на 60 минут.',
  'Ввести запись на следующий визит при оплате и напоминание накануне сообщением.',
  'Проверить, сколько минут проходит до ответа на новое сообщение, особенно вечером.',
  'Предупредить о новых ценах на январь за 3–4 недели, если планируете повышение.',
];

const faq = [
  {
    q: 'Как вернуть клиентов в салон красоты в Израиле или США?',
    a: 'Те же 7 причин работают и там. Отличие в канале: в Израиле клиентки пишут в WhatsApp и ждут ответа сразу, в США важны онлайн-запись и быстрый ответ в Instagram. Начните с напоминания о повторном визите и записи на следующий раз прямо при оплате.',
  },
  {
    q: 'Почему клиенты перестали ходить в салон красоты в 2026 году?',
    a: 'По ответам клиенток три главные причины: дорого (30%), надоел гель и хочется натуральности (23%), жалко времени на долгую процедуру и запись (18%). Уход к другому мастеру встречается реже.',
  },
  {
    q: 'Как вернуть клиентов, которые давно не приходили?',
    a: 'Напишите лично тем, кто не был больше 60 дней, и предложите конкретное свободное окно. Одно окно в четверг в 18:00 работает лучше, чем «у нас скидка».',
  },
  {
    q: 'Нужно ли давать скидки, чтобы вернуть клиенток?',
    a: 'Чаще нет. Если клиентка ушла из-за бюджета, лучше работают базовая версия услуги и пакет на несколько визитов. Скидка снижает вашу выручку и не решает проблему времени и записи.',
  },
  {
    q: 'Почему с рекламы есть сообщения, а записей нет?',
    a: 'Чаще всего клиентке отвечают поздно или присылают прайс без предложения времени. Отвечайте в течение 5–10 минут и сразу предлагайте 2 варианта записи.',
  },
  {
    q: 'Звонить клиенткам после визита или писать?',
    a: 'Писать. В обсуждении про звонки примерно половина клиенток против звонков, многие просят мессенджер. Удобнее всего запись на следующий визит при оплате и напоминание сообщением накануне.',
  },
];

const cases = [
  {
    href: '/cases/massazh-israel-740-zayavok',
    place: 'Массаж, Израиль',
    big: '740',
    unit: 'заявок за 3 месяца',
    text: 'Мастер после курсов, без базы и с пустым профилем. Заявка в среднем 4,92 ₪.',
  },
  {
    href: '/cases/keis-salon-krasoty-illinois-794-obrashcheniya-160-klientov',
    place: 'Салон красоты, Чикаго',
    big: '160',
    unit: 'новых клиентов за 2,5 месяца',
    text: 'Салон уходил в минус и за первый месяц вышел в плюс. 794 обращения, клиент около $45.',
  },
  {
    href: '/cases/keys-prodvizhenie-parikmaherskoj-v-ssha-meta-ads',
    place: 'Парикмахерская, США',
    big: '$15 450',
    unit: 'выручки с первых визитов',
    text: 'Люди спрашивали цену и уходили. После доработки переписки: 78 новых клиентов за 3 месяца.',
  },
  {
    href: '/cases/massage-canada-body',
    place: 'Массаж, Канада',
    big: '20–25%',
    unit: 'обращений доходят до записи',
    text: 'Скрипты вместо хаотичных ответов: 183 заявки и 40 клиентов при среднем чеке $120.',
  },
];

function Section({ id, children }: { id?: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-24">
      {children}
    </section>
  );
}

function Reason({ n, title, children }: { n: number; title: string; children: React.ReactNode }) {
  return (
    <div className="mt-8 rounded-[28px] border border-[#f6dcc5] bg-white p-6 shadow-sm md:p-8">
      <div className="flex items-start gap-4">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#fff1e4] text-lg font-black text-[#c97d45]">
          {n}
        </div>
        <h3 className="pt-1.5 text-xl font-black leading-snug md:text-2xl">{title}</h3>
      </div>
      <div className="mt-4 space-y-4 text-[17px] leading-8 text-gray-700 [&_li]:mt-2 [&_strong]:text-gray-900 [&_ul]:list-disc [&_ul]:pl-5">
        {children}
      </div>
    </div>
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
      <style>{`
        @keyframes kp-grow { from { transform: scaleX(0); } to { transform: scaleX(1); } }
        @keyframes kp-rise { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: none; } }
        .kp-bar { transform-origin: left; animation: kp-grow 1.1s cubic-bezier(.2,.7,.2,1) both; }
        .kp-rise { animation: kp-rise .8s ease-out both; }
        @media (prefers-reduced-motion: reduce) { .kp-bar, .kp-rise { animation: none; } }
      `}</style>

      <main>
        {/* Первый экран: фото на фоне */}
        <section className="relative isolate overflow-hidden">
          <ResponsiveImage
            priority
            sizes="100vw"
            src={HERO}
            alt="Пустое рабочее место мастера маникюра в салоне красоты вечером"
            className="absolute inset-0 -z-10 h-full w-full object-cover"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/85 via-black/65 to-black/30" />
          <div className="mx-auto max-w-6xl px-6 pb-14 pt-10 text-white md:pb-24 md:pt-14">
            <Link href="/blog" className="text-sm font-bold uppercase tracking-widest text-[#f2c29b]">
              ← Все статьи
            </Link>
            <div className="kp-rise mt-10 max-w-3xl">
              <div className="inline-flex rounded-full bg-white/15 px-3 py-2 text-xs font-bold uppercase tracking-widest text-[#f2c29b] backdrop-blur">
                Разбор · <time dateTime={PUBLISHED}>9 ноября 2026</time> · обновлено <time dateTime={MODIFIED}>10 ноября 2026</time>
              </div>
              <h1 className="mt-5 text-4xl font-extrabold leading-[1.08] md:text-6xl">
                Почему клиенты перестали ходить в салон красоты и как их вернуть: 7 причин (2026)
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80 md:text-xl">
                Нет клиентов в салоне красоты и непонятно, что делать? Я прочитала 528 комментариев клиенток о том, почему они перестали
                ходить в салон, посчитала ответы и собрала, как вернуть клиентов в салон красоты по каждой причине.
              </p>
            </div>
            <div className="kp-rise mt-10 grid max-w-3xl grid-cols-3 gap-3 md:gap-4" style={{ animationDelay: '.2s' }}>
              {[
                ['6 300+', 'ответов под одним постом'],
                ['528', 'комментариев клиенток разобрано'],
                ['7', 'причин и что с ними делать'],
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
          {/* Главный вывод */}
          <div className="rounded-[28px] border-l-4 border-[#e8a16b] bg-[#fff8f1] p-6 md:p-8">
            <div className="text-xs font-bold uppercase tracking-widest text-[#c97d45]">Главный вывод</div>
            <p className="mt-3 text-xl font-bold leading-relaxed md:text-2xl">
              Чаще всего клиентка уходит не к другому мастеру. Она сокращает услугу, делает её реже или устаёт от неудобной записи.
            </p>
            <p className="mt-3 text-[17px] leading-8 text-gray-700">
              С каждой из этих причин можно работать. Ниже разобрано, как.
            </p>
          </div>

          <nav className="mt-10 rounded-[28px] border border-[#f6dcc5] p-6">
            <div className="text-sm font-black uppercase tracking-widest text-gray-500">Содержание</div>
            <ol className="mt-4 grid gap-2 text-[16px] font-semibold text-gray-700 md:grid-cols-2">
              <li><a href="#situation" className="hover:text-[#c97d45]">Что происходит с записями</a></li>
              <li><a href="#reasons" className="hover:text-[#c97d45]">7 причин в цифрах</a></li>
              <li><a href="#voices" className="hover:text-[#c97d45]">Что пишут клиентки</a></li>
              <li><a href="#what-to-do" className="hover:text-[#c97d45]">Что делать с каждой причиной</a></li>
              <li><a href="#israel-usa" className="hover:text-[#c97d45]">Израиль и США</a></li>
              <li><a href="#diagnostics" className="hover:text-[#c97d45]">Где вы теряете клиенток</a></li>
              <li><a href="#checklist" className="hover:text-[#c97d45]">Чек-лист на ноябрь</a></li>
              <li><a href="#faq" className="hover:text-[#c97d45]">Частые вопросы</a></li>
            </ol>
          </nav>

          {/* Ситуация */}
          <Section id="situation">
            <h2 className="mt-14 text-3xl font-black md:text-4xl">Что происходит с записями в салонах осенью 2026</h2>
            <p className="mt-4 text-[18px] leading-8 text-gray-700">
              Мастера и владелицы салонов пишут одно и то же: «Клиентов нет, новые не идут, старые уходят. Такого не было никогда».
              Мастера в Европе и США добавляют, что ноябрь пустой до середины декабря.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <div className="rounded-[28px] bg-[#1f1712] p-6 text-white md:p-7">
                <div className="text-xs font-bold uppercase tracking-widest text-[#f2c29b]">Процедур в месяц при той же базе</div>
                <div className="mt-6 space-y-4">
                  <div>
                    <div className="flex justify-between text-sm text-white/70"><span>Раньше</span><span className="font-bold text-white">75–80</span></div>
                    <div className="mt-2 h-4 rounded-full bg-white/10"><div className="kp-bar h-4 rounded-full bg-white/60" style={{ width: '100%' }} /></div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm text-white/70"><span>Сейчас</span><span className="font-bold text-[#f2c29b]">60</span></div>
                    <div className="mt-2 h-4 rounded-full bg-white/10"><div className="kp-bar h-4 rounded-full bg-[#e8a16b]" style={{ width: '77%', animationDelay: '.3s' }} /></div>
                  </div>
                </div>
                <p className="mt-6 text-sm leading-6 text-white/75">
                  Покрытие носится дольше, клиентки приходят реже. Минус 20–25% выручки без единой потерянной клиентки.
                </p>
              </div>

              <div className="rounded-[28px] bg-[#fff1e4] p-6 md:p-7">
                <div className="text-xs font-bold uppercase tracking-widest text-[#c97d45]">Лояльные остаются</div>
                <div className="mt-4 flex items-center gap-5">
                  <svg viewBox="0 0 42 42" className="h-28 w-28 shrink-0 -rotate-90" aria-hidden="true">
                    <circle cx="21" cy="21" r="15.9" fill="none" stroke="#f6dcc5" strokeWidth="6" />
                    <circle cx="21" cy="21" r="15.9" fill="none" stroke="#c97d45" strokeWidth="6" strokeDasharray="6 94" />
                  </svg>
                  <div>
                    <div className="text-4xl font-black text-[#c97d45]">6%</div>
                    <p className="mt-1 text-sm leading-6 text-gray-700">
                      клиенток ответили: «Никуда не ушла, хожу к своему мастеру годами, к ней очередь на месяц».
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-6 text-gray-700">
                  Клиентки держатся за конкретного мастера. Главная задача сейчас: чтобы новая клиентка дошла до второго и третьего визита.
                </p>
              </div>
            </div>
          </Section>

          {/* График причин */}
          <Section id="reasons">
            <h2 className="mt-16 text-3xl font-black md:text-4xl">7 причин, почему клиенты перестали ходить в салон красоты</h2>
            <p className="mt-4 text-[18px] leading-8 text-gray-700">
              Так распределились ответы 528 клиенток. Один комментарий иногда называет две причины, поэтому сумма больше 100%.
            </p>
            <div className="mt-8 rounded-[28px] border border-[#f6dcc5] bg-white p-5 shadow-sm md:p-8">
              <div className="space-y-5">
                {reasons.map((r, i) => (
                  <div key={r.label}>
                    <div className="flex items-baseline justify-between gap-4 text-[15px] md:text-base">
                      <span className="font-semibold text-gray-800">{r.label}</span>
                      <span className="shrink-0 font-black text-gray-900">
                        {r.pct}% <span className="text-xs font-semibold text-gray-400">· {r.count}</span>
                      </span>
                    </div>
                    <div className="mt-2 h-3 rounded-full bg-[#fff1e4]">
                      <div
                        className="kp-bar h-3 rounded-full bg-gradient-to-r from-[#e8a16b] to-[#c97d45]"
                        style={{ width: `${(r.pct / 30) * 100}%`, animationDelay: `${i * 0.08}s` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-sm leading-6 text-gray-500">
                Подсчёт по одному большому обсуждению в Threads, в основном про маникюр. Те же причины повторяются у косметологов, лешмейкеров и парикмахеров.
              </p>
            </div>
          </Section>

          {/* Цитаты */}
          <Section id="voices">
            <h2 className="mt-16 text-3xl font-black md:text-4xl">Что пишут клиентки</h2>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {voices.map((v, i) => (
                <figure key={i} className="flex flex-col rounded-[28px] bg-[#fff8f1] p-6">
                  <div className="text-5xl font-black leading-none text-[#e8a16b]">“</div>
                  <blockquote className={`mt-2 flex-1 text-[17px] leading-8 text-gray-800 ${v.quote ? 'font-bold' : ''}`}>{v.text}</blockquote>
                  <figcaption className="mt-5 flex items-center gap-3">
                    <span className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-black text-white ${v.color}`}>
                      {v.initials}
                    </span>
                    <span className="text-sm leading-5 text-gray-500">{v.note}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </Section>

          {/* Что делать */}
          <Section id="what-to-do">
            <h2 className="mt-16 text-3xl font-black md:text-4xl">Как вернуть клиентов в салон красоты: что делать с каждой причиной</h2>

            <Reason n={1} title="«Дорого» (30%)">
              <p>
                Клиентка не перестала ценить мастера, у неё сжался бюджет, и бьюти-услугу она урезает первой. Скидка 20% здесь работает слабо:
                она снижает вашу выручку, а для клиентки процедура всё равно остаётся «лишней тратой».
              </p>
              <ul>
                <li><strong>Базовая версия услуги.</strong> Гигиенический маникюр или обычный лак вместо полного комплекса. Клиентка остаётся с вами, а не уходит в «сделаю сама».</li>
                <li><strong>Пакет на 2–3 визита</strong> с фиксированной ценой. Клиентке проще планировать бюджет, вам проще планировать загрузку.</li>
                <li><strong>Честный расчёт.</strong> Покажите стоимость в неделю: $60 раз в 3 недели это $20 в неделю.</li>
              </ul>
            </Reason>

            <Reason n={2} title="«Надоел гель, хочу натуральности» (23%)">
              <p>
                Это не уход от мастера, а смена запроса. Клиентки прямо пишут, чего им не хватает: уходовых процедур, обычного лака, «просто аккуратных ногтей за час».
              </p>
              <p>
                <strong>Что делать:</strong> добавьте в прайс 1–2 услуги под этот запрос и напишите о них клиенткам, которые давно не были.
                Так вы возвращаете тех, кто ушёл не от вас, а от формата.
              </p>
            </Reason>

            <Reason n={3} title="«Жалко времени» (18%)">
              <p>Два-три часа с дорогой, запись за полтора месяца, необходимость отпрашиваться с работы. Каждый такой шаг отталкивает занятую клиентку.</p>
              <ul>
                <li><strong>Короткий формат на 60 минут</strong> для тех, кому важна скорость.</li>
                <li><strong>Вечерние и ранние окна</strong> хотя бы 2 дня в неделю.</li>
                <li><strong>Запись на следующий визит прямо при оплате.</strong> Клиентке не нужно потом искать время и писать вам.</li>
              </ul>
            </Reason>

            <Reason n={4} title="«Неудобно записываться»">
              <p>
                Отдельной строкой в графике этой причины нет, но она звучит в десятках комментариев: не дозвонилась, долго ждала ответа в директе,
                не поняла, есть ли свободное время. Часть клиенток ушла не от маникюра, а от «возни с записью и переносами».
              </p>
              <ul>
                <li><strong>Отвечайте в течение 5–10 минут.</strong> Клиентки пишут вечером, после работы и детей. Кто ответил первым, к тому и записываются.</li>
                <li><strong>Сразу предлагайте время.</strong> Не «вот прайс», а «есть четверг в 18:00 или суббота в 11:00, какое удобнее?».</li>
                <li><strong>Пишите, а не звоните.</strong> Примерно половина клиенток против звонков после визита, многие просят мессенджер.</li>
                <li><strong>Не успеваете отвечать сами?</strong> Поставьте автоответ с вариантами времени или ИИ-сотрудника, который отвечает 24/7 и принимает заявку.</li>
              </ul>
            </Reason>

            <Reason n={5} title="Испорченные ногти, аллергия, боль (10%) и сомнения в стерильности">
              <p>Клиентки пишут, что мастера раздражаются на вопрос о стерилизации. 2% прямо называют страх заразиться причиной ухода.</p>
              <p>
                <strong>Что делать:</strong> показывайте стерилизацию в сторис и на сайте, отвечайте на такие вопросы спокойно и подробно.
                Для клиентки это вопрос безопасности, а не недоверия к вам.
              </p>
            </Reason>

            <Reason n={6} title="Поведение мастера и молчаливое повышение цены (4%)">
              <p>
                Доля небольшая, но эти клиентки уходят навсегда и рассказывают об этом подругам. Одна клиентка пишет, что за 3 года цену поднимали 4–5 раз,
                и каждый раз она узнавала об этом при оплате.
              </p>
              <ul>
                <li><strong>Предупреждайте о новых ценах за 3–4 недели</strong>, сообщением, с датой и причиной.</li>
                <li><strong>Договоритесь в команде о правилах общения:</strong> не обсуждать других клиенток, не расспрашивать о личном, не опаздывать.</li>
              </ul>
            </Reason>

            <Reason n={7} title="Визитов меньше, хотя клиентки те же">
              <p>
                Этой причины не видно в комментариях клиенток, но видно в вашей кассе. Если клиентка приходила раз в 3 недели, а теперь раз в 4,
                вы теряете 25% её визитов за год.
              </p>
              <p>
                <strong>Что делать:</strong> считайте не только число клиенток, но и средний интервал между визитами. Записывайте на следующий визит при оплате
                и напоминайте сообщением, когда подходит срок.
              </p>
            </Reason>
          </Section>

          {/* Одна кнопка связи в середине статьи: в шапке и футере кнопки уже есть */}
          <MidCta
            text="Записей стало меньше? Напишите нишу и город, и я посмотрю, где вы теряете клиенток: в рекламе, в профиле или в переписке."
            message="Здравствуйте! Прочитала статью «Почему клиенты перестали ходить в салон». Моя ниша и город: "
          />

          {/* Израиль и США */}
          <Section id="israel-usa">
            <h2 className="mt-16 text-3xl font-black md:text-4xl">Как вернуть клиентов в салон в Израиле и США</h2>
            <p className="mt-4 text-[18px] leading-8 text-gray-700">
              Причины одни и те же, но каналы разные. От этого зависит, где салон теряет клиентку.
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-[28px] border border-[#f6dcc5] bg-white p-6">
                <div className="text-xs font-bold uppercase tracking-widest text-[#c97d45]">Израиль</div>
                <p className="mt-3 text-[16px] leading-7 text-gray-700">
                  Клиентки пишут в WhatsApp и ждут ответа сразу. Ответ через час часто означает потерянную запись. В кейсе с массажем
                  в Петах-Тикве мы получили <Link href="/cases/massazh-israel-740-zayavok" className="font-bold text-[#c97d45] underline">740 заявок за 3 месяца</Link>,
                  и запись держалась на быстрых ответах по скрипту.
                </p>
              </div>
              <div className="rounded-[28px] border border-[#f6dcc5] bg-white p-6">
                <div className="text-xs font-bold uppercase tracking-widest text-[#c97d45]">США</div>
                <p className="mt-3 text-[16px] leading-7 text-gray-700">
                  Клиентка спрашивает цену и уходит, если в ответ получает только прайс. В
                  <Link href="/cases/keys-prodvizhenie-parikmaherskoj-v-ssha-meta-ads" className="font-bold text-[#c97d45] underline"> кейсе парикмахерской в США</Link>{' '}
                  доработка переписки дала 78 новых клиентов за 3 месяца и $15 450 выручки с первых визитов.
                </p>
              </div>
            </div>
          </Section>

          {/* Диагностика */}
          <Section id="diagnostics">
            <h2 className="mt-16 text-3xl font-black md:text-4xl">Нет клиентов в салоне красоты: как понять, где вы их теряете</h2>
            <p className="mt-4 text-[18px] leading-8 text-gray-700">
              Ответьте на три вопроса по цифрам за октябрь и за тот же месяц прошлого года.
            </p>
            <div className="mt-8 space-y-3">
              {steps.map((s, i) => (
                <div
                  key={s.q}
                  className="relative rounded-[24px] bg-[#1f1712] p-6 text-white"
                  style={{ marginLeft: `${i * 6}%`, marginRight: `${i * 6}%` }}
                >
                  <div className="text-xs font-bold uppercase tracking-widest text-[#f2c29b]">Шаг {i + 1}</div>
                  <div className="mt-2 text-lg font-black md:text-xl">{s.q}</div>
                  <p className="mt-2 text-[15px] leading-7 text-white/75">{s.a}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-[18px] leading-8 text-gray-700">
              Пока нет ответа на эти вопросы, не тратьте деньги на скидки и новые каналы. Сначала посмотрите, откуда пришли последние 5 новых клиенток.
            </p>
          </Section>

          {/* Чек-лист */}
          <Section id="checklist">
            <h2 className="mt-16 text-3xl font-black md:text-4xl">Чек-лист на ноябрь, чтобы январь не был пустым</h2>
            <p className="mt-4 text-[18px] leading-8 text-gray-700">
              В ноябре думаем о январе, в декабре работаем на него, в январе получаем выручку. Каждый пункт можно сделать за неделю.
            </p>
            <ol className="mt-8 space-y-3">
              {checklist.map((item, i) => (
                <li key={item} className="flex gap-4 rounded-2xl border border-[#f6dcc5] bg-white p-4 shadow-sm">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#e8a16b] text-sm font-black text-white">
                    {i + 1}
                  </span>
                  <span className="pt-1 text-[16px] leading-7 text-gray-800">{item}</span>
                </li>
              ))}
            </ol>
          </Section>

          {/* FAQ */}
          <Section id="faq">
            <h2 className="mt-16 text-3xl font-black md:text-4xl">Частые вопросы</h2>
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

          {/* Автор и кейсы */}
          <section className="mt-16 overflow-hidden rounded-[32px] border border-[#f6dcc5] bg-[#fff8f1]">
            <div className="grid md:grid-cols-[220px_1fr]">
              <ResponsiveImage
                src="/tatyana-richmann-portret-chernyj.jpg"
                alt="Татьяна Ричманн, реклама и ИИ-сотрудники для салонов красоты"
                sizes="(min-width: 768px) 220px, 100vw"
                className="h-64 w-full object-cover object-top md:h-full"
              />
              <div className="p-6 md:p-8">
                <div className="text-xs font-bold uppercase tracking-widest text-[#c97d45]">Автор</div>
                <h2 className="mt-2 text-2xl font-black">Татьяна Ричманн</h2>
                <p className="mt-3 text-[16px] leading-7 text-gray-700">
                  Настраиваю рекламу и ИИ-сотрудников для салонов, клиник и мастеров в США, Канаде, Европе и Израиле.
                  Смотрю не на заявки, а на то, сколько людей дошло до кресла.
                </p>
                <Link href="/razbor" className="mt-5 inline-flex rounded-full bg-black px-6 py-3 text-sm font-bold text-white">
                  Бесплатный разбор вашего салона →
                </Link>
              </div>
            </div>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-black md:text-3xl">Как это выглядит в цифрах: кейсы</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
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

        <div className="h-16" />
      </main>
    </div>
  );
}

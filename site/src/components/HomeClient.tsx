'use client';

import Link from 'next/link';
import { CookieSettingsLink } from '@/components/CookieConsent';
import SiteNav from '@/components/SiteNav';
import ResponsiveImage from '@/components/ResponsiveImage';

const socialLinks = [
  { label: 'WhatsApp', href: 'https://wa.me/972537086545', icon: '💬' },
  { label: 'Telegram', href: 'https://t.me/mailovaja', icon: '✈️' },
  { label: 'Instagram', href: 'https://www.instagram.com/ads_target_pr/', icon: '◎' },
  { label: 'Facebook', href: 'https://www.facebook.com/newadstarget', icon: 'f' },
  { label: 'TikTok', href: 'https://www.tiktok.com/@tatyana.ads', icon: '♪' },
  { label: 'Threads', href: 'https://www.threads.net/@ads_target_pr', icon: '@' },
];

const problems = [
  'заявки приходят нестабильно: сегодня есть, завтра нет',
  'стоимость клиента слишком высокая и съедает прибыль',
  'реклама работает “вручную” и требует постоянного контроля',
  'нет понятной системы: всё держится на отдельных запусках',
  'сложно масштабироваться без увеличения расходов',
  'есть заявки, но они не превращаются в записи',
];

const approachItems = [
  'настраиваю рекламу (включая TikTok и мобильные платформы)',
  'подключаю сайты и посадочные страницы под рекламу',
  'внедряю CRM для обработки заявок и контроля клиентов',
  'настраиваю автоматизацию, чтобы заявки не терялись',
  'оптимизирую воронку: от заявки до записи',
  'помогаю масштабировать результат без роста хаоса',
];



const steps = [
  {
    step: '01',
    title: 'Шаг 1. Разбор ситуации',
    text: 'Анализирую текущую ситуацию: рекламу, воронку, обработку заявок. Определяю, где теряются клиенты и что мешает росту.',
  },
  {
    step: '02',
    title: 'Шаг 2. Стратегия',
    text: 'Формирую план: какие каналы использовать, как выстроить воронку и систему привлечения клиентов.',
  },
  {
    step: '03',
    title: 'Шаг 3. Запуск',
    text: 'Настраиваю рекламу, подключаю сайт или посадочные страницы, внедряю необходимые инструменты.',
  },
  {
    step: '04',
    title: 'Шаг 4. Настройка системы',
    text: 'Подключаю CRM, настраиваю обработку заявок и автоматизацию, чтобы заявки не терялись.',
  },
  {
    step: '05',
    title: 'Шаг 5. Оптимизация и масштабирование',
    text: 'Анализирую результаты, снижаю стоимость клиента и помогаю масштабировать поток заявок.',
  },
];



const articles = [
  {
    title: 'Как заполнить запись в новом салоне красоты в США за 6 недель без демпинга',
    href: '/blog/kak-zapolnit-zapis',
  },
  {
    title: 'Почему реклама не даёт результата и как это исправить',
    href: '/blog/pochemu-reklama-ne-daet-rezultata-i-kak-eto-ispravit',
  },
  {
    title: 'Ошибки в рекламе, из-за которых вы теряете клиентов',
    href: '/blog/oshibki-v-reklame-iz-za-kotoryh-vy-teryaete-klientov',
  },
];

type ButtonProps = { children: React.ReactNode; onClick?: () => void; className?: string };

const PrimaryButton = ({ children, onClick, className = '' }: ButtonProps) => (
  <button
    onClick={onClick}
    className={`inline-flex items-center justify-center gap-2 rounded-full bg-[#e8a16b] px-8 py-4 font-bold text-white shadow-lg transition hover:scale-[1.02] hover:bg-[#d78d57] ${className}`}
  >
    {children}
  </button>
);

const SecondaryButton = ({ children, onClick, className = '' }: ButtonProps) => (
  <button
    onClick={onClick}
    className={`inline-flex items-center justify-center gap-2 rounded-full border border-gray-300 bg-white px-8 py-4 font-bold transition hover:border-[#e8a16b] hover:text-[#e8a16b] ${className}`}
  >
    {children}
  </button>
);

export type HomeCase = { niche: string; problem: string; action: string; result: string; href: string };
export type HomeReview = { author: string; text: string; image: string };

// Кейсы и отзывы приходят из content/ (см. app/page.tsx).
export type HomeFaq = { q: string; a: string };
export type HomeService = { title: string; text: string; featured: boolean };

export default function HomeClient({
  cases,
  reviews,
  faqs,
  services,
}: {
  cases: HomeCase[];
  reviews: HomeReview[];
  faqs: HomeFaq[];
  services: HomeService[];
}) {
  const scrollToId = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-[#fff1e4] selection:text-[#e8a16b]">

      <SiteNav />

      <main className="pt-20">
        <header className="relative overflow-hidden bg-gradient-to-br from-[#fff8f1] via-white to-[#f8f2ea] px-6 pb-20 pt-14 lg:pb-32 lg:pt-24">
          <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 lg:flex-row">
            <div className="lg:w-3/5">
              <div className="mb-6 flex flex-wrap gap-3 text-xs font-bold uppercase tracking-widest text-[#e8a16b]">
                <span className="rounded-full bg-[#fff1e4] px-3 py-2">Beauty marketing</span>
                <span className="rounded-full bg-[#fff1e4] px-3 py-2">Стратегия</span>
                <span className="rounded-full bg-[#fff1e4] px-3 py-2">Система заявок</span>
              </div>
              <h1 className="mb-6 text-4xl font-extrabold leading-[1.1] md:text-6xl">
                Стабильный поток клиентов в бьюти-бизнес через рекламу и стратегию
              </h1>
              <p className="mb-10 max-w-xl text-xl text-gray-600">
                Помогаю бьюти-бизнесу выстроить систему привлечения клиентов, чтобы заявки приходили стабильно и рос доход.
              </p>
              <div className="flex flex-wrap gap-4">
                <PrimaryButton onClick={() => scrollToId('contact')}>Получить консультацию</PrimaryButton>
                <SecondaryButton onClick={() => (window.location.href = '/cases')}>Смотреть кейсы</SecondaryButton>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {socialLinks.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-[#f6dcc5] bg-white px-4 py-2 text-sm font-bold text-gray-700 transition hover:border-[#e8a16b] hover:text-[#e8a16b]"
                  >
                    <span className="mr-2">{item.icon}</span>
                    {item.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="w-full overflow-hidden rounded-[40px] border-2 border-[#f6dcc5] bg-gray-100 aspect-[4/5] lg:w-2/5">
              <ResponsiveImage
                priority
                sizes="(min-width: 1024px) 40vw, 100vw"
                src="/beauty-marketing-strategy.jpg"
                alt="Специалист по продвижению и рекламе в бьюти-бизнесе"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </header>

        <section className="border-y border-gray-100 bg-white py-20 lg:py-28">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="mb-12 text-center text-lg font-bold uppercase tracking-widest text-gray-400">
              Работаю с бьюти-бизнесом и выстраиваю систему привлечения клиентов, которая даёт результат
            </h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                'работаю с салонами красоты и бьюти-экспертами',
                'настраиваю рекламу и выстраиваю систему привлечения клиентов',
                'фокус на рост дохода, а не просто на заявки',
                'работаю на результат, а не на процесс',
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 rounded-2xl border border-[#f6dcc5] bg-[#fff8f1] p-5">
                  <span className="text-2xl">✨</span>
                  <p className="text-sm font-bold leading-tight">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="problems" className="bg-gray-50 py-20 lg:py-28">
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="mb-4 text-center text-3xl font-black md:text-4xl">Почему реклама не даёт стабильного потока клиентов</h2>
            <p className="mb-16 text-center text-lg italic text-gray-500">
              Если узнаёшь свою ситуацию — это нормально, у большинства бьюти-бизнесов те же проблемы.
            </p>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {problems.map((p, i) => (
                <div key={i} className="rounded-3xl border-b-4 border-[#e8a16b] bg-white p-8 shadow-sm transition hover:shadow-md">
                  <p className="font-bold leading-relaxed text-gray-800">{p}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="overflow-hidden bg-white py-20 lg:py-28">
          <div className="mx-auto flex max-w-6xl flex-col items-center gap-16 px-6 lg:flex-row">
            <div className="lg:w-1/2">
              <h2 className="mb-8 text-4xl font-black leading-tight">Выстраиваю систему привлечения клиентов, а не просто запускаю рекламу</h2>
              <div className="mb-10 space-y-6 text-lg leading-relaxed text-gray-600">
                <p>Работаю с бьюти-бизнесом комплексно: от анализа текущей ситуации до выстраивания системы, которая стабильно приводит клиентов и увеличивает доход.</p>
                <p>Не ограничиваюсь запуском рекламы — настраиваю весь путь клиента: от первого клика до записи и повторных продаж.</p>
              </div>
              <ul className="grid grid-cols-1 gap-4">
                {approachItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 rounded-2xl bg-gray-50 p-4">
                    <span className="text-xl font-bold text-[#e8a16b]">✓</span>
                    <span className="font-semibold text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative w-full lg:w-1/2">
              <div className="aspect-square overflow-hidden rounded-[60px] border-4 border-white bg-[#fff1e4] shadow-2xl">
                <ResponsiveImage
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  src="/beauty-client-acquisition-strategy-funnel.jpg"
                  alt="Система привлечения клиентов и маркетинговая воронка"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="bg-gray-50 py-20 lg:py-28">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="mb-16 text-center text-4xl font-black tracking-tight">Форматы работы</h2>
            <div className="grid gap-8 md:grid-cols-2">
              {services.map((s, i) => (
                <div
                  key={i}
                  className={`group rounded-[40px] p-10 transition duration-500 ${
                    s.featured ? 'scale-[1.03] bg-black text-white shadow-2xl' : 'border border-gray-100 bg-white hover:shadow-xl'
                  }`}
                >
                  <h3 className="mb-6 text-2xl font-black transition group-hover:text-[#e8a16b]">{s.title}</h3>
                  <p className={`mb-8 text-lg leading-relaxed ${s.featured ? 'text-gray-400' : 'text-gray-500'}`}>{s.text}</p>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <PrimaryButton onClick={() => scrollToId('contact')}>👉 Обсудить задачу</PrimaryButton>
            </div>
          </div>
        </section>

        <section id="home-results" className="bg-white py-20 lg:py-28">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="mb-2 text-4xl font-black">Результаты клиентов</h2>
            <p className="mb-16 text-xl text-gray-400">Реальные кейсы из бьюти-бизнеса: от проблемы к результату</p>
            <div className="grid gap-8 lg:grid-cols-3">
              {cases.map((c, i) => (
                <a key={i} href={c.href} className="group flex h-full flex-col rounded-[48px] border border-gray-100 bg-white p-10 shadow-sm transition hover:border-[#e8a16b]">
                  <div className="mb-6 text-xs font-black uppercase tracking-widest text-[#e8a16b]">Ниша: {c.niche}</div>
                  <div className="flex-grow space-y-6">
                    <p className="text-sm"><strong>Проблема:</strong> <br /><span className="text-gray-500">{c.problem}</span></p>
                    <p className="text-sm"><strong>Что сделали:</strong> <br /><span className="text-gray-500">{c.action}</span></p>
                  </div>
                  <div className="mt-10 border-t border-gray-50 pt-6">
                    <div className="mb-2 text-xs font-bold uppercase text-gray-400">Результат:</div>
                    <div className="origin-left text-xl font-black text-[#e8a16b] transition group-hover:scale-105">{c.result}</div>
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-12 flex flex-wrap gap-4">
              <SecondaryButton onClick={() => (window.location.href = '/cases')}>Смотреть все кейсы</SecondaryButton>
              <PrimaryButton onClick={() => scrollToId('contact')}>Обсудить проект</PrimaryButton>
            </div>
          </div>
        </section>

        <section className="bg-[#fff8f1] py-20 lg:py-28">
          <div className="mx-auto max-w-5xl rounded-[40px] bg-white px-6 py-12 shadow-sm lg:px-12">
            <div className="text-center">
              <h2 className="mb-4 text-4xl font-black">Нужна консультация по вашему проекту?</h2>
              <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-gray-500">
                Можно написать мне в WhatsApp, Telegram или перейти в соцсети. Если у вас уже есть реклама, сайт или воронка — разберём, что усилить и где теряются деньги.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://wa.me/972537086545"
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-black px-8 py-4 font-bold text-white transition hover:bg-gray-800"
              >
                WhatsApp
              </a>
              <a
                href="https://t.me/mailovaja"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-gray-300 px-8 py-4 font-bold text-gray-900 transition hover:border-[#e8a16b] hover:text-[#e8a16b]"
              >
                Telegram
              </a>
              <a
                href="https://www.instagram.com/ads_target_pr/"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-gray-300 px-8 py-4 font-bold text-gray-900 transition hover:border-[#e8a16b] hover:text-[#e8a16b]"
              >
                Instagram
              </a>
            </div>
          </div>
        </section>

        <section id="workflow" className="bg-white py-20 lg:py-28">
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="mb-16 text-center text-4xl font-black">Как проходит работа</h2>
            <div className="space-y-12">
              {steps.map((s, i) => (
                <div key={i} className="group flex items-start gap-8">
                  <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl border-2 border-[#e8a16b] bg-white text-xl font-black text-[#e8a16b] shadow-sm transition-colors duration-300 group-hover:bg-[#e8a16b] group-hover:text-white">
                    {s.step}
                  </div>
                  <div>
                    <h4 className="mb-3 text-2xl font-black">{s.title}</h4>
                    <p className="text-lg leading-relaxed text-gray-500">{s.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="overflow-hidden bg-gray-50 py-20 lg:py-28">
          <div className="mx-auto flex max-w-6xl flex-col items-center gap-16 px-6 lg:flex-row">
            <div className="aspect-[3/4] w-full overflow-hidden rounded-[48px] border-8 border-white bg-gray-200 shadow-xl lg:w-1/3">
              <ResponsiveImage
                sizes="(min-width: 1024px) 33vw, 100vw"
                src="/beauty-business-marketing-specialist.jpg"
                alt="Фото специалиста по маркетингу и продвижению в бьюти-сфере"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="lg:w-2/3">
              <h2 className="mb-8 text-4xl font-black leading-tight">Кто я и как работаю</h2>
              <div className="space-y-6 text-lg leading-relaxed text-gray-600">
                <p>Занимаюсь таргетированной рекламой с 2018 года. Работаю с бьюти-бизнесом и помогаю выстраивать систему привлечения клиентов, которая даёт стабильный поток заявок и рост дохода. Я — идеолог и стратег. Вместе с командой реализую проекты: от настройки рекламы до выстраивания полной системы привлечения клиентов.</p>
                <p>Не ограничиваемся запуском рекламы — выстраиваем весь путь клиента: подключаем сайты, внедряем CRM, настраиваю автоматизацию и работу с заявками. Работаем с салонами красоты, мастерами и экспертами, помогая выстроить понятную и управляемую систему.</p>
                <p className="font-bold text-gray-900">Мой подход — не просто запуск рекламы, а работа на результат: рост дохода, прибыли и стабильности бизнеса.</p>
              </div>

              <div className="mt-12 flex flex-wrap gap-4">
                <PrimaryButton onClick={() => scrollToId('contact')}>Обсудить проект</PrimaryButton>
                <SecondaryButton onClick={() => (window.location.href = '/cases')}>Смотреть кейсы</SecondaryButton>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="bg-gray-50 py-20 lg:py-28">
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="mb-16 text-center text-4xl font-black">Частые вопросы</h2>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <details key={i} className="group cursor-pointer rounded-[32px] border border-transparent bg-white p-8 shadow-sm transition-all duration-300 open:border-[#e8a16b]">
                  <summary className="flex list-none items-center justify-between text-xl font-bold group-open:text-[#e8a16b]">
                    {faq.q}
                    <span className="text-2xl transition-transform duration-300 group-open:rotate-180">↓</span>
                  </summary>
                  <p className="mt-6 border-t border-gray-50 pt-6 text-lg leading-relaxed text-gray-500">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-20 lg:py-28">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="mb-4 text-4xl font-black">Полезные статьи</h2>
            <p className="mb-16 text-xl text-gray-400">Разбираю, как привлекать клиентов, снижать стоимость заявки и выстраивать систему продвижения в бьюти-бизнесе</p>
            <div className="grid gap-8 md:grid-cols-3">
              {articles.map((article, i) => (
                <a
                  key={i}
                  href={article.href}
                  className="group flex h-full cursor-pointer flex-col justify-between rounded-[40px] border border-[#f6dcc5] bg-[#fff8f1] p-10 transition duration-500 hover:bg-[#e8a16b]"
                >
                  <h4 className="text-xl font-black leading-snug transition group-hover:text-white">
                    Статья {i + 1}: <br />
                    {article.title}
                  </h4>
                  <div className="mt-8 text-sm font-bold uppercase tracking-widest text-[#e8a16b] transition group-hover:text-white/80">Читать далее →</div>
                </a>
              ))}
            </div>
            <div className="mt-12">
              <a href="/blog" className="font-bold text-[#e8a16b] hover:text-[#d78d57]">Смотреть все статьи</a>
            </div>
          </div>
        </section>

        <section className="bg-[#fff8f1] py-20 lg:py-28">
          <div className="mx-auto max-w-6xl px-6 text-center">
            <h2 className="mb-16 text-4xl font-black">Что говорят клиенты</h2>
            <div className="grid gap-8 md:grid-cols-3">
              {reviews.map((t, i) => (
                <div key={i} className="rounded-[40px] bg-white p-6 shadow-sm">
                  {t.image && (
                    <div className="mb-6 aspect-[16/10] overflow-hidden rounded-[28px] bg-gray-100">
                      <ResponsiveImage src={t.image} alt={t.author} sizes="(min-width: 768px) 33vw, 100vw" className="h-full w-full object-cover" />
                    </div>
                  )}
                  <p className="mb-6 text-2xl italic leading-relaxed text-gray-800">{t.text}</p>
                  <p className="text-sm font-black uppercase tracking-[0.3em] text-[#e8a16b]">— {t.author}</p>
                </div>
              ))}
            </div>
            <div className="mt-20">
              <PrimaryButton onClick={() => scrollToId('contact')}>👉 Обсудить проект</PrimaryButton>
            </div>
          </div>
        </section>

        <footer id="contact" className="border-t border-gray-100 bg-white px-6 py-28 text-center lg:py-36">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-5xl font-black leading-[1.1] tracking-tighter md:text-7xl">
              Готовы выстроить систему
              <br className="hidden md:block" /> привлечения клиентов?
            </h2>
            <p className="mx-auto mb-16 max-w-2xl text-2xl leading-relaxed text-gray-400">
              Давайте обсудим ваш проект и определим точки роста вашего бьюти-бизнеса прямо сейчас.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://wa.me/972537086545"
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-black px-8 py-4 font-bold text-white transition hover:bg-gray-800"
              >
                WhatsApp
              </a>
              <a
                href="https://t.me/mailovaja"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-gray-300 px-8 py-4 font-bold text-gray-900 transition hover:border-[#e8a16b] hover:text-[#e8a16b]"
              >
                Telegram
              </a>
              <a
                href="https://www.instagram.com/ads_target_pr/"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-gray-300 px-8 py-4 font-bold text-gray-900 transition hover:border-[#e8a16b] hover:text-[#e8a16b]"
              >
                Instagram
              </a>
            </div>

            <div className="mt-10 flex flex-wrap justify-center gap-4 text-sm font-bold uppercase tracking-widest text-gray-400">
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-black"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div className="mt-16 flex flex-wrap justify-center gap-4 text-xs text-gray-400">
            <Link href="/privacy-policy" className="underline hover:text-black">
              Политика конфиденциальности
            </Link>
            <CookieSettingsLink className="underline hover:text-black" />
          </div>

          <div className="mt-16 text-[10px] uppercase tracking-[0.5em] text-gray-300">
            © 2026 Татьяна Ричманн. Реклама для бьюти-бизнеса.
          </div>
        </footer>
      </main>
    </div>
  );
}
'use client';

import React, { useState } from 'react';

// --- КОНСТАНТЫ И ДАННЫЕ ---

const socialLinks = [
  { label: 'WhatsApp', href: 'https://wa.me/972537086545', icon: '💬' },
  { label: 'Telegram', href: 'https://t.me/mailovaja', icon: '✈️' },
  { label: 'Instagram', href: '#instagram', icon: '◎' },
  { label: 'YouTube', href: '#youtube', icon: '▶️' },
  { label: 'Facebook', href: '#facebook', icon: 'f' },
  { label: 'TikTok', href: '#tiktok', icon: '♪' },
];

const problems = [
  'Заявки приходят нестабильно: сегодня есть, завтра нет',
  'Стоимость клиента слишком высокая и съедает прибыль',
  'Реклама работает “вручную” и требует постоянного контроля',
  'Нет понятной системы: всё держится на отдельных запусках',
  'Сложно масштабироваться без увеличения расходов',
  'Есть заявки, но они не превращаются в записи',
];

const approachItems = [
  'Настраиваю рекламу (включая TikTok и мобильные платформы)',
  'Подключаю сайты и посадочные страницы под рекламу',
  'Внедряю CRM для обработки заявок и контроля клиентов',
  'Настраиваю автоматизацию, чтобы заявки не терялись',
  'Оптимизирую воронку: от заявки до записи',
  'Помогаю масштабировать результат без роста хаоса',
];

const services = [
  {
    title: '1. Аудит и стратегия',
    text: 'Разбираю текущую ситуацию: рекламу, воронку, обработку заявок. Показываю, где теряются клиенты и что нужно изменить.',
    featured: false,
  },
  {
    title: '2. Запуск рекламы',
    text: 'Настраиваю рекламу под твою нишу. Подключаю сайты, посадочные страницы и подготавливаю всё для запуска.',
    featured: false,
  },
  {
    title: '3. Система привлечения',
    text: 'Выстраиваю связку: реклама + сайт + CRM + автоматизация. Чтобы заявки превращались в реальных клиентов.',
    featured: true,
  },
  {
    title: '4. Масштабирование',
    text: 'Веду рекламу, оптимизирую показатели и помогаю расти без потери качества и лишних затрат.',
    featured: false,
  },
];

const cases = [
  {
    niche: 'Салон красоты (Premium)',
    problem: 'Необходимость быстрой окупаемости при высоком чеке',
    action: 'Бюджет $2500 + работа $1500. Выстроена связка реклама + сайт + CRM.',
    result: '78 новых клиентов ($200 чек). Выручка: $15 450. CPL: $8.',
    href: '/cases/premium-salon',
  },
  {
    niche: 'Бьюти-бизнес (Масштаб)',
    problem: 'Заполнение записи на 2.5 месяца вперед',
    action: 'Оптимизация воронки и системный запуск рекламных кампаний.',
    result: '794 обращения, 160 новых клиентов. Средний CAC — $45.',
    href: '/cases/beauty-scaling',
  },
  {
    niche: 'Мастер массажа (Израиль)',
    problem: 'Запуск направления с нуля без личного бренда',
    action: 'Таргетированная реклама на ручной массаж.',
    result: '740 заявок по $1.8. Чистая прибыль мастера: $9 946.',
    href: '/cases/massage-israel',
  },
];

const steps = [
  { step: '01', title: 'Диагностика', text: 'Анализирую текущую ситуацию. Определяю, где теряются клиенты и что мешает росту прибыли.' },
  { step: '02', title: 'Стратегия', text: 'Формирую план: каналы трафика, архитектура воронки и система позиционирования без демпинга.' },
  { step: '03', title: 'Запуск', text: 'Настраиваю рекламу, подключаю посадочные страницы и внедряю инструменты захвата лидов.' },
  { step: '04', title: 'Автоматизация', text: 'Подключаю CRM и настраиваю автоматическую обработку, чтобы ни одна заявка не была забыта.' },
  { step: '05', title: 'Результат', text: 'Оптимизация показателей. Работаю до достижения согласованного результата, зафиксированного в договоре.' },
];

const faqs = [
  { q: 'Как понять, что реклама будет приносить прибыль?', a: 'Перед запуском разбираем цифры: стоимость клиента, LTV и работу воронки. Мы строим систему на окупаемость.' },
  { q: 'Что делать, если заявки есть, но записи слабые?', a: 'Это проблема воронки и обработки. Мы настроим систему так, чтобы лиды прогревались и доходили до кресла.' },
  { q: 'Нужно ли переделывать всё с нуля?', a: 'Нет. Мы сначала усиливаем то, что уже дает результат, и только потом масштабируем или перестраиваем слабые звенья.' },
];

// --- ВСПОМОГАТЕЛЬНЫЕ КОМПОНЕНТЫ ---

const PrimaryButton = ({ children, onClick, className = '' }: any) => (
  <button
    onClick={onClick}
    className={`inline-flex items-center justify-center gap-2 rounded-full bg-[#e8a16b] px-8 py-4 font-bold text-white shadow-lg transition hover:scale-[1.02] hover:bg-[#d78d57] ${className}`}
  >
    {children}
  </button>
);

const SecondaryButton = ({ children, onClick, className = '' }: any) => (
  <button
    onClick={onClick}
    className={`inline-flex items-center justify-center gap-2 rounded-full border border-gray-300 bg-white px-8 py-4 font-bold transition hover:border-[#e8a16b] hover:text-[#e8a16b] ${className}`}
  >
    {children}
  </button>
);

// --- ОСНОВНОЙ КОМПОНЕНТ ---

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToId = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-[#fff1e4] selection:text-[#e8a16b]">
      {/* Meta Tags (for Next.js Head) */}
      <title>Увеличение дохода бьюти-бизнеса на 30% за 2 месяца | Системный маркетинг</title>
      <meta name="description" content="Помогаю бьюти-бизнесу выстроить систему привлечения клиентов без демпинга. Работа до результата." />

      {/* Header / Nav */}
      <nav className="fixed top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="text-2xl font-black tracking-tighter text-[#e8a16b]">BEAUTY.STRATEGY</div>
          <div className="hidden space-x-8 font-medium md:flex">
            <button onClick={() => scrollToId('cases')} className="hover:text-[#e8a16b]">Кейсы</button>
            <button onClick={() => scrollToId('services')} className="hover:text-[#e8a16b]">Услуги</button>
            <button onClick={() => scrollToId('steps')} className="hover:text-[#e8a16b]">Этапы</button>
          </div>
          <PrimaryButton onClick={() => scrollToId('contact')} className="hidden md:flex">Обсудить проект</PrimaryButton>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pb-20 pt-32 md:pt-48">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h1 className="mx-auto max-w-4xl text-5xl font-black leading-tight md:text-7xl">
            Увеличим доход вашего салона на <span className="text-[#e8a16b]">30% за 2 месяца</span>
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-xl text-gray-600">
            Внедряю систему привлечения клиентов через ценность, а не через скидки. Работаю до результата, зафиксированного в договоре.
          </p>
          <div className="mt-12 flex flex-col justify-center gap-4 sm:flex-row">
            <PrimaryButton onClick={() => scrollToId('contact')}>Получить аудит воронки</PrimaryButton>
            <SecondaryButton onClick={() => scrollToId('cases')}>Смотреть кейсы</SecondaryButton>
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section className="bg-gray-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-16 text-center text-3xl font-bold md:text-4xl">Почему ваш салон теряет прибыль?</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {problems.map((p, i) => (
              <div key={i} className="rounded-2xl border bg-white p-8 transition hover:shadow-xl">
                <span className="mb-4 block text-2xl">❌</span>
                <p className="font-semibold text-gray-700">{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-16 text-center text-3xl font-bold md:text-4xl">Как мы это исправим</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => (
              <div key={i} className={`rounded-3xl p-8 ${s.featured ? 'bg-[#e8a16b] text-white shadow-2xl' : 'bg-gray-50'}`}>
                <h3 className="mb-4 text-xl font-bold">{s.title}</h3>
                <p className={s.featured ? 'text-white/90' : 'text-gray-600'}>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cases Section */}
      <section id="cases" className="bg-gray-900 py-24 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-16 text-center text-3xl font-bold md:text-4xl">Результаты в цифрах</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {cases.map((c, i) => (
              <div key={i} className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
                <div className="mb-4 text-sm font-bold uppercase tracking-widest text-[#e8a16b]">{c.niche}</div>
                <h3 className="mb-6 text-2xl font-bold italic">"{c.problem}"</h3>
                <div className="space-y-4">
                  <p className="text-sm text-gray-400"><strong>Действие:</strong> {c.action}</p>
                  <p className="text-lg font-bold text-white"><strong>Результат:</strong> {c.result}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section id="steps" className="py-24">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="mb-16 text-center text-3xl font-bold md:text-4xl">Ваш путь к стабильной прибыли</h2>
          <div className="space-y-12">
            {steps.map((s, i) => (
              <div key={i} className="flex gap-8 border-l-2 border-[#e8a16b]/20 pb-12 pl-8 last:pb-0">
                <div className="relative">
                  <div className="absolute -left-[41px] top-0 flex h-4 w-4 items-center justify-center rounded-full bg-[#e8a16b]" />
                  <span className="text-5xl font-black text-gray-100">{s.step}</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold">{s.title}</h3>
                  <p className="mt-2 text-gray-600">{s.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 py-24">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="mb-16 text-center text-3xl font-bold">Частые вопросы</h2>
          <div className="space-y-6">
            {faqs.map((f, i) => (
              <div key={i} className="rounded-2xl bg-white p-8 shadow-sm">
                <h4 className="text-lg font-bold">Q: {f.q}</h4>
                <p className="mt-4 text-gray-600">A: {f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="text-4xl font-black md:text-6xl">Готовы масштабировать доход?</h2>
          <p className="mt-6 text-xl text-gray-600 italic underline decoration-[#e8a16b]">
            Напишите мне в удобный мессенджер для диагностики
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-6">
            {socialLinks.map((link, i) => (
              <a
                key={i}
                href={link.href}
                className="flex items-center gap-2 rounded-2xl border p-6 font-bold transition hover:border-[#e8a16b] hover:bg-gray-50"
              >
                <span className="text-2xl">{link.icon}</span> {link.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12 text-center text-sm text-gray-400">
        <p>© 2026 BEAUTY.STRATEGY — Идеолог и стратег бьюти-индустрии. Все права защищены.</p>
      </footer>
    </div>
  );
}
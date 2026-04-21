'use client';
import React, { useState } from 'react';

// --- КОНСТАНТЫ ИЗ ВАШИХ ИСТОЧНИКОВ ---

const socialLinks = [ 
  { label: 'WhatsApp', href: 'https://wa.me/972537086545', icon: '💬' }, 
  { label: 'Telegram', href: 'https://t.me/mailovaja', icon: '✈️' }, 
  { label: 'Instagram', href: '#instagram', icon: '◎' }, 
  { label: 'YouTube', href: '#youtube', icon: '▶️' }, 
  { label: 'Facebook', href: '#facebook', icon: 'f' }, 
  { label: 'TikTok', href: '#tiktok', icon: '♪' }, 
];

const problems = [ 
  'заявки приходят нестабильно: сегодня есть, завтра нет', 
  'стоимость клиента слишком высокая и съедает прибыль', 
  'реклама работает “вручную” и требует постоянного контроля', 
  'нет понятной системы: всё держится на отдельных запусках', 
  'сложно масштабироваться без увеличения расходов', 
  'есть заявки, но они не превращаются в записи', 
];

const cases = [ 
  { 
    niche: 'салон красоты (Premium)', 
    problem: 'Заполнение записи в новом филиале в США за 6 недель', 
    action: 'Потрачено на рекламу: $2 500. Стоимость работы: $1 500. Всего 309 обращений.', 
    result: '78 новых клиентов (чек $200). Выручка: $15 450. CPL: $8.', 
    href: '/cases/salon-krasoty', 
  }, 
  { 
    niche: 'масштабирование бьюти', 
    problem: 'Заполнение записи на 2.5 месяца вперед', 
    action: 'Оптимизация воронки и запуск системного трафика.', 
    result: '794 обращения, 160 новых клиентов. Средний CAC — $45.', 
    href: '/cases/master-byuti-ekspert', 
  }, 
  { 
    niche: 'массаж (Израиль)', 
    problem: '740 заявок на ручной массаж по $1.8', 
    action: 'Запуск направления с нуля через таргетированную рекламу.', 
    result: 'Чистая прибыль мастера: $9 946 (30 762 ₪).', 
    href: '/cases/byuti-biznes', 
  }, 
];

const reviews = [ 
  { author: 'Салон красоты', text: '“До работы заявки приходили нестабильно. После запуска и настройки системы появился стабильный поток клиентов.”', image: '/beauty-salon-client-review-results.jpg' }, 
  { author: 'Бьюти-эксперт', text: '“Раньше не было понимания, как привлекать клиентов. Сейчас есть система, реклама работает, и записи идут регулярно.”', image: '/beauty-expert-client-attraction-review.jpg' }, 
  { author: 'Фитнес-тренер', text: '“Стало гораздо больше заявок, при этом снизилась стоимость клиента. Появилось ощущение контроля.”', image: '/fitness-master-more-clients-review.jpg' }, 
];

const articles = [ 
  { title: 'Как заполнить запись в новом салоне красоты в США за 6 недель без демпинга', href: '/blog/kak-zapolnit-zapis' }, 
  { title: 'Почему реклама не даёт результата и как это исправить', href: '/blog' }, 
  { title: 'Ошибки в рекламе, из-за которых вы теряете клиентов', href: '/blog' }, 
];

const steps = [ 
  { step: '01', title: 'Шаг 1. Разбор ситуации', text: 'Анализирую текущую ситуацию: рекламу, воронку, обработку заявок. Определяю точки утечки прибыли.' }, 
  { step: '02', title: 'Шаг 2. Стратегия', text: 'Формирую план: каналы трафика и систему привлечения без скидок.' }, 
  { step: '03', title: 'Шаг 3. Запуск', text: 'Настраиваю рекламу, подключаю сайт или посадочные страницы.' }, 
  { step: '04', title: 'Шаг 4. Настройка системы', text: 'Подключаю CRM и автоматизацию, чтобы заявки не терялись.' }, 
  { step: '05', title: 'Шаг 5. Оптимизация', text: 'Работаю до результата, зафиксированного в договоре.' }, 
];

const faqs = [ 
  { q: 'Как понять, что реклама будет приносить прибыль?', a: 'Перед запуском разбираем цифры: стоимость клиента, ценность и работу воронки.' }, 
  { q: 'Что делать, если заявки есть, но записи слабые?', a: 'Это вопрос воронки и обработки. Настраиваем систему так, чтобы лиды превращались в записи.' }, 
];

// --- ГЛАВНАЯ СТРАНИЦА ---

export default function Home() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <head>
        <title>Бьюти Стратегия | Системный поток клиентов</title>
        <meta name="keywords" content="привлечение клиентов для салона красоты, реклама для бьюти-бизнеса, CRM для салона" />
      </head>

      {/* Header */}
      <nav className="fixed top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b px-6 py-4 flex justify-between items-center">
        <div className="text-xl font-black text-[#e8a16b]">БЬЮТИ.СТРАТЕГИЯ</div>
        <div className="hidden md:flex gap-8 font-medium">
          <a href="#cases">Кейсы</a>
          <a href="#about">Об эксперте</a>
          <a href="#faq">FAQ</a>
          <a href="#blog">Блог</a>
        </div>
      </nav>

      {/* HERO + ЛИЧНОЕ ФОТО №1 */}
      <section className="pt-40 pb-20 px-6 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 text-left">
          <h1 className="text-5xl md:text-7xl font-black leading-tight">
            Увеличим доход салона на <span className="text-[#e8a16b]">30% за 2 месяца</span>
          </h1>
          <p className="mt-8 text-xl text-gray-600">Системный маркетинг для бьюти-индустрии. Работа до результата.</p>
          <button className="mt-10 bg-[#e8a16b] text-white px-10 py-5 rounded-full font-bold text-lg shadow-xl">Получить аудит воронки</button>
        </div>
        <div className="flex-1">
          {/* ЛИЧНОЕ ФОТО №1 */}
          <div className="w-full aspect-[4/5] bg-gray-100 rounded-[40px] overflow-hidden border-8 border-gray-50 shadow-2xl relative">
             <img src="/my-photo-hero.jpg" alt="Татьяна Новикова" className="w-full h-full object-cover" />
             <div className="absolute bottom-6 left-6 bg-white p-4 rounded-2xl shadow-lg">
                <p className="font-bold text-[#e8a16b]">Работа до результата ✔️</p>
             </div>
          </div>
        </div>
      </section>

      {/* ПРОБЛЕМЫ */}
      <section className="bg-gray-50 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-16 text-center">Почему ваш салон теряет прибыль?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {problems.map((p, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl border hover:shadow-lg transition">
                <span className="text-[#e8a16b] text-2xl font-bold block mb-4">0{i+1}</span>
                <p className="font-medium text-gray-700">{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ОБ ЭКСПЕРТЕ + ЛИЧНОЕ ФОТО №2 */}
      <section id="about" className="py-24 px-6 max-w-7xl mx-auto flex flex-col md:flex-row-reverse items-center gap-16">
        <div className="flex-1">
          <h2 className="text-4xl font-bold mb-8 italic">"Я не просто настраиваю рекламу — я строю систему привлечения"</h2>
          <p className="text-lg text-gray-600 mb-6">В бьюти-бизнесе 2026 года скидки убивают бренд. Моя задача — показать вашу уникальность и довести клиента до кресла без демпинга.</p>
          <div className="grid grid-cols-2 gap-4">
             <div className="bg-gray-50 p-6 rounded-2xl text-center">
                <div className="text-3xl font-black text-[#e8a16b]">10+</div>
                <div className="text-sm font-bold uppercase tracking-widest text-gray-400">Лет в маркетинге</div>
             </div>
             <div className="bg-gray-50 p-6 rounded-2xl text-center">
                <div className="text-3xl font-black text-[#e8a16b]">$1M+</div>
                <div className="text-sm font-bold uppercase tracking-widest text-gray-400">Бюджета в управлении</div>
             </div>
          </div>
        </div>
        <div className="flex-1">
          {/* ЛИЧНОЕ ФОТО №2 */}
          <div className="w-full aspect-square bg-gray-100 rounded-full overflow-hidden border-8 border-white shadow-xl">
             <img src="/my-photo-about.jpg" alt="Идеолог и стратег" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* КЕЙСЫ (ВАШИ ЦИФРЫ) + ЛИЧНОЕ ФОТО №3 */}
      <section id="cases" className="py-24 bg-gray-900 text-white px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center">Твердые результаты</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {cases.map((c, i) => (
              <div key={i} className="bg-white/5 p-10 rounded-3xl border border-white/10 backdrop-blur-md">
                <div className="text-[#e8a16b] font-bold mb-4 uppercase text-xs tracking-widest">{c.niche}</div>
                <h3 className="text-2xl font-bold mb-6 italic">"{c.problem}"</h3>
                <p className="text-gray-400 text-sm mb-4">{c.action}</p>
                <div className="text-xl font-black text-white">{c.result}</div>
              </div>
            ))}
          </div>
          {/* ЛИЧНОЕ ФОТО №3 (в блоке результатов) */}
          <div className="mt-20 flex flex-col md:flex-row items-center gap-12 bg-[#e8a16b] rounded-[40px] p-12 overflow-hidden">
             <div className="flex-1">
                <h3 className="text-3xl font-black mb-6">Готовы к таким же цифрам?</h3>
                <p className="text-lg opacity-90 mb-8">Я провожу бесплатный аудит для 3-х проектов в неделю. Разберем вашу воронку и найдем точки роста.</p>
                <button className="bg-white text-[#e8a16b] px-10 py-5 rounded-full font-bold">Записаться на аудит</button>
             </div>
             <div className="flex-1 flex justify-center">
                <img src="/my-photo-call-to-action.jpg" alt="Консультация" className="w-64 h-64 rounded-full border-4 border-white shadow-2xl object-cover" />
             </div>
          </div>
        </div>
      </section>

      {/* ЭТАПЫ */}
      <section id="steps" className="py-24 px-6 max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-20 text-center">Как мы придем к результату</h2>
        {steps.map((s, i) => (
          <div key={i} className="flex gap-12 mb-16 relative">
            <span className="text-7xl font-black text-gray-100 absolute -left-20 top-0 -z-10">{s.step}</span>
            <div>
              <h3 className="text-2xl font-bold mb-4">{s.title}</h3>
              <p className="text-gray-600 text-lg">{s.text}</p>
            </div>
          </div>
        ))}
      </section>

      {/* FAQ (АККОРДЕОН) */}
      <section id="faq" className="py-24 bg-gray-50 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Частые вопросы</h2>
          <div className="space-y-4">
            {faqs.map((f, i) => (
              <div key={i} className="bg-white border rounded-2xl">
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full text-left p-6 font-bold flex justify-between items-center"
                >
                  <span>{f.q}</span>
                  <span className="text-[#e8a16b]">{openFaq === i ? '−' : '+'}</span>
                </button>
                {openFaq === i && <div className="p-6 pt-0 text-gray-600 border-t">{f.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ОТЗЫВЫ (3 ФОТО КЛИЕНТОВ) */}
      <section id="reviews" className="py-24 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 text-center">Они уже работают по системе</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <div key={i} className="bg-gray-50 p-8 rounded-3xl">
              <img src={r.image} alt={r.author} className="w-full h-48 object-cover rounded-2xl mb-6 shadow-sm" />
              <p className="italic text-gray-600 mb-6">{r.text}</p>
              <div className="font-bold text-[#e8a16b]">{r.author}</div>
            </div>
          ))}
        </div>
      </section>

      {/* БЛОГ / СТАТЬИ */}
      <section id="blog" className="py-24 px-6 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Полезные статьи</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {articles.map((a, i) => (
              <a key={i} href={a.href} className="p-10 border border-white/10 rounded-3xl hover:bg-white/5 transition">
                <h3 className="text-xl font-bold mb-4">{a.title}</h3>
                <span className="text-[#e8a16b] font-medium">Читать →</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 border-t text-center text-gray-400">
        <div className="flex justify-center gap-6 mb-8 text-2xl">
          {socialLinks.map((s, i) => <a key={i} href={s.href}>{s.icon}</a>)}
        </div>
        <p>© 2026 БЬЮТИ.СТРАТЕГИЯ — Системный маркетинг для салонов красоты.</p>
      </footer>
    </div>
  );
}
'use client';
import React, { useState, useEffect } from 'react';

// --- ДАННЫЕ ИЗ ИСТОЧНИКОВ И ИСТОРИИ ---

const cases = [ 
  { 
    niche: 'салон красоты (США)', 
    problem: 'Заполнение записи в новом филиале за 6 недель', 
    action: 'Потрачено: $2 500. Работа: $1 500. 309 обращений.', 
    result: '78 клиентов. Выручка: $15 450. CPL: $8.', 
    href: '/cases/salon-krasoty', 
  }, 
  { 
    niche: 'масштабирование бьюти', 
    problem: 'Заполнение записи на 2.5 месяца вперед', 
    action: '794 обращения, 160 новых клиентов за 2,5 месяца.', 
    result: 'Рост дохода на 30%. CAC — $45.', 
    href: '/cases/master-byuti-ekspert', 
  }, 
  { 
    niche: 'массаж (Израиль)', 
    problem: '740 заявок на ручной массаж по $1.8', 
    action: 'Запуск с нуля. 30 762 ₪ ($9 946) чистой прибыли.', 
    result: 'Мастер с полной записью с первой недели.', 
    href: '/cases/byuti-biznes', 
  }, 
];

const reviews = [ 
  { author: 'Салон красоты', text: '“До работы заявки приходили нестабильно. После запуска системы появился стабильный поток клиентов.”', image: '/beauty-salon-client-review-results.jpg' }, 
  { author: 'Бьюти-эксперт', text: '“Раньше не было понимания, как привлекать клиентов. Сейчас есть система и записи идут регулярно.”', image: '/beauty-expert-client-attraction-review.jpg' }, 
  { author: 'Фитнес-тренер', text: '“Стало гораздо больше заявок, стоимость клиента упала. Появилось ощущение контроля.”', image: '/fitness-master-more-clients-review.jpg' }, 
];

const faqs = [ 
  { q: 'Как понять, что реклама будет приносить прибыль?', a: 'Перед запуском разбираем цифры: стоимость клиента, ценность и работу воронки. Мы строим систему на окупаемость.' }, 
  { q: 'Что делать, если заявки есть, но записи слабые?', a: 'Это вопрос воронки и обработки. Настраиваем систему так, чтобы лиды превращались в записи.' }, 
];

const articles = [ 
  { title: 'Как заполнить запись в новом салоне в США за 6 недель без демпинга', href: '/blog/kak-zapolnit-zapis' }, 
  { title: 'Ошибки в рекламе, из-за которых вы теряете клиентов', href: '/blog' }, 
];

// --- ВСПОМОГАТЕЛЬНЫЕ КОМПОНЕНТЫ ---

const WhatsAppButton = ({ children, className = '' }: any) => (
  <a
    href="https://wa.me/972537086545"
    target="_blank"
    rel="noreferrer"
    className={`inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-8 py-4 font-bold text-white shadow-xl transition hover:scale-105 ${className}`}
  >
    💬 {children}
  </a>
);

// --- ГЛАВНАЯ СТРАНИЦА ---

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const scrollToId = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({ top: element.offsetTop - 80, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-[#fff1e4] selection:text-[#e8a16b]">
      {/* Header */}
      <nav className="fixed top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b px-6 py-4 flex justify-between items-center">
        <div className="text-xl font-black text-[#e8a16b] tracking-tighter">БЬЮТИ.СТРАТЕГИЯ</div>
        <div className="hidden md:flex gap-8 font-bold text-sm uppercase tracking-widest">
          <button onClick={() => scrollToId('cases')}>Кейсы</button>
          <button onClick={() => scrollToId('faq')}>FAQ</button>
          <button onClick={() => scrollToId('contact')}>Контакты</button>
        </div>
        <a href="https://wa.me/972537086545" className="hidden md:block font-black text-[#25D366]">WHATSAPP →</a>
      </nav>

      {/* HERO SECTION — УСИЛЕННЫЙ ОФФЕР */}
      <section className="pt-40 pb-20 px-6 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 text-left">
          <div className="inline-block bg-[#fff1e4] text-[#e8a16b] px-4 py-2 rounded-lg font-bold text-sm mb-6">
            🔥 ОСТАЛОСЬ 2 СЛОТА НА АУДИТ В ЭТОМ МЕСЯЦЕ
          </div>
          <h1 className="text-5xl md:text-8xl font-black leading-none tracking-tighter">
            Увеличим доход салона на <span className="text-[#e8a16b]">30% за 2 месяца</span>
          </h1>
          <p className="mt-8 text-xl text-gray-600 font-medium">
            Бесплатно разберу вашу воронку и покажу, где вы теряете клиентов прямо сейчас.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <WhatsAppButton>Получить разбор в WhatsApp</WhatsAppButton>
          </div>
        </div>
        <div className="flex-1 relative">
          <div className="w-full aspect-[4/5] bg-gray-100 rounded-[40px] overflow-hidden border-8 border-gray-50 shadow-2xl">
             <img src="/beauty-marketing-strategy.jpg" alt="Татьяна Новикова" className="w-full h-full object-cover" />
          </div>
          <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-3xl shadow-2xl border hidden md:block">
            <p className="text-3xl font-black text-[#e8a16b]">$15 450</p>
            <p className="text-xs font-bold text-gray-400 uppercase">Выручка за 6 недель [США]</p>
          </div>
        </div>
      </section>

      {/* STICKY CTA ДЛЯ МОБИЛЬНЫХ */}
      <div className="fixed bottom-6 left-0 w-full z-50 px-6 md:hidden">
        <WhatsAppButton className="w-full py-5 text-lg shadow-2xl">Написать и получить разбор</WhatsAppButton>
      </div>

      {/* ОБ ЭКСПЕРТЕ — ЛИЧНОЕ ФОТО №2 */}
      <section id="about" className="py-24 px-6 max-w-7xl mx-auto flex flex-col md:flex-row-reverse items-center gap-16">
        <div className="flex-1">
          <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter italic">«Я не просто настраиваю рекламу — я строю систему прибыли»</h2>
          <p className="text-xl text-gray-600 mb-8 italic">
            В 2026 году скидки убивают бьюти-бренд. Я создаю ценность, которая заставляет клиентов записываться без демпинга. Беру только те проекты, в результат которых верю.
          </p>
          <div className="bg-gray-50 p-8 rounded-3xl border">
            <p className="font-bold text-gray-400 uppercase text-xs mb-4 tracking-widest">Мои стандарты:</p>
            <ul className="space-y-4 font-bold">
              <li>✔️ Работа до финансового результата</li>
              <li>✔️ Прозрачная аналитика в CRM</li>
              <li>✔️ Окупаемость рекламы от 300%</li>
            </ul>
          </div>
        </div>
        <div className="flex-1">
          <div className="w-full aspect-square bg-gray-100 rounded-full overflow-hidden border-8 border-white shadow-2xl">
             <img src="/beauty-business-marketing-specialist.jpg" alt="Бьюти Стратег" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* КЕЙСЫ — ТВЕРДЫЕ ЦИФРЫ */}
      <section id="cases" className="py-24 bg-gray-900 text-white px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-black mb-16 text-center tracking-tighter">Твердые результаты</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {cases.map((c, i) => (
              <div key={i} className="bg-white/5 p-10 rounded-[40px] border border-white/10 backdrop-blur-md hover:bg-white/10 transition">
                <div className="text-[#e8a16b] font-bold mb-4 uppercase text-xs tracking-widest">{c.niche}</div>
                <h3 className="text-2xl font-bold mb-6 italic">"{c.problem}"</h3>
                <p className="text-gray-400 text-sm mb-6">{c.action}</p>
                <div className="text-2xl font-black text-[#e8a16b]">{c.result}</div>
              </div>
            ))}
          </div>

          {/* ПРИЗЫВ К ДЕЙСТВИЮ — ЛИЧНОЕ ФОТО №3 */}
          <div className="mt-20 flex flex-col md:flex-row items-center gap-12 bg-white rounded-[40px] p-12 text-gray-900">
             <div className="flex-1 text-center md:text-left">
                <h3 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter">Нужна полная запись?</h3>
                <p className="text-xl text-gray-500 mb-8 italic">Напишите мне в WhatsApp. Разберем ваши точки роста за 15 минут — это бесплатно и ни к чему не обязывает.</p>
                <WhatsAppButton>Записаться на разбор</WhatsAppButton>
             </div>
             <div className="flex-1 flex justify-center">
                <img src="/beauty-client-acquisition-strategy-funnel.jpg" alt="Разбор воронки" className="w-72 h-72 rounded-full border-8 border-gray-50 shadow-2xl object-cover" />
             </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 bg-gray-50 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Частые вопросы</h2>
          <div className="space-y-4">
            {faqs.map((f, i) => (
              <div key={i} className="bg-white border rounded-2xl overflow-hidden shadow-sm">
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full text-left p-6 font-bold flex justify-between items-center"
                >
                  <span className="pr-4">{f.q}</span>
                  <span className="text-[#e8a16b] text-2xl">{openFaq === i ? '−' : '+'}</span>
                </button>
                {openFaq === i && <div className="p-6 pt-0 text-gray-600 border-t bg-gray-50/50">{f.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact" className="py-20 border-t text-center text-gray-400">
        <h2 className="text-2xl font-black text-gray-900 mb-8">БЬЮТИ.СТРАТЕГИЯ</h2>
        <div className="flex justify-center gap-8 mb-12 text-2xl">
          <a href="https://wa.me/972537086545" className="hover:text-[#25D366]">💬</a>
          <a href="https://t.me/mailovaja" className="hover:text-[#0088cc]">✈️</a>
        </div>
        <p className="text-sm font-bold uppercase tracking-widest">© 2026 РАБОТА ДО РЕЗУЛЬТАТА. ВСЕ ПРАВА ЗАЩИЩЕНЫ.</p>
      </footer>
    </div>
  );
}
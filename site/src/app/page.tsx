'use client';
import React, { useState } from 'react';

// --- ДАННЫЕ ИЗ ИСТОЧНИКОВ ---

const socialLinks = [ 
  { label: 'WhatsApp', href: 'https://wa.me/972537086545', icon: '💬' }, 
  { label: 'Telegram', href: 'https://t.me/mailovaja', icon: '✈️' }, 
  { label: 'Instagram', href: '#instagram', icon: '◎' }
];

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
    result: 'Полная запись с первой недели.', 
    href: '/cases/byuti-biznes', 
  }, 
];

const faqs = [ 
  { q: 'Как понять, что реклама будет приносить прибыль?', a: 'Перед запуском разбираем цифры: стоимость клиента, ценность и работу воронки. Задача — выстроить систему на окупаемость.' }, 
  { q: 'Что делать, если заявки есть, но записи слабые?', a: 'Это вопрос воронки и обработки. Настраиваем систему так, чтобы лиды превращались в записи.' }, 
];

// --- ВСПОМОГАТЕЛЬНЫЕ КОМПОНЕНТЫ ---

const WhatsAppButton = ({ children, className = '' }: any) => (
  <a href="https://wa.me/972537086545" target="_blank" rel="noreferrer" 
     className={`inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-8 py-4 font-bold text-white shadow-xl transition hover:scale-105 ${className}`}>
    💬 {children}
  </a>
);

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-[#fff1e4] selection:text-[#e8a16b]">
      {/* Header — Исправленный логотип для SEO */}
      <nav className="fixed top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b px-6 py-4 flex justify-between items-center">
        <div className="text-sm md:text-xl font-black text-[#e8a16b] tracking-tighter uppercase">
          МАРКЕТИНГ ДЛЯ БЬЮТИ-БИЗНЕСА
        </div>
        <div className="hidden md:flex gap-8 font-bold text-xs uppercase tracking-widest text-gray-400">
          <a href="#cases" className="hover:text-[#e8a16b]">Кейсы</a>
          <a href="#faq" className="hover:text-[#e8a16b]">FAQ</a>
        </div>
        <WhatsAppButton className="px-6 py-2 text-xs">НАПИСАТЬ</WhatsAppButton>
      </nav>

      {/* HERO — Без сносок и с жестким оффером */}
      <section className="pt-40 pb-20 px-6 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 text-left">
          <div className="inline-block bg-[#fff1e4] text-[#e8a16b] px-4 py-2 rounded-lg font-bold text-sm mb-6 uppercase tracking-widest">
            🔥 Осталось 2 слота на разбор в этом месяце
          </div>
          <h1 className="text-5xl md:text-8xl font-black leading-none tracking-tighter">
            Увеличим доход салона на <span className="text-[#e8a16b]">30% за 2 месяца</span>
          </h1>
          <p className="mt-8 text-xl text-gray-600 font-medium">
            Бесплатно разберу вашу воронку и покажу, где вы теряете клиентов прямо сейчас.
          </p>
          <div className="mt-10">
            <WhatsAppButton>ПОЛУЧИТЬ РАЗБОР В WHATSAPP</WhatsAppButton>
          </div>
        </div>
        <div className="flex-1 relative">
          <div className="w-full aspect-[4/5] bg-gray-100 rounded-[40px] overflow-hidden border-8 border-gray-50 shadow-2xl">
             <img src="/beauty-marketing-strategy.jpg" alt="Маркетинг для бьюти" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* STICKY CTA (Для мобильных) */}
      <div className="fixed bottom-6 left-0 w-full z-50 px-6 md:hidden">
        <WhatsAppButton className="w-full py-5 text-lg shadow-2xl">ПОЛУЧИТЬ РАЗБОР (WA)</WhatsAppButton>
      </div>

      {/* КЕЙСЫ — Теперь кликабельные */}
      <section id="cases" className="py-24 bg-gray-900 text-white px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-black mb-16 text-center tracking-tighter uppercase">Результаты</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {cases.map((c, i) => (
              <a key={i} href={c.href} className="bg-white/5 p-10 rounded-[40px] border border-white/10 backdrop-blur-md hover:bg-white/10 transition block group">
                <div className="text-[#e8a16b] font-bold mb-4 uppercase text-xs tracking-widest">{c.niche}</div>
                <h3 className="text-2xl font-bold mb-6 italic group-hover:underline">"{c.problem}"</h3>
                <p className="text-gray-400 text-sm mb-6 italic">{c.action}</p>
                <div className="text-2xl font-black text-[#e8a16b]">{c.result}</div>
              </a>
            ))}
          </div>

          <div className="mt-20 flex flex-col md:flex-row items-center gap-12 bg-white rounded-[40px] p-12 text-gray-900">
             <div className="flex-1 text-center md:text-left">
                <h3 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter">НУЖНА ПОЛНАЯ ЗАПИСЬ?</h3>
                <p className="text-xl text-gray-500 mb-8 italic">Разберем ваши точки роста за 15 минут — это бесплатно и ни к чему не обязывает.</p>
                <WhatsAppButton>ЗАПИСАТЬСЯ НА РАЗБОР</WhatsAppButton>
             </div>
             <div className="flex-1 flex justify-center">
                <img src="/beauty-business-marketing-specialist.jpg" alt="Бьюти эксперт" className="w-72 h-72 rounded-full border-8 border-gray-50 shadow-2xl object-cover" />
             </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 bg-gray-50 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center uppercase tracking-widest text-gray-300">FAQ</h2>
          <div className="space-y-4">
            {faqs.map((f, i) => (
              <div key={i} className="bg-white border rounded-2xl overflow-hidden shadow-sm">
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full text-left p-6 font-bold flex justify-between items-center hover:bg-gray-50 transition">
                  <span className="pr-4 uppercase text-sm tracking-widest">{f.q}</span>
                  <span className="text-[#e8a16b] text-2xl">{openFaq === i ? '−' : '+'}</span>
                </button>
                {openFaq === i && <div className="p-6 pt-0 text-gray-600 border-t bg-gray-50/50">{f.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-20 border-t text-center text-gray-400">
        <p className="text-xs font-bold uppercase tracking-widest">© 2026 РАБОТА ДО РЕЗУЛЬТАТА</p>
      </footer>
    </div>
  );
}
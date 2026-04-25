'use client';
import React, { useState } from 'react';

// Данные для страницы массажа из ваших источников
const massageCase = {
  niche: 'Студия ручного массажа (Израиль)',
  problem: 'Мастер с нуля, 0 базы, пустой профиль',
  result: '30 762 ₪ ($9 946) чистой прибыли за 3 месяца',
  stats: '740 заявок по $1.8 (5,7 ₪)',
  action: 'Внедрена система: Упаковка профиля + ТЗ для контента "руки мастера" + Таргет + Скрипты в WhatsApp'
};

const faqs = [
  { q: 'ЧТО ЕСЛИ ЛЮДИ БУДУТ ТОЛЬКО СПРАШИВАТЬ ЦЕНУ?', a: 'Это решается на этапе воронки. Мы даем вам готовые скрипты ответов для WhatsApp, которые переводят вопрос "сколько стоит" в запись на сеанс.' },
  { q: 'КАКОЙ МИНИМАЛЬНЫЙ БЮДЖЕТ НУЖЕН?', a: 'Мы считаем финансовую модель до старта. Обычно для окупаемого запуска в нише массажа достаточно бюджета от $200-300 в месяц.' }
];

// Компонент WhatsApp кнопки
const WhatsAppButton = ({ children, className = '' }: any) => (
  <a href="https://wa.me/972537086545" target="_blank" rel="noreferrer" 
     className={`inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-8 py-4 font-bold text-white shadow-2xl transition hover:scale-105 ${className}`}>
    💬 {children}
  </a>
);

export default function MassagePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="bg-white text-[#1f1a17] selection:bg-[#fff1e4] selection:text-[#e8a16b]">
      {/* Шапка */}
      <nav className="fixed top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b px-6 py-4 flex justify-between items-center">
        <div className="text-sm md:text-xl font-black text-[#e8a16b] tracking-tighter uppercase">
          МАРКЕТИНГ ДЛЯ МАССАЖНОГО БИЗНЕСА
        </div>
        <WhatsAppButton className="px-6 py-2 text-xs">КОНСУЛЬТАЦИЯ</WhatsAppButton>
      </nav>

      {/* 1. HERO — Агрессивный захват */}
      <section className="pt-40 pb-32 px-6 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
        <div className="flex-1">
          <div className="inline-block bg-[#fff1e4] text-[#e8a16b] px-4 py-2 rounded-lg font-bold text-sm mb-6 uppercase tracking-widest">
            🔥 СВОБОДНО 2 СЛОТА ДЛЯ МАСТЕРОВ МАССАЖА
          </div>
          <h1 className="text-5xl md:text-8xl font-black leading-none tracking-tighter mb-8">
            Полная запись на <span className="text-[#e8a16b]">2 месяца</span> вперед
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 font-medium mb-10 max-w-xl">
            Бесплатно разберу вашу воронку и покажу, как мы получили 740 заявок по $1.8 для мастера с нуля.
          </p>
          <WhatsAppButton>ПОЛУЧИТЬ ПЛАН РОСТА В WHATSAPP</WhatsAppButton>
        </div>
        <div className="flex-1 relative">
          <div className="w-full aspect-[4/5] bg-gray-100 rounded-[40px] overflow-hidden border-8 border-gray-50 shadow-2xl">
            <img src="/beauty-marketing-strategy.jpg" alt="Реклама для массажа" className="w-full h-full object-cover" />
          </div>
          {/* Плашка с результатом кейса */}
          <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-3xl shadow-2xl border hidden md:block">
            <p className="text-4xl font-black text-[#e8a16b]">{massageCase.result}</p>
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-2">Чистая прибыль нашего клиента</p>
          </div>
        </div>
      </section>

      {/* STICKY CTA ДЛЯ МОБИЛЬНЫХ (Критично для конверсии) */}
      <div className="fixed bottom-6 left-0 w-full z-50 px-6 md:hidden">
        <WhatsAppButton className="w-full py-5 text-lg shadow-3xl">ЗАПИСАТЬСЯ НА РАЗБОР (WA)</WhatsAppButton>
      </div>

      {/* 2. БЛОК ПРОБЛЕМ — "Узнавание" */}
      <section className="py-32 bg-gray-50 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-black mb-16 tracking-tighter uppercase">Почему ваш кабинет пустует?</h2>
          <div className="grid md:grid-cols-2 gap-8 text-left">
            {[
              'Заявки приходят волнами: то густо, то пусто',
              'Люди спрашивают цену и пропадают после ответа',
              'Реклама съедает бюджет, не принося реальных записей',
              'Нет системы: всё держится на "сарафанке"'
            ].map((text, i) => (
              <div key={i} className="flex gap-4 items-start bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <span className="text-[#e8a16b] font-bold">✕</span>
                <p className="font-bold text-gray-700">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. ГЛАВНЫЙ КЕЙС — Модель "Сценарий" */}
      <section className="py-40 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="flex-1 order-2 md:order-1">
             <img src="/beauty-client-acquisition-strategy-funnel.jpg" alt="Кейс массаж Израиль" className="rounded-[40px] shadow-2xl" />
          </div>
          <div className="flex-1 order-1 md:order-2">
            <h2 className="text-[#e8a16b] font-black text-sm tracking-widest mb-4 uppercase">Кейс: Израиль</h2>
            <h3 className="text-4xl md:text-6xl font-black mb-8 leading-tight tracking-tighter italic">
              «{massageCase.stats}»
            </h3>
            <div className="space-y-8">
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase mb-2">Ситуация:</p>
                <p className="text-xl font-medium text-gray-600 italic">{massageCase.problem}</p>
              </div>
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase mb-2">Что внедрили:</p>
                <p className="text-xl font-medium text-gray-600">{massageCase.action}</p>
              </div>
              <div className="p-8 bg-[#fff1e4] rounded-3xl border-2 border-[#e8a16b]">
                <p className="text-xs font-bold text-[#e8a16b] uppercase mb-2">Результат:</p>
                <p className="text-3xl font-black text-gray-900">{massageCase.result}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FAQ — Отработка страхов */}
      <section className="py-32 bg-gray-900 text-white px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-black mb-16 text-center tracking-tighter uppercase italic">Вопросы по окупаемости</h2>
          <div className="space-y-4">
            {faqs.map((f, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden">
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full text-left p-8 font-bold flex justify-between items-center hover:bg-white/5 transition">
                  <span className="uppercase text-sm tracking-widest">{f.q}</span>
                  <span className="text-[#e8a16b] text-2xl">{openFaq === i ? '−' : '+'}</span>
                </button>
                {openFaq === i && <div className="p-8 pt-0 text-gray-400 border-t border-white/5 leading-relaxed">{f.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. ФИНАЛЬНЫЙ ПРИЗЫВ */}
      <section className="py-40 px-6 text-center">
        <h2 className="text-5xl md:text-8xl font-black tracking-tighter mb-10">НУЖНА ПОЛНАЯ ЗАПИСЬ?</h2>
        <p className="text-xl text-gray-500 mb-12 italic max-w-2xl mx-auto">
          Разберем вашу ситуацию за 15 минут в WhatsApp — это бесплатно и покажет вам точки роста прибыли.
        </p>
        <WhatsAppButton className="py-6 px-12 text-xl">ЗАПИСАТЬСЯ НА РАЗБОР</WhatsAppButton>
      </section>

      <footer className="py-12 border-t text-center text-gray-400 font-bold text-xs uppercase tracking-widest">
        © 2026 БЬЮТИ.СТРАТЕГИЯ — РАБОТА НА ФИНАНСОВЫЙ РЕЗУЛЬТАТ
      </footer>
    </main>
  );
}
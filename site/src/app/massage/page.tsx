'use client';
import Link from 'next/link';
import React, { useState } from 'react';

// --- ДАННЫЕ ДЛЯ БЛОКОВ ---

const cases = [
  {
    niche: 'Массаж (Израиль)',
    title: '740 заявок по $1.8',
    result: '30 762 ₪ ($9 946) чистой прибыли',
    desc: 'Запуск с нуля: от пустых стен до полной записи за 3 месяца.',
    image: '/beauty-client-acquisition-strategy-funnel.jpg',
    href: '/cases/massazh-israel-740-zayavok',
  },
  {
    niche: 'Массаж (Канада)',
    title: '183 заявки по $5.7',
    result: '40 клиентов с чеком $120',
    desc: 'Продвижение массажа для женщин при ограниченном бюджете.',
    image: '/beauty-salon-client-review-results.jpg',
    href: '/cases/massage-canada-body',
  },
  {
    niche: 'Спа-салон (США)',
    title: '256 клиентов по $19',
    result: '$17 920 выручки',
    desc: 'Масштабирование через рекламу, CRM и онлайн-запись.',
    image: '/beauty-business-marketing-specialist.jpg',
    href: '/cases/spa-salon-california-256-clients',
  },
];

const reviews = [ 
  { author: 'Елена, владелица студии', text: '“Результат превзошел ожидания. Раньше заявки были случайными, теперь это управляемая система. Окупили вложения в первый же месяц.”' }, 
  { author: 'Мастер массажа', text: '“Татьяна помогла не только с рекламой, но и с тем, как отвечать клиентам. Теперь 2 из 4 обращений закрывается в запись.”' } 
];

const faqs = [ 
  { 
    q: 'КАК Я МОГУ БЫТЬ УВЕРЕНА, ЧТО РЕКЛАМА ОКУПИТСЯ?', 
    a: 'Мы не просто запускаем «таргет», а строим финансовую модель. Перед стартом анализируем стоимость вашего сеанса и ценность клиента (LTV). Наша задача — чтобы каждый вложенный доллар приносил вам от $3 до $5 выручки. Все показатели фиксируем в стратегии.' 
  }, 
  { 
    q: 'ЧТО ДЕЛАТЬ, ЕСЛИ ЛЮДИ БУДУТ ТОЛЬКО СПРАШИВАТЬ ЦЕНУ И ПРОПАДАТЬ?', 
    a: 'Это проблема «холодного» трафика, которую мы решаем двумя способами: во-первых, фильтруем лидов еще на этапе объявления, во-вторых — даем вам готовые скрипты ответов для WhatsApp. Они переводят вопрос «сколько стоит» в реальную запись на сеанс.' 
  }, 
  { 
    q: 'КАКОЙ РЕКЛАМНЫЙ БЮДЖЕТ НУЖЕН ДЛЯ СТАРТА?', 
    a: 'Для тестового запуска и получения первых 50–100 заявок в месяц обычно достаточно от $300 до $500 (в зависимости от города и конкуренции). Мы начинаем с малых сумм и увеличиваем бюджет только тогда, когда видим реальные деньги в вашей кассе.' 
  }, 
  { 
    q: 'НУЖНО ЛИ МНЕ ИМЕТЬ ИДЕАЛЬНЫЙ INSTAGRAM И СЛОЖНЫЕ СЪЕМКИ?', 
    a: 'Нет. Для работающей рекламы часто лучше подходят «живые» фото процесса (те самые «руки мастера») и искренние видеоотзывы. Мы дадим вам четкое ТЗ, что именно нужно снять на телефон, чтобы реклама выглядела естественно и вызывала доверие.' 
  }, 
  { 
    q: 'СКОЛЬКО МОЕГО ВРЕМЕНИ БУДЕТ ЗАНИМАТЬ УПРАВЛЕНИЕ ПРОЦЕССОМ?', 
    a: 'Мы берем на себя всю техническую часть: настройку, аналитику и оптимизацию. От вас или вашего администратора потребуется только вовремя отвечать на заявки в WhatsApp по нашим шаблонам. Раз в неделю мы присылаем отчет с понятными цифрами.' 
  },
  { 
    q: 'ПОЧЕМУ МНЕ ВЫГОДНО РАБОТАТЬ С ВАМИ, А НЕ С ОБЫЧНЫМ ТАРГЕТОЛОГОМ?', 
    a: 'Обычный таргетолог настраивает кнопки. Мы внедряем систему именно для массажного бизнеса: знаем рабочие офферы, умеем снижать цену лида до $1.8 и понимаем, как превратить разового клиента в постоянного гостя студии.' 
  }
];


// --- КОМПОНЕНТЫ КНОПОК ---

const DualContactButtons = ({ className = "" }) => {
  const message = encodeURIComponent('Здравствуйте! Хочу запустить рекламу. Что для этого нужно?');

  return (
    <div className={`flex flex-col sm:flex-row gap-4 ${className}`}>
      <a
        href={`https://wa.me/972537086545?text=${message}`}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-8 py-4 font-bold text-white shadow-xl transition hover:scale-105"
      >
        💬 WhatsApp
      </a>

      <a
        href={`https://t.me/mailovaja?text=${message}`}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0088cc] px-8 py-4 font-bold text-white shadow-xl transition hover:scale-105"
      >
        ✈️ Telegram
      </a>
    </div>
  );
};

export default function MassagePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="bg-white text-[#1f1a17] font-sans selection:bg-[#fff1e4] selection:text-[#e8a16b]">
      {/* 1. HERO — Две кнопки и оффер */}
       <section className="pt-40 pb-32 px-6 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
        <div className="flex-1">
          <div className="inline-block bg-[#fff1e4] text-[#e8a16b] px-4 py-2 rounded-lg font-bold text-sm mb-6 uppercase tracking-widest">
            🔥 СВОБОДНО 2 СЛОТА ДЛЯ МАСТЕРОВ МАССАЖА
          </div>
          <h1 className="text-5xl md:text-8xl font-black leading-none tracking-tighter mb-8">
  Полная запись <span className="text-[#e8a16b]"> на 2 месяца вперед </span> с окупаемостью рекламы от 300% 
</h1>
          <p className="text-xl md:text-2xl text-gray-600 font-medium mb-10 max-w-xl">
            Работаю с проектами с рекламным бюджетом от <b>$200 до $10 000 в месяц</b>. 
  Подбираю стратегию под ваш город, нишу и текущую загрузку.
          </p>
          <DualContactButtons className="mt-6" />
  

        </div>
        <div className="flex-1 relative">
          <div className="w-full aspect-[4/5] bg-gray-100 rounded-[40px] overflow-hidden border-8 border-gray-50 shadow-2xl">
            <img src="/beauty-marketing-strategy.jpg" alt="Реклама для массажа" className="w-full h-full object-cover" />
          </div>
          {/* Плашка с результатом кейса */}
          <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-3xl shadow-2xl border hidden md:block">
            <p className="text-4xl font-black text-[#e8a16b]">$9 946</p>
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-2">Чистая прибыль нашего клиента</p>
          </div>
        </div>
      </section>

      {/* 2. ТРИ КЕЙСА — Твердые результаты */}
      <section className="py-32 bg-gray-900 text-white px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black mb-16 tracking-tighter uppercase italic">Наши результаты</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {cases.map((c, i) => (
              <div key={i} className="bg-white/5 p-8 rounded-[40px] border border-white/10 hover:bg-white/10 transition">
                <p className="text-[#e8a16b] font-bold text-xs uppercase mb-4">{c.niche}</p>
                <h3 className="text-2xl font-black mb-4">{c.title}</h3>
                <p className="text-gray-400 mb-6 text-sm italic">{c.desc}</p>
                <div className="text-xl font-black text-[#e8a16b]">{c.result}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. ОБ ЭКСПЕРТЕ — Татьяна Новикова */}
      <section className="py-32 px-6 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
        <div className="flex-1">
          <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter">Кто ведет ваш проект</h2>
          <p className="text-xl text-gray-600 mb-6 font-bold uppercase tracking-widest text-[#e8a16b]">Татьяна Новикова</p>
          <p className="text-lg text-gray-500 mb-8 leading-relaxed">
            10+ лет в маркетинге. Специализируюсь на бьюти-индустрии и сложных воронках продаж. 
            Я не просто настраиваю рекламу, а внедряю систему, которая приносит деньги, а не просто клики.
          </p>
          <DualContactButtons />
        </div>
        <div className="flex-1">
          <img src="/beauty-business-marketing-specialist.jpg" alt="Татьяна Новикова" className="rounded-full w-80 h-80 object-cover border-8 border-[#fff1e4] mx-auto shadow-2xl" />
        </div>
      </section>

      {/* 4. ОТЗЫВЫ */}
      <section className="py-32 bg-gray-50 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-black mb-16 tracking-tighter uppercase">Что говорят клиенты</h2>
          <div className="grid md:grid-cols-2 gap-12 text-left">
            {reviews.map((r, i) => (
              <div key={i} className="bg-white p-10 rounded-[40px] shadow-sm italic text-gray-600">
                <p className="mb-6 text-lg leading-relaxed">{r.text}</p>
                <p className="font-black text-[#e8a16b] uppercase text-sm tracking-widest">— {r.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FAQ */}
      <section className="py-32 px-6 max-w-3xl mx-auto">
        <h2 className="text-3xl font-black mb-12 text-center uppercase tracking-widest text-gray-300">Вопросы</h2>
        <div className="space-y-4">
          {faqs.map((f, i) => (
            <div key={i} className="border rounded-2xl overflow-hidden">
              <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full text-left p-6 font-bold flex justify-between items-center">
                <span className="uppercase text-sm">{f.q}</span>
                <span className="text-[#e8a16b]">{openFaq === i ? '−' : '+'}</span>
              </button>
              {openFaq === i && <div className="p-6 pt-0 text-gray-500 border-t bg-gray-50/50">{f.a}</div>}
            </div>
          ))}
        </div>
      </section>

      

    
    </main>
  );
}
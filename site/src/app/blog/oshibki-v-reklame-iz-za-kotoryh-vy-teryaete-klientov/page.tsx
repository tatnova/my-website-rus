
import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Script from 'next/script';

// 7, 9. SEO & MASTER TEMPLATE CONSISTENCY
export const revalidate = 86400;

const SLUG = 'blog/oshibki-v-reklame-iz-za-kotoryh-vy-teryaete-klientov';
const URL = `https://beauty.adsnew.org/${SLUG}`;
const WHATSAPP_LINK = "https://wa.me/972537086545?text=Здравствуйте!%20Хочу%20обсудить%20рекламу%20для%20салона";
const TELEGRAM_LINK = "https://t.me/mailovaja?text=Здравствуйте!%20Хочу%20обсудить%20запуск%20рекламы";

export const metadata: Metadata = {
  title: 'Ошибки в рекламе, из-за которых вы теряете клиентов: главные ловушки бьюти-бизнеса',
  description: 'Разбор 6 критических ошибок маркетинга в бьюти-сфере. Узнайте, почему вы теряете до 30% прибыли и как избежать цикла «густо/пусто» в 2026 году.',
  keywords: ['реклама салона красоты', 'маркетинг бьюти бизнеса', 'ошибки в рекламе', 'привлечение клиентов США', 'no-shows'],
  alternates: { canonical: URL },
  openGraph: {
    title: '6 ошибок в рекламе салона красоты, которые убивают вашу запись',
    description: 'Анализ рынка и системные решения для бьюти-бизнеса. Как избежать потери прибыли и неявок клиентов.',
    url: URL,
    type: 'article',
    images: [{ url: '/beauty-marketing-traps.jpg', width: 1200, height: 675 }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ошибки в рекламе, из-за которых вы теряете клиентов',
    images: ['/beauty-marketing-traps.jpg'],
  }
};

export default function BlogArticle() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "Ошибки в рекламе, из-за которых вы теряете клиентов",
    "image": `https://beauty.adsnew.org/beauty-marketing-traps.jpg`,
    "author": { "@type": "Person", "name": "Татьяна Новикова" },
    "datePublished": "2026-05-14",
    "publisher": { "@type": "Organization", "name": "Adsnew.Beauty" }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "На каком расстоянии должна работать реклама салона?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Для бьюти-бизнеса оптимальный радиус составляет 3–5 миль (5–8 км). За пределами этой зоны стоимость привлечения клиента (CAC) резко возрастает."
        }
      },
      {
        "@type": "Question",
        "name": "Как снизить количество неявок (no-shows)?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Внедрение небольшого депозита (10–30% от чека) при бронировании через соцсети сокращает количество неявок почти до нуля."
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-[#fafafa] text-[#1f1a17] selection:bg-[#fff1e4] selection:text-[#e8a16b] font-sans antialiased">
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* NAVIGATION */}
      <nav className="fixed top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="text-base font-bold tracking-tighter uppercase">Adsnew.Beauty</div>
          <div className="hidden space-x-8 text-[13px] font-medium text-gray-500 md:flex">
            <a href="/cases" className="hover:text-black transition-colors">Кейсы</a>
            <a href="/blog" className="hover:text-black transition-colors">Статьи</a>
          </div>
          <a 
            href={WHATSAPP_LINK} 
            target="_blank" 
            rel="noopener noreferrer"
            className="rounded-full bg-[#1f1a17] px-5 py-2 text-[12px] font-semibold text-white hover:bg-black transition-all"
          >
            Обсудить проект
          </a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <header className="pt-32 pb-12 md:pt-44 md:pb-20 px-6 bg-white border-b border-gray-50">
        <div className="mx-auto max-w-3xl text-left">
          <div className="mb-6 flex items-center gap-3 text-[10px] font-bold uppercase tracking-wider text-[#e8a16b]">
            <span className="w-6 h-[1px] bg-[#e8a16b]"></span>
            Audit Strategy • 2026
          </div>
          
          <h1 className="text-3xl font-bold leading-[1.15] md:text-5xl lg:text-6xl tracking-tight text-[#1f1a17] mb-10">
            Ошибки в рекламе, из-за которых вы теряете клиентов: главные ловушки бьюти-бизнеса
          </h1>

          <div className="flex items-center justify-between border-t border-gray-100 pt-8">
            <div className="flex items-center gap-4">
              <div className="h-10 w-10 rounded-full bg-[#e8a16b]/10 flex items-center justify-center text-[#e8a16b] text-xs font-bold font-serif italic">TN</div>
              <div className="text-[13px]">
                <span className="block font-bold">Татьяна Новикова</span>
                <span className="text-gray-400 font-medium tracking-tight">Expert Analysis • 8 min read</span>
              </div>
            </div>
            <div className="hidden md:flex gap-10 text-[11px] font-bold text-gray-300 uppercase tracking-widest">
              <div>Updated May 2026</div>
            </div>
          </div>
        </div>
      </header>

      {/* 1, 5. OPTIMIZED HERO IMAGE */}
      <div className="mx-auto max-w-5xl px-6 -mt-8 md:-mt-12 mb-20">
        <div className="relative aspect-[21/9] overflow-hidden rounded-xl bg-gray-50">
          <Image 
            src="/beauty-marketing-traps.jpg" 
            alt="Ошибки в рекламе салона красоты"
            fill
            sizes="100vw"
            className="object-cover object-center grayscale-[15%] transition-all duration-1000"
            priority
          />
        </div>
      </div>

      {/* 4. CONTENT FRAMEWORK (65ch) */}
      <main className="mx-auto max-w-6xl px-6 pb-40">
        <div className="grid grid-cols-1 gap-20 lg:grid-cols-[1fr_280px]">
          
          {/* ARTICLE BODY — 100% SOURCE CONTENT */}
          <article className="max-w-[65ch] mx-auto lg:mx-0">
            <div className="space-y-16 md:space-y-24 text-lg leading-[1.85] md:leading-[1.78] text-gray-600">
              
              {/* INTRO */}
              <section className="space-y-8">
                <p className="text-xl md:text-2xl font-medium leading-[1.6] text-[#1f1a17]">
                  Многие владелицы салонов красоты и частные эксперты в США и Европе живут в состоянии «маркетингового хаоса». Вы вкладываете бюджеты в Meta и TikTok, нанимаете специалистов, но результат часто разочаровывает: сегодня — запись забита, а завтра — мастера часами сидят в ожидании клиентов.
                </p>
                <p>
                  Это явление называется <strong>циклом «густо/пусто»</strong> (feast/famine cycle). В условиях современного рынка отсутствие системы в социальных сетях становится фатальным для бизнеса. Без четкого понимания пути клиента реклама превращается в лотерею.
                </p>
              </section>

              {/* STATS SECTION */}
              <section className="space-y-10 pt-10 border-t border-gray-100">
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[#1f1a17]">Глобальный рынок растет, а ваша прибыль?</h2>
                <div className="space-y-6 font-medium">
                  <p>Прежде чем искать ошибки, посмотрите на реальную статистику западного рынка:</p>
                  <ul className="space-y-6 list-none pl-0">
                    <li className="flex items-start gap-4">
                       <span className="text-[#e8a16b] font-bold text-sm mt-1">01.</span>
                       <span>Мировой рынок салонных услуг вырастет с <strong>$264,93 млрд до $447,76 млрд к 2032 году</strong>.</span>
                    </li>
                    <li className="flex items-start gap-4">
                       <span className="text-[#e8a16b] font-bold text-sm mt-1">02.</span>
                       <span>Компании, работающие «вручную» без автоматизации трафика из соцсетей, теряют до <strong>30% потенциальной прибыли</strong> на этапе обработки входящих заявок.</span>
                    </li>
                  </ul>
                  <p className="text-[#1f1a17] font-bold italic border-l-2 border-[#e8a16b] pl-6">
                    Бьюти-сектор прирастает на ~8% ежегодно. Деньги на рынке есть, но они утекают к тем, кто внедрил прогнозируемый маркетинг.
                  </p>
                </div>
              </section>

              {/* 6 ERRORS (3, 4, 5, 6, 7) */}
              <section id="errors" className="space-y-16 md:space-y-24">
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[#1f1a17]">6 критических ошибок в рекламе</h2>
                
                <div className="space-y-20">
                  <div className="space-y-6">
                    <h3 className="text-xl font-bold tracking-tight text-[#1f1a17]">1. «Смерть» лида в нерабочее время</h3>
                    <p>До <strong>40% клиентов</strong> предпочитают записываться на услуги поздно вечером или рано утром, когда администратор не на связи.</p>
                    <p>Реклама работает круглосуточно, но требует звонка или ожидания ответа в директ. Без активной кнопки онлайн-бронирования 24/7 «горячий» клиент уходит к конкуренту.</p>
                  </div>

                  <div className="space-y-6">
                    <h3 className="text-xl font-bold tracking-tight text-[#1f1a17]">2. Гиперлокальный промах</h3>
                    <p>Одной из самых дорогих ошибок является слишком широкий охват аудитории. На западных рынках реклама максимально эффективна в радиусе <strong>3–5 миль (5–8 км)</strong> вокруг вашего кресла. За пределами этой зоны стоимость привлечения клиента (CAC) взлетает.</p>
                  </div>

                  <div className="space-y-6">
                    <h3 className="text-xl font-bold tracking-tight text-[#1f1a17]">3. Ссылка «в никуда» и тупиковая навигация</h3>
                    <p>Направлять весь рекламный трафик на главную страницу или в общий профиль — это способ «сжечь» бюджет. Пользователь кликает на рекламу «сложного окрашивания», а попадает в общий прайс-лист. Каждое объявление должно вести на <strong>персонализированную страницу</strong> конкретной услуги.</p>
                  </div>

                  {/* 1. MINIMAL CTA */}
                  <div className="p-10 border border-gray-100 rounded-xl bg-white text-center space-y-6 shadow-sm">
                    <h4 className="text-lg font-bold text-black tracking-tight">Хотите разобрать ошибки вашей воронки?</h4>
                    <p className="text-sm font-medium">Проведу аудит вашей системы и найду точки потери прибыли.</p>
                    <div className="flex flex-wrap justify-center gap-4">
                       <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="text-[11px] font-bold uppercase tracking-widest text-black border-b border-black pb-1 hover:text-[#e8a16b] hover:border-[#e8a16b] transition-all">WhatsApp →</a>
                       <a href={TELEGRAM_LINK} target="_blank" rel="noopener noreferrer" className="text-[11px] font-bold uppercase tracking-widest text-black border-b border-black pb-1 hover:text-[#e8a16b] hover:border-[#e8a16b] transition-all">Telegram →</a>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <h3 className="text-xl font-bold tracking-tight text-[#1f1a17]">4. Эпидемия No-shows (неявок)</h3>
                    <p>На рынках США и Европы убытки от неявок могут уничтожить всю рентабельность маркетинга. Внедрение небольшого <strong>депозита (10–30% от чека)</strong> при бронировании через соцсети сокращает количество неявок почти до нуля, защищая время мастера.</p>
                  </div>

                  <div className="space-y-6">
                    <h3 className="text-xl font-bold tracking-tight text-[#1f1a17]">5. Ловушка «дырявого ведра»: охота только за новым трафиком</h3>
                    <p>Привлечение нового клиента обходится в <strong>5–7 раз дороже</strong>, чем работа с текущей базой. Рост возвращаемости всего на 5% может увеличить общую прибыль на 25–95%. Система должна автоматически предлагать повторный визит через 6–8 недель.</p>
                  </div>

                  <div className="space-y-6">
                    <h3 className="text-xl font-bold tracking-tight text-[#1f1a17]">6. Дефицит экспертности и «холодный» контент</h3>
                    <p>Использование стоковых фото и шаблонных текстов больше не работает. Алгоритмы Meta и TikTok продвигают только те профили, которые подтверждают свою авторитетность через <strong>качественный визуальный опыт</strong>: кейсы «до и после» и видео процесса.</p>
                  </div>
                </div>
              </section>

              {/* FAQ SECTION */}
              <section id="faq" className="pt-20 border-t border-gray-100 space-y-12">
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[#1f1a17]">Вопросы и ответы</h2>
                <div className="space-y-10">
                   <div className="space-y-3">
                      <h4 className="text-lg font-bold tracking-tight">Как AI помогает снизить количество неявок?</h4>
                      <p className="text-base text-gray-500 font-medium">Система анализирует поведение клиента и автоматически запрашивает подтверждение или депозит при высоком риске неявки.</p>
                   </div>
                   <div className="space-y-3">
                      <h4 className="text-lg font-bold tracking-tight">Почему демпинг вредит новому салону?</h4>
                      <p className="text-base text-gray-500 font-medium">Демпинг привлекает нелояльных клиентов и обесценивает бренд. В 2026 году важно строить систему на качестве и сервисе, а не на низкой цене.</p>
                   </div>
                </div>
              </section>

              {/* CONCLUSION */}
              <section className="pt-20 border-t border-gray-100 space-y-10">
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[#1f1a17]">Вывод</h2>
                <p className="text-xl md:text-2xl font-medium leading-[1.6] text-[#1f1a17]">
                  Бьюти-бизнес — это система, а не лотерея. Рост вашего дохода требует синхронизации рекламы, удобного интерфейса записи и автоматических напоминаний, которые делают путь клиента бесшовным.
                </p>
                
                <div className="flex items-center gap-5 p-8 bg-white border border-gray-100 rounded-xl">
                   <div className="h-14 w-14 rounded-full bg-gray-50 flex items-center justify-center text-[#e8a16b] font-bold text-sm">TN</div>
                   <div>
                      <p className="font-bold text-[#1f1a17]">Татьяна Новикова</p>
                      <p className="text-xs text-gray-400 font-medium leading-relaxed">Стратег по маркетингу и CRM-автоматизации для бьюти-бизнеса.</p>
                   </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4 pt-4">
                  <a href="/blog/pochemu-reklama-ne-daet-rezultata" className="p-4 border border-gray-100 rounded-lg text-xs font-bold hover:bg-gray-50 transition-all tracking-tight">← Читать: Почему реклама не дает результат</a>
                  <a href="/blog/zapolnit-zapis-za-6-nedel" className="p-4 border border-gray-100 rounded-lg text-xs font-bold hover:bg-gray-50 transition-all text-right tracking-tight">Как заполнить запись за 6 недель →</a>
                </div>
              </section>

            </div>
          </article>

          {/* SIDEBAR FRAMEWORK */}
          <aside className="hidden lg:block">
            <div className="sticky top-24 space-y-12">
              <div className="border-l border-gray-100 pl-8 space-y-12">
                <div className="space-y-6">
                  <div className="text-[10px] font-bold text-gray-300 uppercase tracking-widest">Contents</div>
                  <ul className="space-y-4 text-[13px] font-bold text-gray-400">
                    <li className="text-black flex items-center gap-3">
                      <div className="h-4 w-[2px] bg-[#e8a16b]"></div> Ошибки 1–6
                    </li>
                    <li className="hover:text-black transition-colors"><a href="#faq">FAQ</a></li>
                  </ul>
                </div>

                <div className="space-y-6 font-bold text-xs">
                   <div className="text-[10px] text-gray-300 uppercase tracking-widest">Article Data</div>
                   <div className="space-y-3">
                      <div className="flex justify-between"><span>Read Time</span><span className="text-black">8 min</span></div>
                      <div className="flex justify-between"><span>Updated</span><span className="text-black">May 2026</span></div>
                   </div>
                </div>
              </div>

              <div className="rounded-xl bg-[#1f1a17] p-8 text-white shadow-xl">
                <h5 className="text-base font-bold mb-4 leading-tight tracking-tight">Обсудить ваш запуск рекламы</h5>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="text-[11px] font-bold uppercase text-[#e8a16b] hover:text-white transition-colors tracking-widest">
                  WhatsApp Direct →
                </a>
              </div>
            </div>
          </aside>
        </div>
      </main>

      {/* 2. COMPACT MOBILE FLOATING CTA */}
      <div className="fixed bottom-5 right-5 z-50 md:hidden">
        <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-full bg-[#1f1a17] p-3 pr-6 shadow-xl text-white">
           <div className="bg-[#e8a16b] h-10 w-10 rounded-full flex items-center justify-center text-xl">💬</div>
           <span className="text-[11px] font-bold uppercase tracking-widest">Обсудить проект</span>
        </a>
      </div>

    </div>
  );
}
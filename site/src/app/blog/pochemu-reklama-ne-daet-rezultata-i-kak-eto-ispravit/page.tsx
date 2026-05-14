import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Почему реклама салона красоты не даёт результата: 7 причин и что исправить',
  description: 'Почему реклама в Instagram, Meta Ads и TikTok не приносит стабильных клиентов салону красоты. Разбираем 7 причин и систему привлечения клиентов.',
  keywords: ['реклама салона красоты', 'маркетинг для бьюти бизнеса', 'система привлечения клиентов'],
  alternates: { canonical: 'https://beauty.adsnew.org/blog/pochemu-reklama-ne-daet-rezultata-i-kak-eto-ispravit' },
};

export default function BlogArticle() {
  return (
    <div className="min-h-screen bg-[#fafafa] text-[#1f1a17] selection:bg-[#fff1e4] selection:text-[#e8a16b] font-sans antialiased pb-24 md:pb-0">
      
      {/* 1. MINIMAL NAVIGATION */}
      <nav className="fixed top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="text-base font-bold tracking-tighter uppercase">Adsnew.Beauty</div>
          <div className="hidden space-x-8 text-[13px] font-medium text-gray-500 md:flex">
            <a href="#" className="hover:text-black transition-colors">Кейсы</a>
            <a href="#" className="hover:text-black transition-colors">Статьи</a>
          </div>
          <button className="rounded-full bg-[#1f1a17] px-5 py-2 text-[12px] font-semibold text-white hover:bg-black transition-all">
            Обсудить проект
          </button>
        </div>
      </nav>

      {/* 2. RESTRAINED HERO SECTION */}
      <header className="pt-32 pb-12 md:pt-44 md:pb-20 px-6 bg-white border-b border-gray-50">
        <div className="mx-auto max-w-3xl">
          <div className="mb-6 flex items-center gap-3 text-[10px] font-bold uppercase tracking-wider text-[#e8a16b]">
            <span className="w-6 h-[1px] bg-[#e8a16b]"></span>
            Analysis Strategy
          </div>
          
          <h1 className="text-3xl font-bold leading-[1.15] md:text-5xl lg:text-6xl tracking-tight text-[#1f1a17] mb-10">
            Почему реклама салона красоты не даёт результата: 7 причин и что исправить
          </h1>

          <div className="flex items-center justify-between border-t border-gray-100 pt-8">
            <div className="flex items-center gap-4">
              <div className="h-10 w-10 rounded-full bg-[#e8a16b]/10 flex items-center justify-center text-[#e8a16b] text-xs font-bold">TN</div>
              <div className="text-[13px]">
                <span className="block font-bold">Татьяна Новикова</span>
                <span className="text-gray-400 font-medium tracking-tight">Author • 8 min read</span>
              </div>
            </div>
            <div className="hidden md:flex gap-10 text-[11px] font-bold text-gray-300 uppercase tracking-widest">
              <div>Updated May 2026</div>
            </div>
          </div>
        </div>
      </header>

      {/* 3. CINEMATIC CROP IMAGE */}
      <div className="mx-auto max-w-5xl px-6 -mt-8 md:-mt-12 mb-20">
        <div className="relative aspect-[21/9] overflow-hidden rounded-xl bg-gray-50">
          <img 
            src="/luxury-salon-editorial.jpg" 
            className="h-full w-full object-cover grayscale-[15%] transition-all duration-1000"
            alt="Beauty Industry System"
          />
        </div>
      </div>

      {/* 4. CONTENT FRAMEWORK */}
      <main className="mx-auto max-w-6xl px-6 pb-40">
        <div className="grid grid-cols-1 gap-20 lg:grid-cols-[1fr_280px]">
          
          {/* ARTICLE CONTENT — 100% Text, No Summaries */}
          <article className="max-w-[65ch] mx-auto lg:mx-0">
            <div className="space-y-16 md:space-y-24">
              
              {/* INTRO */}
              <section className="space-y-8">
                <p className="text-xl md:text-2xl font-medium leading-[1.6] text-[#1f1a17]">
                  Многие владельцы салонов красоты, массажных студий и бьюти-бизнесов в США, Канаде и Европе сталкиваются с одной и той же проблемой: деньги в рекламу вкладываются регулярно, но стабильного потока клиентов всё равно нет.
                </p>
                <div className="text-lg leading-[1.85] md:leading-[1.78] text-gray-600 space-y-6">
                  <p>Meta Ads, Instagram и TikTok могут приносить заявки, но при этом:</p>
                  <ul className="space-y-3 list-none pl-0 font-medium">
                    {['запись остаётся нестабильной', 'мастера простаивают', 'стоимость клиента слишком высокая', 'а часть обращений вообще теряется'].map((item) => (
                      <li key={item} className="flex items-start gap-4">
                        <span className="mt-3 h-1 w-1 flex-shrink-0 rounded-full bg-[#e8a16b]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-[#1f1a17] font-bold">
                    Проблема чаще всего не в самой рекламе. В большинстве случаев причина — в отсутствии системы: между рекламой, записью, CRM, обработкой заявок и повторными продажами.
                  </p>
                </div>
              </section>

              {/* WHY NO RESULTS */}
              <section className="space-y-8">
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Почему реклама салона красоты не работает</h2>
                <p className="text-lg leading-[1.85] md:leading-[1.78] text-gray-600">
                  Реклама может давать клики и сообщения, но если клиенту неудобно записаться, ему долго отвечают или нет понятного пути до покупки — деньги начинают “сливаться”.
                </p>
                <div className="py-8 border-y border-gray-100 text-xl text-[#1f1a17] font-medium leading-relaxed">
                  “Сегодня заявки есть — завтра их нет”. Такой подход делает поток клиентов непредсказуемым и мешает масштабироваться.
                </div>
                <p className="text-lg leading-[1.85] md:leading-[1.78] text-gray-600">
                  Многие бьюти-бизнесы запускают рекламу хаотично: тестируют разные объявления, меняют креативы, пробуют новые офферы, увеличивают бюджеты, но при этом не выстраивают саму систему продаж.
                </p>
              </section>

              {/* 7 REASONS DETAIL */}
              <section id="reasons" className="space-y-16 md:space-y-24">
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Самые частые причины неудачи</h2>
                
                <div className="space-y-16 md:space-y-20">
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold">1. Нет системы обработки заявок</h3>
                    <p className="text-lg leading-[1.85] md:leading-[1.78] text-gray-600">
                      Даже хорошие лиды могут не превращаться в записи, если клиенту отвечают слишком долго, нет CRM, заявки теряются между Instagram, WhatsApp и Telegram, а администратор отвечает по-разному каждому клиенту. Очень часто проблема находится не в рекламе, а в скорости и качестве коммуникации.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-bold">2. Сложная или неудобная запись</h3>
                    <p className="text-lg leading-[1.85] md:leading-[1.78] text-gray-600 font-medium">
                      Современный клиент хочет записаться быстро: без долгих переписок, без “напишите завтра”, без ожидания ответа администратора. Если путь от рекламы до записи занимает слишком много шагов, часть клиентов уходит к конкурентам. Особенно это критично для мобильного трафика.
                    </p>
                  </div>

                  <div className="space-y-6">
                    <h3 className="text-xl font-bold">3. Нет понятного оффера</h3>
                    <p className="text-lg leading-[1.85] md:leading-[1.78] text-gray-600">
                      Фраза: <span className="font-bold text-black italic">“Качественные услуги массажа”</span> не продаёт. Реклама работает лучше, когда человек сразу понимает проблему, которую решают, результат и почему стоит записаться сейчас.
                    </p>
                    <div className="flex flex-wrap gap-3">
                       {['Антистресс-массаж', 'Лимфодренаж', 'Массаж спины'].map(label => (
                         <span key={label} className="px-4 py-2 bg-white border border-gray-100 rounded-lg text-xs font-bold text-gray-400 uppercase tracking-wider">{label}</span>
                       ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-bold">4. Высокая стоимость клиента (CAC)</h3>
                    <p className="text-lg leading-[1.85] md:leading-[1.78] text-gray-600">
                      Многие смотрят только на цену заявки. Но дешёвый лид не всегда означает прибыль. Важно понимать, сколько клиентов реально доходят до записи, сколько возвращаются повторно и сколько приносит клиент за всё время. Иногда более дорогая заявка оказывается намного выгоднее.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-bold">5. Нет повторных продаж и системы удержания</h3>
                    <p className="text-lg leading-[1.85] md:leading-[1.78] text-gray-600">
                      Большинство салонов теряют деньги не потому, что не могут привлечь клиента, а потому что клиент не возвращается, нет напоминаний, нет повторной записи и автоматизации. Повторная продажа почти всегда дешевле нового привлечения.
                    </p>
                  </div>

                  <div className="grid gap-12 pt-4">
                    <div className="space-y-4">
                      <h3 className="text-xl font-bold">6. Нет аналитики</h3>
                      <p className="text-lg leading-[1.85] md:leading-[1.78] text-gray-600">
                        Бьюти-бизнесы часто не знают, сколько стоит клиент, какая реклама окупается и какие объявления реально приводят записи. Без аналитики реклама превращается в угадайку.
                      </p>
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-xl font-bold">7. Реклама существует отдельно от бизнеса</h3>
                      <p className="text-lg leading-[1.85] md:leading-[1.78] text-gray-600">
                        Одна из самых больших ошибок: реклама работает отдельно, CRM отдельно, администратор отдельно. Но клиент видит это как один путь. Если один этап слабый — конверсия падает.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* WHAT TO DO SECTION — Functional Whitespace Design */}
              <section id="solutions" className="pt-20 border-t border-gray-100 space-y-12">
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Что делать, если заявки есть, но нет записей</h2>
                <div className="space-y-12 text-lg leading-[1.85] md:leading-[1.78] text-gray-600">
                   <div className="space-y-4">
                      <h4 className="text-lg font-bold text-black">Быстрые ответы</h4>
                      <p>Чем быстрее человек получает ответ, тем выше вероятность записи. Особенно в нишах массажа, косметологии, спа и уходовых процедур.</p>
                   </div>
                   <div className="space-y-4">
                      <h4 className="text-lg font-bold text-black">Скрипты для WhatsApp и Instagram</h4>
                      <p>Администратор, отвечающий <span className="font-bold text-black">“Здравствуйте, цена 80$”</span>, теряет клиента. Нужен сценарий, который выявляет потребность, создаёт доверие и переводит в запись.</p>
                   </div>
                   <div className="space-y-4">
                      <h4 className="text-lg font-bold text-black">CRM и автоматизация</h4>
                      <p>CRM помогает не терять заявки, видеть путь клиента и контролировать повторные записи. Автоматизация критична, когда заявок становится больше.</p>
                   </div>
                   <div className="space-y-4">
                      <h4 className="text-lg font-bold text-black">Онлайн-запись 24/7</h4>
                      <p>Если клиент ищет услуги вечером и не может сразу записаться — он уходит. Онлайн-бронирование сильно повышает конверсию из рекламы.</p>
                   </div>
                </div>
              </section>

              {/* SYSTEM ELEMENTS — Light Editorial Look */}
              <section id="system" className="pt-20 border-t border-gray-100 space-y-12">
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Что должно быть в современной системе</h2>
                <div className="grid gap-8 md:grid-cols-2">
                   {[
                     { t: 'Реклама', d: 'Meta Ads, Instagram, TikTok, локальный таргетинг' },
                     { t: 'Посадочная страница', d: 'Понятный оффер, кейсы, отзывы, быстрый CTA' },
                     { t: 'CRM Аналитика', d: 'Контроль заявок, стоимости клиента и окупаемости' },
                     { t: 'Автоматизация', d: 'Напоминания, повторные записи, обработка лидов' }
                   ].map(item => (
                     <div key={item.t} className="p-6 bg-white border border-gray-100 rounded-xl">
                        <span className="block font-bold mb-2">{item.t}</span>
                        <span className="text-sm text-gray-500 font-medium leading-relaxed">{item.d} [2].</span>
                     </div>
                   ))}
                </div>
                <p className="text-lg leading-[1.85] text-gray-600">Когда реклама становится частью системы, бизнес получает стабильный поток, рост повторных записей и возможность масштабироваться без хаоса.</p>
              </section>

              {/* FAQ — Minimalist List */}
              <section id="faq" className="pt-20 border-t border-gray-100 space-y-12">
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Частые вопросы</h2>
                <div className="space-y-12">
                   {[
                     { q: 'Почему реклама не окупается?', a: 'Проблема чаще не в рекламе, а в воронке: слабый оффер, неудобная запись, отсутствие CRM или аналитики.' },
                     { q: 'Что важнее: реклама или CRM?', a: 'Одно без другого работает плохо. Реклама приводит людей, CRM помогает не терять их и превращать в постоянных клиентов.' },
                     { q: 'Какой нужен бюджет?', a: 'Зависит от города и ниши, но для тестового запуска часто достаточно от $300–500 [13].' }
                   ].map(item => (
                     <div key={item.q} className="space-y-4">
                        <h4 className="text-lg font-bold">{item.q}</h4>
                        <p className="text-gray-500 leading-[1.8] font-medium">{item.a}</p>
                     </div>
                   ))}
                </div>
              </section>

              {/* CONCLUSION */}
              <section className="pt-20 border-t border-gray-100">
                <p className="text-xl md:text-2xl font-medium leading-[1.6] text-[#1f1a17] mb-12">
                  Бьюти-бизнес — это система. Когда реклама, сайт, CRM и обработка заявок работают вместе — поток клиентов становится стабильнее, а бизнес растет предсказуемо.
                </p>
                <div className="flex items-center gap-5 p-8 bg-white border border-gray-100 rounded-xl">
                   <div className="h-14 w-14 rounded-full bg-gray-50 flex items-center justify-center text-[#e8a16b] font-bold text-sm">TN</div>
                   <div>
                      <p className="font-bold text-[#1f1a17]">Татьяна Новикова</p>
                      <p className="text-xs text-gray-400 font-medium">Стратег по системам привлечения клиентов для бьюти-бизнеса.</p>
                   </div>
                </div>
              </section>

            </div>
          </article>

          {/* 5. FUNCTIONAL SIDEBAR */}
          <aside className="hidden lg:block">
            <div className="sticky top-24 space-y-10">
              <div className="border-l border-gray-100 pl-8 space-y-10">
                <div className="space-y-6">
                  <div className="text-[10px] font-bold text-gray-300 uppercase tracking-widest">Contents</div>
                  <ul className="space-y-4 text-[13px] font-bold text-gray-400">
                    <li className="text-black flex items-center gap-3">
                      <div className="h-4 w-[2px] bg-[#e8a16b]"></div> 7 причин
                    </li>
                    <li className="hover:text-black transition-colors"><a href="#solutions">Решения</a></li>
                    <li className="hover:text-black transition-colors"><a href="#system">Система</a></li>
                    <li className="hover:text-black transition-colors"><a href="#faq">FAQ</a></li>
                  </ul>
                </div>

                <div className="space-y-4">
                   <div className="text-[10px] font-bold text-gray-300 uppercase tracking-widest">Reading time</div>
                   <div className="text-xs font-bold">~8 minutes</div>
                </div>
              </div>

              <div className="rounded-xl bg-[#1f1a17] p-8 text-white">
                <h5 className="text-base font-bold mb-4 leading-tight">Разбор вашей ситуации</h5>
                <a href="https://wa.me/972537086545?text=Здравствуйте!%20Хочу%20обсудить%20рекламу" className="text-[11px] font-bold uppercase text-[#e8a16b] hover:text-white transition-colors">
                  WhatsApp Direct →
                </a>
              </div>
            </div>
          </aside>
        </div>
      </main>

      

      
    </div>
  );
}
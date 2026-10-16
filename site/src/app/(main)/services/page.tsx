import type { Metadata } from 'next';
import Link from 'next/link';
import ContactCta from '@/components/ContactCta';
import PageIntro from '@/components/PageIntro';
import ResponsiveImage from '@/components/ResponsiveImage';
import StepFlow from '@/components/StepFlow';
import { getCases, getServices } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Услуги: реклама и система привлечения клиентов для бьюти-бизнеса',
  description: 'Аудит и стратегия, запуск рекламы в Instagram, Facebook и TikTok, работа с заявками, ведение и оптимизация рекламы.',
};

const steps = [
  { title: 'Вы пишете', icon: 'chat', text: 'Коротко о бизнесе: ниша, город, что уже пробовали и какая задача сейчас.' },
  { title: 'Разбираем ситуацию', icon: 'search', text: 'Смотрю рекламу, воронку и обработку заявок, задаю уточняющие вопросы.' },
  { title: 'Предлагаю план', icon: 'plan', text: 'Говорю, с какой услуги разумно начать, что для этого нужно и какой бюджет заложить.' },
  { title: 'Запуск и работа', icon: 'growth', text: 'Запускаем рекламу, следим за заявками и записями и улучшаем то, что даёт результат.' },
];

export default function ServicesPage() {
  const services = getServices();
  const cases = getCases().slice(0, 3);
  return (
    <main className="bg-gray-50 pb-24 text-gray-900">
      <PageIntro
        eyebrow="Услуги"
        title="Чем я помогаю бьюти-бизнесу"
        text="Можно начать с разбора текущей рекламы, с запуска с нуля или с ведения уже работающей рекламы."
        image={{ src: '/tatyana-richmann-studiya-belyj.jpg', alt: 'Татьяна Ричманн, специалист по таргетированной рекламе' }}
      />


      <div className="mx-auto grid max-w-6xl gap-6 px-5 md:grid-cols-2 md:px-10">
        {services.map((s) => (
          <section
            key={s.title}
            className={`flex flex-col rounded-[32px] p-8 ${s.featured ? 'bg-black text-white' : 'bg-white shadow-sm'}`}
          >
            <h2 className="text-2xl font-black">{s.title}</h2>
            <p className={`mt-4 leading-relaxed ${s.featured ? 'text-white/80' : 'text-gray-600'}`}>{s.text}</p>
            {s.includes.length > 0 && (
              <>
                <p className={`mt-6 text-xs font-bold uppercase tracking-widest ${s.featured ? 'text-[#e8a16b]' : 'text-[#a35f2c]'}`}>
                  Что входит
                </p>
                <ul className="mt-3 space-y-2">
                  {s.includes.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="text-[#e8a16b]">✓</span>
                      <span className={s.featured ? 'text-white/90' : 'text-gray-700'}>{item}</span>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </section>
        ))}
      </div>

      <section className="mx-auto mt-20 max-w-6xl px-5 md:px-10">
        <h2 className="text-3xl font-black md:text-4xl">Как начинаем работу</h2>
        <StepFlow steps={steps} />
      </section>

      {cases.length > 0 && (
        <section className="mx-auto mt-20 max-w-6xl px-5 md:px-10">
          <h2 className="text-3xl font-black md:text-4xl">Результаты клиентов</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {cases.map((c) => (
              <Link
                key={c.slug}
                href={`/cases/${c.slug}`}
                className="flex flex-col overflow-hidden rounded-3xl bg-white shadow-sm transition hover:shadow-md"
              >
                {c.cover ? (
                  <ResponsiveImage sizes="(min-width: 768px) 33vw, 100vw" src={c.cover} alt={c.card_title} className="aspect-[3/2] w-full object-cover" />
                ) : (
                  <span className="flex aspect-[3/2] w-full items-center justify-center bg-gradient-to-br from-[#fff1e4] to-[#e8a16b]/50 px-6 text-center text-2xl font-black text-[#a35f2c]">
                    {[c.niche_label, c.country].filter(Boolean).join(' · ')}
                  </span>
                )}
                <div className="flex flex-1 flex-col p-6">
                <p className="text-xs font-bold uppercase tracking-widest text-[#a35f2c]">
                  {[c.niche_label, c.country].filter(Boolean).join(' · ')}
                </p>
                <p className="mt-3 text-xl font-black">{c.summary_result || c.card_title}</p>
                <span className="mt-auto pt-4 text-sm font-bold text-[#a35f2c]">Читать кейс →</span>
                </div>
              </Link>
            ))}
          </div>
          <Link href="/cases" className="mt-6 inline-block font-bold text-[#a35f2c] underline">
            Все кейсы →
          </Link>
        </section>
      )}

      <ContactCta
        title="Не знаете, с чего начать?"
        text="Опишите задачу в сообщении, и я подскажу, какая услуга подойдёт именно вам."
      />
    </main>
  );
}

import type { Metadata } from 'next';
import Link from 'next/link';
import ContactCta from '@/components/ContactCta';
import PageIntro from '@/components/PageIntro';
import { getCases, getServices } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Услуги: реклама и система привлечения клиентов для бьюти-бизнеса',
  description: 'Аудит и стратегия, запуск рекламы в Instagram, Facebook и TikTok, работа с заявками, ведение и оптимизация рекламы.',
};

const steps = [
  { title: 'Вы пишете', text: 'Коротко о бизнесе: ниша, город, что уже пробовали и какая задача сейчас.' },
  { title: 'Разбираем ситуацию', text: 'Смотрю рекламу, воронку и обработку заявок, задаю уточняющие вопросы.' },
  { title: 'Предлагаю план', text: 'Говорю, с какой услуги разумно начать, что для этого нужно и какой бюджет заложить.' },
  { title: 'Запуск и работа', text: 'Запускаем рекламу, следим за заявками и записями и улучшаем то, что даёт результат.' },
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
      />

      <div className="mx-auto max-w-6xl px-5 md:px-10">
        <Link
          href="/razbor"
          className="mb-6 flex flex-col gap-2 rounded-[32px] border-2 border-[#e8a16b] bg-white p-6 transition hover:shadow-md md:flex-row md:items-center md:justify-between"
        >
          <span>
            <span className="block text-xl font-black">Бесплатный разбор рекламы и профиля</span>
            <span className="mt-1 block text-gray-600">Покажу, где теряются клиенты: в рекламе, профиле, переписке или на записи.</span>
          </span>
          <span className="font-bold text-[#a35f2c]">Подробнее →</span>
        </Link>
      </div>

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
        <ol className="mt-8 grid gap-4 md:grid-cols-4">
          {steps.map((st, i) => (
            <li key={st.title} className="rounded-3xl bg-white p-6 shadow-sm">
              <p className="text-3xl font-black text-[#e8a16b]">{i + 1}</p>
              <p className="mt-3 font-bold">{st.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">{st.text}</p>
            </li>
          ))}
        </ol>
      </section>

      {cases.length > 0 && (
        <section className="mx-auto mt-20 max-w-6xl px-5 md:px-10">
          <h2 className="text-3xl font-black md:text-4xl">Результаты клиентов</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {cases.map((c) => (
              <Link
                key={c.slug}
                href={`/cases/${c.slug}`}
                className="flex flex-col rounded-3xl bg-white p-6 shadow-sm transition hover:shadow-md"
              >
                <p className="text-xs font-bold uppercase tracking-widest text-[#a35f2c]">
                  {[c.niche_label, c.country].filter(Boolean).join(' · ')}
                </p>
                <p className="mt-3 text-xl font-black">{c.summary_result || c.card_title}</p>
                <span className="mt-auto pt-4 text-sm font-bold text-[#a35f2c]">Читать кейс →</span>
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

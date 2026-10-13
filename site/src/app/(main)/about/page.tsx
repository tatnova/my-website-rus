import type { Metadata } from 'next';
import Link from 'next/link';
import ContactCta from '@/components/ContactCta';
import ResponsiveImage from '@/components/ResponsiveImage';
import { getCases, getNiches, getSettings } from '@/lib/content';
import { LANDINGS_LIVE, nicheUrl } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Обо мне',
  description:
    'Татьяна Ричманн: таргетированная реклама с 2018 года. Работаю с бьюти-бизнесом в Европе, Америке и Азии: веду рекламу и анализирую весь путь клиента до записи и покупки.',
};

const principles = [
  {
    title: 'Считаю записи и прибыль, а не клики',
    text: 'Анализирую весь путь клиента: обращения, диалоги, записи и фактические покупки. Данные о записях и продажах получаю от вас напрямую или из CRM, если она есть.',
  },
  {
    title: 'Решения под задачу',
    text: 'Сайт, посадочную страницу, CRM или автоматизацию предлагаю только тогда, когда они нужны для задачи проекта.',
  },
  {
    title: 'Сама веду проекты',
    text: 'Отвечаю за стратегию и рекламные кампании. Для дизайна и SMM подключаю специалистов на аутсорсе.',
  },
];


export default function AboutPage() {
  const s = getSettings();
  const niches = getNiches().map((n) => ({ name: n.name, url: LANDINGS_LIVE && n.published ? `${nicheUrl(n.subdomain)}/` : '' }));
  const cases = getCases().slice(0, 3);
  return (
    <main className="bg-white pb-24 text-gray-900">
      <section className="px-5 pb-12 pt-14 md:px-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 md:flex-row md:gap-16">
          <div className="w-full max-w-sm overflow-hidden rounded-[40px] border-8 border-[#fff1e4] bg-gray-100 shadow-xl md:w-2/5">
            <ResponsiveImage
              priority
              sizes="(min-width: 768px) 40vw, 100vw"
              src={s.about_photo}
              alt={s.name}
              className="aspect-[3/4] h-full w-full object-cover"
            />
          </div>
          <div className="md:w-3/5">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#9b6b43]">Обо мне</p>
            <h1 className="text-4xl font-black leading-tight md:text-6xl">{s.name}</h1>
            <p className="mt-6 text-2xl font-bold leading-snug">Занимаюсь таргетированной рекламой с 2018 года.</p>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Специализируюсь на бьюти-индустрии и сложных воронках продаж. Помогаю мастерам, студиям и салонам
              выстроить систему, в которой реклама приводит заявки, а заявки превращаются в записи.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/cases" className="rounded-full bg-black px-6 py-3 text-sm font-bold text-white">
                Смотреть кейсы
              </Link>
              <Link href="/services" className="rounded-full border border-gray-300 px-6 py-3 text-sm font-bold">
                Услуги
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 px-5 py-16 md:px-10">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-black md:text-4xl">Как я работаю</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {principles.map((p) => (
              <div key={p.title} className="rounded-3xl bg-white p-6 shadow-sm">
                <p className="text-lg font-black">{p.title}</p>
                <p className="mt-3 leading-relaxed text-gray-600">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-2 md:px-10">
        <div>
          <h2 className="text-2xl font-black md:text-3xl">С кем работаю</h2>
          <div className="mt-6 flex flex-wrap gap-2">
            {niches.map((n) =>
              n.url ? (
                <a key={n.name} href={n.url} className="rounded-full bg-[#fff1e4] px-4 py-2 text-sm font-bold text-[#a35f2c] underline">
                  {n.name}
                </a>
              ) : (
                <span key={n.name} className="rounded-full bg-[#fff1e4] px-4 py-2 text-sm font-bold text-[#a35f2c]">
                  {n.name}
                </span>
              ),
            )}
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-black md:text-3xl">География</h2>
          <p className="mt-6 text-lg leading-relaxed text-gray-600">Работаю с проектами в Европе, Америке и Азии.</p>
        </div>
      </section>

      {cases.length > 0 && (
        <section className="mx-auto max-w-6xl px-5 md:px-10">
          <h2 className="text-3xl font-black md:text-4xl">Результаты клиентов</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {cases.map((c) => (
              <Link
                key={c.slug}
                href={`/cases/${c.slug}`}
                className="flex flex-col rounded-3xl border border-gray-100 bg-white p-6 shadow-sm transition hover:shadow-md"
              >
                <p className="text-xs font-bold uppercase tracking-widest text-[#a35f2c]">
                  {[c.niche_label, c.country].filter(Boolean).join(' · ')}
                </p>
                <p className="mt-3 text-xl font-black">{c.summary_result || c.card_title}</p>
                <span className="mt-auto pt-4 text-sm font-bold text-[#a35f2c]">Читать кейс →</span>
              </Link>
            ))}
          </div>
          <p className="mt-6 flex flex-wrap gap-6">
            <Link href="/cases" className="font-bold text-[#a35f2c] underline">
              Все кейсы →
            </Link>
            <Link href="/reviews" className="font-bold text-[#a35f2c] underline">
              Отзывы клиентов →
            </Link>
          </p>
        </section>
      )}

      <ContactCta title="Обсудим ваш проект?" text="Напишите, чем занимаетесь и в каком городе, и я отвечу, с чего начать." />
    </main>
  );
}

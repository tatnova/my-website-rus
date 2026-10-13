import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ResponsiveImage from '@/components/ResponsiveImage';
import { CASE_METRICS, getCase, getCases, getSettings, nicheName } from '@/lib/content';

// Каждый кейс из content/cases/ становится отдельной страницей при сборке.
export const dynamicParams = false;

export function generateStaticParams() {
  return getCases().map((c) => ({ slug: c.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const c = getCase((await params).slug);
  if (!c) return {};
  return {
    title: { absolute: c.seo_title },
    description: c.description,
    openGraph: c.cover ? { images: [c.cover] } : undefined,
  };
}

export default async function CasePage({ params }: Props) {
  const c = getCase((await params).slug);
  if (!c) notFound();
  const s = getSettings();
  const wa = `https://wa.me/${s.whatsapp_phone}`;
  const tg = `https://t.me/${s.telegram_username}`;
  const metrics = CASE_METRICS.filter(([key]) => c[key]);
  const place = [c.country, c.city].filter(Boolean).join(', ');
  const eyebrow = ['Кейс', c.niche_label || c.niches.map(nicheName).join(', ').toLowerCase(), place]
    .filter(Boolean)
    .join(' · ');

  return (
    <main className="bg-[#fff8f1] text-gray-900">
      <article className="mx-auto max-w-3xl px-5 py-10 md:py-16">
        <Link href="/cases" className="text-sm font-bold text-[#c97d45]">
          ← Все кейсы
        </Link>

        <p className="mt-8 text-xs font-black uppercase tracking-[0.25em] text-[#c97d45]">{eyebrow}</p>

        <h1 className="mt-4 text-3xl font-black leading-tight md:text-5xl">{c.title}</h1>

        {c.lead && <p className="mt-5 text-lg leading-8 text-gray-600">{c.lead}</p>}

        <div className="mt-7 flex flex-wrap gap-3">
          <a href={wa} target="_blank" className="rounded-full bg-black px-6 py-3 text-sm font-bold text-white">
            WhatsApp
          </a>
          <a href={tg} target="_blank" className="rounded-full border border-gray-300 bg-white px-6 py-3 text-sm font-bold">
            Telegram
          </a>
        </div>

        {metrics.length > 0 && (
          <section className="mt-10 rounded-3xl bg-white p-5 shadow-sm md:p-7">
            <h2 className="text-2xl font-black">Результат в цифрах</h2>
            <dl className="mt-5 grid grid-cols-2 gap-3">
              {metrics.map(([key, label]) => (
                <div key={key} className="border-b border-gray-100 pb-3">
                  <dt className="text-xs font-bold uppercase tracking-widest text-gray-400">{label}</dt>
                  <dd className="mt-1 text-xl font-black text-[#c97d45]">{c[key] as string}</dd>
                </div>
              ))}
            </dl>
          </section>
        )}

        <div
          className="case-body mt-10 text-[18px] leading-8 text-gray-800"
          dangerouslySetInnerHTML={{ __html: c.html }}
        />

        <Gallery title="Рекламные макеты" items={c.creatives} />
        <Gallery title="Скриншоты из рекламного кабинета" items={c.proof} />

        <section className="mt-12 rounded-3xl bg-black p-6 text-white">
          <h2 className="text-2xl font-black">Хотите такой же разбор?</h2>
          <p className="mt-3 text-white/70">
            Напишите мне в WhatsApp или Telegram — разберём ваш проект, бюджет и точки роста.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <a href={wa} target="_blank" className="rounded-full bg-white px-6 py-3 text-sm font-bold text-black">
              WhatsApp
            </a>
            <a href={tg} target="_blank" className="rounded-full border border-white/30 px-6 py-3 text-sm font-bold text-white">
              Telegram
            </a>
          </div>
        </section>
      </article>
    </main>
  );
}

function Gallery({ title, items }: { title: string; items: { image: string; caption?: string }[] }) {
  if (!items.length) return null;
  return (
    <section className="mt-12">
      <h2 className="text-2xl font-black">{title}</h2>
      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        {items.map((item) => (
          <figure key={item.image} className="overflow-hidden rounded-2xl bg-white shadow-sm">
            <ResponsiveImage
              src={item.image}
              alt={item.caption || title}
              sizes="(min-width: 768px) 360px, 100vw"
              className="h-auto w-full"
            />
            {item.caption && <figcaption className="p-3 text-sm text-gray-500">{item.caption}</figcaption>}
          </figure>
        ))}
      </div>
    </section>
  );
}

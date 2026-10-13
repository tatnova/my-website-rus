import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import type { CSSProperties } from 'react';
import ResponsiveImage from '@/components/ResponsiveImage';
import { CookieSettingsLink } from '@/components/CookieConsent';
import { getCases, getNiche, getNiches, getReviews, getSettings, inlineMarkdown } from '@/lib/content';
import { LANDINGS_LIVE, SITE_URL, nicheUrl } from '@/lib/site';
import manifest from '@/lib/image-manifest.json';

// Один шаблон для всех нишевых лендингов. Тексты, цифры и вопросы берутся из content/niches/<ниша>.yml,
// кейсы и отзывы — из content/cases и content/reviews по полю «ниши».
export const dynamicParams = false;

export function generateStaticParams() {
  return getNiches().map((n) => ({ niche: n.id }));
}

type Props = { params: Promise<{ niche: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const n = getNiche((await params).niche);
  if (!n) return {};
  const url = nicheUrl(n.subdomain);
  const live = LANDINGS_LIVE && n.published;
  return {
    metadataBase: new URL(url),
    title: { absolute: n.seo_title },
    description: n.description,
    alternates: { canonical: `${url}/` },
    robots: live ? undefined : { index: false, follow: false },
    openGraph: {
      type: 'website',
      locale: 'ru_RU',
      url: `${url}/`,
      title: n.seo_title,
      description: n.description,
      images: n.hero_image ? [n.hero_image] : undefined,
    },
  };
}

export default async function NicheLandingPage({ params }: Props) {
  const n = getNiche((await params).niche);
  if (!n) notFound();
  const s = getSettings();
  const cases = getCases().filter((c) => c.niches.includes(n.id));
  const reviews = getReviews().filter((r) => r.niches.includes(n.id));
  const message = n.contact_message ? `?text=${encodeURIComponent(n.contact_message)}` : '';
  const wa = `https://wa.me/${s.whatsapp_phone}${message}`;
  const tg = `https://t.me/${s.telegram_username}${message}`;
  const about = n.about_text || s.about_text;
  const style = { '--accent': n.accent } as CSSProperties;
  // Горизонтальное фото показываем в горизонтальной рамке, чтобы не обрезать людей по краям.
  const heroMeta = (manifest as Record<string, { width: number; height: number }>)[n.hero_image];
  const heroLandscape = heroMeta ? heroMeta.width > heroMeta.height : false;

  const [beforeAccent, afterAccent] =
    n.hero_accent && n.hero_title.includes(n.hero_accent)
      ? n.hero_title.split(n.hero_accent, 2)
      : [n.hero_title, null];

  const buttons = (className = '') => (
    <div className={`flex flex-col gap-4 sm:flex-row ${className}`}>
      <a
        href={wa}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center justify-center gap-2 rounded-full bg-[#1a8f4c] px-8 py-4 font-bold text-white shadow-xl transition hover:scale-105"
      >
        💬 {n.whatsapp_label}
      </a>
      <a
        href={tg}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0077b3] px-8 py-4 font-bold text-white shadow-xl transition hover:scale-105"
      >
        ✈️ {n.telegram_label}
      </a>
    </div>
  );

  return (
    <div style={style} className="bg-white font-sans text-[#1f1a17]">
      <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <a href={SITE_URL} className="text-lg font-black tracking-tight">
          {s.name}
        </a>
        <a href={wa} target="_blank" rel="noreferrer" className="rounded-full bg-black px-5 py-2.5 text-sm font-bold text-white">
          Написать
        </a>
      </header>

      <main>
        {/* 1. Оффер */}
        <section className="mx-auto flex max-w-7xl flex-col items-center gap-16 px-6 pb-24 pt-12 md:flex-row md:pt-20">
          <div className="flex-1">
            {n.badge && (
              <div className="mb-6 inline-block rounded-lg bg-[#fff1e4] px-4 py-2 text-sm font-bold uppercase tracking-widest text-[#a35f2c]">
                {n.badge}
              </div>
            )}
            <h1 className="mb-8 text-5xl font-black leading-none tracking-tighter md:text-7xl">
              {beforeAccent}
              {afterAccent !== null && (
                <>
                  <span className="text-[var(--accent)]">{n.hero_accent}</span>
                  {afterAccent}
                </>
              )}
            </h1>
            {n.hero_text && (
              <p
                className="mb-10 max-w-xl text-xl font-medium text-gray-600 md:text-2xl"
                dangerouslySetInnerHTML={{ __html: inlineMarkdown(n.hero_text) }}
              />
            )}
            {buttons('mt-6')}
          </div>
          {n.hero_image && (
            <div className="relative w-full flex-1">
              <div className={`${heroLandscape ? 'aspect-[4/3]' : 'aspect-[4/5]'} w-full overflow-hidden rounded-[40px] border-8 border-gray-50 bg-gray-100 shadow-2xl`}>
                <ResponsiveImage
                  priority
                  sizes="(min-width: 768px) 50vw, 100vw"
                  src={n.hero_image}
                  alt={n.hero_image_alt || n.name}
                  className="h-full w-full object-cover"
                />
              </div>
              {n.hero_stat_value && (
                <div className="absolute -bottom-8 -left-8 hidden rounded-3xl border bg-white p-8 shadow-2xl md:block">
                  <p className="text-4xl font-black text-[var(--accent)]">{n.hero_stat_value}</p>
                  <p className="mt-2 text-xs font-bold uppercase tracking-widest text-gray-500">{n.hero_stat_label}</p>
                </div>
              )}
            </div>
          )}
        </section>

        {/* 2. Цифры из кейсов ниши */}
        {n.stats.length > 0 && (
          <section className="border-y border-gray-100 bg-[#fff8f1] px-6 py-12">
            <div className="mx-auto grid max-w-7xl gap-8 text-center sm:grid-cols-3">
              {n.stats.map((st) => {
                const inner = (
                  <>
                    <p className="text-4xl font-black text-[var(--accent)] md:text-5xl">{st.value}</p>
                    <p className="mt-2 text-sm font-bold uppercase tracking-widest text-gray-500">{st.label}</p>
                  </>
                );
                // Цифра со ссылкой на кейс, из которого она взята.
                return st.case ? (
                  <a key={st.value + st.label} href={`${SITE_URL}/cases/${st.case}`} className="block transition hover:opacity-80">
                    {inner}
                  </a>
                ) : (
                  <div key={st.value + st.label}>{inner}</div>
                );
              })}
            </div>
          </section>
        )}

        {/* 4. Кейсы ниши: выжимка, полный кейс на основном сайте */}
        {cases.length > 0 && (
          <section className="bg-gray-900 px-6 py-24 text-white">
            <div className="mx-auto max-w-7xl">
              <h2 className="mb-16 text-4xl font-black uppercase italic tracking-tighter md:text-6xl">{n.cases_title}</h2>
              <div className="grid gap-8 md:grid-cols-3">
                {cases.map((c) => (
                  <a
                    key={c.slug}
                    href={`${SITE_URL}/cases/${c.slug}`}
                    className="flex flex-col rounded-[40px] border border-white/10 bg-white/5 p-8 transition hover:bg-white/10"
                  >
                    <p className="mb-4 text-xs font-bold uppercase text-[var(--accent)]">
                      {[c.niche_label, c.country].filter(Boolean).join(' · ')}
                    </p>
                    <h3 className="mb-4 text-2xl font-black">{c.summary_result || c.card_title}</h3>
                    {c.summary_action && <p className="mb-6 text-sm italic text-gray-400">{c.summary_action}</p>}
                    <span className="mt-auto text-sm font-bold text-[var(--accent)]">Подробнее о кейсе →</span>
                  </a>
                ))}
              </div>
              {buttons('mt-16')}
            </div>
          </section>
        )}

        {/* 6. Кто ведёт проект */}
        <section className="mx-auto flex max-w-7xl flex-col items-center gap-16 px-6 py-24 md:flex-row">
          <div className="flex-1">
            <h2 className="mb-8 text-4xl font-black tracking-tighter md:text-6xl">Кто ведёт ваш проект</h2>
            <p className="mb-6 text-xl font-bold uppercase tracking-widest text-[#a35f2c]">{s.name}</p>
            {about && <p className="mb-8 text-lg leading-relaxed text-gray-600">{about}</p>}
            {buttons()}
          </div>
          {s.about_photo && (
            <div className="flex-1">
              <ResponsiveImage
                sizes="320px"
                src={s.about_photo}
                alt={s.name}
                className="mx-auto h-80 w-80 rounded-full border-8 border-[#fff1e4] object-cover shadow-2xl"
              />
            </div>
          )}
        </section>

        {/* 5. Отзывы ниши */}
        {reviews.length > 0 && (
          <section className="bg-gray-50 px-6 py-24">
            <div className="mx-auto max-w-7xl text-center">
              <h2 className="mb-16 text-4xl font-black uppercase tracking-tighter">{n.reviews_title}</h2>
              <div className="grid gap-12 text-left md:grid-cols-2">
                {reviews.map((r) => (
                  <figure key={r.slug} className="rounded-[40px] bg-white p-10 italic text-gray-600 shadow-sm">
                    <blockquote className="mb-6 text-lg leading-relaxed">{r.text}</blockquote>
                    <figcaption className="text-sm font-black uppercase tracking-widest text-[#a35f2c]">— {r.author}</figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </section>
        )}

        {n.prices.length > 0 && (
          <section className="mx-auto max-w-3xl px-6 py-24">
            <h2 className="mb-10 text-center text-3xl font-black">Цены</h2>
            <div className="divide-y rounded-3xl border">
              {n.prices.map((p) => (
                <div key={p.service} className="flex items-start justify-between gap-6 p-6">
                  <div>
                    <p className="font-bold">{p.service}</p>
                    {p.note && <p className="mt-1 text-sm text-gray-500">{p.note}</p>}
                  </div>
                  <p className="whitespace-nowrap font-black text-[#a35f2c]">{p.price}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 7. Вопросы и ответы */}
        {n.faq.length > 0 && (
          <section className="mx-auto max-w-3xl px-6 py-24">
            <h2 className="mb-12 text-center text-3xl font-black uppercase tracking-widest">Вопросы</h2>
            <div className="space-y-4">
              {n.faq.map((f) => (
                <details key={f.q} className="group overflow-hidden rounded-2xl border">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-6 font-bold">
                    <span>{f.q}</span>
                    <span className="text-[var(--accent)] group-open:rotate-45">+</span>
                  </summary>
                  <div className="border-t bg-gray-50/50 p-6 text-gray-600">{f.a}</div>
                </details>
              ))}
            </div>
          </section>
        )}

        {/* 8. Финальный призыв */}
        <section className="bg-[#fff8f1] px-6 py-24 text-center">
          <div className="mx-auto flex max-w-3xl flex-col items-center">
            {n.final_title && <h2 className="mb-6 text-4xl font-black tracking-tighter md:text-5xl">{n.final_title}</h2>}
            {n.final_text && <p className="mb-10 text-xl text-gray-600">{n.final_text}</p>}
            {buttons()}
          </div>
        </section>
      </main>

      <footer className="border-t border-gray-100 px-6 py-10 text-center text-xs text-gray-500">
        <div className="flex flex-wrap justify-center gap-4">
          <a href={SITE_URL} className="underline hover:text-black">
            Все услуги и кейсы
          </a>
          <a href={`${SITE_URL}/privacy-policy`} className="underline hover:text-black">
            Политика конфиденциальности
          </a>
          <CookieSettingsLink className="underline hover:text-black" />
        </div>
        <p className="mt-6 uppercase tracking-[0.3em]">© 2026 {s.name}</p>
      </footer>
    </div>
  );
}

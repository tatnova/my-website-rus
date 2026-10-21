import type { Metadata } from 'next';
import Link from 'next/link';
import ResponsiveImage from '@/components/ResponsiveImage';
import { getCases, getNiches } from '@/lib/content';
import { landingUrl } from '@/lib/site';

export const metadata: Metadata = {
  title: { absolute: 'Paid social case studies — Tatyana Richmann' },
  description:
    'Facebook and Instagram ad case studies for massage studios, med spas, osteopaths, dance studios and beauty businesses, with real Ads Manager numbers.',
};

// Каталог английских кейсов и ссылки на английские лендинги ниш.
export default function CasesEnPage() {
  const cases = getCases('en');
  const niches = getNiches('en').filter((n) => n.published);
  return (
    <main className="mx-auto max-w-5xl px-5 pb-20 pt-6">
      <p className="text-xs font-black uppercase tracking-[0.25em] text-[#c97d45]">Case studies</p>
      <h1 className="mt-4 text-3xl font-black leading-tight md:text-5xl">Paid social case studies with real numbers</h1>
      <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-600">
        Every number comes from Ads Manager. A conversation or a lead is an inquiry, not a paid booking: where there is no
        booking data, I don&apos;t claim any.
      </p>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {cases.map((c) => (
          <Link key={c.slug} href={`/en/cases/${c.slug}`} className="flex flex-col overflow-hidden rounded-3xl bg-white shadow-sm transition hover:shadow-md">
            {c.cover && (
              <ResponsiveImage src={c.cover} alt={c.card_title} sizes="(min-width: 768px) 480px, 100vw" className="aspect-[16/9] w-full object-cover" />
            )}
            <div className="flex flex-1 flex-col p-6">
              <p className="text-xs font-bold uppercase tracking-widest text-[#c97d45]">
                {[c.niche_label, c.country].filter(Boolean).join(' · ')}
              </p>
              <h2 className="mt-3 text-xl font-black">{c.card_title}</h2>
              {c.summary_action && <p className="mt-3 text-sm text-gray-600">{c.summary_action}</p>}
              <span className="mt-auto pt-5 text-sm font-bold text-[#c97d45]">Read the case study →</span>
            </div>
          </Link>
        ))}
      </div>
      {niches.length > 0 && (
        <section className="mt-16">
          <h2 className="text-2xl font-black">Ads by niche</h2>
          <div className="mt-5 flex flex-wrap gap-3">
            {niches.map((n) => (
              <a key={n.id} href={landingUrl(n, 'en')} className="rounded-full border border-[#e8a16b] bg-white px-5 py-2.5 text-sm font-bold text-[#a35f2c] hover:bg-[#fff1e4]">
                {n.name} →
              </a>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}

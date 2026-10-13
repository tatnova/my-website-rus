import type { Metadata } from 'next';
import PageIntro from '@/components/PageIntro';
import ResponsiveImage from '@/components/ResponsiveImage';
import { getReviews, nicheName } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Отзывы клиентов',
  description: 'Отзывы мастеров, салонов и студий о работе с Татьяной Ричманн: реклама, заявки и система привлечения клиентов.',
};

export default function ReviewsPage() {
  const reviews = getReviews();
  return (
    <main className="bg-[#fff8f1] pb-24 text-gray-900">
      <PageIntro eyebrow="Отзывы" title="Что говорят клиенты" />
      <div className="mx-auto grid max-w-6xl gap-6 px-5 md:grid-cols-2 md:px-10">
        {reviews.map((r) => (
          <figure key={r.slug} className="rounded-[32px] bg-white p-6 shadow-sm md:p-8">
            {r.screenshot && (
              <ResponsiveImage
                src={r.screenshot}
                alt={`Отзыв: ${r.author}`}
                sizes="(min-width: 768px) 520px, 100vw"
                className="mb-6 h-auto w-full rounded-2xl"
              />
            )}
            <blockquote className="text-xl italic leading-relaxed text-gray-800">{r.text}</blockquote>
            <figcaption className="mt-6 text-sm font-black uppercase tracking-widest text-[#a35f2c]">
              — {r.author}
              {(r.niches.length > 0 || r.country) && (
                <span className="mt-1 block font-semibold normal-case tracking-normal text-gray-500">
                  {[...r.niches.map(nicheName), r.country].filter(Boolean).join(' · ')}
                </span>
              )}
            </figcaption>
          </figure>
        ))}
      </div>
    </main>
  );
}

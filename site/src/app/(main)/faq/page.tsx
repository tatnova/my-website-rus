import type { Metadata } from 'next';
import PageIntro from '@/components/PageIntro';
import { getFaq } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Вопросы и ответы о рекламе для бьюти-бизнеса',
  description: 'Ответы на частые вопросы о рекламе, заявках, CRM и масштабировании для салонов красоты, мастеров и студий.',
};

export default function FaqPage() {
  const faq = getFaq();
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  };
  return (
    <main className="bg-white pb-24 text-gray-900">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <PageIntro eyebrow="Вопросы и ответы" title="Частые вопросы" />
      <div className="mx-auto max-w-4xl space-y-4 px-5 md:px-10">
        {faq.map((f) => (
          <details key={f.q} className="group rounded-2xl border border-gray-200">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-6 text-lg font-bold">
              <h2>{f.q}</h2>
              <span className="text-[#c97d45] group-open:rotate-45">+</span>
            </summary>
            <p className="border-t px-6 py-5 leading-relaxed text-gray-600">{f.a}</p>
          </details>
        ))}
      </div>
    </main>
  );
}

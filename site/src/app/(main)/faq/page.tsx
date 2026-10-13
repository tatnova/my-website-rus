import type { Metadata } from 'next';
import ContactCta from '@/components/ContactCta';
import PageIntro from '@/components/PageIntro';
import { getFaq, inlineMarkdown } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Вопросы и ответы о рекламе для бьюти-бизнеса',
  description: 'Как начать работу, с какими нишами и странами я работаю, и ответы на частые вопросы о рекламе, заявках, CRM и масштабировании.',
};

const topics = [
  { id: 'start', title: 'Как начать работу' },
  { id: 'results', title: 'Реклама и результат' },
];

// Текст ответа без markdown-разметки ссылок, для разметки FAQPage.
const plain = (text: string) => text.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1');

export default function FaqPage() {
  const faq = getFaq();
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: plain(f.a) } })),
  };
  const groups = topics
    .map((t) => ({ ...t, items: faq.filter((f) => f.topic === t.id) }))
    .filter((g) => g.items.length > 0);
  const other = faq.filter((f) => !topics.some((t) => t.id === f.topic));
  if (other.length > 0) groups.push({ id: 'other', title: 'Другие вопросы', items: other });

  return (
    <main className="bg-white pb-24 text-gray-900">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <PageIntro
        eyebrow="Вопросы и ответы"
        title="Частые вопросы"
        text="Не нашли ответ? Напишите в WhatsApp или Telegram, и я отвечу лично."
      />
      <div className="mx-auto max-w-4xl space-y-14 px-5 md:px-10">
        {groups.map((g) => (
          <section key={g.id}>
            <h2 className="mb-6 text-2xl font-black md:text-3xl">{g.title}</h2>
            <div className="space-y-4">
              {g.items.map((f) => (
                <details key={f.q} className="group rounded-2xl border border-gray-200">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-6 text-lg font-bold">
                    <h3>{f.q}</h3>
                    <span className="text-[#c97d45] group-open:rotate-45">+</span>
                  </summary>
                  <p
                    className="border-t px-6 py-5 leading-relaxed text-gray-600 [&_a]:font-bold [&_a]:text-[#a35f2c] [&_a]:underline"
                    dangerouslySetInnerHTML={{ __html: inlineMarkdown(f.a) }}
                  />
                </details>
              ))}
            </div>
          </section>
        ))}
      </div>
      <ContactCta title="Остались вопросы?" text="Расскажите о вашем бизнесе, и я отвечу, что можно сделать в вашей ситуации." />
    </main>
  );
}

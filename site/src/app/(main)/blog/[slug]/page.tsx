import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ContactCta from '@/components/ContactCta';
import { getArticle, getArticles } from '@/lib/content';
import { SITE_URL } from '@/lib/site';

// Статьи из content/articles/. Статьи, у которых есть своя папка в app/(main)/blog/, сюда не попадают.
export const dynamicParams = false;

export function generateStaticParams() {
  return getArticles().map((a) => ({ slug: a.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const a = getArticle((await params).slug);
  if (!a) return {};
  return {
    title: { absolute: a.seo_title },
    description: a.description,
    alternates: { canonical: `${SITE_URL}/blog/${a.slug}` },
    openGraph: a.cover ? { images: [a.cover] } : undefined,
  };
}

const dateFormat = new Intl.DateTimeFormat('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' });

export default async function MarkdownArticlePage({ params }: Props) {
  const a = getArticle((await params).slug);
  if (!a) notFound();

  return (
    <main className="bg-[#fff8f1] text-gray-900">
      <article className="mx-auto max-w-3xl px-5 py-10 md:py-16">
        <Link href="/blog" className="text-sm font-bold text-[#c97d45]">
          ← Все статьи
        </Link>

        <p className="mt-8 text-xs font-black uppercase tracking-[0.25em] text-[#c97d45]">
          {[a.category, a.date && dateFormat.format(new Date(a.date))].filter(Boolean).join(' · ')}
        </p>

        <h1 className="mt-4 text-3xl font-black leading-tight md:text-5xl">{a.title}</h1>

        <div className="case-body mt-10 text-[18px] leading-8 text-gray-800" dangerouslySetInnerHTML={{ __html: a.html }} />

        <ContactCta title="Обсудим ваш проект?" text="Напишите мне в WhatsApp или Telegram — задам несколько вопросов и предложу первый шаг." />
      </article>
    </main>
  );
}

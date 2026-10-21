import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import CaseArticle from '@/components/CaseArticle';
import { getCase, getCases } from '@/lib/content';
import { SITE_URL } from '@/lib/site';

// Английская версия кейса: content/en/cases/<адрес>.md, адрес тот же, что у русского кейса.
export const dynamicParams = false;

export function generateStaticParams() {
  return getCases('en').map((c) => ({ slug: c.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const c = getCase((await params).slug, 'en');
  if (!c) return {};
  const ru = getCase(c.slug);
  return {
    title: { absolute: c.seo_title },
    description: c.description,
    alternates: {
      canonical: './',
      languages: ru ? { ru: `${SITE_URL}/cases/${c.slug}`, en: `${SITE_URL}/en/cases/${c.slug}` } : undefined,
    },
    openGraph: c.cover ? { images: [c.cover], locale: 'en_US' } : undefined,
  };
}

export default async function CaseEnPage({ params }: Props) {
  const c = getCase((await params).slug, 'en');
  if (!c) notFound();
  return <CaseArticle c={c} lang="en" />;
}

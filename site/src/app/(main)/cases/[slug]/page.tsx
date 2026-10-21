import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import CaseArticle from '@/components/CaseArticle';
import { getCase, getCases } from '@/lib/content';
import { SITE_URL } from '@/lib/site';

// Каждый кейс из content/cases/ становится отдельной страницей при сборке.
export const dynamicParams = false;

export function generateStaticParams() {
  return getCases().map((c) => ({ slug: c.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const c = getCase((await params).slug);
  if (!c) return {};
  const en = getCase(c.slug, 'en');
  return {
    title: { absolute: c.seo_title },
    description: c.description,
    alternates: en
      ? { canonical: './', languages: { ru: `${SITE_URL}/cases/${c.slug}`, en: `${SITE_URL}/en/cases/${c.slug}` } }
      : undefined,
    openGraph: c.cover ? { images: [c.cover] } : undefined,
  };
}

export default async function CasePage({ params }: Props) {
  const c = getCase((await params).slug);
  if (!c) notFound();
  return <CaseArticle c={c} lang="ru" />;
}

import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import NicheLanding from '@/components/NicheLanding';
import { getNiche, getNiches } from '@/lib/content';
import { LANDINGS_LIVE, landingUrl, nicheUrl } from '@/lib/site';

// Русский лендинг ниши. Сам шаблон — в components/NicheLanding.tsx, английская версия — /en/l/<ниша>.
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
  const en = getNiche(n.id, 'en');
  return {
    metadataBase: new URL(url),
    title: { absolute: n.seo_title },
    description: n.description,
    alternates: {
      canonical: `${url}/`,
      languages: en ? { ru: landingUrl(n, 'ru'), en: landingUrl(n, 'en') } : undefined,
    },
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
  return <NicheLanding n={n} lang="ru" />;
}

import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import NicheLanding from '@/components/NicheLanding';
import { getNiche, getNiches } from '@/lib/content';
import { LANDINGS_LIVE, landingUrl, nicheUrl } from '@/lib/site';

// Английский лендинг ниши: тексты из content/en/niches/<ниша>.yml, кейсы из content/en/cases/.
export const dynamicParams = false;

export function generateStaticParams() {
  return getNiches('en').map((n) => ({ niche: n.id }));
}

type Props = { params: Promise<{ niche: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const n = getNiche((await params).niche, 'en');
  if (!n) return {};
  const url = nicheUrl(n.subdomain);
  const live = LANDINGS_LIVE && n.published;
  return {
    metadataBase: new URL(url),
    title: { absolute: n.seo_title },
    description: n.description,
    alternates: {
      canonical: `${url}/en/`,
      languages: { ru: landingUrl(n, 'ru'), en: landingUrl(n, 'en') },
    },
    robots: live ? undefined : { index: false, follow: false },
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: `${url}/en/`,
      title: n.seo_title,
      description: n.description,
      images: n.hero_image ? [n.hero_image] : undefined,
    },
  };
}

export default async function NicheLandingEnPage({ params }: Props) {
  const n = getNiche((await params).niche, 'en');
  if (!n) notFound();
  return <NicheLanding n={n} lang="en" />;
}

import type { Metadata } from 'next';
import CasesClient from '@/components/CasesClient';

export const metadata: Metadata = {
  title: 'Кейсы продвижения бьюти-бизнеса | Заявки, лиды и прибыль',
  description:
    'Кейсы продвижения салонов красоты, мастеров массажа, парикмахерских и бьюти-специалистов: вложения, заявки, цена лида, выручка и прибыль.',
};

export default function CasesPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Кейсы продвижения бьюти-бизнеса',
    description:
      'Страница с кейсами продвижения бьюти-бизнеса: заявки, стоимость лида, вложения, выручка и прибыль.',
    url: 'https://beauty.adsnew.org/cases',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CasesClient />
    </>
  );
}
import type { Metadata } from 'next';
import CasesClient from '@/components/CasesClient';

export const metadata: Metadata = {
  title: 'Кейсы продвижения бьюти-бизнеса | Заявки, лиды и прибыль',
  description:
    'Кейсы продвижения салонов красоты, мастеров массажа, парикмахерских и бьюти-специалистов: вложения, заявки, цена лида, выручка и прибыль.',
};

export default function CasesPage() {
  return <CasesClient />;
}
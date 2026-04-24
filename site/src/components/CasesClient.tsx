import type { Metadata } from 'next';
import CasesClient from '@/components/CasesClient';

export const metadata: Metadata = {
  title: 'Кейсы продвижения бьюти-бизнеса | Заявки и прибыль',
  description:
    'Кейсы продвижения салонов красоты, мастеров и студий: заявки, стоимость лида, вложения и прибыль.',
};

export default function CasesPage() {
  return <CasesClient />;
}

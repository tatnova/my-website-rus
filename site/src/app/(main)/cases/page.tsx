import type { Metadata } from 'next';
import CasesClient, { type CaseItem } from '@/components/CasesClient';
import { getCases, getSettings, nicheName } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Кейсы продвижения бьюти-бизнеса | Заявки, лиды и прибыль',
  description:
    'Кейсы продвижения салонов красоты, мастеров массажа, парикмахерских и бьюти-специалистов: вложения, заявки, цена лида, выручка и прибыль.',
};

export default function CasesPage() {
  const s = getSettings();
  const cases: CaseItem[] = getCases().map((c) => ({
    country: c.country,
    city: c.city,
    niche: c.niche_label ? c.niche_label[0].toUpperCase() + c.niche_label.slice(1) : c.niches.map(nicheName).join(', '),
    nicheNames: c.niches.map(nicheName),
    goal: c.goal,
    title: c.card_title,
    investment: c.total_spend || c.ad_budget,
    leads: c.leads,
    clients: c.clients,
    leadPrice: c.cpl,
    href: `/cases/${c.slug}`,
  }));
  const contacts = [
    { label: 'WhatsApp', href: `https://wa.me/${s.whatsapp_phone}` },
    { label: 'Telegram', href: `https://t.me/${s.telegram_username}` },
    ...s.socials.map((x) => ({ label: x.label, href: x.url })),
  ];
  return <CasesClient cases={cases} contacts={contacts} />;
}

import type { Metadata } from 'next';
import Link from 'next/link';
import PageIntro from '@/components/PageIntro';
import { getServices } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Услуги: реклама и система привлечения клиентов для бьюти-бизнеса',
  description: 'Аудит и стратегия, запуск рекламы в Instagram, Facebook и TikTok, CRM и автоматизация заявок, сопровождение и масштабирование.',
};

export default function ServicesPage() {
  const services = getServices();
  return (
    <main className="bg-gray-50 pb-24 text-gray-900">
      <PageIntro eyebrow="Услуги" title="Чем я помогаю бьюти-бизнесу" />
      <div className="mx-auto grid max-w-6xl gap-6 px-5 md:grid-cols-2 md:px-10">
        {services.map((s) => (
          <section
            key={s.title}
            className={`rounded-[32px] p-8 ${s.featured ? 'bg-black text-white' : 'bg-white shadow-sm'}`}
          >
            <h2 className="text-2xl font-black">{s.title}</h2>
            <p className={`mt-4 leading-relaxed ${s.featured ? 'text-white/80' : 'text-gray-600'}`}>{s.text}</p>
          </section>
        ))}
      </div>
      <div className="mx-auto mt-12 max-w-6xl px-5 md:px-10">
        <Link href="/cases" className="font-bold text-[#a35f2c] underline">
          Смотреть кейсы с цифрами →
        </Link>
      </div>
    </main>
  );
}

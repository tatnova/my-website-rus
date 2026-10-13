import type { Metadata } from 'next';
import Link from 'next/link';
import { getNiches, getSettings } from '@/lib/content';
import { LANDINGS_LIVE, nicheUrl } from '@/lib/site';

// Визитка для ссылки в Instagram (заменит link.adsnew.org).
export const metadata: Metadata = {
  title: 'Ссылки',
  description: 'Связаться с Татьяной Ричманн в WhatsApp и Telegram, кейсы и соцсети.',
};

export default function LinksPage() {
  const s = getSettings();
  const landings = getNiches().filter((n) => n.published);
  const item = 'block rounded-full border border-gray-200 bg-white px-6 py-4 text-center font-bold transition hover:border-black';
  return (
    <main className="min-h-screen bg-[#fff8f1] px-5 py-14">
      <div className="mx-auto max-w-md">
        <h1 className="text-center text-3xl font-black">{s.name}</h1>
        <p className="mt-3 text-center text-gray-600">Реклама для бьюти-бизнеса в Израиле, США и Канаде</p>
        <div className="mt-8 space-y-3">
          <a href={`https://wa.me/${s.whatsapp_phone}`} target="_blank" className={`${item} border-black bg-black text-white`}>
            Написать в WhatsApp
          </a>
          <a href={`https://t.me/${s.telegram_username}`} target="_blank" className={item}>
            Написать в Telegram
          </a>
          <Link href="/cases" className={item}>
            Кейсы с цифрами
          </Link>
          {landings.map((n) => (
            <a key={n.id} href={LANDINGS_LIVE ? `${nicheUrl(n.subdomain)}/` : `/l/${n.id}`} className={item}>
              Реклама: {n.name.toLowerCase()}
            </a>
          ))}
          {s.socials.map((x) => (
            <a key={x.url} href={x.url} target="_blank" rel="noreferrer" className={item}>
              {x.label}
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}

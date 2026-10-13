import type { Metadata } from 'next';
import PageIntro from '@/components/PageIntro';
import { getSettings } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Контакты',
  description: 'Связаться с Татьяной Ричманн: WhatsApp, Telegram и соцсети.',
};

export default function ContactPage() {
  const s = getSettings();
  return (
    <main className="bg-white pb-24 text-gray-900">
      <PageIntro
        eyebrow="Контакты"
        title="Как со мной связаться"
        text="Напишите в WhatsApp или Telegram: расскажите о вашем бизнесе, городе и задаче, и я отвечу, с чего начать."
      />
      <div className="mx-auto max-w-4xl space-y-3 px-5 text-lg md:px-10">
        <p>
          WhatsApp:{' '}
          <a className="font-bold underline" href={`https://wa.me/${s.whatsapp_phone}`} target="_blank">
            {s.whatsapp_display}
          </a>
        </p>
        <p>
          Telegram:{' '}
          <a className="font-bold underline" href={`https://t.me/${s.telegram_username}`} target="_blank">
            @{s.telegram_username}
          </a>
        </p>
        <div className="flex flex-wrap gap-4 pt-4">
          {s.socials.map((x) => (
            <a key={x.url} href={x.url} target="_blank" rel="noreferrer" className="text-sm font-bold uppercase tracking-widest text-gray-500 hover:text-black">
              {x.label}
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}

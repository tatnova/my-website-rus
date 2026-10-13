import { getSettings } from '@/lib/content';

// Заголовок раздела основного сайта с кнопками WhatsApp и Telegram.
export default function PageIntro({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  const s = getSettings();
  return (
    <section className="px-5 pb-10 pt-14 md:px-10">
      <div className="mx-auto max-w-4xl">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#9b6b43]">{eyebrow}</p>
        <h1 className="text-4xl font-black leading-tight md:text-6xl">{title}</h1>
        {text && <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-600">{text}</p>}
        <div className="mt-8 flex flex-wrap gap-3">
          <a href={`https://wa.me/${s.whatsapp_phone}`} target="_blank" className="rounded-full bg-black px-6 py-3 text-sm font-bold text-white">
            WhatsApp
          </a>
          <a href={`https://t.me/${s.telegram_username}`} target="_blank" className="rounded-full border border-gray-300 px-6 py-3 text-sm font-bold">
            Telegram
          </a>
        </div>
      </div>
    </section>
  );
}

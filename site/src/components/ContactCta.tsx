import { getSettings } from '@/lib/content';

// Финальный блок раздела: короткий призыв и кнопки WhatsApp и Telegram.
export default function ContactCta({ title, text }: { title: string; text: string }) {
  const s = getSettings();
  return (
    <section className="mx-auto mt-16 max-w-6xl px-5 md:px-10">
      <div className="rounded-[32px] bg-black px-6 py-10 text-center text-white md:px-12 md:py-14">
        <h2 className="text-3xl font-black md:text-4xl">{title}</h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-white/75">{text}</p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <a
            href={`https://wa.me/${s.whatsapp_phone}`}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-[#1a8f4c] px-8 py-4 font-bold text-white"
          >
            Написать в WhatsApp
          </a>
          <a
            href={`https://t.me/${s.telegram_username}`}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-[#0077b3] px-8 py-4 font-bold text-white"
          >
            Написать в Telegram
          </a>
        </div>
      </div>
    </section>
  );
}

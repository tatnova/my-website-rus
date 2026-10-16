import { getSettings } from '@/lib/content';
import ResponsiveImage from '@/components/ResponsiveImage';

// Заголовок раздела основного сайта с кнопками WhatsApp и Telegram.
// С image справа показывается фотография.
export default function PageIntro({
  eyebrow,
  title,
  text,
  image,
}: {
  eyebrow: string;
  title: string;
  text?: string;
  image?: { src: string; alt: string };
}) {
  const s = getSettings();
  const body = (
    <>
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
    </>
  );

  if (!image) {
    return (
      <section className="px-5 pb-10 pt-14 md:px-10">
        <div className="mx-auto max-w-4xl">{body}</div>
      </section>
    );
  }

  return (
    <section className="px-5 pb-12 pt-10 md:px-10 md:pt-14">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 md:flex-row md:items-center md:gap-14">
        <div className="md:w-3/5">{body}</div>
        <div className="mx-auto w-full max-w-sm overflow-hidden rounded-[40px] border-8 border-[#fff1e4] bg-gray-100 shadow-xl md:w-2/5">
          <ResponsiveImage
            priority
            sizes="(min-width: 768px) 40vw, 100vw"
            src={image.src}
            alt={image.alt}
            className="aspect-[4/5] h-full w-full object-cover object-top"
          />
        </div>
      </div>
    </section>
  );
}

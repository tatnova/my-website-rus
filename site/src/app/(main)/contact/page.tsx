import type { Metadata } from 'next';
import Link from 'next/link';
import PageIntro from '@/components/PageIntro';
import { getSettings } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Контакты',
  description: 'Связаться с Татьяной Ричманн: WhatsApp, Telegram и соцсети. Что написать в первом сообщении, чтобы быстрее перейти к делу.',
};

const firstMessage = [
  'Чем вы занимаетесь: ниша и основные услуги',
  'Город и страна, где нужны клиенты',
  'Есть ли сейчас реклама, сайт или CRM',
  'Что хотите получить: первые заявки, полная запись, масштабирование',
];

const next = [
  'Я читаю сообщение и задаю уточняющие вопросы.',
  'Разбираем вашу ситуацию и решаем, с чего начать.',
  'Договариваемся о формате работы и запуске.',
];

export default function ContactPage() {
  const s = getSettings();
  const template = encodeURIComponent('Здравствуйте! Я по поводу рекламы. Моя ниша: , город: , задача: ');
  return (
    <main className="bg-white pb-24 text-gray-900">
      <PageIntro
        eyebrow="Контакты"
        title="Как со мной связаться"
        text="Удобнее всего написать в WhatsApp или Telegram. Расскажите о вашем бизнесе, городе и задаче, и я отвечу, с чего начать."
      />

      <div className="mx-auto grid max-w-5xl gap-6 px-5 md:grid-cols-2 md:px-10">
        <a
          href={`https://wa.me/${s.whatsapp_phone}?text=${template}`}
          target="_blank"
          rel="noreferrer"
          className="rounded-[32px] bg-[#1a8f4c] p-8 text-white transition hover:opacity-90"
        >
          <p className="text-sm font-bold uppercase tracking-widest text-white/75">WhatsApp</p>
          <p className="mt-3 text-2xl font-black">{s.whatsapp_display}</p>
          <p className="mt-4 text-sm text-white/80">Откроется чат с готовым началом сообщения.</p>
        </a>
        <a
          href={`https://t.me/${s.telegram_username}`}
          target="_blank"
          rel="noreferrer"
          className="rounded-[32px] bg-[#0077b3] p-8 text-white transition hover:opacity-90"
        >
          <p className="text-sm font-bold uppercase tracking-widest text-white/75">Telegram</p>
          <p className="mt-3 text-2xl font-black">@{s.telegram_username}</p>
          <p className="mt-4 text-sm text-white/80">Напишите в личные сообщения.</p>
        </a>
      </div>

      <div className="mx-auto mt-14 grid max-w-5xl gap-6 px-5 md:grid-cols-2 md:px-10">
        <section className="rounded-[32px] bg-[#fff8f1] p-8">
          <h2 className="text-2xl font-black">Что написать в первом сообщении</h2>
          <ul className="mt-5 space-y-3">
            {firstMessage.map((item) => (
              <li key={item} className="flex gap-3 text-gray-700">
                <span className="text-[#e8a16b]">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>
        <section className="rounded-[32px] bg-gray-50 p-8">
          <h2 className="text-2xl font-black">Что будет дальше</h2>
          <ol className="mt-5 space-y-3">
            {next.map((item, i) => (
              <li key={item} className="flex gap-3 text-gray-700">
                <span className="font-black text-[#e8a16b]">{i + 1}.</span>
                <span>{item}</span>
              </li>
            ))}
          </ol>
        </section>
      </div>

      {s.socials.length > 0 && (
        <section className="mx-auto mt-14 max-w-5xl px-5 md:px-10">
          <h2 className="text-2xl font-black">Соцсети</h2>
          <p className="mt-2 text-gray-600">Мои страницы в соцсетях.</p>
          <div className="mt-5 flex flex-wrap gap-3">
            {s.socials.map((x) => (
              <a
                key={x.url}
                href={x.url}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-gray-300 px-5 py-2.5 text-sm font-bold hover:border-black"
              >
                {x.label}
              </a>
            ))}
          </div>
        </section>
      )}

      <p className="mx-auto mt-14 max-w-5xl px-5 text-sm leading-relaxed text-gray-500 md:px-10">
        Пишите только то, что нужно для обсуждения задачи. Как я обращаюсь с вашими данными, описано в{' '}
        <Link href="/privacy-policy" className="underline hover:text-black">
          политике конфиденциальности
        </Link>
        . Там же сказано, как запросить или удалить ваши данные.
      </p>
    </main>
  );
}

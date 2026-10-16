import type { Metadata } from 'next';
import Link from 'next/link';
import ContactCta from '@/components/ContactCta';
import PageIntro from '@/components/PageIntro';

export const metadata: Metadata = {
  title: 'Бесплатный разбор рекламы и профиля для салона красоты',
  description:
    'Проверю рекламу, профиль, переписку и запись и покажу, где теряются клиенты. Для владелиц салонов и мастеров, которые уже пробовали рекламу.',
};

const checks = [
  { title: 'Оффер', text: 'Понятно ли из рекламы, что вы предлагаете, кому и почему стоит написать именно сейчас.' },
  { title: 'Профиль', text: 'Что видит человек после клика: шапка, закреплённые посты, цены, отзывы, работы.' },
  { title: 'Реклама', text: 'Цель кампании, аудитория, места показа, макеты и тексты, на что уходит бюджет.' },
  { title: 'Переписка', text: 'Скорость и содержание ответов: где человек перестаёт отвечать и почему.' },
  { title: 'Запись', text: 'Как обращение превращается в запись и сколько записей доходит до визита.' },
];

const results = [
  'Список того, что исправить в первую очередь, а что может подождать',
  'Где именно теряются клиенты: в рекламе, профиле, переписке или на записи',
  'Мой честный вывод, стоит ли сейчас увеличивать бюджет',
];

export default function RazborPage() {
  return (
    <main className="bg-gray-50 pb-24 text-gray-900">
      <PageIntro
        eyebrow="Бесплатный разбор"
        title="Разбор рекламы и профиля: где теряются ваши клиенты"
        text="Для владелиц салонов и мастеров, которые уже пробовали рекламу. Бюджет списывается, сообщения приходят, а до записи доходят единицы. Проверю всю цепочку от объявления до записи и покажу, что мешает."
      />

      <section className="mx-auto max-w-6xl px-5 md:px-10">
        <h2 className="text-3xl font-black md:text-4xl">Что я проверяю</h2>
        <ol className="mt-8 grid gap-4 md:grid-cols-5">
          {checks.map((c, i) => (
            <li key={c.title} className="rounded-3xl bg-white p-6 shadow-sm">
              <p className="text-3xl font-black text-[#e8a16b]">{i + 1}</p>
              <p className="mt-3 font-bold">{c.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">{c.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mx-auto mt-16 grid max-w-6xl gap-6 px-5 md:grid-cols-2 md:px-10">
        <div className="rounded-[32px] bg-black p-8 text-white">
          <h2 className="text-2xl font-black">Что вы получите</h2>
          <ul className="mt-6 space-y-3">
            {results.map((r) => (
              <li key={r} className="flex gap-3">
                <span className="text-[#e8a16b]">✓</span>
                <span className="text-white/90">{r}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-[32px] bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-black">Как проходит</h2>
          <p className="mt-4 leading-relaxed text-gray-600">
            Вы пишете в WhatsApp или Telegram и присылаете ссылку на профиль и скриншоты рекламы за последний месяц. Я
            смотрю и отвечаю в переписке. Без обещаний «гарантированных клиентов»: только выводы и что исправить.
          </p>
          <p className="mt-4 leading-relaxed text-gray-600">
            Если после разбора захотите, чтобы рекламу вела я, расскажу о формате работы. Если нет, выводы останутся у вас.
          </p>
          <Link href="/cases" className="mt-6 inline-block font-bold text-[#a35f2c] underline">
            Посмотреть кейсы →
          </Link>
        </div>
      </section>

      <ContactCta
        title="Записаться на бесплатный разбор"
        text="Напишите, в какой нише и в каком городе вы работаете, и пришлите ссылку на профиль."
      />
    </main>
  );
}

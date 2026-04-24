import Link from 'next/link';

const cases = [
  {
    title: 'Продвижение массажа в Израиле: вложили 6 174 ₪ — получили 37 000 ₪ и 740 заявок',
    category: 'Мастер массажа · Петах-Тиква',
    description:
      'Кейс продвижения мастера ручного массажа с нуля: без клиентской базы, с пустым Instagram и ограниченным бюджетом.',
    results: ['740 заявок', '5,7 ₪ за заявку', '30 762 ₪ чистой прибыли'],
    href: '/cases/massazh-israel-740-zayavok',
  },
];

const socialLinks = [
  { label: 'WhatsApp', href: 'https://wa.me/972537086545' },
  { label: 'Telegram', href: 'https://t.me/mailovaja' },
  { label: 'Instagram', href: '#instagram' },
  { label: 'YouTube', href: '#youtube' },
  { label: 'Facebook', href: '#facebook' },
  { label: 'TikTok', href: '#tiktok' },
];

export default function CasesPage() {
  return (
    <main className="min-h-screen bg-[#f7f2ea] text-[#1f1a17]">
      <section className="px-5 py-16 md:px-10 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#9b6b43]">
            Кейсы
          </p>

          <h1 className="max-w-4xl text-4xl font-semibold leading-tight md:text-6xl">
            Кейсы продвижения в бьюти-сфере
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#5f5148]">
            Реальные результаты клиентов: сколько вложили, сколько заявок получили,
            какая была стоимость заявки и какую прибыль принесла реклама.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://wa.me/972537086545"
              target="_blank"
              className="rounded-full bg-[#1f1a17] px-6 py-3 text-sm font-semibold text-white transition hover:opacity-80"
            >
              Написать в WhatsApp
            </a>

            <a
              href="https://t.me/mailovaja"
              target="_blank"
              className="rounded-full border border-[#1f1a17] px-6 py-3 text-sm font-semibold transition hover:bg-[#1f1a17] hover:text-white"
            >
              Написать в Telegram
            </a>
          </div>
        </div>
      </section>

      <section className="px-5 pb-20 md:px-10 lg:px-20">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
          {cases.map((item) => (
            <article
              key={item.href}
              className="rounded-[32px] bg-white p-6 shadow-sm md:p-8"
            >
              <p className="mb-4 text-sm font-medium text-[#9b6b43]">
                {item.category}
              </p>

              <h2 className="text-2xl font-semibold leading-tight">
                {item.title}
              </h2>

              <p className="mt-4 leading-7 text-[#5f5148]">
                {item.description}
              </p>

              <div className="mt-6 grid gap-3">
                {item.results.map((result) => (
                  <div
                    key={result}
                    className="rounded-2xl bg-[#f7f2ea] px-4 py-3 text-sm font-semibold"
                  >
                    {result}
                  </div>
                ))}
              </div>

              <Link
                href={item.href}
                className="mt-7 inline-flex rounded-full bg-[#9b6b43] px-6 py-3 text-sm font-semibold text-white transition hover:opacity-80"
              >
                Смотреть кейс
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="px-5 pb-20 md:px-10 lg:px-20">
        <div className="mx-auto max-w-6xl rounded-[36px] bg-[#1f1a17] p-8 text-white md:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#d8b18a]">
            Связаться
          </p>

          <h2 className="mt-4 max-w-3xl text-3xl font-semibold md:text-5xl">
            Хотите понять, сколько заявок может дать реклама вашему проекту?
          </h2>

          <p className="mt-5 max-w-2xl leading-7 text-white/70">
            Напишите мне удобным способом — разберём вашу нишу, текущую ситуацию
            и точки роста.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#1f1a17] transition hover:opacity-80"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
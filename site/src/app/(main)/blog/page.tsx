import ResponsiveImage from '@/components/ResponsiveImage';
import { getArticles } from '@/lib/content';

const pageArticles = [
  {
    title: 'Как заполнить запись в новом салоне красоты в США за 6 недель без демпинга',
    description:
      'Стратегия 2026 для салонов в Бруклине, Санни-Айлс, Западном Голливуде и других конкурентных локациях США.',
   href: '/blog/kak-zapolnit-zapis',
    image: '/beauty-client-acquisition-strategy-funnel.jpg',
    category: 'Стратегия',
  },
  {
    title: 'Почему реклама не даёт результата и как это исправить',
    description:
      'Разбор причин, из-за которых реклама не превращается в записи, и что нужно исправить, чтобы система заработала.',
    href: '/blog/pochemu-reklama-ne-daet-rezultata-i-kak-eto-ispravit',
    image: '/beauty-business-marketing-specialist.jpg',
    category: 'Реклама',
  },
  {
    title: 'Ошибки в рекламе, из-за которых вы теряете клиентов',
    description:
      'Главные ошибки в продвижении бьюти-бизнеса, которые повышают стоимость клиента и снижают записи.',
    href: '/blog/oshibki-v-reklame-iz-za-kotoryh-vy-teryaete-klientov',
    image: '/beauty-marketing-strategy.jpg',
    category: 'Ошибки',
  },
];

export const metadata = {
  title: 'Статьи о маркетинге для бьюти-бизнеса',
  description:
    'Статьи о рекламе, стратегии, системе привлечения клиентов и росте дохода в бьюти-бизнесе.',
};

export default function BlogPage() {
  // Сначала статьи из content/articles/ (Pages CMS), затем статьи со своими страницами.
  const articles = [
    ...getArticles().map((a) => ({
      title: a.title,
      description: a.description,
      href: `/blog/${a.slug}`,
      image: a.cover,
      category: a.category,
    })),
    ...pageArticles,
  ];
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-[#fff1e4] selection:text-[#e8a16b]">
      <main>
        <section className="bg-gradient-to-br from-[#fff8f1] via-white to-[#f8f2ea] px-6 py-16 lg:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="mb-6 flex flex-wrap gap-3 text-xs font-bold uppercase tracking-widest text-[#e8a16b]">
              <span className="rounded-full bg-[#fff1e4] px-3 py-2">Beauty marketing</span>
              <span className="rounded-full bg-[#fff1e4] px-3 py-2">SEO статьи</span>
              <span className="rounded-full bg-[#fff1e4] px-3 py-2">Система роста</span>
            </div>

            <h1 className="max-w-4xl text-4xl font-extrabold leading-[1.1] md:text-6xl">
              Статьи о <span className="text-[#e8a16b]">маркетинге для бьюти-бизнеса</span>
            </h1>

            <p className="mt-6 max-w-2xl text-xl leading-relaxed text-gray-600">
              Практические разборы о том, как привлекать клиентов, выстраивать систему продвижения,
              снижать хаос в рекламе и увеличивать доход салона.
            </p>
          </div>
        </section>

        <section className="bg-white px-6 py-16 lg:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
              {articles.map((article) => (
                <a
                  key={article.href}
                  href={article.href}
                  className="group overflow-hidden rounded-[32px] border border-[#f6dcc5] bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  {article.image && (
                    <div className="aspect-[16/10] overflow-hidden bg-[#fff1e4]">
                      <ResponsiveImage
                        sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                        src={article.image}
                        alt={article.title}
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      />
                    </div>
                  )}

                  <div className="p-6">
                    <div className="mb-4 inline-flex rounded-full bg-[#fff1e4] px-3 py-2 text-xs font-bold uppercase tracking-widest text-[#e8a16b]">
                      {article.category}
                    </div>

                    <h2 className="mb-4 text-2xl font-black leading-snug transition group-hover:text-[#e8a16b]">
                      {article.title}
                    </h2>

                    <p className="mb-6 text-base leading-relaxed text-gray-600">
                      {article.description}
                    </p>

                    <span className="font-bold text-[#e8a16b]">Читать статью →</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

    </div>
  );
}
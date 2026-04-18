const articles = [
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
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-[#fff1e4] selection:text-[#e8a16b]">
      <nav className="fixed top-0 z-[100] w-full border-b border-gray-100 bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="/" className="text-xl font-black tracking-tighter text-[#e8a16b]">
            МАРКЕТИНГ ДЛЯ БЬЮТИ-БИЗНЕСА
          </a>

          <div className="hidden items-center gap-8 text-sm font-semibold md:flex">
            <a href="/#problems" className="hover:text-[#e8a16b]">Проблемы</a>
            <a href="/#services" className="hover:text-[#e8a16b]">Услуги</a>
            <a href="/#cases" className="hover:text-[#e8a16b]">Кейсы</a>
            <a href="/#about" className="hover:text-[#e8a16b]">Обо мне</a>
            <a href="/blog" className="text-[#e8a16b]">Статьи</a>
            <a
              href="/#contact"
              className="rounded-full bg-black px-5 py-2 text-white transition hover:bg-gray-800"
            >
              Обсудить проект
            </a>
          </div>
        </div>
      </nav>

      <main className="pt-20">
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
                  <div className="aspect-[16/10] overflow-hidden bg-[#fff1e4]">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>

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

      <footer id="contact" className="border-t border-gray-100 bg-white px-6 py-32 text-center">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-5xl font-black leading-[1.1] tracking-tighter md:text-7xl">
            Готовы выстроить систему
            <br className="hidden md:block" /> привлечения клиентов?
          </h2>
          <p className="mx-auto mb-16 max-w-2xl text-2xl leading-relaxed text-gray-400">
            Давайте обсудим ваш проект и определим точки роста вашего бьюти-бизнеса прямо сейчас.
          </p>
          <div className="flex flex-col items-center gap-8">
            <a
              href="https://wa.me/972537086545"
              className="transform rounded-full bg-black px-16 py-6 text-2xl font-black text-white shadow-2xl transition hover:scale-105 hover:shadow-[#e8a16b]/20"
            >
              Написать в WhatsApp 💬
            </a>
            <div className="flex flex-wrap justify-center gap-4 text-sm font-bold uppercase tracking-widest text-gray-400">
              <a href="#instagram" className="hover:text-black">Instagram</a>
              <a href="#youtube" className="hover:text-black">YouTube</a>
              <a href="#facebook" className="hover:text-black">Facebook</a>
              <a href="#tiktok" className="hover:text-black">TikTok</a>
              <a href="https://t.me/mailovaja" className="hover:text-black">Telegram</a>
              <a href="https://wa.me/972537086545" className="hover:text-black">WhatsApp</a>
            </div>
          </div>
        </div>
        <div className="mt-32 text-[10px] uppercase tracking-[0.5em] text-gray-300">
          © 2026 Beauty Strategy Marketing. Все права защищены.
        </div>
      </footer>
    </div>
  );
}
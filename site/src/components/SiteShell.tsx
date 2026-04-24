'use client';

import { usePathname } from 'next/navigation';

export default function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  if (pathname === '/') {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <nav className="fixed top-0 z-[100] w-full border-b border-gray-100 bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="/" className="text-xl font-black tracking-tighter text-[#e8a16b]">
            МАРКЕТИНГ ДЛЯ БЬЮТИ-БИЗНЕСА
          </a>

          <div className="flex items-center gap-6 text-sm font-semibold">
            <a href="/#services" className="hover:text-[#e8a16b]">Услуги</a>
            <a href="/cases" className="hover:text-[#e8a16b]">Кейсы</a>
            <a href="/blog" className="hover:text-[#e8a16b]">Статьи</a>
            <a
              href="https://wa.me/972537086545"
              target="_blank"
              className="rounded-full bg-black px-5 py-2 text-white transition hover:bg-gray-800"
            >
              Обсудить проект
            </a>
          </div>
        </div>
      </nav>

      <div className="pt-20">{children}</div>

      <footer className="border-t border-gray-100 bg-white px-6 py-20 text-center">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-4xl font-black md:text-6xl">
            Готовы выстроить систему привлечения клиентов?
          </h2>

          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://wa.me/972537086545" target="_blank" className="rounded-full bg-black px-8 py-4 font-bold text-white">
              WhatsApp
            </a>
            <a href="https://t.me/mailovaja" target="_blank" className="rounded-full border border-gray-300 px-8 py-4 font-bold">
              Telegram
            </a>
            <a href="#instagram" className="rounded-full border border-gray-300 px-8 py-4 font-bold">
              Instagram
            </a>
            <a href="#youtube" className="rounded-full border border-gray-300 px-8 py-4 font-bold">
              YouTube
            </a>
            <a href="#facebook" className="rounded-full border border-gray-300 px-8 py-4 font-bold">
              Facebook
            </a>
            <a href="#tiktok" className="rounded-full border border-gray-300 px-8 py-4 font-bold">
              TikTok
            </a>
          </div>

          <div className="mt-16 text-[10px] uppercase tracking-[0.5em] text-gray-300">
            © 2026 Beauty Strategy Marketing. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
}
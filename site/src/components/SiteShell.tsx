'use client';

import { usePathname } from 'next/navigation';

const socialLinks = [
  { label: 'WhatsApp', href: 'https://wa.me/972537086545' },
  { label: 'Telegram', href: 'https://t.me/mailovaja' },
  { label: 'Instagram', href: 'https://www.instagram.com/ads_target_pr/' },
  { label: 'YouTube', href: '#youtube' },
  { label: 'Facebook', href: 'https://www.facebook.com/newadstarget' },
  { label: 'TikTok', href: '#tiktok' },
];

export default function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  if (pathname === '/') {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <nav className="fixed top-0 z-[100] w-full border-b border-gray-100 bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 md:px-6">
          <a
            href="/"
            className="max-w-[130px] text-[13px] font-black uppercase leading-tight tracking-tight text-[#e8a16b] md:max-w-none md:text-lg"
          >
            Beauty Marketing
          </a>

          <div className="flex items-center gap-4 text-[14px] font-bold md:gap-7 md:text-sm">
            
            <a href="/cases" className="hover:text-[#e8a16b]">
              Кейсы
            </a>
            <a href="/blog" className="hover:text-[#e8a16b]">
              Статьи
            </a>
            <a
              href="https://wa.me/972537086545"
              target="_blank"
              className="hidden rounded-full bg-black px-5 py-2 text-white transition hover:bg-gray-800 md:inline-block"
            >
              Обсудить проект
            </a>
          </div>
        </div>
      </nav>

      <div className="pt-[58px] md:pt-[68px]">{children}</div>

      <footer className="border-t border-gray-100 bg-white px-5 py-10 text-center">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-black md:text-4xl">
            Готовы обсудить проект?
          </h2>

          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a
              href="https://wa.me/972537086545"
              target="_blank"
              className="rounded-full bg-black px-6 py-3 text-sm font-bold text-white"
            >
              WhatsApp
            </a>
            <a
              href="https://t.me/mailovaja"
              target="_blank"
              className="rounded-full border border-gray-300 px-6 py-3 text-sm font-bold"
            >
              Telegram
            </a>
          </div>

          <div className="mt-6 flex flex-wrap justify-center gap-4 text-xs font-bold uppercase tracking-widest text-gray-400">
            {socialLinks.map((item) => (
              <a key={item.label} href={item.href} target="_blank" className="hover:text-black">
                {item.label}
              </a>
            ))}
          </div>

          <div className="mt-8 text-[10px] uppercase tracking-[0.3em] text-gray-300">
            © 2026 Beauty Strategy Marketing
          </div>
        </div>
      </footer>
    </div>
  );
}
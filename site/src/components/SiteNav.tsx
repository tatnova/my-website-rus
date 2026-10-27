'use client';

import Link from 'next/link';
import { useState } from 'react';

// Единое меню для всех страниц сайта. Пункты — обычные ссылки, чтобы по ним переходили и поисковики.
const navLinks = [
  { label: 'Услуги', href: '/services' },
  { label: 'Кейсы', href: '/cases' },
  { label: 'Обо мне', href: '/about' },
  { label: 'Статьи', href: '/blog' },
];

const WHATSAPP_URL = 'https://wa.me/972552468903';
const TELEGRAM_URL = 'https://t.me/mailovaja';

export default function SiteNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="fixed top-0 z-[100] w-full border-b border-gray-100 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 md:px-6 md:py-4">
        <Link href="/" className="text-lg font-black tracking-tight text-[#e8a16b] md:text-xl" onClick={closeMenu}>
          Татьяна Ричманн
        </Link>

        <div className="hidden items-center gap-7 text-sm font-semibold md:flex">
          {navLinks.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-[#e8a16b]">
              {item.label}
            </Link>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-black px-5 py-2 text-white transition hover:bg-gray-800"
          >
            Обсудить проект
          </a>
        </div>

        <button
          type="button"
          aria-label={isMenuOpen ? 'Закрыть меню' : 'Открыть меню'}
          aria-expanded={isMenuOpen}
          className="p-2 md:hidden"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <div className="space-y-1.5">
            <div className={`h-0.5 w-6 bg-gray-900 transition ${isMenuOpen ? 'translate-y-2 rotate-45' : ''}`}></div>
            <div className={`h-0.5 w-6 bg-gray-900 ${isMenuOpen ? 'opacity-0' : ''}`}></div>
            <div className={`h-0.5 w-6 bg-gray-900 transition ${isMenuOpen ? '-translate-y-2 -rotate-45' : ''}`}></div>
          </div>
        </button>
      </div>

      {isMenuOpen && (
        <div className="absolute left-0 top-full flex w-full flex-col gap-5 border-b border-gray-100 bg-white p-6 shadow-2xl md:hidden">
          {navLinks.map((item) => (
            <Link key={item.href} href={item.href} className="text-2xl font-bold" onClick={closeMenu}>
              {item.label}
            </Link>
          ))}
          <div className="flex gap-3 pt-2">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="flex-1 rounded-full bg-[#e8a16b] py-4 text-center font-bold text-white"
            >
              WhatsApp
            </a>
            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noreferrer"
              className="flex-1 rounded-full border border-gray-300 py-4 text-center font-bold"
            >
              Telegram
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

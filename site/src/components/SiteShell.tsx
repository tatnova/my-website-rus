'use client';

import { usePathname } from 'next/navigation';
import SiteNav from '@/components/SiteNav';

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
      <SiteNav />

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
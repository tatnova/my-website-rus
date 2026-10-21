import type { Metadata } from 'next';
import Link from 'next/link';
import { CookieSettingsLink } from '@/components/CookieConsent';
import { TrackingBanner, TrackingHead } from '@/components/Tracking';
import { getSettings } from '@/lib/content';
import { geistSans } from '@/lib/fonts';
import { SITE_URL } from '@/lib/site';
import '../globals.css';

// Корневой макет английских страниц основного сайта (/en/cases и /en/cases/<адрес>).
// Меню основного сайта русское, поэтому здесь своя короткая шапка.
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: './' },
  title: {
    default: 'Paid social case studies for beauty and wellness businesses — Tatyana Richmann',
    template: '%s — Tatyana Richmann',
  },
  description:
    'Facebook and Instagram ad case studies for massage studios, med spas, specialists and studios in Israel and the US, with real Ads Manager numbers.',
  openGraph: { type: 'website', locale: 'en_US', siteName: 'Tatyana Richmann' },
};

export default function EnLayout({ children }: { children: React.ReactNode }) {
  const s = getSettings();
  return (
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full bg-[#fff8f1]">
        <TrackingHead />
        <header className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-5 py-5">
          <Link href="/en/cases" className="text-lg font-black tracking-tight">
            Tatyana Richmann
          </Link>
          <nav className="flex items-center gap-4 text-sm font-bold">
            <Link href="/en/cases" className="hidden text-gray-600 hover:text-black sm:inline">
              Case studies
            </Link>
            <a href={`https://wa.me/${s.whatsapp_phone}`} target="_blank" rel="noreferrer" className="rounded-full bg-black px-5 py-2.5 text-white">
              WhatsApp
            </a>
          </nav>
        </header>
        {children}
        <footer className="border-t border-[#f6dcc5] px-5 py-10 text-center text-xs text-gray-500">
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/" className="underline hover:text-black" hrefLang="ru">
              Русская версия сайта
            </Link>
            <a href="/privacy-policy" className="underline hover:text-black">
              Privacy policy (in Russian)
            </a>
            <CookieSettingsLink className="underline hover:text-black" lang="en" />
          </div>
          <p className="mt-6 uppercase tracking-[0.3em]">© 2026 Tatyana Richmann</p>
        </footer>
        <TrackingBanner lang="en" />
      </body>
    </html>
  );
}

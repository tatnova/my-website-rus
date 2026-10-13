import { TrackingBanner, TrackingHead } from '@/components/Tracking';
import { geistSans } from '@/lib/fonts';
import '../../../globals.css';

// Отдельный корневой макет для нишевых лендингов: без меню основного сайта.
// На поддомене (massage.adsnew.org) этот же HTML отдаёт маршрутизатор Cloudflare.
export default function LandingLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full">
        <TrackingHead />
        {children}
        <TrackingBanner />
      </body>
    </html>
  );
}

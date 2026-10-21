import { TrackingBanner, TrackingHead } from '@/components/Tracking';
import { geistSans } from '@/lib/fonts';
import '../../../../globals.css';

// Корневой макет английских лендингов (/en/l/<ниша>, на поддомене — massage.adsnew.org/en/).
export default function LandingEnLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full">
        <TrackingHead />
        {children}
        <TrackingBanner lang="en" />
      </body>
    </html>
  );
}

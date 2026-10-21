import MetaPixelEvents from '@/components/MetaPixelEvents';
import CookieConsent from '@/components/CookieConsent';
import { consentScript } from '@/lib/consent-script';
import { getCases } from '@/lib/content';

// Счётчики и баннер cookie. Подключается в корневых макетах основного сайта и лендингов.
export function TrackingHead() {
  const caseNames = Object.fromEntries(getCases().map((c) => [c.slug, c.card_title]));
  return (
    <>
      {/* Согласие на cookie: решает, загружать ли Google Analytics, Meta Pixel и TikTok Pixel. */}
      <script dangerouslySetInnerHTML={{ __html: consentScript }} />
      <MetaPixelEvents caseNames={caseNames} />
    </>
  );
}

export function TrackingBanner({ lang = 'ru' }: { lang?: 'ru' | 'en' }) {
  return <CookieConsent lang={lang} />;
}

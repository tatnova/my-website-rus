
import type { Metadata } from "next";
import { Geist } from "next/font/google";
import SiteShell from "@/components/SiteShell";
import MetaPixelEvents from "@/components/MetaPixelEvents";
import CookieConsent from "@/components/CookieConsent";
import { consentScript } from "@/lib/consent-script";
import "./globals.css";

// display: "optional" — шрифт не подменяется на лету, поэтому текст
// первого экрана не «прыгает» при загрузке (CLS на /massage был 0,21).
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "optional",
});

const SITE_URL = "https://beauty.adsnew.org";
const SITE_NAME = "Татьяна Ричманн";
const SITE_DESCRIPTION =
  "Таргетированная реклама в Instagram, Facebook и TikTok для массажистов, косметологов и салонов красоты в Израиле, США и Канаде. Кейсы с цифрами.";
const SOCIAL_PROFILES = [
  "https://www.instagram.com/ads_target_pr/",
  "https://www.facebook.com/newadstarget",
  "https://www.tiktok.com/@tatyana.ads",
  "https://www.threads.net/@ads_target_pr",
];

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  // "./" даёт каждой странице canonical на её собственный адрес.
  alternates: { canonical: "./" },
  title: {
    default: "Реклама для бьюти-бизнеса в Израиле, США и Канаде — Татьяна Ричманн",
    template: `%s — ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  openGraph: {
    type: "website",
    locale: "ru_RU",
    siteName: SITE_NAME,
    images: ["/beauty-business-marketing-specialist.jpg"],
  },
};

// Кто и что: данные для поисковиков и ИИ-поиска. Должны совпадать с текстом на сайте.
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: SITE_NAME,
      jobTitle: "Специалист по таргетированной рекламе для бьюти-бизнеса",
      url: SITE_URL,
      image: `${SITE_URL}/beauty-business-marketing-specialist.jpg`,
      sameAs: SOCIAL_PROFILES,
    },
    {
      "@type": "ProfessionalService",
      "@id": `${SITE_URL}/#service`,
      name: `${SITE_NAME} — реклама для бьюти-бизнеса`,
      description: SITE_DESCRIPTION,
      url: SITE_URL,
      image: `${SITE_URL}/beauty-business-marketing-specialist.jpg`,
      telephone: "+972537086545",
      founder: { "@id": `${SITE_URL}/#person` },
      areaServed: [
        { "@type": "Country", name: "Израиль" },
        { "@type": "Country", name: "США" },
        { "@type": "Country", name: "Канада" },
      ],
      availableLanguage: "ru",
      sameAs: SOCIAL_PROFILES,
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ru"
      className={`${geistSans.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {/* Согласие на cookie: решает, загружать ли GTM, Google Analytics, Meta Pixel и TikTok Pixel. */}
        <script dangerouslySetInnerHTML={{ __html: consentScript }} />
        <MetaPixelEvents />

        <SiteShell>{children}</SiteShell>
        <CookieConsent />
      </body>
    </html>
  );
}
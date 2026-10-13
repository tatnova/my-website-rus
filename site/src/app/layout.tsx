
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import SiteShell from "@/components/SiteShell";
import MetaPixelEvents from "@/components/MetaPixelEvents";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <Script id="google-tag-manager" strategy="afterInteractive">
  {`
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-PLXVW2VV');
  `}
</Script>
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1630705058143577');
            fbq('track', 'PageView');
          `}
        </Script>
        <MetaPixelEvents />

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-1KF8DCZKLR"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-1KF8DCZKLR');
          `}
        </Script>

        <Script id="tiktok-pixel" strategy="afterInteractive">
          {`
            !function (w, d, t) {
              w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];
              ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie"];
              ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};
              for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);
              ttq.load=function(e,n){var i="https://analytics.tiktok.com/i18n/pixel/events.js";
              var o=document.createElement("script");
              o.type="text/javascript";o.async=!0;o.src=i+"?sdkid="+e+"&lib="+t;
              var a=document.getElementsByTagName("script")[0];
              a.parentNode.insertBefore(o,a)};
              ttq.load('D1CJDVJC77U8IVAAI6MG');
              ttq.page();
            }(window, document, 'ttq');
          `}
        </Script>

        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
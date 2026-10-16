'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';
import { whatsappMessage } from '@/lib/whatsapp-message';

// События Meta Pixel (и клики по мессенджерам в GA4). Клик в WhatsApp/Telegram = Contact, не заявка.
// Lead, QualifiedLead и Purchase сайт не отправляет; передачи этих событий из n8n
// в Meta сейчас нет (проверено 13.10.2026).
// Если посетитель не дал согласие на рекламные cookie, fbq не загружен и события не уходят.

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    gtag?: (...args: unknown[]) => void;
  }
}

// Пиксель может появиться чуть позже компонента, поэтому событие ждёт fbq до 5 секунд.
function track(...args: unknown[]) {
  let attempts = 0;
  const send = () => {
    if (typeof window.fbq === 'function') {
      window.fbq(...args);
    } else if (attempts++ < 50) {
      setTimeout(send, 100);
    }
  };
  send();
}

// caseNames: адрес кейса → название, строится из content/cases/ в layout.tsx.
// ViewContent уходит только для адресов из этого списка, чтобы 404 не давали ложный просмотр.
export default function MetaPixelEvents({ caseNames }: { caseNames: Record<string, string> }) {
  const pathname = usePathname();
  const lastPath = useRef<string | null>(null);

  useEffect(() => {
    if (lastPath.current === pathname) return;
    const isFirstLoad = lastPath.current === null;
    lastPath.current = pathname;

    // PageView первой загрузки отправляет код пикселя в layout.tsx, здесь только переходы.
    if (!isFirstLoad) track('track', 'PageView');

    const slug = pathname.match(/^\/cases\/([^/]+)\/?$/)?.[1];
    if (slug && caseNames[slug]) {
      track('track', 'ViewContent', {
        content_type: 'case',
        content_ids: [slug],
        content_name: caseNames[slug],
      });
    }
  }, [pathname, caseNames]);

  // Метка объявления (utm_content) из первой страницы визита: по ней выбирается текст WhatsApp.
  useEffect(() => {
    try {
      const ad = new URLSearchParams(window.location.search).get('utm_content');
      if (ad) sessionStorage.setItem('ad_content', ad);
    } catch {}
  }, []);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const link = (e.target as Element | null)?.closest?.('a[href]');
      if (!link) return;
      const href = link.getAttribute('href') ?? '';
      const channel = /^https:\/\/(wa\.me|api\.whatsapp\.com)\//.test(href)
        ? 'whatsapp'
        : href.startsWith('https://t.me/')
          ? 'telegram'
          : null;
      let adContent: string | null = null;
      try {
        adContent = sessionStorage.getItem('ad_content');
      } catch {}
      // Ссылка WhatsApp без текста получает естественную первую фразу (на лендингах ниш текст уже задан).
      if (channel === 'whatsapp' && !/[?&]text=/.test(href)) {
        const sep = href.includes('?') ? '&' : '?';
        // encodeURIComponent, а не URLSearchParams: WhatsApp показывает «+» вместо пробелов.
        link.setAttribute('href', `${href}${sep}text=${encodeURIComponent(whatsappMessage(adContent, window.location.pathname))}`);
      }
      if (channel) {
        track('track', 'Contact', {
          content_name: channel,
          // Адрес с доменом: так видно, с какого сайта клик (основной или лендинг ниши).
          content_category: window.location.hostname + window.location.pathname,
          ...(adContent ? { ad_content: adContent } : {}),
        });
        // То же нажатие в Google Analytics 4 (whatsapp_click / telegram_click). Без согласия
        // на аналитику gtag.js не загружен, и событие остаётся в очереди неотправленным.
        window.gtag?.('event', `${channel}_click`, { link_domain: new URL(href).hostname });
      }
    };
    document.addEventListener('click', onClick, true);
    return () => document.removeEventListener('click', onClick, true);
  }, []);

  return null;
}

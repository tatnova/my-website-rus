'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';

// События Meta Pixel для сайта. Клик в WhatsApp/Telegram = Contact, не заявка.
// Lead, QualifiedLead и Purchase сайт не отправляет; передачи этих событий из n8n
// в Meta сейчас нет (проверено 13.10.2026).
// Если посетитель не дал согласие на рекламные cookie, fbq не загружен и события не уходят.

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
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

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const link = (e.target as Element | null)?.closest?.('a[href]');
      if (!link) return;
      const href = link.getAttribute('href') ?? '';
      const channel = href.startsWith('https://wa.me/')
        ? 'whatsapp'
        : href.startsWith('https://t.me/')
          ? 'telegram'
          : null;
      if (channel) {
        track('track', 'Contact', {
          content_name: channel,
          // Адрес с доменом: так видно, с какого сайта клик (основной или лендинг ниши).
          content_category: window.location.hostname + window.location.pathname,
        });
      }
    };
    document.addEventListener('click', onClick, true);
    return () => document.removeEventListener('click', onClick, true);
  }, []);

  return null;
}

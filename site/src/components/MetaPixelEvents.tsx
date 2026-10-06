'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';

// События Meta Pixel для сайта. Lead, QualifiedLead и Purchase здесь не отправляются:
// они придут из n8n после квалификации лида. Клик в WhatsApp/Telegram = Contact, не заявка.

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

// Страницы кейсов, на которых отправляется ViewContent. Новый кейс нужно добавить сюда:
// адрес без списка не учитывается, чтобы несуществующие страницы (404) не давали ложный просмотр.
const CASE_NAMES: Record<string, string> = {
  'massazh-israel-740-zayavok': 'Массаж, Израиль: 740 заявок',
  'massage-canada-body': 'Массаж, Канада: 183 заявки',
  'spa-salon-california-256-clients': 'Спа-салон, Калифорния: 256 клиентов',
};

// Пиксель грузится со strategy="afterInteractive" и может появиться чуть позже компонента,
// поэтому событие ждёт fbq до 5 секунд.
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

export default function MetaPixelEvents() {
  const pathname = usePathname();
  const lastPath = useRef<string | null>(null);

  useEffect(() => {
    if (lastPath.current === pathname) return;
    const isFirstLoad = lastPath.current === null;
    lastPath.current = pathname;

    // PageView первой загрузки отправляет код пикселя в layout.tsx, здесь только переходы.
    if (!isFirstLoad) track('track', 'PageView');

    const slug = pathname.match(/^\/cases\/([^/]+)\/?$/)?.[1];
    if (slug && CASE_NAMES[slug]) {
      track('track', 'ViewContent', {
        content_type: 'case',
        content_ids: [slug],
        content_name: CASE_NAMES[slug],
      });
    }
  }, [pathname]);

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
          content_category: window.location.pathname,
        });
      }
    };
    document.addEventListener('click', onClick, true);
    return () => document.removeEventListener('click', onClick, true);
  }, []);

  return null;
}

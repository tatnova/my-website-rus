'use client';

import { useEffect, useState } from 'react';
import { CONSENT_OPEN_EVENT } from '@/lib/consent-script';

// Баннер согласия на cookie. Логику (что загружать и когда) ведёт consent-script.ts,
// здесь только интерфейс: показать выбор и передать его в window.adsConsent.

type Consent = { analytics: boolean; marketing: boolean };

// Тексты баннера для русских и английских страниц.
const TEXT = {
  ru: {
    label: 'Настройки cookie',
    title: 'Cookie на этом сайте',
    body: 'Cookie для статистики (Google Analytics) и рекламы (Meta Pixel, TikTok Pixel). Изменить выбор можно внизу страницы.',
    more: 'Подробнее',
    needed: ['Необходимые', 'запоминают ваш выбор по cookie. Всегда включены.'],
    analytics: ['Статистика', 'Google Analytics и Google Tag Manager: сколько людей заходит и какие страницы читают.'],
    marketing: ['Реклама', 'Meta Pixel и TikTok Pixel: оценка рекламы и показ объявлений тем, кто уже был на сайте.'],
    all: 'Разрешить все',
    none: 'Отклонить',
    save: 'Сохранить выбор',
    setup: 'Настроить',
  },
  en: {
    label: 'Cookie settings',
    title: 'Cookies on this site',
    body: 'Cookies for analytics (Google Analytics) and ads (Meta Pixel, TikTok Pixel). You can change your choice at the bottom of the page.',
    more: 'Learn more',
    needed: ['Necessary', 'remember your cookie choice. Always on.'],
    analytics: ['Analytics', 'Google Analytics and Google Tag Manager: how many people visit and which pages they read.'],
    marketing: ['Advertising', 'Meta Pixel and TikTok Pixel: measuring ads and showing ads to people who have already visited the site.'],
    all: 'Allow all',
    none: 'Decline',
    save: 'Save choice',
    setup: 'Customize',
  },
};
type Lang = keyof typeof TEXT;

declare global {
  interface Window {
    adsConsent?: {
      decided: boolean;
      optOutRegion: boolean;
      get: () => Consent;
      set: (next: Consent) => void;
    };
  }
}

export function openCookieSettings() {
  window.dispatchEvent(new Event(CONSENT_OPEN_EVENT));
}

export default function CookieConsent({ lang = 'ru' }: { lang?: Lang }) {
  const t = TEXT[lang];
  const [open, setOpen] = useState(false);
  const [details, setDetails] = useState(false);
  const [choice, setChoice] = useState<Consent>({ analytics: false, marketing: false });

  useEffect(() => {
    // Баннер появляется после гидрации, отдельным кадром: первый экран не ждёт его.
    const timer = window.setTimeout(() => {
      const api = window.adsConsent;
      if (api && !api.decided) {
        setChoice(api.get());
        setOpen(true);
      }
    }, 0);
    const onOpen = () => {
      if (window.adsConsent) setChoice(window.adsConsent.get());
      setDetails(true);
      setOpen(true);
    };
    window.addEventListener(CONSENT_OPEN_EVENT, onOpen);
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener(CONSENT_OPEN_EVENT, onOpen);
    };
  }, []);

  if (!open) return null;

  const save = (next: Consent) => {
    window.adsConsent?.set(next);
    setOpen(false);
    setDetails(false);
  };

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label={t.label}
      className="fixed inset-x-0 bottom-0 z-[100] p-2 md:p-5"
    >
      <div className="mx-auto max-w-3xl rounded-2xl border border-gray-200 bg-white p-3 text-xs text-gray-700 shadow-2xl md:p-6 md:text-sm">
        <p className="hidden font-bold text-gray-900 md:block">{t.title}</p>
        <p className="leading-snug md:mt-2 md:leading-relaxed">
          {t.body}{' '}
          <a href="/privacy-policy#cookies" className="underline hover:text-black">
            {t.more}
          </a>
        </p>

        {details && (
          <div className="mt-4 space-y-3 rounded-xl bg-gray-50 p-4">
            <label className="flex items-start gap-3">
              <input type="checkbox" checked disabled className="mt-1" />
              <span>
                <b>{t.needed[0]}</b> — {t.needed[1]}
              </span>
            </label>
            <label className="flex cursor-pointer items-start gap-3">
              <input
                type="checkbox"
                className="mt-1"
                checked={choice.analytics}
                onChange={(e) => setChoice({ ...choice, analytics: e.target.checked })}
              />
              <span>
                <b>{t.analytics[0]}</b> — {t.analytics[1]}
              </span>
            </label>
            <label className="flex cursor-pointer items-start gap-3">
              <input
                type="checkbox"
                className="mt-1"
                checked={choice.marketing}
                onChange={(e) => setChoice({ ...choice, marketing: e.target.checked })}
              />
              <span>
                <b>{t.marketing[0]}</b> — {t.marketing[1]}
              </span>
            </label>
          </div>
        )}

        <div className="mt-2 flex flex-wrap gap-2 md:mt-4">
          <button
            type="button"
            onClick={() => save({ analytics: true, marketing: true })}
            className="rounded-full bg-black px-4 py-2 font-bold md:px-5 md:py-2.5 text-white"
          >
            {t.all}
          </button>
          <button
            type="button"
            onClick={() => save({ analytics: false, marketing: false })}
            className="rounded-full bg-black px-4 py-2 font-bold md:px-5 md:py-2.5 text-white"
          >
            {t.none}
          </button>
          {details ? (
            <button
              type="button"
              onClick={() => save(choice)}
              className="rounded-full border border-gray-300 px-4 py-2 font-bold md:px-5 md:py-2.5"
            >
              {t.save}
            </button>
          ) : (
            <button
              type="button"
              onClick={() => setDetails(true)}
              className="rounded-full border border-gray-300 px-4 py-2 font-bold md:px-5 md:py-2.5"
            >
              {t.setup}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export function CookieSettingsLink({ className, lang = 'ru' }: { className?: string; lang?: Lang }) {
  return (
    <button type="button" onClick={openCookieSettings} className={className}>
      {TEXT[lang].label}
    </button>
  );
}

'use client';

import { useEffect, useState } from 'react';
import { CONSENT_OPEN_EVENT } from '@/lib/consent-script';

// Баннер согласия на cookie. Логику (что загружать и когда) ведёт consent-script.ts,
// здесь только интерфейс: показать выбор и передать его в window.adsConsent.

type Consent = { analytics: boolean; marketing: boolean };

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

export default function CookieConsent() {
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
      aria-label="Настройки cookie"
      className="fixed inset-x-0 bottom-0 z-[100] p-3 md:p-5"
    >
      <div className="mx-auto max-w-3xl rounded-2xl border border-gray-200 bg-white p-5 text-sm text-gray-700 shadow-2xl md:p-6">
        <p className="font-bold text-gray-900">Cookie на этом сайте</p>
        <p className="mt-2 leading-relaxed">
          Я использую cookie, чтобы считать посещения (Google Analytics) и показывать рекламу тем, кто
          заходил на сайт (Meta Pixel, TikTok Pixel). Вы можете разрешить всё, отказаться или выбрать
          сами. Изменить решение можно в любой момент по ссылке «Настройки cookie» внизу страницы.{' '}
          <a href="/privacy-policy#cookies" className="underline hover:text-black">
            Подробнее
          </a>
        </p>

        {details && (
          <div className="mt-4 space-y-3 rounded-xl bg-gray-50 p-4">
            <label className="flex items-start gap-3">
              <input type="checkbox" checked disabled className="mt-1" />
              <span>
                <b>Необходимые</b> — запоминают ваш выбор по cookie. Всегда включены.
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
                <b>Статистика</b> — Google Analytics и Google Tag Manager: сколько людей заходит и какие
                страницы читают.
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
                <b>Реклама</b> — Meta Pixel и TikTok Pixel: оценка рекламы и показ объявлений тем, кто
                уже был на сайте.
              </span>
            </label>
          </div>
        )}

        <div className="mt-4 flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => save({ analytics: true, marketing: true })}
            className="rounded-full bg-black px-5 py-2.5 font-bold text-white"
          >
            Разрешить все
          </button>
          <button
            type="button"
            onClick={() => save({ analytics: false, marketing: false })}
            className="rounded-full bg-black px-5 py-2.5 font-bold text-white"
          >
            Отклонить
          </button>
          {details ? (
            <button
              type="button"
              onClick={() => save(choice)}
              className="rounded-full border border-gray-300 px-5 py-2.5 font-bold"
            >
              Сохранить выбор
            </button>
          ) : (
            <button
              type="button"
              onClick={() => setDetails(true)}
              className="rounded-full border border-gray-300 px-5 py-2.5 font-bold"
            >
              Настроить
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export function CookieSettingsLink({ className }: { className?: string }) {
  return (
    <button type="button" onClick={openCookieSettings} className={className}>
      Настройки cookie
    </button>
  );
}

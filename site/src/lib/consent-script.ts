// Согласие на cookie. Этот код встраивается в каждую страницу и выполняется до всех счётчиков.
//
// Категории:
//   analytics — Google Tag Manager и Google Analytics;
//   marketing — Meta Pixel и TikTok Pixel.
// Без согласия скрипты этих сервисов не загружаются вовсе (не просто «молчат»).
//
// Что действует до выбора посетителя, зависит от региона (определяется по часовому поясу браузера):
//   Израиль и США — счётчики включены, посетитель может отказаться (opt-out);
//     сигнал Global Privacy Control (GPC) в браузере отключает рекламные пиксели;
//   все остальные страны, включая ЕС, Великобританию, Швейцарию и Канаду, — до согласия выключено (opt-in).
// Часовой пояс — приблизительный признак. Если он неизвестен, действует строгий вариант (opt-in).
//
// Выбор хранится в localStorage (ключ ниже) 12 месяцев. После отзыва согласия страница
// перезагружается, чтобы уже загруженные скрипты перестали работать.
export const CONSENT_STORAGE_KEY = 'adsnew-cookie-consent-v1';
export const CONSENT_OPEN_EVENT = 'adsnew:open-cookie-settings';
export const CONSENT_CHANGE_EVENT = 'adsnew:consent-change';

const GTM_ID = 'GTM-PLXVW2VV';
const GA_ID = 'G-1KF8DCZKLR';
const META_PIXEL_ID = '1630705058143577';
const TIKTOK_PIXEL_ID = 'D1CJDVJC77U8IVAAI6MG';

export const consentScript = `
(function (w, d) {
  var KEY = '${CONSENT_STORAGE_KEY}';
  var MAX_AGE = 365 * 24 * 60 * 60 * 1000;
  var US_ZONES = /^(America\\/(New_York|Chicago|Denver|Los_Angeles|Phoenix|Anchorage|Adak|Boise|Detroit|Juneau|Sitka|Metlakatla|Nome|Yakutat|Menominee|Indiana\\/.+|Kentucky\\/.+|North_Dakota\\/.+)|Pacific\\/Honolulu|US\\/.+)$/;
  var IL_ZONES = /^(Asia\\/(Jerusalem|Tel_Aviv)|Israel)$/;

  var tz = '';
  try { tz = Intl.DateTimeFormat().resolvedOptions().timeZone || ''; } catch (e) {}
  var optOutRegion = US_ZONES.test(tz) || IL_ZONES.test(tz);
  var gpc = navigator.globalPrivacyControl === true;

  var stored = null;
  try {
    var raw = w.localStorage.getItem(KEY);
    if (raw) {
      var parsed = JSON.parse(raw);
      if (parsed && typeof parsed.ts === 'number' && Date.now() - parsed.ts < MAX_AGE) stored = parsed;
    }
  } catch (e) {}

  var state = stored
    ? { analytics: !!stored.analytics, marketing: !!stored.marketing }
    : { analytics: optOutRegion, marketing: optOutRegion && !gpc };

  w.dataLayer = w.dataLayer || [];
  w.gtag = w.gtag || function () { w.dataLayer.push(arguments); };
  function g(v) { return v ? 'granted' : 'denied'; }
  w.gtag('consent', 'default', {
    analytics_storage: g(state.analytics),
    ad_storage: g(state.marketing),
    ad_user_data: g(state.marketing),
    ad_personalization: g(state.marketing),
    functionality_storage: 'granted',
    security_storage: 'granted',
    wait_for_update: 500
  });

  var loaded = { analytics: false, marketing: false };

  function addScript(src) {
    var s = d.createElement('script');
    s.async = true;
    s.src = src;
    d.head.appendChild(s);
  }

  function loadAnalytics() {
    if (loaded.analytics) return;
    loaded.analytics = true;
    w.dataLayer.push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
    addScript('https://www.googletagmanager.com/gtm.js?id=${GTM_ID}');
    addScript('https://www.googletagmanager.com/gtag/js?id=${GA_ID}');
    w.gtag('js', new Date());
    w.gtag('config', '${GA_ID}');
  }

  function loadMarketing() {
    if (loaded.marketing) return;
    loaded.marketing = true;

    !function (f, b, e, v, n, t, s) {
      if (f.fbq) return; n = f.fbq = function () {
        n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
      };
      if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = '2.0';
      n.queue = []; t = b.createElement(e); t.async = !0;
      t.src = v; s = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s);
    }(w, d, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
    w.fbq('consent', 'grant');
    w.fbq('init', '${META_PIXEL_ID}');
    w.fbq('track', 'PageView');

    !function (w, d, t) {
      w.TiktokAnalyticsObject = t; var ttq = w[t] = w[t] || [];
      ttq.methods = ['page', 'track', 'identify', 'instances', 'debug', 'on', 'off', 'once', 'ready', 'alias', 'group', 'enableCookie', 'disableCookie', 'holdConsent', 'revokeConsent', 'grantConsent'];
      ttq.setAndDefer = function (t, e) { t[e] = function () { t.push([e].concat(Array.prototype.slice.call(arguments, 0))); }; };
      for (var i = 0; i < ttq.methods.length; i++) ttq.setAndDefer(ttq, ttq.methods[i]);
      ttq.load = function (e) {
        var o = d.createElement('script'); o.type = 'text/javascript'; o.async = !0;
        o.src = 'https://analytics.tiktok.com/i18n/pixel/events.js?sdkid=' + e + '&lib=' + t;
        var a = d.getElementsByTagName('script')[0]; a.parentNode.insertBefore(o, a);
      };
      ttq.load('${TIKTOK_PIXEL_ID}');
      ttq.page();
    }(w, d, 'ttq');
  }

  function apply() {
    if (state.analytics) loadAnalytics();
    if (state.marketing) loadMarketing();
  }

  w.adsConsent = {
    // decided: посетитель уже сделал выбор (баннер не нужен).
    decided: !!stored,
    optOutRegion: optOutRegion,
    get: function () { return { analytics: state.analytics, marketing: state.marketing }; },
    set: function (next) {
      var revoked = (state.analytics && !next.analytics && loaded.analytics) ||
        (state.marketing && !next.marketing && loaded.marketing);
      state = { analytics: !!next.analytics, marketing: !!next.marketing };
      this.decided = true;
      try {
        w.localStorage.setItem(KEY, JSON.stringify({ analytics: state.analytics, marketing: state.marketing, ts: Date.now() }));
      } catch (e) {}
      w.gtag('consent', 'update', {
        analytics_storage: g(state.analytics),
        ad_storage: g(state.marketing),
        ad_user_data: g(state.marketing),
        ad_personalization: g(state.marketing)
      });
      if (!state.marketing && loaded.marketing) {
        if (w.fbq) w.fbq('consent', 'revoke');
        if (w.ttq && w.ttq.revokeConsent) w.ttq.revokeConsent();
      }
      w.dispatchEvent(new CustomEvent('${CONSENT_CHANGE_EVENT}'));
      if (revoked) { w.location.reload(); return; }
      apply();
    }
  };

  apply();
})(window, document);
`;

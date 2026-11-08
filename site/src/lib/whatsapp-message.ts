// Предзаполненный текст сообщения WhatsApp. Обычные фразы, без технических меток:
// по первой фразе переписки видно, с какого объявления (utm_content) или страницы пришёл человек,
// а AI-агент в n8n определяет по ней направление (таргет или AI-агенты) и язык.
// Если посетитель изменит текст перед отправкой, связь теряется; источник визита остаётся в GA4 по UTM.
const BY_AD: Record<string, string> = {
  c1: 'Здравствуйте, Татьяна! Посмотрела ваш сайт, хочу обсудить рекламу для своего салона.',
  c2: 'Здравствуйте, Татьяна! Хочу обсудить рекламу для своего бизнеса.',
  c3: 'Здравствуйте, Татьяна! Прочитала кейс про 740 заявок. Хочу обсудить рекламу для своего бизнеса.',
  c4: 'Здравствуйте, Татьяна! Интересует ведение рекламы для салона под ключ.',
  v1: 'Здравствуйте, Татьяна! Посмотрела ваши кейсы, хочу обсудить продвижение своего салона.',
  v2: 'Здравствуйте, Татьяна! Посмотрела ваши кейсы, хочу обсудить рекламу для своего бизнеса.',
};

const DEFAULT = 'Здравствуйте, Татьяна! Хочу обсудить таргетированную рекламу для своего бизнеса.';
const AI_RU = 'Здравствуйте, Татьяна! Интересует AI-агент для моего бизнеса.';
// Английские страницы: без русского текста, даже если визит начался с русского объявления.
const EN_DEFAULT = 'Hi Tatyana! I’d like to discuss targeted advertising for my business.';
const EN_CASES = 'Hi Tatyana! I saw your case study and I’d like to discuss targeted advertising for my business.';

export function whatsappMessage(adContent: string | null, pathname: string): string {
  if (pathname === '/en' || pathname.startsWith('/en/')) {
    return pathname.startsWith('/en/cases/') ? EN_CASES : EN_DEFAULT;
  }
  if (pathname.startsWith('/privacy-policy/ai-agent')) return AI_RU;
  if (adContent && BY_AD[adContent]) return BY_AD[adContent];
  if (pathname.startsWith('/razbor')) return BY_AD.c2;
  if (pathname.startsWith('/cases/')) return 'Здравствуйте, Татьяна! Посмотрела кейс на сайте, хочу обсудить рекламу для своего бизнеса.';
  if (pathname.startsWith('/services')) return 'Здравствуйте, Татьяна! Хочу узнать про ваши услуги по рекламе.';
  return DEFAULT;
}

// Площадка, с которой человек пришёл на сайт: по utm_source или по адресу предыдущей страницы.
// Только органика из соцсетей; визит с объявления (utm_content) сюда не попадает.
const PLATFORMS: [RegExp, string][] = [
  [/^(instagram|ig)$|(^|\.)instagram\.com$/, 'Instagram'],
  [/^(facebook|fb)$|(^|\.)facebook\.com$|(^|\.)fb\.com$/, 'Facebook'],
  [/^tiktok$|(^|\.)tiktok\.com$/, 'TikTok'],
  [/^threads$|(^|\.)threads\.(net|com)$/, 'Threads'],
  [/^pinterest$|(^|\.)pinterest\.[a-z.]+$|(^|\.)pin\.it$/, 'Pinterest'],
  [/^reddit$|(^|\.)reddit\.com$/, 'Reddit'],
  [/^(youtube|yt)$|(^|\.)youtube\.com$|(^|\.)youtu\.be$/, 'YouTube'],
];

export function visitPlatform(utmSource: string | null, referrer: string): string | null {
  const keys: string[] = [];
  if (utmSource) keys.push(utmSource.trim().toLowerCase());
  try {
    if (referrer) keys.push(new URL(referrer).hostname.toLowerCase());
  } catch {}
  for (const key of keys) {
    for (const [re, name] of PLATFORMS) if (re.test(key)) return name;
  }
  return null;
}

// Вставляет после приветствия обычную фразу «Нашла вас в Instagram.»: по ней n8n записывает источник.
export function withPlatform(message: string, platform: string | null, pathname: string): string {
  if (!platform) return message;
  const en = pathname === '/en' || pathname.startsWith('/en/');
  const phrase = en ? `Found you on ${platform}.` : `Нашла вас в ${platform}.`;
  const i = message.indexOf('!');
  return i < 0 ? `${phrase} ${message}` : `${message.slice(0, i + 1)} ${phrase}${message.slice(i + 1)}`;
}

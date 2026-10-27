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

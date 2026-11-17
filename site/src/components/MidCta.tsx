import { getSettings } from '@/lib/content';

// Одна кнопка связи в середине кейса или статьи.
// В шапке, футере и внизу экрана на телефоне кнопки уже есть, поэтому в начале и в конце текста их не ставим.
export default function MidCta({ text, message, button = 'Написать в WhatsApp' }: { text: string; message: string; button?: string }) {
  const s = getSettings();
  const href = `https://wa.me/${s.whatsapp_phone}?text=${encodeURIComponent(message)}`;
  return (
    <div className="not-prose my-10 rounded-3xl font-sans border border-[#f1dcc8] bg-white p-6 shadow-sm">
      <p className="font-sans text-lg font-bold leading-7 text-gray-900">{text}</p>
      <a href={href} target="_blank" rel="noreferrer" className="mt-4 inline-block rounded-full bg-[#1a8f4c] px-6 py-3.5 text-base font-bold text-white no-underline">
        {button}
      </a>
    </div>
  );
}

// Делит HTML статьи по заголовку, ближайшему к середине текста (сначала ищем h2, если их нет, то h3).
// Если заголовок лежит внутри обёрток <div>/<section> (как в кейсах с <div class="tr-case">), закрываем их
// перед кнопкой и открываем такие же после неё, чтобы разметка и стили текста не сломались.
export function splitInMiddle(html: string): [string, string] {
  type Spot = { at: number; level: string; stack: string[] };
  const spots: Spot[] = [];
  const stack: string[] = [];
  let blocked = 0; // внутри figure/ol/ul/table/blockquote заголовки не берём
  for (const m of html.matchAll(/<(\/?)(div|section|figure|ol|ul|table|blockquote)\b[^>]*>|<h([23])[\s>]/g)) {
    const at = m.index ?? 0;
    if (m[3]) {
      if (!blocked && at > 0) spots.push({ at, level: m[3], stack: [...stack] });
    } else if (m[2] === 'div' || m[2] === 'section') {
      if (m[1]) stack.pop();
      else stack.push(m[0].replace(/\sid="[^"]*"/, ''));
    } else blocked += m[1] ? -1 : 1;
  }
  const pool = spots.some((x) => x.level === '2') ? spots.filter((x) => x.level === '2') : spots;
  if (!pool.length) return [html, ''];
  const mid = html.length / 2;
  const best = pool.reduce((a, b) => (Math.abs(b.at - mid) < Math.abs(a.at - mid) ? b : a));
  const close = [...best.stack].reverse().map((t) => `</${t.match(/^<(\w+)/)![1]}>`).join('');
  return [html.slice(0, best.at) + close, best.stack.join('') + html.slice(best.at)];
}

// Инфографика «шаги по порядку»: значки, соединённые линией.
// На телефоне шаги идут столбиком, на компьютере в ряд.

const ICONS: Record<string, string> = {
  // мегафон
  ad: 'M3 11v2a1 1 0 0 0 1 1h2l4 4V6L6 10H4a1 1 0 0 0-1 1Zm11-5v12m4-9a4 4 0 0 1 0 6',
  // профиль
  profile: 'M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm-7 8a7 7 0 0 1 14 0',
  // таргет
  target: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0-4a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0-4a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z',
  // сообщение
  chat: 'M4 5h16v11H8l-4 4V5Zm4 5h8m-8 3h5',
  // календарь
  calendar: 'M5 6h14v14H5V6Zm0 4h14M9 3v4m6-4v4m-6 7h2',
  // лупа
  search: 'M11 18a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm5-2 4 4',
  // план
  plan: 'M6 4h12v16H6V4Zm3 5h6m-6 4h6m-6 4h3',
  // рост
  growth: 'M4 18 10 12l4 4 6-8m0 0h-5m5 0v5',
};

export type Step = { title: string; text: string; icon: keyof typeof ICONS | string };

export default function StepFlow({ steps, dark = false }: { steps: Step[]; dark?: boolean }) {
  const cols = steps.length === 5 ? 'md:grid-cols-5' : steps.length === 3 ? 'md:grid-cols-3' : 'md:grid-cols-4';
  return (
    <ol className={`relative mt-10 grid gap-8 ${cols} md:gap-4`}>
      <span
        aria-hidden
        className={`absolute left-7 top-7 bottom-7 w-0.5 md:bottom-auto md:left-[10%] md:right-[10%] md:h-0.5 md:w-auto ${dark ? 'bg-white/20' : 'bg-[#e8a16b]/40'}`}
      />
      {steps.map((st, i) => (
        <li key={st.title} className="relative flex gap-5 md:flex-col md:items-center md:gap-0 md:text-center">
          <span
            className={`relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-4 ${
              dark ? 'border-black bg-[#e8a16b] text-black' : 'border-gray-50 bg-black text-[#e8a16b]'
            }`}
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d={ICONS[st.icon] ?? ICONS.target} />
            </svg>
          </span>
          <div className="md:mt-4">
            <p className={`text-xs font-bold uppercase tracking-widest ${dark ? 'text-[#e8a16b]' : 'text-[#a35f2c]'}`}>Шаг {i + 1}</p>
            <p className="mt-1 text-lg font-black">{st.title}</p>
            <p className={`mt-2 text-sm leading-relaxed ${dark ? 'text-white/75' : 'text-gray-600'}`}>{st.text}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

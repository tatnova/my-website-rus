import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Реклама для массажистов и массажных салонов в Израиле, США и Канаде',
  description:
    'Таргетированная реклама для массажистов и массажных салонов: 740 заявок по 5,7 ₪ в Израиле, 183 заявки в Канаде, 256 клиентов спа-салона в Калифорнии. Обсудить проект в WhatsApp или Telegram.',
};

export default function MassageLayout({ children }: { children: React.ReactNode }) {
  return children;
}

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Реклама для массажистов в Израиле, США и Канаде',
  description:
    'Таргетированная реклама для массажистов и массажных салонов: 740 заявок в Израиле, 183 заявки в Канаде, 256 клиентов спа-салона в США.',
};

export default function MassageLayout({ children }: { children: React.ReactNode }) {
  return children;
}

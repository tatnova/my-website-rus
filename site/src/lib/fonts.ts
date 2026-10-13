import { Geist } from 'next/font/google';

// display: "optional" — шрифт не подменяется на лету, поэтому текст
// первого экрана не «прыгает» при загрузке (CLS на /massage был 0,21).
export const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'optional',
});

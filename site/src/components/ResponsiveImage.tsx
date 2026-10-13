/* eslint-disable @next/next/no-img-element -- next/image не работает при статическом экспорте на Cloudflare Pages; картинки сжимает scripts/optimize-images.mjs */
import type { ImgHTMLAttributes } from 'react';
import manifest from '@/lib/image-manifest.json';

type ImageMeta = { base: string; width: number; height: number; widths: number[] };

type Props = Omit<ImgHTMLAttributes<HTMLImageElement>, 'src' | 'srcSet' | 'width' | 'height' | 'loading'> & {
  src: string;
  alt: string;
  // Какую ширину картинка занимает на экране, например "(min-width: 1024px) 40vw, 100vw".
  sizes: string;
  // true только для главной картинки первого экрана: грузится сразу и в первую очередь.
  priority?: boolean;
};

// Отдаёт браузеру лёгкие WebP-копии из public/img/ нужного размера.
// Если для картинки ещё не запускали `npm run images`, показывает оригинал.
export default function ResponsiveImage({ src, alt, sizes, priority = false, ...rest }: Props) {
  const meta = (manifest as Record<string, ImageMeta>)[src];
  const loading = priority ? 'eager' : 'lazy';
  const fetchPriority = priority ? 'high' : undefined;

  if (!meta) {
    return <img src={src} alt={alt} loading={loading} fetchPriority={fetchPriority} decoding="async" {...rest} />;
  }

  const largest = meta.widths[meta.widths.length - 1];
  return (
    <img
      src={`${meta.base}-${largest}.webp`}
      srcSet={meta.widths.map((w) => `${meta.base}-${w}.webp ${w}w`).join(', ')}
      sizes={sizes}
      width={meta.width}
      height={meta.height}
      alt={alt}
      loading={loading}
      fetchPriority={fetchPriority}
      decoding="async"
      {...rest}
    />
  );
}

import type { NextConfig } from "next";

// STATIC_EXPORT=1 (сборка для Cloudflare Pages, npm run build:cloudflare): сайт собирается
// в папку out/ как набор готовых файлов. Без неё сборка остаётся прежней (Vercel).
const nextConfig: NextConfig = {
  output: process.env.STATIC_EXPORT === "1" ? "export" : undefined,
};

export default nextConfig;

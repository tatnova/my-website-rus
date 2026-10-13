import type { Metadata } from 'next';

// Страница ещё не наполнена: закрыта от индексации, пока не появится содержание.
export const metadata: Metadata = {
  robots: { index: false, follow: true },
};

export default function FaqPage() {
  return (
    <main style={{ padding: "40px", maxWidth: "900px", margin: "0 auto" }}>
      <h1>FAQ</h1>
      <p>Здесь будут частые вопросы.</p>
    </main>
  );
}

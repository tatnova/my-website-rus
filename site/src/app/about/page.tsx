import type { Metadata } from 'next';

// Страница ещё не наполнена: закрыта от индексации, пока не появится содержание.
export const metadata: Metadata = {
  robots: { index: false, follow: true },
};

export default function AboutPage() {
  return (
    <main style={{ padding: "40px", maxWidth: "900px", margin: "0 auto" }}>
      <h1>Обо мне</h1>
      <p>Здесь будет информация обо мне и агентстве.</p>
    </main>
  );
}

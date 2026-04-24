import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Продвижение массажа в Израиле: 740 заявок по 5,7 ₪ и 30 762 ₪ прибыли',
  description:
    'Кейс продвижения мастера ручного массажа в Израиле с нуля: 740 заявок за 3 месяца, цена заявки 5,7 ₪, выручка 37 000 ₪ и чистая прибыль 30 762 ₪.',
};

const metrics = [
  ['Вложения', '6 174 ₪'],
  ['Заявки', '740'],
  ['Цена заявки', '5,7 ₪'],
  ['Клиенты', '~185'],
  ['Выручка', '37 000 ₪'],
  ['Чистая прибыль', '30 762 ₪'],
];

export default function MassageIsraelCasePage() {
  return (
    <main className="bg-[#fff8f1] text-gray-900">
      <article className="mx-auto max-w-3xl px-5 py-10 md:py-16">
        <a href="/cases" className="text-sm font-bold text-[#e8a16b]">
          ← Все кейсы
        </a>

        <p className="mt-8 text-xs font-black uppercase tracking-[0.25em] text-[#e8a16b]">
          Кейс · массаж · Израиль
        </p>

        <h1 className="mt-4 text-3xl font-black leading-tight md:text-5xl">
          Продвижение массажа в Израиле: 740 заявок по 5,7 ₪ и 30 762 ₪ чистой прибыли
        </h1>

        <p className="mt-5 text-lg leading-8 text-gray-600">
          Как мастеру ручного массажа без клиентской базы и опыта в бизнесе обеспечить полную запись уже в первый месяц работы.
        </p>

        <div className="mt-7 flex flex-wrap gap-3">
          <a
            href="https://wa.me/972537086545"
            target="_blank"
            className="rounded-full bg-black px-6 py-3 text-sm font-bold text-white"
          >
            WhatsApp
          </a>
          <a
            href="https://t.me/mailovaja"
            target="_blank"
            className="rounded-full border border-gray-300 bg-white px-6 py-3 text-sm font-bold"
          >
            Telegram
          </a>
        </div>

        <section className="mt-10 rounded-3xl bg-white p-5 shadow-sm md:p-7">
          <h2 className="text-2xl font-black">Результат в цифрах</h2>

          <div className="mt-5 grid grid-cols-2 gap-3">
            {metrics.map(([label, value]) => (
              <div key={label} className="border-b border-gray-100 pb-3">
                <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
                  {label}
                </p>
                <p className="mt-1 text-xl font-black text-[#e8a16b]">
                  {value}
                </p>
              </div>
            ))}
          </div>
        </section>

        <CaseText />
      </article>
    </main>
  );
}

function CaseText() {
  return (
    <div className="mt-10 space-y-10 text-[18px] leading-8 text-gray-800">
      <section>
        <h2 className="mb-4 text-2xl font-black">Кратко о кейсе</h2>
        <p>
          В этом кейсе представлена пошаговая стратегия продвижения студии ручного массажа, которая позволила получить 740 обращений за 3 месяца при минимальном рекламном бюджете.
        </p>
        <p className="mt-4">
          Клиентка стартовала с полного нуля: без клиентской базы, с пустым Instagram-аккаунтом и только что завершённым ремонтом в кабинете.
        </p>
      </section>

      <section>
        <h2 className="mb-4 text-2xl font-black">Точка А: старт с полного нуля</h2>
        <p>Ко мне обратилась клиентка, которая находилась в самом начале пути.</p>

        <ul className="mt-4 list-disc space-y-2 pl-5">
          <li><strong>Статус:</strong> только что закончила курсы классического и лечебного массажа.</li>
          <li><strong>Ресурсы:</strong> пустой Instagram-аккаунт, отсутствие клиентской базы, свежезавершённый ремонт в кабинете.</li>
          <li><strong>Сложности:</strong> ограниченный бюджет и высокая конкуренция в бьюти-сфере Израиля.</li>
        </ul>
      </section>

      <section>
        <h2 className="mb-4 text-2xl font-black">Запрос клиента</h2>
        <p>
          Основной целью было запустить стабильный поток клиентов и сразу начать окупать вложения в бизнес.
        </p>
        <p className="mt-4">
          Клиентке требовался не просто красивый профиль, а система, приносящая реальные записи.
        </p>
      </section>

      <section>
        <h2 className="mb-4 text-2xl font-black">Что сделали</h2>

        <h3 className="mt-6 text-xl font-black">Полная упаковка профиля</h3>
        <p className="mt-2">
          Оформлена шапка профиля, создана структура актуального Highlights и разработаны рекомендации по визуалу, чтобы аккаунт вызывал ощущение профессионализма и уюта.
        </p>

        <h3 className="mt-6 text-xl font-black">Техническое задание для контента</h3>
        <p className="mt-2">
          Составлено ТЗ для фотографа с акцентом на демонстрацию рук мастера в работе, чтобы передать ощущение расслабления через экран.
        </p>
        <p className="mt-4">
          Упор был сделан на отстройку от аппаратных методик в пользу ручного массажа.
        </p>

        <h3 className="mt-6 text-xl font-black">Стратегия продаж и скрипты</h3>
        <p className="mt-2">
          Были внедрены готовые скрипты для обработки заявок в Direct и WhatsApp, чтобы переводить вопросы «Сколько стоит?» в реальные записи.
        </p>

        <h3 className="mt-6 text-xl font-black">Рекламный запуск</h3>
        <p className="mt-2">
          Использовались макеты с чётким оффером, например скульптурный массаж лица за 290 шекелей, и указанием локации — Петах-Тиква. Это позволило получать лиды по минимальной цене.
        </p>
      </section>

      <section>
        <h2 className="mb-4 text-2xl font-black">Точка Б: результат</h2>
        <ul className="list-disc space-y-2 pl-5">
          <li><strong>Потрачено, включая бюджет и услуги:</strong> 6 174 ₪ (~$1 992).</li>
          <li><strong>Получено заявок:</strong> 740.</li>
          <li><strong>Средняя цена заявки:</strong> 5,7 ₪ (~$1.80).</li>
          <li><strong>Конверсия в запись:</strong> около 25%.</li>
          <li><strong>Новых клиентов:</strong> около 185.</li>
          <li><strong>Выручка только с первых визитов:</strong> 37 000 ₪ (~$12 000).</li>
          <li><strong>Чистая прибыль:</strong> 30 762 ₪ (~$9 946).</li>
        </ul>
      </section>

      <section>
        <h2 className="mb-4 text-2xl font-black">Почему это сработало</h2>
        <p>
          Результат получился не за счёт одного рекламного объявления, а за счёт связки: упаковка профиля, понятный оффер, локальная реклама, обработка заявок и скрипты продаж.
        </p>

        <ul className="mt-4 list-disc space-y-2 pl-5">
          <li>профиль вызывал доверие до запуска рекламы;</li>
          <li>контент показывал именно ручной массаж и работу мастера;</li>
          <li>оффер был конкретным и понятным;</li>
          <li>геолокация Петах-Тиква помогла работать с локальной аудиторией;</li>
          <li>заявки из Direct и WhatsApp быстро переводились в записи.</li>
        </ul>
      </section>

      <section>
        <h2 className="mb-4 text-2xl font-black">Итог</h2>
        <p>
          Клиентка окупила затраты на рекламу и работу специалиста почти в 6 раз уже на старте.
        </p>
        <p className="mt-4">
          Мастер обеспечил себе статус sold-out — полную запись, а аккаунт вырос на 246 целевых подписчиков.
        </p>
        <p className="mt-4">
          Этот кейс показывает, что продвижение массажа в Израиле может давать результат даже при старте с нуля, если реклама запускается не отдельно, а как часть системы привлечения клиентов.
        </p>
      </section>

      <section className="rounded-3xl bg-black p-6 text-white">
        <h2 className="text-2xl font-black">Хотите такой же разбор?</h2>
        <p className="mt-3 text-white/70">
          Напишите мне в WhatsApp или Telegram — разберём ваш проект, бюджет и точки роста.
        </p>

        <div className="mt-5 flex flex-wrap gap-3">
          <a href="https://wa.me/972537086545" target="_blank" className="rounded-full bg-white px-6 py-3 text-sm font-bold text-black">
            WhatsApp
          </a>
          <a href="https://t.me/mailovaja" target="_blank" className="rounded-full border border-white/30 px-6 py-3 text-sm font-bold text-white">
            Telegram
          </a>
        </div>
      </section>
    </div>
  );
}
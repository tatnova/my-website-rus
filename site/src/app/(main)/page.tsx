import HomeClient from '@/components/HomeClient';
import { getCases, getFaq, getReviews, getServices } from '@/lib/content';

export default function Home() {
  const cases = getCases()
    .filter((c) => c.show_on_home)
    .slice(0, 3)
    .map((c) => ({
      niche: [c.niche_label, [c.country, c.city].filter(Boolean).join(', ')].filter(Boolean).join(' · '),
      problem: c.summary_problem,
      action: c.summary_action,
      result: c.summary_result || c.card_title,
      href: `/cases/${c.slug}`,
    }));
  const reviews = getReviews()
    .filter((r) => r.show_on_home)
    .map((r) => ({ author: r.author, text: r.text, image: r.image }));
  return <HomeClient cases={cases} reviews={reviews} faqs={getFaq()} services={getServices()} />;
}

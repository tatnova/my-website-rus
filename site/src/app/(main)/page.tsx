import HomeClient from '@/components/HomeClient';
import { getCases, getFaq, getNiches, getReviews, getServices } from '@/lib/content';
import { LANDINGS_LIVE, nicheUrl } from '@/lib/site';

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
  const niches = LANDINGS_LIVE
    ? getNiches()
        .filter((n) => n.published)
        .map((n) => ({ name: n.name, badge: n.badge, url: `${nicheUrl(n.subdomain)}/` }))
    : [];
  return <HomeClient cases={cases} reviews={reviews} faqs={getFaq().filter((f) => f.show_on_home)} services={getServices()} niches={niches} />;
}

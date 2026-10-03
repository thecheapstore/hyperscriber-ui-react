import { useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Seo from '@/components/seo/Seo';
import FAQSection, { type FAQItem } from '@/components/services/sections/FAQSection';
import FinalCTA from '@/components/services/sections/FinalCTA';
import { LandingHero, ProjectGrid, SectionShell, TextCardGrid } from '@/components/landing/LandingBlocks';
import { allPortfolioProjects } from '@/data/portfolio';
import type { Project } from '@/data/portfolio/types';
import { industryPages, locationPages } from '@/data/landingPages';
import { buildFaqSchema } from '@/lib/faqSchema';
import { pageTransition } from '@/lib/motion';
import { SITE_URL, absUrl, breadcrumbSchema } from '@/lib/seo';

const PAGE_PATH = '/portfolio/';
const PAGE_TITLE = 'Website Design and SEO Case Studies | Calibre Associates';
const PAGE_DESCRIPTION =
  'Browse Calibre Associates case studies in website design, local SEO and branding for tree service, landscaping and ecommerce brands, then book a free call.';

interface ProjectGroup {
  id: string;
  eyebrow: string;
  title: string;
  intro: string;
  matches: (project: Project) => boolean;
}

const isLocalService = (p: Project) =>
  p.serviceSlug === 'website-development' &&
  (p.platformTags.includes('Local Business') || /New York/i.test(p.about.location));

const GROUPS: ProjectGroup[] = [
  {
    id: 'local-service-websites',
    eyebrow: 'LOCAL SERVICE BUSINESSES',
    title: 'Websites for Tree Service, Landscaping and Home Service Companies',
    intro:
      'Tree service, landscaping, lawn care and deck building companies around Buffalo, Rochester and Syracuse. These builds share a pattern: a page for every service, a page for every town worth ranking in, schema, and lead capture that works on a phone.',
    matches: isLocalService,
  },
  {
    id: 'ecommerce-and-brand-websites',
    eyebrow: 'ECOMMERCE AND PERSONAL BRANDS',
    title: 'Ecommerce and Personal Brand Websites',
    intro:
      'Online stores and a personal brand site built for audiences in India, covering mattresses, designer apparel, fragrance, specialty coffee, fine jewellery and an actor and creator portfolio.',
    matches: (p) => p.serviceSlug === 'website-development' && !isLocalService(p),
  },
  {
    id: 'local-seo-case-studies',
    eyebrow: 'SEO AND GOOGLE BUSINESS PROFILE',
    title: 'Local SEO and Google Business Profile Case Studies',
    intro:
      'The search side of the same local service clients: audits, technical fixes, location page rewrites and Google Business Profile campaigns. Each study says what was measured and states plainly where reporting is still pending.',
    matches: (p) => p.serviceSlug === 'seo',
  },
  {
    id: 'brand-identity-concepts',
    eyebrow: 'BRAND IDENTITY CONCEPTS',
    title: 'Brand Identity and Campaign Concepts',
    intro:
      'Concept projects produced in house to show creative range across beauty, food and beverage and fashion. They are not client engagements, and each one is labelled as a concept.',
    matches: (p) => p.serviceSlug === 'brand-identity-development',
  },
];

const FAQS: FAQItem[] = [
  {
    question: 'What kinds of businesses has Calibre Associates built websites for?',
    answer:
      'Mostly local service businesses around Buffalo, Rochester and Syracuse, including tree service, landscaping, lawn care and deck building companies. We have also built ecommerce stores and a personal brand site for businesses and creators in India, so the portfolio covers both service companies and online brands.',
  },
  {
    question: 'Are these case studies real client projects?',
    answer:
      'The website and SEO case studies are real engagements with live sites. Brand identity projects marked as concepts were produced in house and are labelled that way. Where a case study includes sample reporting dashboards they are marked as illustrative, and where ranking data is still pending the case study says so.',
  },
  {
    question: 'Can I see a case study similar to my business?',
    answer:
      'If you run a tree service company, start with our tree service marketing page. If you run a landscaping or lawn care business, see our landscaping and lawn care marketing page. Each links to the matching case studies. For other industries, book a call and we will point you to the closest example.',
  },
  {
    question: 'How do I start a project like these?',
    answer:
      'Book a free strategy call, call +1 716 355 1231 in North America or +91 9792848868 in India, or email info@calibreassociates.com. We will ask about your services, towns and goals, then send a scoped plan.',
  },
];

const Portfolio = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const grouped = useMemo(() => {
    const used = new Set<Project>();
    const sections = GROUPS.map((group) => {
      const projects = allPortfolioProjects.filter((p) => !used.has(p) && group.matches(p));
      projects.forEach((p) => used.add(p));
      return { group, projects };
    }).filter((section) => section.projects.length > 0);

    // Safety net so a project added with a new service slug is never left out of the static HTML.
    const rest = allPortfolioProjects.filter((p) => !used.has(p));
    if (rest.length > 0) {
      sections.push({
        group: {
          id: 'more-work',
          eyebrow: 'MORE WORK',
          title: 'More Case Studies',
          intro: 'Additional projects from across our services.',
          matches: () => true,
        },
        projects: rest,
      });
    }
    return sections;
  }, []);

  const total = allPortfolioProjects.length;
  const hubTone = grouped.length % 2 === 0 ? 'canvas' : 'soft';

  const crumbs = [
    { name: 'Home', path: '/' },
    { name: 'Our Work', path: PAGE_PATH },
  ];

  const url = absUrl(PAGE_PATH);

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      '@id': `${url}#webpage`,
      url,
      name: 'Website Design and SEO Case Studies for Local Service Businesses',
      description: PAGE_DESCRIPTION,
      isPartOf: { '@id': `${SITE_URL}/#website` },
      about: { '@id': `${SITE_URL}/#organization` },
      mainEntity: {
        '@type': 'ItemList',
        name: 'Calibre Associates case studies',
        numberOfItems: total,
        itemListElement: allPortfolioProjects.map((project, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          url: absUrl(`/services/${project.serviceSlug}/projects/${project.slug}`),
          name: project.projectName,
        })),
      },
    },
    breadcrumbSchema(crumbs),
    buildFaqSchema(FAQS),
  ];

  const hubItems = [
    ...industryPages.map((p) => ({
      title: p.navLabel,
      text: p.summary,
      link: { to: p.path, label: p.navLabel },
    })),
    ...locationPages.map((p) => ({
      title: p.navLabel,
      text: p.summary,
      link: { to: p.path, label: p.navLabel },
    })),
  ];

  return (
    <motion.div {...pageTransition} className="min-h-screen">
      <Seo title={PAGE_TITLE} description={PAGE_DESCRIPTION} path={PAGE_PATH} jsonLd={jsonLd} />

      <Navbar />

      <main className="mt-16">
        <LandingHero
          crumbs={crumbs}
          eyebrow="OUR WORK"
          h1="Website Design and SEO Case Studies for Local Service Businesses"
          answer={`Calibre Associates documents its work as ${total} case studies covering website design, local SEO and Google Business Profile programs, ecommerce stores and brand identity. Most of the proof comes from local service businesses around Buffalo, Rochester and Syracuse, such as tree service, landscaping, lawn care and deck building companies, alongside ecommerce brands and a personal brand in India. Every card opens a full case study with the challenge, what we built and what was verified.`}
          proofAnchor={grouped[0]?.group.id ?? 'case-studies'}
          secondaryLabel="Browse the Case Studies"
        />

        <nav aria-label="Case study groups" className="bg-canvas pb-4">
          <ul className="container mx-auto px-4 sm:px-6 flex flex-wrap justify-center gap-3">
            {grouped.map(({ group, projects }) => (
              <li key={group.id}>
                <a
                  href={`#${group.id}`}
                  className="inline-flex items-center gap-2 rounded-pill border border-hairline bg-surface-soft px-4 py-2 text-sm font-semibold text-ink transition-colors hover:bg-hairline-soft"
                >
                  {group.eyebrow.charAt(0) + group.eyebrow.slice(1).toLowerCase()}
                  <span className="font-mono text-[11px] text-ink/50">{projects.length}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {grouped.map(({ group, projects }, index) => (
          <SectionShell
            key={group.id}
            id={group.id}
            eyebrow={group.eyebrow}
            title={group.title}
            intro={group.intro}
            tone={index % 2 === 0 ? 'canvas' : 'soft'}
          >
            <ProjectGrid projects={projects} />
          </SectionShell>
        ))}

        <SectionShell
          eyebrow="BY INDUSTRY AND LOCATION"
          title="Explore Our Work by Industry and Location"
          intro="Start with the page that matches your business or your market. Each one links to the case studies behind it."
          tone={hubTone}
        >
          <TextCardGrid items={hubItems} tone={hubTone} numbered={false} />
        </SectionShell>

        <FAQSection
          faqs={FAQS}
          eyebrow="PORTFOLIO FAQS"
          title="About Our Case Studies"
          description="What the work covers, what is real and how to start something similar."
          className={hubTone === 'canvas' ? 'bg-surface-soft' : 'bg-canvas'}
        />

        <FinalCTA
          headline="Want Results Like These for Your Business?"
          description="Book a free consultation and we will show you which of these approaches fits your business."
        />
      </main>

      <Footer />
    </motion.div>
  );
};

export default Portfolio;

import { useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';
import { MapPin } from 'lucide-react';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Seo from '@/components/seo/Seo';
import NotFound from '@/pages/NotFound';
import FAQSection from '@/components/services/sections/FAQSection';
import FinalCTA from '@/components/services/sections/FinalCTA';
import ProcessTimeline from '@/components/services/sections/ProcessTimeline';
import {
  ExploreLinks,
  InlineLinks,
  LandingHero,
  ProjectGrid,
  QuickFacts,
  SectionShell,
  TextCardGrid,
} from '@/components/landing/LandingBlocks';
import { findProject } from '@/data/portfolio';
import type { Project } from '@/data/portfolio/types';
import { getLocationPage } from '@/data/landingPages';
import { buildFaqSchema } from '@/lib/faqSchema';
import { pageTransition } from '@/lib/motion';
import { LOGO_URL, SITE_URL, absUrl, breadcrumbSchema } from '@/lib/seo';

const LocationPage = () => {
  const { locationSlug } = useParams<{ locationSlug: string }>();
  const page = getLocationPage(locationSlug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [locationSlug]);

  const projects = useMemo(
    () =>
      page
        ? page.proof.refs
            .map((ref) => findProject(ref.serviceSlug, ref.slug))
            .filter((p): p is Project => Boolean(p))
        : [],
    [page],
  );

  // Unknown slug: render the shared 404 content, which carries a noindex robots tag.
  if (!page) return <NotFound />;

  const url = absUrl(page.path);
  const biz = page.business;

  const crumbs = [
    { name: 'Home', path: '/' },
    { name: page.navLabel, path: page.path },
  ];

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      '@id': `${url}#webpage`,
      url,
      name: page.h1,
      description: page.metaDescription,
      isPartOf: { '@id': `${SITE_URL}/#website` },
      about: { '@id': `${url}#localbusiness` },
    },
    breadcrumbSchema(crumbs),
    {
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      '@id': `${SITE_URL}/locations/${page.slug}/#localbusiness`,
      name: biz.name,
      description: biz.description,
      url,
      image: LOGO_URL,
      logo: LOGO_URL,
      telephone: biz.telephone,
      email: biz.email,
      address: {
        '@type': 'PostalAddress',
        addressLocality: biz.addressLocality,
        addressRegion: biz.addressRegion,
        addressCountry: biz.addressCountry,
      },
      areaServed: biz.areaServed.map((area) => ({ '@type': area.type, name: area.name })),
      parentOrganization: { '@id': `${SITE_URL}/#organization` },
      founder: {
        '@type': 'Person',
        name: 'Abhijeet Jain',
        url: absUrl('/our-team/abhijeet-jain/'),
      },
    },
    buildFaqSchema(page.faqs),
  ];

  return (
    <motion.div {...pageTransition} className="min-h-screen">
      <Seo title={page.title} description={page.metaDescription} path={page.path} jsonLd={jsonLd} />

      <Navbar />

      <main className="mt-16">
        <LandingHero
          crumbs={crumbs}
          eyebrow={page.eyebrow}
          h1={page.h1}
          answer={page.answer}
          secondaryLabel="See Our Work"
          aside={<QuickFacts facts={page.quickFacts} phone={biz.telephone} />}
        />

        <section className="py-20 md:py-24 bg-surface-soft">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-3xl mx-auto">
              <span className="eyebrow inline-block py-1 px-3 mb-5 rounded-pill bg-canvas">ABOUT US</span>
              <h2 className="mb-6">{page.about.title}</h2>
              <div className="space-y-5 text-ink/75 text-base md:text-lg leading-relaxed">
                {page.about.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                ))}
              </div>
              <InlineLinks links={page.about.links} />
            </div>
          </div>
        </section>

        <SectionShell eyebrow="SERVICES" title={page.services.title} intro={page.services.intro}>
          <TextCardGrid items={page.services.items} />
        </SectionShell>

        <section className="py-20 md:py-24 bg-surface-soft">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <span className="eyebrow inline-block py-1 px-3 mb-5 rounded-pill bg-canvas">AREAS WE SERVE</span>
              <h2 className="mb-4">{page.areas.title}</h2>
              <p className="text-ink/70 text-body-lg mb-8">{page.areas.intro}</p>
              <ul className="flex flex-wrap justify-center gap-3 mb-8">
                {page.areas.places.map((place) => (
                  <li
                    key={place}
                    className="inline-flex items-center gap-2 rounded-pill border border-hairline bg-canvas px-4 py-2 text-sm font-semibold text-ink"
                  >
                    <MapPin className="h-3.5 w-3.5 text-ink/50" aria-hidden />
                    {place}
                  </li>
                ))}
              </ul>
              <p className="text-ink/70 leading-relaxed">{page.areas.note}</p>
            </div>
          </div>
        </section>

        <SectionShell id="proof" eyebrow="OUR WORK" title={page.proof.title} intro={page.proof.intro}>
          <ProjectGrid projects={projects} />
        </SectionShell>

        <ProcessTimeline
          process={page.process}
          eyebrow="GETTING STARTED"
          title={page.processTitle}
          description={page.processIntro}
        />

        <FAQSection
          faqs={page.faqs}
          eyebrow="FAQS"
          title={`${page.navLabel}: Your Questions Answered`}
          description="Direct answers to what people ask before they get in touch."
        />

        <ExploreLinks title="Keep exploring" items={page.explore} />

        <FinalCTA headline={page.ctaHeadline} description={page.ctaDescription} />
      </main>

      <Footer />
    </motion.div>
  );
};

export default LocationPage;

import { useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Seo from '@/components/seo/Seo';
import NotFound from '@/pages/NotFound';
import FAQSection from '@/components/services/sections/FAQSection';
import FinalCTA from '@/components/services/sections/FinalCTA';
import ProcessTimeline from '@/components/services/sections/ProcessTimeline';
import {
  CaseStudyLinkList,
  ExploreLinks,
  LandingHero,
  ProjectGrid,
  ProofNotes,
  SectionShell,
  TextCardGrid,
} from '@/components/landing/LandingBlocks';
import { findProject } from '@/data/portfolio';
import type { Project } from '@/data/portfolio/types';
import { getIndustryPage, type LandingProjectRef } from '@/data/landingPages';
import { buildFaqSchema } from '@/lib/faqSchema';
import { pageTransition } from '@/lib/motion';
import { SITE_URL, absUrl, breadcrumbSchema } from '@/lib/seo';

/** Resolves refs to real projects and silently skips any that are not in the data yet. */
const resolveProjects = (refs: LandingProjectRef[]): Project[] =>
  refs.map((ref) => findProject(ref.serviceSlug, ref.slug)).filter((p): p is Project => Boolean(p));

const IndustryPage = () => {
  const { industrySlug } = useParams<{ industrySlug: string }>();
  const page = getIndustryPage(industrySlug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [industrySlug]);

  const websiteProjects = useMemo(() => (page ? resolveProjects(page.proof.websiteRefs) : []), [page]);
  const seoProjects = useMemo(() => (page ? resolveProjects(page.proof.seoRefs) : []), [page]);

  // Unknown slug: render the shared 404 content, which carries a noindex robots tag.
  if (!page) return <NotFound />;

  const url = absUrl(page.path);

  const crumbs = [
    { name: 'Home', path: '/' },
    { name: 'Our Work', path: '/portfolio/' },
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
      about: { '@id': `${url}#service` },
    },
    breadcrumbSchema(crumbs),
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      '@id': `${url}#service`,
      name: page.serviceName,
      serviceType: page.serviceType,
      description: page.summary,
      url,
      provider: { '@id': `${SITE_URL}/#organization` },
      areaServed: page.areaServed,
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: page.build.title,
        itemListElement: page.build.items.map((item) => ({
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: item.title,
            ...(item.link ? { url: absUrl(item.link.to) } : {}),
          },
        })),
      },
    },
    buildFaqSchema(page.faqs),
  ];

  return (
    <motion.div {...pageTransition} className="min-h-screen">
      <Seo title={page.title} description={page.metaDescription} path={page.path} jsonLd={jsonLd} />

      <Navbar />

      <main className="mt-16">
        <LandingHero crumbs={crumbs} eyebrow={page.eyebrow} h1={page.h1} answer={page.answer} />

        <SectionShell
          eyebrow="WHERE LEADS LEAK"
          title={page.loss.title}
          intro={page.loss.intro}
          tone="soft"
        >
          <TextCardGrid items={page.loss.items} tone="soft" />
        </SectionShell>

        <SectionShell eyebrow="WHAT WE BUILD" title={page.build.title} intro={page.build.intro}>
          <TextCardGrid items={page.build.items} />
        </SectionShell>

        <SectionShell
          id="proof"
          eyebrow="REAL CASE STUDIES"
          title={page.proof.title}
          intro={page.proof.intro}
          tone="soft"
        >
          <ProjectGrid projects={websiteProjects} />
          <ProofNotes notes={page.proof.notes} />
          {seoProjects.length > 0 && (
            <CaseStudyLinkList title={page.proof.seoTitle} intro={page.proof.seoIntro} projects={seoProjects} />
          )}
        </SectionShell>

        <ProcessTimeline
          process={page.process}
          eyebrow="HOW WE WORK"
          title={page.processTitle}
          description={page.processIntro}
        />

        <FAQSection
          faqs={page.faqs}
          eyebrow="FAQS"
          title={`${page.navLabel}: Your Questions Answered`}
          description="Direct answers to what business owners ask before they start."
        />

        <ExploreLinks title="Keep exploring" items={page.explore} />

        <FinalCTA headline={page.ctaHeadline} description={page.ctaDescription} />
      </main>

      <Footer />
    </motion.div>
  );
};

export default IndustryPage;

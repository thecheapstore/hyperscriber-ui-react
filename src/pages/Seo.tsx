import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import {
  ClipboardCheck, MapPin, ShieldCheck, Target, Sparkles, TrendingUp,
  ShieldQuestion, FileCheck, Repeat2, SlidersHorizontal,
} from 'lucide-react';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { services } from '@/components/services/data/services';
import { pageTransition, staggerContainer, fadeUp, viewportOnce } from '@/lib/motion';
import { getProjectsForService } from '@/data/portfolio';

import ServiceHero from '@/components/services/sections/ServiceHero';
import WhyChooseUs, { type Reason } from '@/components/services/sections/WhyChooseUs';
import FinalCTA from '@/components/services/sections/FinalCTA';
import PricingCarousel from '@/components/services/social-media/PricingCarousel';
import TrustBadges, { type TrustBadge } from '@/components/services/social-media/TrustBadges';
import { seoPackages } from '@/components/services/data/seoPackages';
import SeoResultsSection from '@/components/services/seo/SeoResultsSection';
import SeoProcessTimeline from '@/components/services/seo/SeoProcessTimeline';
import AiSearchSection from '@/components/services/seo/AiSearchSection';
import SeoPortfolioGrid from '@/components/services/seo/SeoPortfolioGrid';

const SITE_URL = 'https://www.calibreassociates.com';
const OG_IMAGE = 'https://i.ibb.co/ksMhQrst/94e69e74-31c6-4907-b7da-719956c4355f.png';

const heroBadges = [
  'Local SEO',
  'Technical SEO',
  'On Page SEO',
  'Off Page SEO',
  'Google Business Profile Optimization',
  'AI Search Optimization',
  'Content Strategy',
  'Conversion Focused SEO',
];

const whyChooseReasons: Reason[] = [
  { icon: <ClipboardCheck className="h-6 w-6" />, title: 'Transparent Reporting', description: 'Clear, honest reporting on what\'s working — no vanity metrics, no confusing jargon.' },
  { icon: <MapPin className="h-6 w-6" />, title: 'Local SEO Specialists', description: 'Deep, hands-on experience winning local map pack and local search visibility.' },
  { icon: <ShieldCheck className="h-6 w-6" />, title: 'White Hat Practices', description: 'Sustainable, guideline-compliant SEO built to last — not shortcuts that put your site at risk.' },
  { icon: <Target className="h-6 w-6" />, title: 'Conversion Focused Strategy', description: 'Rankings are a means to an end — every recommendation ties back to real business outcomes.' },
  { icon: <Sparkles className="h-6 w-6" />, title: 'AI Search Ready', description: 'Content structured for traditional search and the AI-powered search experiences customers use today.' },
  { icon: <TrendingUp className="h-6 w-6" />, title: 'Long-Term Growth', description: 'SEO is a compounding asset — we build for durable growth, not a short-lived spike.' },
];

const trustBadges: TrustBadge[] = [
  { icon: <ShieldQuestion className="h-4 w-4" />, label: 'No Hidden Fees' },
  { icon: <FileCheck className="h-4 w-4" />, label: 'Transparent Reporting' },
  { icon: <ShieldCheck className="h-4 w-4" />, label: 'White Hat SEO' },
  { icon: <SlidersHorizontal className="h-4 w-4" />, label: 'Tailored Strategies' },
  { icon: <Repeat2 className="h-4 w-4" />, label: 'Flexible Monthly Plans' },
];

const Seo = () => {
  const service = services.find((s) => s.slug === 'seo')!;
  const projects = getProjectsForService('seo');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const pageUrl = `${SITE_URL}/services/${service.slug}`;
  const pageTitle = `${service.title} | Calibre Associates`;

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE_URL}/services` },
      { '@type': 'ListItem', position: 3, name: service.title, item: pageUrl },
    ],
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.description,
    serviceType: service.title,
    url: pageUrl,
    provider: { '@type': 'Organization', name: 'Calibre Associates', url: SITE_URL },
    areaServed: 'US',
  };

  return (
    <motion.div {...pageTransition} className="min-h-screen">
      <Helmet>
        <meta charSet="utf-8" />
        <title>{pageTitle}</title>
        <meta name="description" content={service.shortDescription} />
        <link rel="canonical" href={pageUrl} />
        <link rel="icon" href={OG_IMAGE} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={service.shortDescription} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:site_name" content="Calibre Associates" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={service.shortDescription} />
        <meta name="twitter:image" content={OG_IMAGE} />

        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
      </Helmet>

      <Navbar />

      <main className="mt-16">
        <ServiceHero service={service} badges={heroBadges} secondaryCtaLabel="View Our Portfolio" />

        <SeoResultsSection />

        <section id="packages" className="py-20 md:py-24 bg-canvas">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={staggerContainer}
              className="text-center max-w-2xl mx-auto mb-14"
            >
              <motion.span variants={fadeUp} className="eyebrow inline-block py-1 px-3 mb-5 rounded-pill bg-surface-soft">
                PACKAGES
              </motion.span>
              <motion.h2 variants={fadeUp} className="mb-4">SEO Packages</motion.h2>
              <motion.p variants={fadeUp} className="text-ink/70 text-body-lg">
                Monthly SEO retainers built around your growth stage — swipe through to compare.
              </motion.p>
            </motion.div>

            <PricingCarousel packages={seoPackages} />
            <TrustBadges badges={trustBadges} />
          </div>
        </section>

        <section id="portfolio" className="py-20 md:py-24 bg-surface-soft">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={staggerContainer}
              className="text-center max-w-2xl mx-auto mb-14"
            >
              <motion.span variants={fadeUp} className="eyebrow inline-block py-1 px-3 mb-5 rounded-pill bg-canvas">
                OUR WORK
              </motion.span>
              <motion.h2 variants={fadeUp} className="mb-4">SEO Success Stories</motion.h2>
              <motion.p variants={fadeUp} className="text-ink/70 text-body-lg">
                A selection of businesses we've helped optimize through strategic SEO, Google Business Profile
                management and long-term organic growth.
              </motion.p>
            </motion.div>

            <SeoPortfolioGrid projects={projects} />
          </div>
        </section>

        <SeoProcessTimeline />

        <AiSearchSection />

        <WhyChooseUs
          reasons={whyChooseReasons}
          eyebrow="WHY CALIBRE ASSOCIATES"
          title="Why Choose Calibre Associates"
          description="An SEO partner focused on durable, compounding growth — not short-term ranking tricks."
        />

        <FinalCTA
          headline="Ready to Grow Your Business Organically?"
          description="Book a free consultation and we'll show you exactly how we'd approach your local SEO strategy."
          primaryLabel="Book Free Consultation"
          secondaryLabel="View Our Portfolio"
          secondaryHref="#portfolio"
        />
      </main>

      <Footer />
    </motion.div>
  );
};

export default Seo;

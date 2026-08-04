import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Target, Clapperboard, CalendarClock, TrendingUp, BarChart3, Layers, PlayCircle } from 'lucide-react';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { services } from '@/components/services/data/services';
import { pageTransition } from '@/lib/motion';

import ServiceHero from '@/components/services/sections/ServiceHero';
import WhyChooseUs, { type Reason } from '@/components/services/sections/WhyChooseUs';
import ProcessTimeline from '@/components/services/sections/ProcessTimeline';
import StatsSection from '@/components/services/sections/StatsSection';
import FinalCTA from '@/components/services/sections/FinalCTA';
import PricingCarousel from '@/components/services/social-media/PricingCarousel';
import TrustBadges from '@/components/services/social-media/TrustBadges';
import PortfolioTabs from '@/components/services/social-media/PortfolioTabs';
import { socialMediaPackages } from '@/components/services/data/socialMediaPackages';
import { staggerContainer, fadeUp, viewportOnce } from '@/lib/motion';

const SITE_URL = 'https://www.calibreassociates.com';
const OG_IMAGE = 'https://i.ibb.co/ksMhQrst/94e69e74-31c6-4907-b7da-719956c4355f.png';

const whyChooseReasons: Reason[] = [
  { icon: <Target className="h-6 w-6" />, title: 'Strategy-Led Content', description: 'Every post ties back to a clear growth goal, not just a content calendar to fill.' },
  { icon: <Clapperboard className="h-6 w-6" />, title: 'Platform-Native Editing', description: 'Reels and shorts edited to feel native to the feed, not repurposed ad creative.' },
  { icon: <CalendarClock className="h-6 w-6" />, title: 'Consistent Cadence', description: 'A dependable publishing rhythm that keeps your brand visible week over week.' },
  { icon: <TrendingUp className="h-6 w-6" />, title: 'Data-Driven Iteration', description: 'We track what performs and adjust the content mix accordingly, every cycle.' },
  { icon: <BarChart3 className="h-6 w-6" />, title: 'Transparent Reporting', description: 'Clear performance reports on a set cadence — no vague vanity metrics.' },
  { icon: <Layers className="h-6 w-6" />, title: 'Scalable Retainers', description: 'Start where you are and scale production up as the results come in.' },
];

const SocialMediaMarketing = () => {
  const service = services.find((s) => s.slug === 'social-media-marketing')!;

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
        <ServiceHero service={service} />

        <WhyChooseUs
          reasons={whyChooseReasons}
          eyebrow="WHY CALIBRE ASSOCIATES"
          title="Why Brands Choose Us for Social"
          description="Content production built around consistency, performance, and platform-native quality."
        />

        <StatsSection stats={service.stats} />

        <ProcessTimeline
          process={service.process}
          eyebrow="OUR PROCESS"
          title="How We Grow Your Social Presence"
          description="A structured, transparent process from strategy to publishing to reporting."
        />

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
              <motion.h2 variants={fadeUp} className="mb-4">Social Media Packages</motion.h2>
              <motion.p variants={fadeUp} className="text-ink/70 text-body-lg">
                Monthly retainers built around your content needs — swipe through to compare.
              </motion.p>
            </motion.div>

            <PricingCarousel packages={socialMediaPackages} />
            <TrustBadges />
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
              <motion.h2 variants={fadeUp} className="mb-4">Our Portfolio</motion.h2>
              <motion.p variants={fadeUp} className="text-ink/70 text-body-lg">
                A selection of videos, graphics and carousel posts we've created. Every piece is tailored to each
                client's brand, audience and marketing objectives. We create content designed to educate, engage and
                convert.
              </motion.p>
            </motion.div>

            <PortfolioTabs />
          </div>
        </section>

        <FinalCTA
          headline="Ready to Grow Your Brand Across Every Platform?"
          description="Every business has different goals — we build a content strategy around yours, not a one-size-fits-all package."
          primaryLabel="Book Free Consultation"
          secondaryLabel="View Our Work"
          secondaryHref="#portfolio"
          secondaryIcon={<PlayCircle className="mr-2 h-4 w-4" />}
        />
      </main>

      <Footer />
    </motion.div>
  );
};

export default SocialMediaMarketing;

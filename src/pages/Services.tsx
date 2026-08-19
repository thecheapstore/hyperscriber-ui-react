import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ServiceHero from '@/components/services/ServiceHero';
import ServicesList from '@/components/services/ServicesList';
import ServiceFAQ from '@/components/services/ServiceFAQ';
import CTASection from '@/components/CTASection';
import { Helmet } from 'react-helmet-async';
import { pageTransition } from '@/lib/motion';

const SITE_URL = 'https://calibreassociates.com';
const OG_IMAGE = 'https://calibreassociates.com/favicons/android-chrome-512x512.png';
const PAGE_TITLE = 'Digital Marketing, Web Development and AI Automation Services | Calibre Associates';
const PAGE_DESCRIPTION =
  "Explore Calibre Associates' full range of digital marketing agency services: lead generation, paid advertising, SEO, social media marketing, video editing, website and application development, and AI automation for small businesses in India and the United States.";

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE_URL}/services` },
  ],
};

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      {...pageTransition}
      className="min-h-screen"
    >
      <Helmet>
        <meta charSet="utf-8" />
        <title>{PAGE_TITLE}</title>
        <meta name="description" content={PAGE_DESCRIPTION} />
        <link rel="canonical" href={`${SITE_URL}/services`} />
        <link rel="icon" href={OG_IMAGE} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={PAGE_TITLE} />
        <meta property="og:description" content={PAGE_DESCRIPTION} />
        <meta property="og:url" content={`${SITE_URL}/services`} />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:site_name" content="Calibre Associates" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={PAGE_TITLE} />
        <meta name="twitter:description" content={PAGE_DESCRIPTION} />
        <meta name="twitter:image" content={OG_IMAGE} />

        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <Navbar />

      <main className="mt-16">
        <ServiceHero />
        <ServicesList />
        <ServiceFAQ />
        <CTASection />
      </main>

      <Footer />
    </motion.div>
  );
};

export default Services;
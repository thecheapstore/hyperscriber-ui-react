import React, { useEffect } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { services } from '@/components/services/data/services';
import { defaultFaqs } from '@/components/services/data/faqs';
import { pageTransition } from '@/lib/motion';
import { buildFaqSchema } from '@/lib/faqSchema';

import ServiceHero from '@/components/services/sections/ServiceHero';
import WhyChooseUs from '@/components/services/sections/WhyChooseUs';
import ProcessTimeline from '@/components/services/sections/ProcessTimeline';
import PortfolioShowcase from '@/components/services/sections/PortfolioShowcase';
import StatsSection from '@/components/services/sections/StatsSection';
import IndustryGrid from '@/components/services/sections/IndustryGrid';
import FAQAccordion from '@/components/services/sections/FAQAccordion';
import TestimonialSlider from '@/components/services/sections/TestimonialSlider';
import FinalCTA from '@/components/services/sections/FinalCTA';

const SITE_URL = 'https://calibreassociates.com';
const OG_IMAGE = 'https://calibreassociates.com/favicons/android-chrome-512x512.png';

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = services.find((s) => s.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

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
    provider: {
      '@type': 'Organization',
      name: 'Calibre Associates',
      url: SITE_URL,
    },
    areaServed: ['US', 'IN'],
  };

  const faqSchema = buildFaqSchema(defaultFaqs);

  return (
    <motion.div {...pageTransition} className="min-h-screen">
      <Helmet>
        <meta charSet="utf-8" />
        <title>{pageTitle}</title>
        <meta name="description" content={service.shortDescription} />
        <link rel="canonical" href={pageUrl} />
        <link rel="icon" href={OG_IMAGE} />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={service.shortDescription} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:site_name" content="Calibre Associates" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={service.shortDescription} />
        <meta name="twitter:image" content={OG_IMAGE} />

        {/* Structured data */}
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <Navbar />

      <main className="mt-16">
        <ServiceHero service={service} />
        <WhyChooseUs reasons={service.whyChooseReasons} />
        <ProcessTimeline process={service.process} />
        {service.portfolioCategories.length > 0 && (
          <PortfolioShowcase categories={service.portfolioCategories} serviceTitle={service.title} />
        )}
        <StatsSection stats={service.stats} />
        <IndustryGrid />
        <FAQAccordion faqs={defaultFaqs} />
        <TestimonialSlider />
        <FinalCTA
          headline={service.finalCtaHeadline ?? `Ready to Start Your ${service.title} Project?`}
          description={service.finalCtaDescription}
        />
      </main>

      <Footer />
    </motion.div>
  );
};

export default ServiceDetail;

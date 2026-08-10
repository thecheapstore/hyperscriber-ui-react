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
        <title>Digital Marketing, Web Development and AI Automation Services | Calibre Associates</title>
        <meta
          name="description"
          content="Explore Calibre Associates' full range of digital marketing agency services: lead generation, paid advertising, SEO, social media marketing, video editing, website and application development, and AI automation for small businesses in India and the United States."
        />
        <link
          rel="canonical"
          href="https://www.calibreassociates.com/services"
        />
        <link rel="icon" href="https://i.ibb.co/ksMhQrst/94e69e74-31c6-4907-b7da-719956c4355f.png" />
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
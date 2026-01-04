
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import PricingHero from '@/components/our-team/TeamHero';
import PricingPlans from '@/components/our-team/PricingPlans';
import PricingComparison from '@/components/our-team/PricingComparison';
import PricingGuarantee from '@/components/our-team/TeamValues';
import PricingFAQ from '@/components/our-team/PricingFAQ';
import CTASection from '@/components/CTASection';
import { Helmet } from 'react-helmet';

const Pricing = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen"
    >
      <Helmet>
        <meta charSet="utf-8" />
        <title>HyperScriber | Pricing</title>
        <meta name="description" content="Choose from our transparent pricing plans designed to scale with your business. All plans include our AI-powered content creation process." />
        <link rel="canonical" href="https://hyperscriber.com/pricing" />
        <link rel="icon" href="/favicon.ico" />
      </Helmet>
      <Navbar />
      <main className="mt-16">
        <PricingHero />
        <PricingPlans />
        <PricingComparison />
        <PricingGuarantee />
        <PricingFAQ />
        <CTASection />
      </main>
      <Footer />
    </motion.div>
  );
};

export default Pricing;


import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/layout/Navbar';
import HeroSection from '@/components/hero/HeroSection';
import TestimonialBanner from '@/components/testimonials/TestimonialBanner';
import TestimonialsSection from '@/components/testimonials/TestimonialsSection';
import ServicesSection from '@/components/services/ServicesSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/layout/Footer';
import { Helmet } from 'react-helmet-async';
import PricingBenefits from '@/components/our-team/TeamStrengths';
import { pageTransition } from '@/lib/motion';

const Index = () => {
  return (
    <motion.div
      {...pageTransition}
      className="min-h-screen flex flex-col"
    >
      <Helmet>
  <meta charSet="utf-8" />
  <title>Calibre Associates | Digital Marketing Agency for Website Development, SEO and AI Automation</title>
  <meta
    name="description"
    content="Calibre Associates is a digital marketing agency helping businesses in India and the United States grow with website development, SEO, social media marketing, paid advertising, video editing, and AI automation for small businesses."
  />
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
  />
  <link rel="canonical" href="https://www.calibreassociates.com/" />
  <link rel="icon" href="https://i.ibb.co/ksMhQrst/94e69e74-31c6-4907-b7da-719956c4355f.png" />
</Helmet>
      <Navbar />
      <main 
        className="mt-0 flex-grow"
        style={{ paddingTop: 'calc(var(--banner-height, 0px) + 88px)' }} 
      >
        <HeroSection />
        <TestimonialBanner />
        <ServicesSection />
        <PricingBenefits />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </motion.div>
  );
};

export default Index;

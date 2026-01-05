
import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/layout/Navbar';
import HeroSection from '@/components/hero/HeroSection';
import TestimonialBanner from '@/components/testimonials/TestimonialBanner';
import TestimonialsSection from '@/components/testimonials/TestimonialsSection';
import ServicesSection from '@/components/services/ServicesSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/layout/Footer';
import { Helmet } from 'react-helmet';
import PricingBenefits from '@/components/our-team/TeamStrengths';

const Index = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex flex-col"
    >
      <Helmet>
  <meta charSet="utf-8" />
  <title>Calibre Associates | Digital Growth, Development & AI Solutions</title>
  <meta
    name="description"
    content="Calibre Associates helps businesses grow with high-performance website and app development, SEO and social media marketing, paid advertising, content creation, and AI-powered automation solutions."
  />
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
  />
  <link rel="canonical" href="https://calibreassociates.com/" />
  <link rel="icon" href="/favicon.ico" />
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

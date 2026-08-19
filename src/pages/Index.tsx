
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
  <link rel="canonical" href="https://calibreassociates.com/" />
  <link rel="icon" href="https://calibreassociates.com/favicons/android-chrome-512x512.png" />

  <meta property="og:type" content="website" />
  <meta property="og:title" content="Calibre Associates | Digital Marketing Agency for Website Development, SEO and AI Automation" />
  <meta
    property="og:description"
    content="Calibre Associates is a digital marketing agency helping businesses in India and the United States grow with website development, SEO, social media marketing, paid advertising, video editing, and AI automation for small businesses."
  />
  <meta property="og:url" content="https://calibreassociates.com/" />
  <meta property="og:image" content="https://calibreassociates.com/favicons/android-chrome-512x512.png" />
  <meta property="og:site_name" content="Calibre Associates" />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Calibre Associates | Digital Marketing Agency for Website Development, SEO and AI Automation" />
  <meta
    name="twitter:description"
    content="Calibre Associates is a digital marketing agency helping businesses in India and the United States grow with website development, SEO, social media marketing, paid advertising, video editing, and AI automation for small businesses."
  />
  <meta name="twitter:image" content="https://calibreassociates.com/favicons/android-chrome-512x512.png" />
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

import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/layout/Navbar';
import HeroSection from '@/components/hero/HeroSection';
import ServicesSection from '@/components/services/ServicesSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/layout/Footer';
import Seo from '@/components/seo/Seo';
import PricingBenefits from '@/components/our-team/TeamStrengths';
import HomeAnswerBlock from '@/components/home/HomeAnswerBlock';
import WhoWeServe from '@/components/home/WhoWeServe';
import FeaturedWorkStrip from '@/components/home/FeaturedWorkStrip';
import FoundersBlock from '@/components/home/FoundersBlock';
import { HOME_FAQS } from '@/components/home/homeFaqs';
import FAQSection from '@/components/services/sections/FAQSection';
import { buildFaqSchema } from '@/lib/faqSchema';
import { SITE_URL, absUrl } from '@/lib/seo';
import { pageTransition } from '@/lib/motion';

const PAGE_TITLE = 'Digital Marketing Agency in India & USA | Calibre Associates';
const PAGE_DESCRIPTION =
  'Calibre Associates is a digital marketing agency for small business in India and the USA: website development, SEO, social media, paid ads and AI automation.';

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${absUrl('/')}#webpage`,
  url: absUrl('/'),
  name: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  isPartOf: { '@id': `${SITE_URL}/#website` },
  about: { '@id': `${SITE_URL}/#organization` },
  publisher: { '@id': `${SITE_URL}/#organization` },
  inLanguage: 'en',
};

const Index = () => {
  return (
    <motion.div
      {...pageTransition}
      className="min-h-screen flex flex-col"
    >
      <Seo
        title={PAGE_TITLE}
        description={PAGE_DESCRIPTION}
        path="/"
        jsonLd={[webPageSchema, buildFaqSchema(HOME_FAQS)]}
      />
      <Navbar />
      <main
        className="mt-0 flex-grow"
        style={{ paddingTop: 'calc(var(--banner-height, 0px) + 88px)' }}
      >
        <HeroSection />
        <HomeAnswerBlock />
        <ServicesSection />
        <WhoWeServe />
        <FeaturedWorkStrip />
        <PricingBenefits />
        <FoundersBlock />
        <FAQSection
          faqs={HOME_FAQS}
          eyebrow="FAQS"
          title="Digital Marketing Agency FAQs"
          description="Direct answers to what small business owners ask before hiring a digital marketing agency."
        />
        <CTASection />
      </main>
      <Footer />
    </motion.div>
  );
};

export default Index;

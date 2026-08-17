import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
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
import FAQSection, { type FAQItem } from '@/components/services/sections/FAQSection';
import { buildFaqSchema } from '@/lib/faqSchema';
import { Link } from 'react-router-dom';

const SITE_URL = 'https://www.calibreassociates.com';
const OG_IMAGE = 'https://www.calibreassociates.com/favicons/android-chrome-512x512.png';

const whyChooseReasons: Reason[] = [
  { icon: <Target className="h-6 w-6" />, title: 'Strategy-Led Content', description: 'Every post ties back to a clear growth goal, not just a content calendar to fill.' },
  { icon: <Clapperboard className="h-6 w-6" />, title: 'Platform-Native Editing', description: 'Reels and shorts edited to feel native to the feed, not repurposed ad creative.' },
  { icon: <CalendarClock className="h-6 w-6" />, title: 'Consistent Cadence', description: 'A dependable publishing rhythm that keeps your brand visible week over week.' },
  { icon: <TrendingUp className="h-6 w-6" />, title: 'Data-Driven Iteration', description: 'We track what performs and adjust the content mix accordingly, every cycle.' },
  { icon: <BarChart3 className="h-6 w-6" />, title: 'Transparent Reporting', description: 'Clear performance reports on a set cadence, no vague vanity metrics.' },
  { icon: <Layers className="h-6 w-6" />, title: 'Scalable Retainers', description: 'Start where you are and scale production up as the results come in.' },
];

const SOCIAL_MEDIA_FAQS: FAQItem[] = [
  {
    question: 'What are the key metrics for evaluating social media campaign performance?',
    answer:
      'Vanity metrics like likes and followers matter less than engagement rate, watch time, and click through rate, since those show whether content is actually resonating and driving action. For business accounts, we track conversions, whether that is website visits, form fills, or direct messages, so social media activity connects back to real business outcomes, not just visibility.',
  },
  {
    question: 'How do I create an effective social media content calendar?',
    answer:
      'Start by mapping content around a consistent cadence rather than posting whenever inspiration strikes, audiences respond to brands they see regularly. Mix content types, educational, behind the scenes, product focused, and UGC style content, so the feed does not feel repetitive. Plan around key dates and campaigns in advance, but leave room for timely, reactive content that takes advantage of trends as they happen.',
  },
  {
    question: 'What is user generated content and why does it matter for my brand?',
    answer:
      'User generated content is authentic, native feeling video and photo content, made to look and feel like a real customer or creator made it, rather than polished brand advertising. It matters because audiences trust it more than traditional ads, UGC style content consistently earns higher engagement and stronger conversion rates because it feels honest rather than promotional.',
  },
  {
    question: 'How can I track conversions from social media marketing efforts?',
    answer:
      "Use platform specific tracking pixels and UTM parameters on every link you share, so you can see exactly which posts and campaigns drive traffic and conversions on your website. Connecting your social channels to your CRM or analytics platform lets you follow a lead from the moment they engage with a post through to becoming a customer, instead of guessing at social media's impact.",
  },
  {
    question: 'How do I legally use user generated content in my advertising?',
    answer:
      "Always get explicit permission from the original creator before using their content in paid advertising or official brand channels, a comment or like is not the same as consent to use someone's video or photo commercially. Keep a record of that permission, credit the creator where appropriate, and review platform specific rules, since requirements can differ between organic posts and paid ad usage.",
  },
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
    areaServed: ['US', 'IN'],
  };

  const faqSchema = buildFaqSchema(SOCIAL_MEDIA_FAQS);

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
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <Navbar />

      <main className="mt-16">
        <ServiceHero service={service} />

        <WhyChooseUs
          reasons={whyChooseReasons}
          eyebrow="WHY CALIBRE ASSOCIATES"
          title="Why Brands Choose Us for Social"
          description="Social media marketing and UGC content production built around consistency, performance, and platform-native quality."
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
                Monthly retainers built around your content needs, swipe through to compare.
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
                A selection of social media marketing videos, graphics, UGC content and carousel posts we've
                created. Every piece is tailored to each client's brand, audience and marketing objectives.
                We create content designed to educate, engage and convert.
              </motion.p>
              <motion.p variants={fadeUp} className="text-ink/60 text-sm mt-4">
                Need on camera talent for a campaign?{' '}
                <Link to="/our-team/manasvi-pathak" className="font-semibold text-ink underline underline-offset-2 hover:no-underline">
                  Manasvi Pathak
                </Link>{' '}
                leads talent management and brand representation at Calibre Associates.
              </motion.p>
            </motion.div>

            <PortfolioTabs />
          </div>
        </section>

        <FAQSection
          faqs={SOCIAL_MEDIA_FAQS}
          eyebrow="SOCIAL MEDIA FAQS"
          title="Your Social Media Marketing Questions, Answered"
          description="Common questions brands ask about growing on social media and using UGC content."
        />

        <FinalCTA
          headline="Ready to Grow Your Brand Across Every Platform?"
          description="Every business has different goals, we build a content strategy around yours, not a one-size-fits-all package."
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

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ServiceProcess from '@/components/services/ServiceProcess';
import WhyChooseUs from '@/components/services/sections/WhyChooseUs';
import StatsSection from '@/components/services/sections/StatsSection';
import TestimonialSlider from '@/components/services/sections/TestimonialSlider';
import FinalCTA from '@/components/services/sections/FinalCTA';
import FAQSection, { type FAQItem } from '@/components/services/sections/FAQSection';
import { buildFaqSchema } from '@/lib/faqSchema';
import { ArrowDown } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { pageTransition } from '@/lib/motion';

const companyStats = [
  { label: 'Projects Delivered', value: 300, suffix: '+' },
  { label: 'Years Combined Experience', value: 8, suffix: '+' },
  { label: 'Client Retention Rate', value: 95, suffix: '%' },
  { label: 'Industries Served', value: 12, suffix: '+' },
];

const BRAND_FAQS: FAQItem[] = [
  {
    question: 'What services does Calibre Associates offer in India and the United States?',
    answer:
      'We offer website and application development, SEO, social media marketing, video editing, lead generation, paid advertising, and AI automation, delivered as one connected system rather than isolated services. We work with businesses across India and the United States, combining engineering, marketing, and automation under one team instead of requiring you to coordinate multiple vendors.',
  },
  {
    question: 'How do I choose a marketing agency for digital campaigns?',
    answer:
      'Look past the pitch and ask to see actual results from past clients, rankings, ad performance, or lead volume, not just polished case study language. Ask how they report progress and how often, a good agency should make it easy to see exactly what your budget is producing. And make sure their team actually covers what you need, an agency that is strong in social media but weak in paid ads will show gaps once your campaign is live.',
  },
  {
    question: 'What should I expect when working with a marketing agency?',
    answer:
      'Expect a discovery phase first, understanding your business, goals, and audience before any strategy work starts. From there, a good agency sets clear timelines, explains what results are realistic and when, and provides regular, honest reporting, including when something is not working as well as hoped. What you should not expect is instant results or guarantees that sound too good to be true, sustainable growth takes structured, ongoing work.',
  },
  {
    question: 'What are the benefits of hiring a full service marketing agency instead of a freelancer?',
    answer:
      'A full service agency brings a team covering strategy, design, development, and marketing together, so your website, SEO, and advertising all work from the same plan instead of being handled by disconnected freelancers. It also means continuity, if one person is unavailable, the work keeps moving, and you get a broader range of expertise than any single freelancer typically offers.',
  },
  {
    question: 'How can I book a consultation with Calibre Associates?',
    answer:
      'You can book a free consultation directly through our contact page or Calendly link, no upfront commitment required. We use that first call to understand your business and goals, then map out exactly what we would recommend and why, so you have a clear picture before deciding to move forward.',
  },
];

const SITE_URL = 'https://www.calibreassociates.com';
const OG_IMAGE = 'https://www.calibreassociates.com/favicons/android-chrome-512x512.png';
const PAGE_TITLE = 'Why Choose Calibre Associates | Digital Growth & Automation Experts';
const PAGE_DESCRIPTION =
  'Discover why businesses choose Calibre Associates for lead generation, SEO, development, automation, and AI-driven digital growth solutions built for scale.';

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Why Us', item: `${SITE_URL}/why-us` },
  ],
};

const WhyUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const faqSchema = buildFaqSchema(BRAND_FAQS);

  return (
    <motion.div
      {...pageTransition}
      className="min-h-screen"
    >
      <Navbar />
      <main className="mt-16">
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-white">
          <Helmet>
  <meta charSet="utf-8" />
  <title>{PAGE_TITLE}</title>
  <meta name="description" content={PAGE_DESCRIPTION} />
  <link rel="canonical" href={`${SITE_URL}/why-us`} />
  <link rel="icon" href={OG_IMAGE} />

  <meta property="og:type" content="website" />
  <meta property="og:title" content={PAGE_TITLE} />
  <meta property="og:description" content={PAGE_DESCRIPTION} />
  <meta property="og:url" content={`${SITE_URL}/why-us`} />
  <meta property="og:image" content={OG_IMAGE} />
  <meta property="og:site_name" content="Calibre Associates" />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={PAGE_TITLE} />
  <meta name="twitter:description" content={PAGE_DESCRIPTION} />
  <meta name="twitter:image" content={OG_IMAGE} />

  <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
  <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
</Helmet>
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-4xl mx-auto"
            >
              <span className="inline-block py-1.5 px-4 mb-6 text-xs font-semibold tracking-wider rounded-full bg-surface-soft text-ink border border-hairline">
                OUR APPROACH
              </span>
              <h1 className="mb-6">
                How Calibre Associates Builds <span className="text-ink font-bold">Scalable Growth</span> Systems
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-10">
                Our proven process combines strategy, technology, marketing, and automation to help businesses generate leads, scale operations, and achieve measurable long-term growth.
              </p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="flex justify-center mt-12"
              >
                <a
                  href="#workflow"
                  className="flex flex-col items-center text-ink/70 hover:text-ink transition-colors"
                >
                  <span className="mb-2">Explore our execution process</span>
                  <ArrowDown className="animate-bounce" />
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Workflow Section - Using our existing component */}
        <div id="workflow">
          <ServiceProcess />
        </div>

        <WhyChooseUs />

        <StatsSection stats={companyStats} />

        <TestimonialSlider />

        <FAQSection
          faqs={BRAND_FAQS}
          eyebrow="FAQS"
          title="Questions About Working With Calibre Associates"
          description="Common questions business owners ask before choosing a digital marketing agency."
        />

        <FinalCTA
          headline="Ready to Work With a Team That Delivers?"
          description="Book a free consultation and let's talk about what scalable growth looks like for your business."
        />
      </main>
      <Footer />
    </motion.div>
  );
};

export default WhyUs;

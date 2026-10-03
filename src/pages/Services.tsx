import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowDown, CheckCircle } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ServicesList from '@/components/services/ServicesList';
import FAQSection, { type FAQItem } from '@/components/services/sections/FAQSection';
import CTASection from '@/components/CTASection';
import Seo from '@/components/seo/Seo';
import { Button } from '@/components/ui/button';
import { SERVICE_LINKS } from '@/components/home/serviceLinks';
import { buildFaqSchema } from '@/lib/faqSchema';
import { SITE_URL, absUrl, breadcrumbSchema } from '@/lib/seo';
import { pageTransition } from '@/lib/motion';

const PAGE_TITLE = 'Digital Marketing, Web Design & AI Services | Calibre Associates';
const PAGE_DESCRIPTION =
  'Digital marketing services for small business: website development, SEO, social media, paid ads, video editing and AI automation in India and the USA.';

const SERVICES_FAQS: FAQItem[] = [
  {
    question: 'What digital marketing services does Calibre Associates offer?',
    answer:
      'We offer eight services: website development, local SEO, social media marketing, video editing, lead generation and paid advertising, AI automation, brand identity development, and custom application and software development. You can hire us for one service or combine several under one plan.',
  },
  {
    question: 'How much do digital marketing services cost?',
    answer:
      'Cost depends on scope. Ongoing work such as SEO, social media management and paid advertising is usually scoped as a monthly retainer, while websites, brand identities and software are scoped as projects. We price after a free consultation, once we know your goals, your current website and how competitive your market is.',
  },
  {
    question: 'Do I need every service or can I start with one?',
    answer:
      'You can start with one. Many local businesses begin with a fast website and local SEO, then add paid advertising, social media or automation once enquiries start coming in. We recommend the order based on where your business is losing the most leads today.',
  },
  {
    question: 'How long does it take to see results from digital marketing?',
    answer:
      'Paid advertising can start producing enquiries within weeks of launch, while SEO and organic social media usually take several months to build. No honest agency can guarantee a ranking or a lead count, so we report what is happening each month and adjust the plan as the data comes in.',
  },
  {
    question: 'Which service should a small local business start with?',
    answer:
      'For most local service businesses, the first priority is a fast, mobile friendly website with clear service pages and a complete Google Business Profile, because every other channel sends people to it. From there, local SEO and paid advertising bring in more of the right customers.',
  },
];

const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  '@id': `${absUrl('/services')}#webpage`,
  url: absUrl('/services'),
  name: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  isPartOf: { '@id': `${SITE_URL}/#website` },
  about: { '@id': `${SITE_URL}/#organization` },
  publisher: { '@id': `${SITE_URL}/#organization` },
  inLanguage: 'en',
  mainEntity: {
    '@type': 'ItemList',
    name: 'Calibre Associates digital marketing and development services',
    numberOfItems: SERVICE_LINKS.length,
    itemListElement: SERVICE_LINKS.map((service, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: service.name,
      url: absUrl(service.path),
    })),
  },
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
      <Seo
        title={PAGE_TITLE}
        description={PAGE_DESCRIPTION}
        path="/services"
        jsonLd={[
          itemListSchema,
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Services', path: '/services' },
          ]),
          buildFaqSchema(SERVICES_FAQS),
        ]}
      />

      <Navbar />

      <main className="mt-16">
        <section className="pt-32 pb-16 bg-white">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-4xl mx-auto"
            >
              <span className="inline-block py-1.5 px-4 mb-6 text-xs font-semibold tracking-wider rounded-full bg-surface-soft text-ink border border-hairline">
                OUR SERVICES
              </span>
              <h1 className="mb-4">
                Digital Marketing Services for <span className="text-ink font-bold">Websites, SEO, Social Media and AI Automation</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-6">
                Calibre Associates is a digital marketing agency helping small businesses in India and the USA win more customers with
                website development, local SEO, social media marketing, paid advertising, video editing and AI automation, delivered as
                one connected system.
              </p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mb-8 flex flex-wrap gap-3 justify-center"
              >
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                  <CheckCircle size={18} className="text-ink" />
                  <span className="text-sm font-medium">Web, app, software and automation solutions</span>
                </div>
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                  <CheckCircle size={18} className="text-ink" />
                  <span className="text-sm font-medium">Lead generation and performance marketing</span>
                </div>
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                  <CheckCircle size={18} className="text-ink" />
                  <span className="text-sm font-medium">SEO, social media and online reputation growth</span>
                </div>
              </motion.div>

              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
                <a href="https://calendly.com/calibreassociates/meeting" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full sm:w-auto rounded-pill px-7 sm:px-9 py-6 sm:py-7 text-base sm:text-lg id-calendly-booking">
                    Book a Free Strategy Consultation
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </a>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex justify-center mt-12"
            >
              <a
                href="#FAQ"
                className="flex flex-col items-center text-ink/70 hover:text-ink transition-colors"
              >
                <span className="mb-2">Have Questions?</span>
                <ArrowDown className="animate-bounce" />
              </a>
            </motion.div>
          </div>
        </section>

        <ServicesList />

        <div id="FAQ">
          <FAQSection
            faqs={SERVICES_FAQS}
            eyebrow="FAQS"
            title="Digital Marketing Services FAQs"
            description="Straight answers about scope, cost and timelines before you book a call."
          />
        </div>

        <CTASection />
      </main>

      <Footer />
    </motion.div>
  );
};

export default Services;

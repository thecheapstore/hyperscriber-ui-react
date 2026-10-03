import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ServiceProcess from '@/components/services/ServiceProcess';
import WhyChooseUs from '@/components/services/sections/WhyChooseUs';
import StatsSection from '@/components/services/sections/StatsSection';
import FinalCTA from '@/components/services/sections/FinalCTA';
import FAQSection, { type FAQItem } from '@/components/services/sections/FAQSection';
import { buildFaqSchema } from '@/lib/faqSchema';
import { ArrowDown } from 'lucide-react';
import Seo from '@/components/seo/Seo';
import { Link } from '@/lib/routerLink';
import { SERVICE_LINKS } from '@/components/home/serviceLinks';
import { SITE_URL, absUrl, breadcrumbSchema } from '@/lib/seo';
import { pageTransition } from '@/lib/motion';

const companyStats = [
  { label: 'Countries Served', value: 2 },
  { label: 'Core Services Under One Team', value: 8 },
  { label: 'Offices in Lucknow and Buffalo', value: 2 },
  { label: 'Local Service Websites in Our Portfolio', value: 10, suffix: '+' },
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

const PAGE_TITLE = 'Why Choose Calibre Associates | Digital Marketing and AI Agency';
const PAGE_DESCRIPTION =
  'Why choose Calibre Associates as your digital marketing agency: one team for websites, SEO, paid ads and AI automation for small business in India and the USA.';

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  '@id': `${absUrl('/why-us')}#webpage`,
  url: absUrl('/why-us'),
  name: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  isPartOf: { '@id': `${SITE_URL}/#website` },
  about: { '@id': `${SITE_URL}/#organization` },
  inLanguage: 'en',
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
      <Seo
        title={PAGE_TITLE}
        description={PAGE_DESCRIPTION}
        path="/why-us"
        jsonLd={[
          webPageSchema,
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Why Us', path: '/why-us' },
          ]),
          faqSchema,
        ]}
      />
      <Navbar />
      <main className="mt-16">
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-white">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-4xl mx-auto"
            >
              <span className="inline-block py-1.5 px-4 mb-6 text-xs font-semibold tracking-wider rounded-full bg-surface-soft text-ink border border-hairline">
                WHY CALIBRE ASSOCIATES
              </span>
              <h1 className="mb-6">
                Why Businesses Choose Calibre Associates as Their <span className="text-ink font-bold">Digital Marketing Agency</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-10">
                Calibre Associates is a digital marketing agency in India and the USA that combines strategy, website development, SEO, paid advertising and AI automation, so small businesses get one team and one plan instead of five separate vendors.
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
                  <span className="mb-2">See how we work</span>
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

        <section className="py-20 md:py-24 bg-surface-soft">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="mb-4">Proof You Can Check</h2>
              <p className="text-ink/70 text-body-lg mb-8">
                We would rather show the work than describe it. Read how we built a{' '}
                <Link to="/services/website-development/projects/tree-craft-tree-services" className="text-ink underline underline-offset-4 hover:opacity-70">
                  tree service website for TreeCraft
                </Link>
                , a{' '}
                <Link to="/services/website-development/projects/kp-landscaping" className="text-ink underline underline-offset-4 hover:opacity-70">
                  landscaping website for KP Landscaping
                </Link>{' '}
                and a{' '}
                <Link to="/services/website-development/projects/716-lawn-care" className="text-ink underline underline-offset-4 hover:opacity-70">
                  lawn care website for 716 Lawn Care
                </Link>
                , or browse the{' '}
                <Link to="/portfolio" className="text-ink font-semibold underline underline-offset-4 hover:opacity-70">
                  full portfolio
                </Link>
                .
              </p>
              <p className="text-ink/70">
                Meet the people behind the work:{' '}
                <Link to="/our-team/abhijeet-jain" className="text-ink underline underline-offset-4 hover:opacity-70">
                  Abhijeet Jain, founder and CEO
                </Link>{' '}
                and{' '}
                <Link to="/our-team/manasvi-pathak" className="text-ink underline underline-offset-4 hover:opacity-70">
                  Manasvi Pathak, co founder and talent manager
                </Link>
                .
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-24 bg-canvas">
          <div className="container mx-auto px-6 max-w-4xl text-center">
            <h2 className="mb-4">Digital Marketing Services You Can Combine</h2>
            <p className="text-ink/70 text-body-lg">
              Start with one service or combine several:{' '}
              {SERVICE_LINKS.map((item, index) => (
                <React.Fragment key={item.path}>
                  <Link to={item.path} className="text-ink underline underline-offset-4 hover:opacity-70">
                    {item.anchor}
                  </Link>
                  {index < SERVICE_LINKS.length - 2 ? ', ' : index === SERVICE_LINKS.length - 2 ? ' and ' : '.'}
                </React.Fragment>
              ))}
            </p>
          </div>
        </section>

        <FAQSection
          faqs={BRAND_FAQS}
          eyebrow="FAQS"
          title="Questions About Working With Calibre Associates"
          description="Common questions business owners ask before choosing a digital marketing agency."
        />

        <FinalCTA
          headline="Ready to Work With a Team That Delivers?"
          description="Book a free consultation and let us talk about what scalable growth looks like for your business."
        />
      </main>
      <Footer />
    </motion.div>
  );
};

export default WhyUs;

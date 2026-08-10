import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import {
  ClipboardCheck, MapPin, ShieldCheck, Target, Sparkles, TrendingUp,
  ShieldQuestion, FileCheck, Repeat2, SlidersHorizontal,
} from 'lucide-react';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { services } from '@/components/services/data/services';
import { pageTransition, staggerContainer, fadeUp, viewportOnce } from '@/lib/motion';
import { getProjectsForService } from '@/data/portfolio';

import ServiceHero from '@/components/services/sections/ServiceHero';
import WhyChooseUs, { type Reason } from '@/components/services/sections/WhyChooseUs';
import FinalCTA from '@/components/services/sections/FinalCTA';
import PricingCarousel from '@/components/services/social-media/PricingCarousel';
import TrustBadges, { type TrustBadge } from '@/components/services/social-media/TrustBadges';
import { seoPackages } from '@/components/services/data/seoPackages';
import SeoResultsSection from '@/components/services/seo/SeoResultsSection';
import SeoProcessTimeline from '@/components/services/seo/SeoProcessTimeline';
import AiSearchSection from '@/components/services/seo/AiSearchSection';
import SeoPortfolioGrid from '@/components/services/seo/SeoPortfolioGrid';
import FAQSection, { type FAQItem } from '@/components/services/sections/FAQSection';
import { buildFaqSchema } from '@/lib/faqSchema';

const SITE_URL = 'https://www.calibreassociates.com';
const OG_IMAGE = 'https://i.ibb.co/ksMhQrst/94e69e74-31c6-4907-b7da-719956c4355f.png';

const heroBadges = [
  'Local SEO',
  'Technical SEO',
  'On Page SEO',
  'Off Page SEO',
  'Google Business Profile Optimization',
  'AI Search Optimization',
  'Content Strategy',
  'Conversion Focused SEO',
];

const whyChooseReasons: Reason[] = [
  { icon: <ClipboardCheck className="h-6 w-6" />, title: 'Transparent Reporting', description: 'Clear, honest reporting on what\'s working, no vanity metrics, no confusing jargon.' },
  { icon: <MapPin className="h-6 w-6" />, title: 'Local SEO Specialists', description: 'Deep, hands-on experience winning local map pack and local search visibility.' },
  { icon: <ShieldCheck className="h-6 w-6" />, title: 'White Hat Practices', description: 'Sustainable, guideline-compliant SEO built to last, not shortcuts that put your site at risk.' },
  { icon: <Target className="h-6 w-6" />, title: 'Conversion Focused Strategy', description: 'Rankings are a means to an end, every recommendation ties back to real business outcomes.' },
  { icon: <Sparkles className="h-6 w-6" />, title: 'AI Search Ready', description: 'Content structured for traditional search and the AI-powered search experiences customers use today.' },
  { icon: <TrendingUp className="h-6 w-6" />, title: 'Long-Term Growth', description: 'SEO is a compounding asset, we build for durable growth, not a short-lived spike.' },
];

const SEO_FAQS: FAQItem[] = [
  {
    question: 'Should an Indian small business invest in SEO or paid ads to grow online faster?',
    answer:
      'Paid ads bring faster visibility, you show up the day you launch a campaign, but that visibility disappears the moment you stop paying. SEO takes longer to build, usually three to six months before you see meaningful movement, but the rankings and traffic it earns keep working without ongoing ad spend. The businesses that grow fastest and most sustainably usually run both together, paid ads for immediate leads while SEO compounds in the background and gradually lowers cost per lead over time.',
  },
  {
    question: 'What are the key differences between an SEO expert and an SEO agency?',
    answer:
      "An individual SEO expert typically handles one part of the process well, often technical audits or content, but has limited bandwidth and no backup if priorities shift. An SEO agency brings a full team covering technical SEO, content, local SEO, and reporting, so your strategy does not depend on one person's availability or skill set. For most growing businesses, an agency delivers more consistent, well rounded results.",
  },
  {
    question: 'What is the difference between white hat and black hat SEO?',
    answer:
      'White hat SEO follows search engine guidelines, earning rankings through quality content, legitimate backlinks, and genuine technical improvements. Black hat SEO uses shortcuts like keyword stuffing, hidden text, or purchased links to manipulate rankings quickly, which usually leads to a penalty once search engines catch up. We only use white hat practices, because rankings built on shortcuts tend to disappear just as fast as they arrived.',
  },
  {
    question: "Can an SEO expert help improve my website's Google ranking quickly?",
    answer:
      'SEO can produce early wins within the first month, mainly from fixing technical issues and optimizing existing pages, but meaningful ranking improvements typically take three to six months. Anyone promising guaranteed rankings within days or weeks is usually relying on tactics that put your site at risk. We focus on durable, compounding growth instead of shortcuts that create bigger problems later.',
  },
  {
    question: 'What questions should I ask before hiring an SEO firm?',
    answer:
      'Ask what specific work they will do each month, how they report results, and whether their practices follow search engine guidelines. Ask for examples of past results and how long those results took to appear, since anyone promising fast guaranteed rankings should raise a flag. Finally, ask how they measure success, real SEO should be judged on leads and revenue, not just keyword rankings.',
  },
];

const trustBadges: TrustBadge[] = [
  { icon: <ShieldQuestion className="h-4 w-4" />, label: 'No Hidden Fees' },
  { icon: <FileCheck className="h-4 w-4" />, label: 'Transparent Reporting' },
  { icon: <ShieldCheck className="h-4 w-4" />, label: 'White Hat SEO' },
  { icon: <SlidersHorizontal className="h-4 w-4" />, label: 'Tailored Strategies' },
  { icon: <Repeat2 className="h-4 w-4" />, label: 'Flexible Monthly Plans' },
];

const Seo = () => {
  const service = services.find((s) => s.slug === 'seo')!;
  const projects = getProjectsForService('seo');

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

  const faqSchema = buildFaqSchema(SEO_FAQS);

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
        <ServiceHero service={service} badges={heroBadges} secondaryCtaLabel="View Our Portfolio" />

        <SeoResultsSection />

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
              <motion.h2 variants={fadeUp} className="mb-4">SEO Packages</motion.h2>
              <motion.p variants={fadeUp} className="text-ink/70 text-body-lg">
                Monthly SEO retainers built around your growth stage, swipe through to compare.
              </motion.p>
            </motion.div>

            <PricingCarousel packages={seoPackages} />
            <TrustBadges badges={trustBadges} />
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
              <motion.h2 variants={fadeUp} className="mb-4">SEO Success Stories</motion.h2>
              <motion.p variants={fadeUp} className="text-ink/70 text-body-lg">
                A selection of businesses we've helped optimize through strategic SEO, Google Business Profile
                management and long-term organic growth.
              </motion.p>
            </motion.div>

            <SeoPortfolioGrid projects={projects} />
          </div>
        </section>

        <SeoProcessTimeline />

        <AiSearchSection />

        <FAQSection
          faqs={SEO_FAQS}
          eyebrow="SEO FAQS"
          title="Your SEO Questions, Answered"
          description="Common questions business owners ask about search engine optimization."
        />

        <WhyChooseUs
          reasons={whyChooseReasons}
          eyebrow="WHY CALIBRE ASSOCIATES"
          title="Why Choose Calibre Associates"
          description="An SEO partner focused on durable, compounding organic growth, the kind of long term value paid ads alone can't deliver."
        />

        <FinalCTA
          headline="Ready to Grow Your Business Organically?"
          description="Book a free consultation and we'll show you exactly how we'd approach your local SEO strategy."
          primaryLabel="Book Free Consultation"
          secondaryLabel="View Our Portfolio"
          secondaryHref="#portfolio"
        />
      </main>

      <Footer />
    </motion.div>
  );
};

export default Seo;

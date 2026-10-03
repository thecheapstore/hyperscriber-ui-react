import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  ClipboardCheck, MapPin, ShieldCheck, Target, Sparkles, TrendingUp,
  ShieldQuestion, FileCheck, Repeat2, SlidersHorizontal,
} from 'lucide-react';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Seo from '@/components/seo/Seo';
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
import ServiceAnswerBlock from '@/components/services/sections/ServiceAnswerBlock';
import ServiceContentSection, { ExternalInlineLink, InlineLink } from '@/components/services/sections/ServiceContentSection';
import ServiceResourceLinks from '@/components/services/sections/ServiceResourceLinks';
import { buildServiceJsonLd, getServiceSeo } from '@/components/services/lib/serviceSchema';

const CASE = '/services/seo/projects';

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
  { icon: <MapPin className="h-6 w-6" />, title: 'Local SEO Specialists', description: 'Deep, hands on experience winning local map pack and local search visibility.' },
  { icon: <ShieldCheck className="h-6 w-6" />, title: 'White Hat Practices', description: 'Sustainable, guideline compliant SEO built to last, not shortcuts that put your site at risk.' },
  { icon: <Target className="h-6 w-6" />, title: 'Conversion Focused Strategy', description: 'Rankings are a means to an end, every recommendation ties back to real business outcomes.' },
  { icon: <Sparkles className="h-6 w-6" />, title: 'AI Search Ready', description: 'Content structured for traditional search and the AI powered search experiences customers use today.' },
  { icon: <TrendingUp className="h-6 w-6" />, title: 'Long Term Growth', description: 'SEO is a compounding asset, we build for durable growth, not a short lived spike.' },
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
  {
    question: 'What is local SEO and how does it work?',
    answer:
      'Local SEO helps a business appear when people search nearby, for example tree service near me or lawn care in Buffalo. It works through an optimized Google Business Profile, consistent business details across directories, location and service pages on your website, and genuine reviews. Together these signals decide who shows up in the map pack.',
  },
  {
    question: 'What is GEO and AI search optimization?',
    answer:
      'GEO, or generative engine optimization, is the work of making your content easy for AI assistants and AI Overviews to understand, trust and cite. It builds on classic SEO with clear answers near the top of each page, structured data, consistent business facts and strong topical coverage. We apply it alongside traditional SEO, not instead of it.',
  },
  {
    question: 'Do you provide SEO for tree service and landscaping companies?',
    answer:
      'Yes, it is our most common niche. We have worked on local SEO for tree service, landscaping, lawn care and deck building companies around Buffalo, Rochester and Syracuse NY, from Google Business Profile work to service area page architecture. Each case study on this page explains what was changed and why.',
  },
  {
    question: 'How much do SEO services cost?',
    answer:
      'Our monthly SEO plans are listed on this page, and the right one depends on how many service areas you cover, how large your website is and how competitive your market is. Larger or multi location businesses get a custom proposal. Book a free consultation and we will recommend a plan before you commit to anything.',
  },
];

const trustBadges: TrustBadge[] = [
  { icon: <ShieldQuestion className="h-4 w-4" />, label: 'No Hidden Fees' },
  { icon: <FileCheck className="h-4 w-4" />, label: 'Transparent Reporting' },
  { icon: <ShieldCheck className="h-4 w-4" />, label: 'White Hat SEO' },
  { icon: <SlidersHorizontal className="h-4 w-4" />, label: 'Tailored Strategies' },
  { icon: <Repeat2 className="h-4 w-4" />, label: 'Flexible Monthly Plans' },
];

const SeoServicePage = () => {
  const service = services.find((s) => s.slug === 'seo')!;
  const projects = getProjectsForService('seo');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div {...pageTransition} className="min-h-screen">
      <Seo {...getServiceSeo(service)} jsonLd={buildServiceJsonLd(service, SEO_FAQS)} />

      <Navbar />

      <main className="mt-16">
        <ServiceHero service={service} badges={heroBadges} secondaryCtaLabel="View Our Portfolio" />

        <ServiceAnswerBlock heading={service.answerHeading!} answer={service.answer!} />

        <ServiceContentSection
          eyebrow="WHAT WE DO"
          title="Local SEO, Technical SEO and AI Search Optimization"
          intro="Three workstreams that work together, so your business is easy to find, easy to trust and easy for search engines and AI assistants to understand."
          cards={[
            {
              heading: 'Local SEO and Google Business Profile optimization',
              body: (
                <>
                  We optimize your Google Business Profile, build service area pages and clean up citations so you show in
                  the map pack. See the <InlineLink to={`${CASE}/716-lawn-care`}>716 Lawn Care local SEO case study</InlineLink> and
                  read Google's{' '}
                  <ExternalInlineLink href="https://support.google.com/business">Business Profile Help</ExternalInlineLink>.
                </>
              ),
            },
            {
              heading: 'Technical SEO for speed, crawling and indexing',
              body: (
                <>
                  Site speed, crawlability, indexing and structured data get fixed at the foundation. The{' '}
                  <InlineLink to={`${CASE}/ashton-services-ny`}>Ashton Services NY technical SEO case study</InlineLink> shows
                  the process, and Google's{' '}
                  <ExternalInlineLink href="https://developers.google.com/search/docs">Search Central documentation</ExternalInlineLink> is
                  the standard we build to.
                </>
              ),
            },
            {
              heading: 'AI search and GEO optimization',
              body: (
                <>
                  We structure pages so AI Overviews, ChatGPT and Perplexity can read, trust and cite them. Google explains
                  how it chooses sources in{' '}
                  <ExternalInlineLink href="https://developers.google.com/search/docs/appearance/ai-features">AI features and your website</ExternalInlineLink>.
                </>
              ),
            },
          ]}
        />

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
                management and long term organic growth.
              </motion.p>
            </motion.div>

            <SeoPortfolioGrid projects={projects} />
          </div>
        </section>

        <ServiceContentSection
          tone="canvas"
          eyebrow="OUR NICHE"
          title="SEO for Tree Service and Landscaping Companies"
          intro="Most of our SEO work supports local service businesses in Western and Central New York, and the lessons carry over to any business that serves a local area."
          cards={[
            {
              heading: 'Tree service SEO',
              body: (
                <>
                  Emergency and seasonal searches decide who gets the call. See our work for{' '}
                  <InlineLink to={`${CASE}/wny-tree-specialists`}>WNY Tree Specialists</InlineLink>,{' '}
                  <InlineLink to={`${CASE}/buffalo-tree-specialists`}>Buffalo Tree Specialists</InlineLink> and{' '}
                  <InlineLink to={`${CASE}/tree-craft-tree-services`}>TreeCraft Tree Service</InlineLink>, and read our{' '}
                  <InlineLink to="/industries/tree-service-marketing">tree service marketing guide</InlineLink>.
                </>
              ),
            },
            {
              heading: 'Landscaping and lawn care SEO',
              body: (
                <>
                  Seasonal demand, service areas and a trustworthy Google Business Profile drive landscaping leads. See the{' '}
                  <InlineLink to={`${CASE}/kp-landscaping`}>KP Landscaping Google Business Profile campaign</InlineLink> and our{' '}
                  <InlineLink to="/industries/landscaping-and-lawn-care-marketing">landscaping and lawn care marketing guide</InlineLink>.
                </>
              ),
            },
            {
              heading: 'SEO agency in India and the USA',
              body: (
                <>
                  We work from <InlineLink to="/locations/lucknow-india">Lucknow, India</InlineLink> and serve clients in{' '}
                  <InlineLink to="/locations/buffalo-new-york">Buffalo, New York</InlineLink> and across the United States.
                  Campaigns are managed by <InlineLink to="/our-team/tej-pratap">Tej Pratap</InlineLink>, our Performance
                  Manager, with <InlineLink to="/our-team/abhijeet-jain">Abhijeet Jain</InlineLink>, Founder and CEO, leading
                  the technical and local SEO systems.
                </>
              ),
            },
          ]}
        />

        <SeoProcessTimeline />

        <AiSearchSection />

        <ServiceResourceLinks
          service={service}
          intro="Pair SEO with a fast website and the right campaigns, and see the results we have delivered for local businesses."
          caseStudies={[
            { label: '716 Lawn Care SEO and local search growth', to: `${CASE}/716-lawn-care`, description: 'Seasonal local search growth for a lawn care company.' },
            { label: 'WNY Tree Specialists local SEO', to: `${CASE}/wny-tree-specialists`, description: 'Emergency search visibility for a tree service.' },
            { label: 'TreeCraft programmatic local SEO', to: `${CASE}/tree-craft-tree-services`, description: 'Location pages across three metro areas.' },
            { label: 'All Calibre Associates projects', to: '/portfolio', description: 'Browse every SEO, website and brand project.' },
          ]}
          moreLinks={[
            { label: 'Tree service marketing', to: '/industries/tree-service-marketing' },
            { label: 'Landscaping and lawn care marketing', to: '/industries/landscaping-and-lawn-care-marketing' },
            { label: 'Meet Tej Pratap, Performance Manager', to: '/our-team/tej-pratap' },
            { label: 'Book an SEO consultation', to: '/contact' },
          ]}
          external={[
            { label: 'Google Search Central documentation', href: 'https://developers.google.com/search/docs', description: 'How Google Search crawls, indexes and ranks pages.' },
            { label: 'Google Business Profile Help', href: 'https://support.google.com/business', description: 'Official guidance for managing your local listing.' },
            { label: 'AI features and your website', href: 'https://developers.google.com/search/docs/appearance/ai-features', description: 'How AI Overviews choose and cite sources.' },
          ]}
        />

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

export default SeoServicePage;

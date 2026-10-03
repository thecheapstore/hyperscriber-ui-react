import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Target, Clapperboard, CalendarClock, TrendingUp, BarChart3, Layers, PlayCircle } from 'lucide-react';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Seo from '@/components/seo/Seo';
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
import ServiceAnswerBlock from '@/components/services/sections/ServiceAnswerBlock';
import ServiceContentSection, { ExternalInlineLink, InlineLink } from '@/components/services/sections/ServiceContentSection';
import ServiceResourceLinks from '@/components/services/sections/ServiceResourceLinks';
import { buildServiceJsonLd, getServiceSeo } from '@/components/services/lib/serviceSchema';

const whyChooseReasons: Reason[] = [
  { icon: <Target className="h-6 w-6" />, title: 'Strategy Led Content', description: 'Every post ties back to a clear growth goal, not just a content calendar to fill.' },
  { icon: <Clapperboard className="h-6 w-6" />, title: 'Platform Native Editing', description: 'Reels and shorts edited to feel native to the feed, not repurposed ad creative.' },
  { icon: <CalendarClock className="h-6 w-6" />, title: 'Consistent Cadence', description: 'A dependable publishing rhythm that keeps your brand visible week over week.' },
  { icon: <TrendingUp className="h-6 w-6" />, title: 'Data Driven Iteration', description: 'We track what performs and adjust the content mix accordingly, every cycle.' },
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
  {
    question: 'What does a social media marketing agency do?',
    answer:
      'It plans, creates, publishes and reports on your social content so the brand shows up consistently. For us that means a monthly content calendar, Reels, carousels and graphics, written captions, scheduled posting and a performance report, with every piece cut to feel native on the platform it lives on.',
  },
  {
    question: 'How much does social media management cost?',
    answer:
      'Our monthly packages are shown on this page, with Starter, Advanced and Premium tiers plus a Custom Plan for UGC, creators and paid advertising. Each tier lists exactly how many Reels, graphics, carousels and stories you receive, so you can compare them before booking a call.',
  },
  {
    question: 'Do you work with UGC creators?',
    answer:
      'Yes. Manasvi Pathak, our Co Founder and Talent Manager, coordinates creators, models and on camera talent for brand campaigns, and she creates UGC style content herself. We also produce AI assisted UGC style video where it fits the brief and the budget.',
  },
  {
    question: 'Which social media platforms do you create content for?',
    answer:
      'We plan content for Instagram and Facebook first, and cut vertical video for YouTube Shorts and TikTok as well. Each platform gets its own format, caption style and pacing, because a Reel and a carousel earn attention in different ways.',
  },
];

const SocialMediaMarketing = () => {
  const service = services.find((s) => s.slug === 'social-media-marketing')!;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div {...pageTransition} className="min-h-screen">
      <Seo {...getServiceSeo(service)} jsonLd={buildServiceJsonLd(service, SOCIAL_MEDIA_FAQS)} />

      <Navbar />

      <main className="mt-16">
        <ServiceHero service={service} />

        <ServiceAnswerBlock heading={service.answerHeading!} answer={service.answer!} />

        <ServiceContentSection
          eyebrow="WHAT WE CREATE"
          title="Social Media Marketing, UGC Content and Reels for Your Brand"
          intro="Everything we publish is planned around your goals and cut for the platform it will live on."
          cards={[
            {
              heading: 'Social media marketing for small businesses',
              body: (
                <>
                  A steady content calendar, on brand captions and consistent posting build trust faster than occasional
                  bursts. Pair it with <InlineLink to="/services/seo">SEO services and local SEO</InlineLink> so the people who
                  find you on Google also find an active, credible social presence.
                </>
              ),
            },
            {
              heading: 'UGC content creation',
              body: (
                <>
                  UGC style video feels like a real customer or creator made it, which is why it earns trust and engagement.{' '}
                  <InlineLink to="/our-team/manasvi-pathak">Manasvi Pathak</InlineLink>, our Co Founder and Talent Manager,
                  coordinates creators and on camera talent for campaigns.
                </>
              ),
            },
            {
              heading: 'Reels and short form video',
              body: (
                <>
                  Reels and Shorts need tight pacing, captions and a strong first second. Our{' '}
                  <InlineLink to="/services/video-editing">video editing services</InlineLink> cut every clip for the platform it
                  will live on.
                </>
              ),
            },
          ]}
        />

        <WhyChooseUs
          reasons={whyChooseReasons}
          eyebrow="WHY CALIBRE ASSOCIATES"
          title="Why Brands Choose Us for Social"
          description="Social media marketing and UGC content production built around consistency, performance, and platform native quality."
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
                <InlineLink to="/our-team/manasvi-pathak">
                  Manasvi Pathak
                </InlineLink>{' '}
                leads talent management and brand representation at Calibre Associates.
              </motion.p>
            </motion.div>

            <PortfolioTabs />
          </div>
        </section>

        <ServiceContentSection
          tone="canvas"
          eyebrow="THE BIGGER PICTURE"
          title="How Social Media Fits With Your Ads, Brand and Website"
          intro="Social media works hardest when it is connected to the rest of your marketing."
          cards={[
            {
              heading: 'Social media and paid advertising',
              body: (
                <>
                  Strong organic content makes ads cheaper to run and easier to trust. See our{' '}
                  <InlineLink to="/services/lead-generation-paid-advertising">lead generation and paid advertising</InlineLink> work,
                  and the{' '}
                  <ExternalInlineLink href="https://www.facebook.com/business/help">Meta Business Help Center</ExternalInlineLink> for
                  official platform guidance.
                </>
              ),
            },
            {
              heading: 'Social media and brand identity',
              body: (
                <>
                  Consistent content starts with a consistent identity. Our{' '}
                  <InlineLink to="/services/brand-identity-development">brand identity and logo design</InlineLink> projects
                  include campaign photography and short video built for social.
                </>
              ),
            },
            {
              heading: 'Social media and your website',
              body: (
                <>
                  Every post should lead somewhere useful. A fast, clear site from our{' '}
                  <InlineLink to="/services/website-development">website development company</InlineLink> turns social attention
                  into enquiries.
                </>
              ),
            },
          ]}
        />

        <ServiceResourceLinks
          service={service}
          intro="See the campaign work behind our social content and explore the services that support it."
          caseStudies={[
            { label: 'Slick brand identity and full funnel campaign', to: '/services/brand-identity-development/projects/slick', description: 'Photography, video and funnel ad creative in one system.' },
            { label: 'The Denim Co-Ord AI fashion campaign', to: '/services/brand-identity-development/projects/denim', description: 'A concept fashion campaign built for social formats.' },
            { label: 'All Calibre Associates projects', to: '/portfolio', description: 'Browse every website, SEO and brand project.' },
          ]}
          moreLinks={[
            { label: 'Meet Manasvi Pathak, Co Founder and Talent Manager', to: '/our-team/manasvi-pathak' },
            { label: 'Request a social media proposal', to: '/contact' },
          ]}
          external={[
            { label: 'Meta Business Help Center', href: 'https://www.facebook.com/business/help', description: 'Official guidance for Facebook and Instagram business tools.' },
            { label: 'Instagram Help Center', href: 'https://help.instagram.com/', description: 'Official answers on Reels, posts and account features.' },
          ]}
        />

        <FAQSection
          faqs={SOCIAL_MEDIA_FAQS}
          eyebrow="SOCIAL MEDIA FAQS"
          title="Your Social Media Marketing Questions, Answered"
          description="Common questions brands ask about growing on social media and using UGC content."
        />

        <FinalCTA
          headline="Ready to Grow Your Brand Across Every Platform?"
          description="Every business has different goals, we build a content strategy around yours, not a one size fits all package."
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

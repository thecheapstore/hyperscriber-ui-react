import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Palette, Sparkles, Filter, Film, Wand2, ShieldCheck } from 'lucide-react';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Seo from '@/components/seo/Seo';
import { services } from '@/components/services/data/services';
import { pageTransition } from '@/lib/motion';

import ServiceHero from '@/components/services/sections/ServiceHero';
import WhyChooseUs, { type Reason } from '@/components/services/sections/WhyChooseUs';
import ProcessTimeline, { type TimelineStep } from '@/components/services/sections/ProcessTimeline';
import StatsSection from '@/components/services/sections/StatsSection';
import FinalCTA from '@/components/services/sections/FinalCTA';
import FeaturedProjects from '@/components/portfolio/FeaturedProjects';
import PortfolioBrowser from '@/components/portfolio/PortfolioBrowser';
import { getProjectsForService } from '@/data/portfolio';
import FAQSection, { type FAQItem } from '@/components/services/sections/FAQSection';
import ServiceAnswerBlock from '@/components/services/sections/ServiceAnswerBlock';
import ServiceContentSection, { ExternalInlineLink, InlineLink } from '@/components/services/sections/ServiceContentSection';
import ServiceResourceLinks from '@/components/services/sections/ServiceResourceLinks';
import { buildServiceJsonLd, getServiceSeo } from '@/components/services/lib/serviceSchema';

const whyChooseReasons: Reason[] = [
  { icon: <Palette className="h-6 w-6" />, title: 'Identity First, Not Logo Only', description: 'We design the whole system, wordmark, color, type, and packaging, not a single logo file.' },
  { icon: <Sparkles className="h-6 w-6" />, title: 'Launch Ready Campaign Content', description: 'Every identity ships with the photography and video needed to actually launch it.' },
  { icon: <Filter className="h-6 w-6" />, title: 'Full Funnel Thinking', description: 'Awareness, consideration, and conversion creative planned together, not bolted on later.' },
  { icon: <Film className="h-6 w-6" />, title: 'Photography and Video, One System', description: 'Stills and short form video share the same identity, palette, and voice.' },
  { icon: <Wand2 className="h-6 w-6" />, title: 'Fast, AI Assisted Production', description: 'Campaign content generated efficiently without sacrificing consistency or craft.' },
  { icon: <ShieldCheck className="h-6 w-6" />, title: 'Transparent Process', description: 'Every concept project in our portfolio is clearly labeled as demo or client work.' },
];

const BRAND_IDENTITY_FAQS: FAQItem[] = [
  {
    question: 'What does a brand identity development project actually include?',
    answer:
      'A complete identity system: wordmark and logo design, a color palette, typography, and packaging or product presentation, plus the campaign content needed to launch it, photography, art direction, and often a short form video reel. We build the identity and the content that carries it together, rather than handing over a logo file and leaving the rest to you.',
  },
  {
    question: 'Are the brand campaigns shown in your portfolio real clients?',
    answer:
      'The Plume, Volta, Slick, and Denim Co-Ord projects shown here are in house concept campaigns, built for fictional products so we could demonstrate the full process end to end without waiting on a client timeline. Each one is clearly labeled as a concept project. We built them the same way we would build for a paying client: real brand strategy, a real shot list, and a real full funnel campaign, just without an actual product on the shelf.',
  },
  {
    question: 'Can you design a brand identity without AI generated photography?',
    answer:
      "Yes. AI generated campaign photography is one production method we use, particularly useful for concept work, rapid iteration, and campaigns that need a large volume of consistent shots quickly. For many client projects the identity design, wordmark, color system, packaging, is paired with traditional photography, real product shoots, or a mix of both, depending on budget, timeline, and what the brand actually needs.",
  },
  {
    question: 'How is this different from just hiring a logo designer?',
    answer:
      'A logo designer typically hands you a wordmark and calls it done. We design the full system, color, type, packaging, and voice, then build the campaign content needed to actually launch it, product photography, ad creative for every funnel stage, and video content. The identity and the content are planned together from the first discovery call, not handled by two separate vendors who never talk to each other.',
  },
  {
    question: 'How long does a brand identity and campaign project take?',
    answer:
      'It depends on scope. A focused identity package, wordmark, color system, and a core photography set, can move quickly. A full funnel campaign with awareness, consideration, and conversion creative across multiple formats, plus a video reel, takes longer to plan and produce properly. We scope the timeline on a discovery call once we understand what you actually need launched.',
  },
  {
    question: 'What is the difference between a logo and a brand identity?',
    answer:
      'A logo is one mark. A brand identity is the whole system around it: wordmark, color palette, typography, imagery style, packaging and tone of voice. The system is what makes a business look consistent across a website, packaging, social posts and ads.',
  },
  {
    question: 'How much does brand identity design cost?',
    answer:
      'It depends on scope, from a focused wordmark and color system to a full identity with packaging, campaign photography and a video reel. We scope the work on a free discovery call and give you a clear quote before you commit to anything.',
  },
  {
    question: 'Do you build the website after the brand identity is done?',
    answer:
      'Yes. Because we also run website development, social media marketing and video editing, the identity can flow straight into a website, social content and ads without a handoff between agencies. You can start with the brand and add the website next.',
  },
];

const identityProcess: TimelineStep[] = [
  { title: 'Discovery', description: 'We learn who the brand is for, what it stands for, and how it should feel before any design starts.' },
  { title: 'Positioning', description: 'Brand voice, messaging direction, and competitive context are mapped out before visuals begin.' },
  { title: 'Identity Design', description: 'Wordmark, color system, typography, and packaging designed to work together as one identity.' },
  { title: 'Shot List Planning', description: 'A full campaign shot list is planned, hero, lifestyle, funnel stages, and video, before production starts.' },
  { title: 'Campaign Production', description: 'Photography, art direction, and video content produced to match the identity exactly.' },
  { title: 'Funnel Creative', description: 'Awareness, consideration, and conversion creative built out across every format you need.' },
  { title: 'Review & Refinement', description: 'Feedback rounds to refine consistency, messaging, and visual polish across the set.' },
  { title: 'Delivery', description: 'A complete, ready to use launch kit handed off across every platform and format.' },
];

const BrandIdentityDevelopment = () => {
  const service = services.find((s) => s.slug === 'brand-identity-development')!;
  const projects = getProjectsForService('brand-identity-development');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div {...pageTransition} className="min-h-screen">
      <Seo {...getServiceSeo(service)} jsonLd={buildServiceJsonLd(service, BRAND_IDENTITY_FAQS)} />

      <Navbar />

      <main className="mt-16">
        <ServiceHero service={service} secondaryCtaLabel="See The Campaigns" />

        <ServiceAnswerBlock heading={service.answerHeading!} answer={service.answer!} />

        <ServiceContentSection
          eyebrow="WHAT WE DESIGN"
          title="Brand Identity and Logo Design for New and Growing Brands"
          intro="One identity system, designed to work in every placement from packaging to paid social."
          cards={[
            {
              heading: 'Logo and wordmark design',
              body: (
                <>
                  A distinctive wordmark that holds up at favicon size and on a billboard. See how we built the wordmark and
                  checkerboard packaging for the{' '}
                  <InlineLink to="/services/brand-identity-development/projects/slick">Slick brand identity and full funnel campaign</InlineLink>.
                </>
              ),
            },
            {
              heading: 'Color system, typography and packaging',
              body: (
                <>
                  Palettes and type chosen to work together and stay readable. We check color pairings against the{' '}
                  <ExternalInlineLink href="https://www.w3.org/WAI/WCAG22/Understand/contrast-minimum.html">WCAG contrast guidance</ExternalInlineLink>{' '}
                  and explore typefaces from{' '}
                  <ExternalInlineLink href="https://fonts.google.com/">Google Fonts</ExternalInlineLink> where they fit.
                </>
              ),
            },
            {
              heading: 'Brand campaign content',
              body: (
                <>
                  Photography, art direction and short video built to launch the identity. Browse the{' '}
                  <InlineLink to="/services/brand-identity-development/projects/plume">Plume</InlineLink> and{' '}
                  <InlineLink to="/services/brand-identity-development/projects/volta">Volta</InlineLink> concept campaigns, each
                  labeled as in house demo work.
                </>
              ),
            },
          ]}
        />

        <WhyChooseUs
          reasons={whyChooseReasons}
          eyebrow="WHY CALIBRE ASSOCIATES"
          title="Why Choose Calibre Associates"
          description="Every brand identity we build is judged by the same standard: does it look finished, and could it actually launch tomorrow."
        />

        <ProcessTimeline
          process={identityProcess}
          eyebrow="OUR PROCESS"
          title="How We Build Your Brand Identity"
          description="A structured process from first discovery call to a complete, ready to launch asset kit."
        />

        <StatsSection stats={service.stats} />

        <FeaturedProjects projects={projects} />

        <section id="portfolio" className="py-20 md:py-24 bg-canvas">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="eyebrow inline-block py-1 px-3 mb-5 rounded-pill bg-surface-soft">
                THE PORTFOLIO
              </span>
              <h2 className="mb-4">Brand Identity Portfolio</h2>
              <p className="text-ink/70 text-body-lg">
                Complete concept brand identities, from wordmark to full campaign, built in house
                to show exactly what this process produces.
              </p>
              <p className="text-ink/60 text-sm mt-4">
                Every project below is clearly labeled as an in house concept campaign, not a real
                client, built to demonstrate the process end to end.
              </p>
            </div>

            <PortfolioBrowser projects={projects} />
          </div>
        </section>

        <ServiceContentSection
          tone="canvas"
          eyebrow="WHAT COMES NEXT"
          title="From Brand Identity to Website, Social Media and Video"
          intro="A finished identity is the starting point. Here is how it carries into the rest of your marketing."
          cards={[
            {
              heading: 'A website that looks like your brand',
              body: (
                <>
                  Turn the identity into a fast, conversion focused site with our{' '}
                  <InlineLink to="/services/website-development">website development for small businesses</InlineLink>.
                </>
              ),
            },
            {
              heading: 'Social content that stays on brand',
              body: (
                <>
                  Keep every post consistent with{' '}
                  <InlineLink to="/services/social-media-marketing">social media marketing and UGC content</InlineLink> planned
                  around your palette and voice.
                </>
              ),
            },
            {
              heading: 'Video that carries the identity',
              body: (
                <>
                  Edit reels and ads in your brand style with our{' '}
                  <InlineLink to="/services/video-editing">video editing services</InlineLink>. Creative direction and talent
                  coordination come from{' '}
                  <InlineLink to="/our-team/manasvi-pathak">Manasvi Pathak</InlineLink>, our Co Founder and Talent Manager.
                </>
              ),
            },
          ]}
        />

        <ServiceResourceLinks
          service={service}
          intro="Browse the concept campaigns behind our brand work and explore the services that launch a brand."
          caseStudies={[
            { label: 'Plume brand identity concept campaign', to: '/services/brand-identity-development/projects/plume', description: 'A complete identity with launch photography.' },
            { label: 'Volta brand identity concept campaign', to: '/services/brand-identity-development/projects/volta', description: 'Wordmark, color system and campaign content.' },
            { label: 'Slick brand identity and full funnel campaign', to: '/services/brand-identity-development/projects/slick', description: 'Identity plus awareness to conversion creative.' },
            { label: 'The Denim Co-Ord AI fashion campaign', to: '/services/brand-identity-development/projects/denim', description: 'A fashion campaign cut into a ready to post reel.' },
          ]}
          moreLinks={[
            { label: 'All Calibre Associates projects', to: '/portfolio' },
            { label: 'Meet Manasvi Pathak, Co Founder and Talent Manager', to: '/our-team/manasvi-pathak' },
            { label: 'Start a brand identity project', to: '/contact' },
          ]}
          external={[
            { label: 'WCAG contrast guidance', href: 'https://www.w3.org/WAI/WCAG22/Understand/contrast-minimum.html', description: 'Accessible color pairings for text and backgrounds.' },
            { label: 'Google Fonts', href: 'https://fonts.google.com/', description: 'Open source typefaces for web and brand use.' },
          ]}
        />

        <FAQSection
          faqs={BRAND_IDENTITY_FAQS}
          eyebrow="BRAND IDENTITY FAQS"
          title="Your Brand Identity Questions, Answered"
          description="Common questions business owners ask about building a brand identity from scratch."
        />

        <FinalCTA
          headline="Ready to Build a Brand From Scratch?"
          description="Book a free consultation and we'll map out the identity and campaign content your brand needs to launch."
        />
      </main>

      <Footer />
    </motion.div>
  );
};

export default BrandIdentityDevelopment;

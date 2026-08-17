import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Palette, Sparkles, Filter, Film, Wand2, ShieldCheck } from 'lucide-react';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
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
import { buildFaqSchema } from '@/lib/faqSchema';

const SITE_URL = 'https://www.calibreassociates.com';
const OG_IMAGE = 'https://www.calibreassociates.com/favicons/android-chrome-512x512.png';

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

  const faqSchema = buildFaqSchema(BRAND_IDENTITY_FAQS);

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
        <ServiceHero service={service} secondaryCtaLabel="See The Campaigns" />

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

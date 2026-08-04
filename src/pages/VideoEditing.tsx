import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Eye, Sparkles, Users, BookOpen, Presentation, TrendingUp, Target, Lightbulb, Zap, Wand2, Layers, ShieldCheck, Bot, PlayCircle } from 'lucide-react';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { services } from '@/components/services/data/services';
import { pageTransition, staggerContainer, fadeUp, viewportOnce } from '@/lib/motion';

import WhyChooseUs, { type Reason } from '@/components/services/sections/WhyChooseUs';
import StatsSection from '@/components/services/sections/StatsSection';
import ProcessTimeline, { type TimelineStep } from '@/components/services/sections/ProcessTimeline';
import FinalCTA from '@/components/services/sections/FinalCTA';

import VideoEditingHero from '@/components/services/video-editing/VideoEditingHero';
import VideoEditingPricing from '@/components/services/video-editing/VideoEditingPricing';
import PortfolioCategoryTabs from '@/components/services/video-editing/PortfolioCategoryTabs';
import IndustriesWeEditFor from '@/components/services/video-editing/IndustriesWeEditFor';
import EditingCapabilities from '@/components/services/video-editing/EditingCapabilities';

const SITE_URL = 'https://www.calibreassociates.com';
const OG_IMAGE = 'https://i.ibb.co/ksMhQrst/94e69e74-31c6-4907-b7da-719956c4355f.png';

const whyEditingMattersReasons: Reason[] = [
  { icon: <Eye className="h-6 w-6" />, title: 'Better Watch Time', description: 'Pacing and cuts built to hold attention instead of losing viewers in the first three seconds.' },
  { icon: <Sparkles className="h-6 w-6" />, title: 'Stronger Brand Identity', description: 'Consistent visual style, motion and titling that make your content instantly recognizable.' },
  { icon: <Users className="h-6 w-6" />, title: 'Higher Engagement', description: 'Editing decisions driven by what actually keeps audiences watching, liking and sharing.' },
  { icon: <BookOpen className="h-6 w-6" />, title: 'Better Storytelling', description: 'Every edit is structured around a narrative arc, not just a sequence of clips.' },
  { icon: <Presentation className="h-6 w-6" />, title: 'Professional Presentation', description: 'Clean, polished delivery that reflects the quality of your brand or business.' },
  { icon: <TrendingUp className="h-6 w-6" />, title: 'Improved Conversions', description: 'Content edited with the end action in mind — not just views, but results.' },
];

const whyChooseCalibreReasons: Reason[] = [
  { icon: <Target className="h-6 w-6" />, title: 'Platform-first Editing', description: 'Every edit is formatted and paced for where it will actually be watched.' },
  { icon: <TrendingUp className="h-6 w-6" />, title: 'Conversion-focused Videos', description: 'Editing decisions tied to real business outcomes, not just aesthetics.' },
  { icon: <Lightbulb className="h-6 w-6" />, title: 'Creative Storytelling', description: 'Raw footage shaped into a narrative that holds attention start to finish.' },
  { icon: <Zap className="h-6 w-6" />, title: 'Fast Delivery', description: 'Structured workflows that keep projects moving without compromising quality.' },
  { icon: <Wand2 className="h-6 w-6" />, title: 'Premium Motion Graphics', description: 'On-brand titling, transitions and animated elements built in-house.' },
  { icon: <Layers className="h-6 w-6" />, title: 'Scalable Production', description: 'From a single reel to a full content pipeline, our workflow scales with you.' },
  { icon: <ShieldCheck className="h-6 w-6" />, title: 'Built for Brands', description: 'Consistent visual identity carried across every piece of content we deliver.' },
  { icon: <Bot className="h-6 w-6" />, title: 'Modern AI-assisted Workflow', description: 'AI tools used to speed up production — never as a replacement for craft.' },
];

const creativeWorkflow: TimelineStep[] = [
  { title: 'Concept', description: 'Defining the idea, angle and objective behind the content before a single clip is touched.' },
  { title: 'Script', description: 'Structuring the narrative or talking points so the edit has a clear throughline.' },
  { title: 'Editing', description: 'Cutting, pacing and assembling footage into a polished, story-driven sequence.' },
  { title: 'Motion Graphics', description: 'Adding titling, transitions and animated brand elements where they earn their place.' },
  { title: 'Review', description: 'Feedback rounds to refine pacing, messaging and visual polish before delivery.' },
  { title: 'Final Delivery', description: 'Formatted, captioned and exported for every platform it needs to live on.' },
];

const VideoEditing = () => {
  const service = services.find((s) => s.slug === 'video-editing')!;

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
    areaServed: 'US',
  };

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
      </Helmet>

      <Navbar />

      <main className="mt-16">
        <VideoEditingHero />

        <WhyChooseUs
          reasons={whyEditingMattersReasons}
          eyebrow="WHY IT MATTERS"
          title="Why Professional Editing Matters"
          description="Editing is one of the biggest factors influencing audience retention, brand perception and conversions."
        />

        <StatsSection stats={service.stats} />

        <VideoEditingPricing />

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
              <motion.h2 variants={fadeUp} className="mb-4">Featured Editing Work</motion.h2>
              <motion.p variants={fadeUp} className="text-ink/70 text-body-lg">
                A curated selection of projects created across multiple industries, platforms and content styles.
              </motion.p>
            </motion.div>

            <PortfolioCategoryTabs />
          </div>
        </section>

        <ProcessTimeline
          process={creativeWorkflow}
          eyebrow="CREATIVE WORKFLOW"
          title="How We Bring Every Edit to Life"
          description="A structured, six-stage process from first concept to final delivery."
        />

        <IndustriesWeEditFor />

        <EditingCapabilities />

        <WhyChooseUs
          reasons={whyChooseCalibreReasons}
          eyebrow="WHY CALIBRE ASSOCIATES"
          title="Why Choose Calibre Associates"
          description="An editing team built around platform performance, brand consistency and speed."
        />

        <FinalCTA
          headline="Ready to Turn Raw Footage Into High-Performing Content?"
          description="Whether you're a creator, startup, agency or established brand, we create videos that engage audiences, strengthen your brand and drive meaningful business results."
          primaryLabel="Book Free Consultation"
          secondaryLabel="Start Your Project"
          secondaryHref="/contact"
          secondaryIcon={<PlayCircle className="mr-2 h-4 w-4" />}
        />
      </main>

      <Footer />
    </motion.div>
  );
};

export default VideoEditing;

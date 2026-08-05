import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import {
  BarChart3, Workflow, TrendingUp, ClipboardCheck, Users, Layers, RefreshCw,
  TreePine, TreeDeciduous, Home, HardHat, Fan, HeartPulse, Scale, Smile,
  UtensilsCrossed, Building2, Megaphone, ShoppingCart, MapPin, Briefcase,
  PlayCircle,
} from 'lucide-react';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { services } from '@/components/services/data/services';
import { pageTransition } from '@/lib/motion';

import WhyChooseUs, { type Reason } from '@/components/services/sections/WhyChooseUs';
import StatsSection from '@/components/services/sections/StatsSection';
import ProcessTimeline, { type TimelineStep } from '@/components/services/sections/ProcessTimeline';
import FinalCTA from '@/components/services/sections/FinalCTA';
import PricingTiers from '@/components/services/shared/PricingTiers';
import PlatformsGrid from '@/components/services/shared/PlatformsGrid';
import IndustryIconGrid, { type IndustryItem } from '@/components/services/shared/IndustryIconGrid';

import LeadGenHero from '@/components/services/lead-generation/LeadGenHero';
import LeadGenEcosystem from '@/components/services/lead-generation/LeadGenEcosystem';
import LeadGenServices from '@/components/services/lead-generation/LeadGenServices';
import { leadGenTiers } from '@/components/services/lead-generation/data/leadGenPricing';

const SITE_URL = 'https://www.calibreassociates.com';
const OG_IMAGE = 'https://i.ibb.co/ksMhQrst/94e69e74-31c6-4907-b7da-719956c4355f.png';

const PLATFORMS = [
  'Google Ads', 'Meta Ads', 'Google Analytics', 'Google Tag Manager', 'Google Search Console',
  'HighLevel', 'n8n', 'Make', 'Zapier', 'Stripe', 'Nextdoor', 'Yelp', 'Google Business Profile',
  'Looker Studio', 'Calendly', 'Mailgun', 'Twilio', 'OpenAI', 'Claude', 'Gemini', 'Perplexity', 'Microsoft Clarity',
];

const INDUSTRIES: IndustryItem[] = [
  { label: 'Landscaping', icon: TreePine },
  { label: 'Tree Services', icon: TreeDeciduous },
  { label: 'Roofing', icon: Home },
  { label: 'Construction', icon: HardHat },
  { label: 'HVAC', icon: Fan },
  { label: 'Healthcare', icon: HeartPulse },
  { label: 'Law Firms', icon: Scale },
  { label: 'Dental', icon: Smile },
  { label: 'Restaurants', icon: UtensilsCrossed },
  { label: 'Real Estate', icon: Building2 },
  { label: 'Agencies', icon: Megaphone },
  { label: 'E-commerce', icon: ShoppingCart },
  { label: 'Local Businesses', icon: MapPin },
  { label: 'Professional Services', icon: Briefcase },
];

const whyChooseReasons: Reason[] = [
  { icon: <BarChart3 className="h-6 w-6" />, title: 'Data Driven', description: 'Every campaign decision is backed by real performance data, not guesswork.' },
  { icon: <Workflow className="h-6 w-6" />, title: 'Automation First', description: 'Lead routing, follow-ups and nurturing run automatically from the moment a lead comes in.' },
  { icon: <TrendingUp className="h-6 w-6" />, title: 'ROI Focused', description: 'Every dollar of spend is tied back to a measurable outcome, not just impressions.' },
  { icon: <ClipboardCheck className="h-6 w-6" />, title: 'Transparent Reporting', description: 'Clear, honest reporting on what’s working and what’s not — no vanity metrics.' },
  { icon: <Users className="h-6 w-6" />, title: 'Real Human Support', description: 'A real strategist you can reach — not a ticket queue or an automated chatbot.' },
  { icon: <Layers className="h-6 w-6" />, title: 'Scalable Campaigns', description: 'Systems built to grow with you, from a single channel to a full-funnel operation.' },
  { icon: <RefreshCw className="h-6 w-6" />, title: 'Continuous Optimization', description: 'Campaigns are never "set and forget" — we’re constantly testing and improving.' },
];

const processSteps: TimelineStep[] = [
  { title: 'Discovery', description: 'Understanding your business, offer, sales process and growth goals.' },
  { title: 'Strategy', description: 'Defining the channels, audiences and funnel structure to hit your targets.' },
  { title: 'Campaign Setup', description: 'Building out campaigns, creatives and tracking across every platform used.' },
  { title: 'Landing Page', description: 'Purpose-built pages designed to convert traffic into leads, not just visits.' },
  { title: 'Automation', description: 'Connecting CRM, notifications and follow-up sequences so no lead sits idle.' },
  { title: 'Lead Qualification', description: 'Filtering and scoring leads so your team spends time on the right conversations.' },
  { title: 'Appointment Booking', description: 'Automated scheduling that turns qualified leads into booked calls.' },
  { title: 'Optimization', description: 'Ongoing testing of creative, targeting and landing pages to lower cost per lead.' },
  { title: 'Scale', description: 'Expanding what’s working into new channels, audiences and budget levels.' },
];

const LeadGeneration = () => {
  const service = services.find((s) => s.slug === 'lead-generation-paid-advertising')!;

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
        <LeadGenHero />

        <LeadGenEcosystem />

        <LeadGenServices />

        <PlatformsGrid
          platforms={PLATFORMS}
          eyebrow="TECH STACK"
          title="Platforms We Use"
          description="A connected stack of advertising, automation and reporting tools — chosen for what they deliver, not what's trendy."
        />

        <IndustryIconGrid items={INDUSTRIES} eyebrow="INDUSTRIES WE HELP" title="Built for Businesses Like Yours" />

        <StatsSection stats={service.stats} />

        <ProcessTimeline
          process={processSteps}
          eyebrow="OUR PROCESS"
          title="The Lead Generation Process"
          description="A structured, nine-stage process from first strategy call to scaled campaigns."
        />

        <PricingTiers tiers={leadGenTiers} eyebrow="PRICING" title="Plans Built Around Your Growth" />

        <WhyChooseUs
          reasons={whyChooseReasons}
          eyebrow="WHY CALIBRE ASSOCIATES"
          title="Why Choose Calibre Associates"
          description="A lead generation partner built around ROI, automation and real accountability."
        />

        <FinalCTA
          headline="Ready for a Predictable Pipeline of Qualified Leads?"
          description="Book a free consultation and we'll show you exactly how we'd structure your campaigns for ROI."
          primaryLabel="Book Free Consultation"
          secondaryLabel="Generate More Leads"
          secondaryHref="#services"
          secondaryIcon={<PlayCircle className="mr-2 h-4 w-4" />}
        />
      </main>

      <Footer />
    </motion.div>
  );
};

export default LeadGeneration;

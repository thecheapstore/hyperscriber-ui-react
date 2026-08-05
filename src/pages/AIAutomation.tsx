import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import {
  TreePine, HardHat, Home, HeartPulse, Scale, Megaphone, UtensilsCrossed,
  Building2, Wrench, MapPin, Briefcase, Users2, CalendarClock,
} from 'lucide-react';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { services } from '@/components/services/data/services';
import { pageTransition } from '@/lib/motion';

import StatsSection from '@/components/services/sections/StatsSection';
import FinalCTA from '@/components/services/sections/FinalCTA';
import PricingTiers from '@/components/services/shared/PricingTiers';
import PlatformsGrid from '@/components/services/shared/PlatformsGrid';
import IndustryIconGrid, { type IndustryItem } from '@/components/services/shared/IndustryIconGrid';

import AIAutomationHero from '@/components/services/ai-automation/AIAutomationHero';
import CorePhilosophy from '@/components/services/ai-automation/CorePhilosophy';
import AutomationSolutions from '@/components/services/ai-automation/AutomationSolutions';
import WhyHighLevelN8n from '@/components/services/ai-automation/WhyHighLevelN8n';
import { aiAutomationTiers } from '@/components/services/ai-automation/data/aiAutomationPricing';

const SITE_URL = 'https://www.calibreassociates.com';
const OG_IMAGE = 'https://i.ibb.co/ksMhQrst/94e69e74-31c6-4907-b7da-719956c4355f.png';

const PLATFORMS = [
  'HighLevel (GoHighLevel)', 'n8n', 'Make', 'Zapier', 'OpenAI', 'Claude', 'Gemini',
  'Google Workspace', 'Stripe', 'Twilio', 'Mailgun', 'WhatsApp', 'Calendly',
  'Google Calendar', 'Google Sheets', 'Slack', 'Webhooks', 'APIs', 'WordPress',
];

const INDUSTRIES: IndustryItem[] = [
  { label: 'Landscaping', icon: TreePine },
  { label: 'Construction', icon: HardHat },
  { label: 'Roofing', icon: Home },
  { label: 'Medical', icon: HeartPulse },
  { label: 'Legal', icon: Scale },
  { label: 'Agencies', icon: Megaphone },
  { label: 'Restaurants', icon: UtensilsCrossed },
  { label: 'Real Estate', icon: Building2 },
  { label: 'Home Services', icon: Wrench },
  { label: 'Local Businesses', icon: MapPin },
  { label: 'Professional Services', icon: Briefcase },
  { label: 'Enterprise Teams', icon: Users2 },
];

const AIAutomation = () => {
  const service = services.find((s) => s.slug === 'ai-automation-solutions')!;

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
        <AIAutomationHero />

        <CorePhilosophy />

        <PlatformsGrid
          platforms={PLATFORMS}
          eyebrow="TECH STACK"
          title="Platforms We Build With"
          description="Enterprise-grade tools, connected together into one automated system."
        />

        <AutomationSolutions />

        <WhyHighLevelN8n />

        <IndustryIconGrid items={INDUSTRIES} eyebrow="INDUSTRIES" title="Built for Every Kind of Business" />

        <StatsSection stats={service.stats} />

        <PricingTiers tiers={aiAutomationTiers} eyebrow="PRICING" title="Plans Built Around Your Operations" />

        <FinalCTA
          headline="Ready to Automate Your Business?"
          description="Every business runs differently, so every automation workflow is designed specifically around its processes, goals and growth strategy."
          primaryLabel="Book Free Consultation"
          secondaryLabel="Schedule Automation Audit"
          secondaryHref="/contact"
          secondaryIcon={<CalendarClock className="mr-2 h-4 w-4" />}
        />
      </main>

      <Footer />
    </motion.div>
  );
};

export default AIAutomation;

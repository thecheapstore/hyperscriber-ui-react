import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
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
import FAQSection, { type FAQItem } from '@/components/services/sections/FAQSection';
import { buildFaqSchema } from '@/lib/faqSchema';

const SITE_URL = 'https://www.calibreassociates.com';
const OG_IMAGE = 'https://i.ibb.co/ksMhQrst/94e69e74-31c6-4907-b7da-719956c4355f.png';

const PLATFORMS = [
  'HighLevel (GoHighLevel)', 'n8n', 'Make', 'Zapier', 'OpenAI', 'Claude', 'Gemini',
  'Google Workspace', 'Stripe', 'Twilio', 'Mailgun', 'WhatsApp', 'Calendly',
  'Google Calendar', 'Google Sheets', 'Slack', 'Webhooks', 'APIs', 'WordPress',
];

const AI_AUTOMATION_FAQS: FAQItem[] = [
  {
    question: 'How can small businesses in India use AI automation to reduce operational costs?',
    answer:
      "Small businesses cut costs fastest by automating the repetitive tasks that eat up staff time, lead follow up, appointment booking, invoicing, and customer support. We connect your CRM, phones, calendars, and messaging into one automated workflow built on HighLevel and n8n, so tasks that used to require a dedicated team member happen instantly and consistently, without adding headcount.",
  },
  {
    question: 'How can CRM workflow automation help Indian businesses improve their sales process?',
    answer:
      'CRM workflow automation removes the manual work between a lead coming in and a sale closing. Instead of a team member manually routing leads, sending follow ups, and updating pipeline stages by hand, an automated workflow qualifies leads with AI, assigns them instantly, sends timely follow up messages, and keeps your pipeline updated in real time, so no lead is missed and your team spends its time closing deals instead of managing spreadsheets.',
  },
  {
    question: 'What is the difference between HighLevel alone and a custom automation workflow?',
    answer:
      'HighLevel on its own is a strong CRM and marketing platform, it handles pipelines, calendars, forms, and basic automations. We extend it with custom n8n workflows that connect it to AI models, your existing tools, and your specific business logic, turning a general CRM into a fully automated system built around exactly how your business operates.',
  },
  {
    question: 'Can AI automation replace my customer service or sales team?',
    answer:
      'No, and that is not the goal. Our automation handles the repetitive parts of the process, answering common questions, qualifying leads, booking appointments, and sending reminders, so your team can focus on the conversations and decisions that actually need a person. Automation removes the busywork, it does not replace the people who build relationships with your customers.',
  },
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
    areaServed: ['US', 'IN'],
  };

  const faqSchema = buildFaqSchema(AI_AUTOMATION_FAQS);

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

        <FAQSection
          faqs={AI_AUTOMATION_FAQS}
          eyebrow="AI AUTOMATION FAQS"
          title="Your AI Automation Questions, Answered"
          description="Common questions business owners ask about automating operations with AI."
        />

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

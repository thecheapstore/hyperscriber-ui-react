import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  BarChart3, Workflow, TrendingUp, ClipboardCheck, Users, Layers, RefreshCw,
  TreePine, TreeDeciduous, Home, HardHat, Fan, HeartPulse, Scale, Smile,
  UtensilsCrossed, Building2, Megaphone, ShoppingCart, MapPin, Briefcase,
  PlayCircle,
} from 'lucide-react';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Seo from '@/components/seo/Seo';
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
import FAQSection, { type FAQItem } from '@/components/services/sections/FAQSection';
import ServiceAnswerBlock from '@/components/services/sections/ServiceAnswerBlock';
import ServiceContentSection, { ExternalInlineLink, InlineLink } from '@/components/services/sections/ServiceContentSection';
import ServiceResourceLinks from '@/components/services/sections/ServiceResourceLinks';
import { buildServiceJsonLd, getServiceSeo } from '@/components/services/lib/serviceSchema';

const PLATFORMS = [
  'Google Ads', 'Meta Ads', 'Google Analytics', 'Google Tag Manager', 'Google Search Console',
  'HighLevel', 'n8n', 'Make', 'Zapier', 'Stripe', 'Nextdoor', 'Yelp', 'Google Business Profile',
  'Looker Studio', 'Calendly', 'Mailgun', 'Twilio', 'OpenAI', 'Claude', 'Gemini', 'Perplexity', 'Microsoft Clarity',
];

const LEAD_GEN_FAQS: FAQItem[] = [
  {
    question: 'What are the most effective SaaS lead generation strategies for the Indian market?',
    answer:
      'The strategies that convert best combine paid search and social advertising with a fast, automated follow up system, Google Ads and Meta Ads bring in demand, landing pages and forms capture it, and CRM automation makes sure every lead gets a response within minutes instead of hours. For the Indian market specifically, adding WhatsApp follow up and local service ads alongside traditional channels significantly increases response rates, since WhatsApp is where most Indian leads actually reply.',
  },
  {
    question: 'What is the difference between Google Ads and Meta Ads for lead generation?',
    answer:
      'Google Ads captures people who are already searching for a solution, which tends to produce higher intent leads at a higher cost per click. Meta Ads reaches people based on interests and behavior before they start searching, which is better for building awareness and filling the top of your funnel at a lower cost. Most businesses get the best results running both together, Google to capture demand and Meta to create it.',
  },
  {
    question: 'How do marketing agencies measure return on investment for lead generation campaigns?',
    answer:
      'We track cost per lead, cost per booked appointment, and cost per closed customer, not just clicks or impressions. Every campaign is connected to your CRM, so we can see exactly which channels and ads are producing leads that actually turn into paying customers, and shift budget toward what is working.',
  },
  {
    question: 'How long does it take to see results from paid advertising and lead generation campaigns?',
    answer:
      'Paid campaigns typically start generating leads within the first one to two weeks of launch, though the first month is mainly about gathering data, testing audiences, and identifying what converts. Meaningful optimization and a lower, more stable cost per lead usually show up by month two or three, once we have enough data to refine targeting and creative.',
  },
  {
    question: 'What is lead generation for a small business?',
    answer:
      'Lead generation is the process of attracting people who are interested in what you sell and capturing their details so you can follow up. For a local service business that usually means Google Ads, Meta Ads and Local Service Ads feeding a landing page, a form or a phone call, with a CRM making sure every enquiry gets a fast reply.',
  },
  {
    question: 'How much should I spend on Google Ads and Meta Ads?',
    answer:
      'There is no single right number. Budget depends on your market, your average job value and how many leads your team can handle. We start by working out what a lead and a booked job are worth to you, recommend a starting budget, and scale only what proves profitable.',
  },
  {
    question: 'What are Google Local Services Ads?',
    answer:
      'Local Services Ads show your business at the top of Google results with a Google Guaranteed badge for eligible service categories, and you pay per lead instead of per click. We set up and manage them alongside Google Ads, then track which leads turn into booked jobs.',
  },
  {
    question: 'Do you build landing pages for ad campaigns?',
    answer:
      'Yes. Landing pages are part of our lead generation work, because a good ad sent to a weak page wastes spend. We build purpose built pages with a single call to action, fast load times and tracking, then test headlines and layouts against each other.',
  },
  {
    question: 'Can you generate leads for tree service and landscaping companies?',
    answer:
      'Yes. Tree service, landscaping and lawn care are the industries we know best, and we pair paid campaigns with local SEO so you are visible both in ads and in the map pack. Seasonal demand and emergency searches shape the budget and the ad copy for these industries.',
  },
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
  { label: 'Ecommerce', icon: ShoppingCart },
  { label: 'Local Businesses', icon: MapPin },
  { label: 'Professional Services', icon: Briefcase },
];

const whyChooseReasons: Reason[] = [
  { icon: <BarChart3 className="h-6 w-6" />, title: 'Data Driven', description: 'Every campaign decision is backed by real performance data, not guesswork.' },
  { icon: <Workflow className="h-6 w-6" />, title: 'Automation First', description: 'Lead routing, follow ups and nurturing run automatically from the moment a lead comes in.' },
  { icon: <TrendingUp className="h-6 w-6" />, title: 'ROI Focused', description: 'Every dollar of spend is tied back to a measurable outcome, not just impressions.' },
  { icon: <ClipboardCheck className="h-6 w-6" />, title: 'Transparent Reporting', description: 'Clear, honest reporting on what’s working and what’s not, no vanity metrics.' },
  { icon: <Users className="h-6 w-6" />, title: 'Real Human Support', description: 'A real strategist you can reach, not a ticket queue or an automated chatbot.' },
  { icon: <Layers className="h-6 w-6" />, title: 'Scalable Campaigns', description: 'Systems built to grow with you, from a single channel to a full funnel operation.' },
  { icon: <RefreshCw className="h-6 w-6" />, title: 'Continuous Optimization', description: 'Campaigns are never "set and forget", we’re constantly testing and improving.' },
];

const processSteps: TimelineStep[] = [
  { title: 'Discovery', description: 'Understanding your business, offer, sales process and growth goals.' },
  { title: 'Strategy', description: 'Defining the channels, audiences and funnel structure to hit your targets.' },
  { title: 'Campaign Setup', description: 'Building out campaigns, creatives and tracking across every platform used.' },
  { title: 'Landing Page', description: 'Purpose built pages designed to convert traffic into leads, not just visits.' },
  { title: 'Automation', description: 'Connecting CRM, notifications and follow up sequences so no lead sits idle.' },
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

  return (
    <motion.div {...pageTransition} className="min-h-screen">
      <Seo {...getServiceSeo(service)} jsonLd={buildServiceJsonLd(service, LEAD_GEN_FAQS)} />

      <Navbar />

      <main className="mt-16">
        <LeadGenHero />

        <ServiceAnswerBlock heading={service.answerHeading!} answer={service.answer!} />

        <ServiceContentSection
          eyebrow="WHAT WE RUN"
          title="Google Ads, Meta Ads and Local Service Ads Management"
          intro="Each channel plays a different role in the funnel. We run them together and track what turns into booked work."
          cards={[
            {
              heading: 'Google Ads management',
              body: (
                <>
                  Search, Performance Max and local campaigns that capture people who are already looking for your service.
                  Google documents how the platform works in{' '}
                  <ExternalInlineLink href="https://support.google.com/google-ads">Google Ads Help</ExternalInlineLink>.
                </>
              ),
            },
            {
              heading: 'Meta Ads management',
              body: (
                <>
                  Facebook and Instagram campaigns with lead forms and retargeting that reach people before they search. See the{' '}
                  <ExternalInlineLink href="https://www.facebook.com/business/help">Meta Business Help Center</ExternalInlineLink> for
                  official platform guidance.
                </>
              ),
            },
            {
              heading: 'Local Service Ads for home service businesses',
              body: (
                <>
                  Pay per lead at the top of Google results for eligible service categories. Learn how the program works on{' '}
                  <ExternalInlineLink href="https://ads.google.com/local-services-ads/">Google Local Services Ads</ExternalInlineLink>.
                </>
              ),
            },
          ]}
        />

        <LeadGenEcosystem />

        <LeadGenServices />

        <PlatformsGrid
          platforms={PLATFORMS}
          eyebrow="TECH STACK"
          title="Platforms We Use"
          description="A connected stack of advertising, automation and reporting tools, chosen for what they deliver, not what's trendy."
        />

        <IndustryIconGrid items={INDUSTRIES} eyebrow="INDUSTRIES WE HELP" title="Built for Businesses Like Yours" />

        <StatsSection stats={service.stats} />

        <ProcessTimeline
          process={processSteps}
          eyebrow="OUR PROCESS"
          title="The Lead Generation Process"
          description="A structured, nine stage process from first strategy call to scaled campaigns."
        />

        <PricingTiers tiers={leadGenTiers} eyebrow="PRICING" title="Plans Built Around Your Growth" />

        <ServiceContentSection
          tone="canvas"
          eyebrow="OUR NICHE"
          title="Lead Generation for Tree Service and Landscaping Companies"
          intro="Local service businesses are where our campaigns and our case studies are strongest."
          cards={[
            {
              heading: 'Paid ads and local SEO working together',
              body: (
                <>
                  Ads bring leads this week and local SEO builds leads for next year. Read our{' '}
                  <InlineLink to="/services/seo">SEO services and local SEO</InlineLink> page and the{' '}
                  <InlineLink to="/industries/tree-service-marketing">tree service marketing guide</InlineLink>.
                </>
              ),
            },
            {
              heading: 'Managed by performance specialists',
              body: (
                <>
                  <InlineLink to="/our-team/tej-pratap">Tej Pratap</InlineLink>, our Performance Manager, manages Meta Ads and
                  Google Ads, conversion tracking and reporting.{' '}
                  <InlineLink to="/our-team/abhijeet-jain">Abhijeet Jain</InlineLink>, Founder and CEO, designs the CRM and lead
                  systems behind them.
                </>
              ),
            },
            {
              heading: 'Landing pages and CRM follow up',
              body: (
                <>
                  Every campaign lands on a page built to convert, from our{' '}
                  <InlineLink to="/services/website-development">website development company</InlineLink> team, and every lead
                  is followed up through{' '}
                  <InlineLink to="/services/ai-automation-solutions">AI automation for small businesses</InlineLink>.
                </>
              ),
            },
          ]}
        />

        <ServiceResourceLinks
          service={service}
          intro="See the local service businesses we support and the services that make paid campaigns perform."
          caseStudies={[
            { label: '716 Lawn Care website and local search growth', to: '/services/seo/projects/716-lawn-care', description: 'Seasonal demand captured through local search.' },
            { label: 'Arborix Tree Services website', to: '/services/website-development/projects/arborix-tree-services', description: 'A tree service site built to convert local traffic.' },
            { label: 'All Calibre Associates projects', to: '/portfolio', description: 'Browse every website, SEO and brand project.' },
          ]}
          moreLinks={[
            { label: 'Tree service marketing', to: '/industries/tree-service-marketing' },
            { label: 'Landscaping and lawn care marketing', to: '/industries/landscaping-and-lawn-care-marketing' },
            { label: 'Meet Tej Pratap, Performance Manager', to: '/our-team/tej-pratap' },
            { label: 'Book a lead generation consultation', to: '/contact' },
          ]}
          external={[
            { label: 'Google Ads Help', href: 'https://support.google.com/google-ads', description: 'Official guidance on campaigns, bidding and reporting.' },
            { label: 'Meta Business Help Center', href: 'https://www.facebook.com/business/help', description: 'Official guidance on Facebook and Instagram ads.' },
            { label: 'Google Local Services Ads', href: 'https://ads.google.com/local-services-ads/', description: 'How Google Guaranteed lead ads work.' },
          ]}
        />

        <FAQSection
          faqs={LEAD_GEN_FAQS}
          eyebrow="LEAD GENERATION FAQS"
          title="Your Lead Generation Questions, Answered"
          description="Common questions business owners ask about paid advertising and lead generation."
        />

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

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  TreePine, HardHat, Home, HeartPulse, Scale, Megaphone, UtensilsCrossed,
  Building2, Wrench, MapPin, Briefcase, Users2, CalendarClock,
} from 'lucide-react';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Seo from '@/components/seo/Seo';
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
import ServiceAnswerBlock from '@/components/services/sections/ServiceAnswerBlock';
import ServiceContentSection, { ExternalInlineLink, InlineLink } from '@/components/services/sections/ServiceContentSection';
import ServiceResourceLinks from '@/components/services/sections/ServiceResourceLinks';
import { buildServiceJsonLd, getServiceSeo } from '@/components/services/lib/serviceSchema';

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
  {
    question: 'What is an AI receptionist?',
    answer:
      'An AI receptionist answers calls and messages for your business around the clock, handles common questions, qualifies the caller and books appointments straight into your calendar. Anything complex is routed to a person. We build it on top of your CRM, so every conversation is logged against the right contact.',
  },
  {
    question: 'What is n8n and why use it with HighLevel?',
    answer:
      'n8n is a workflow automation platform that connects apps and AI models through visual workflows. HighLevel runs your CRM, calendars and messaging, and n8n adds custom logic, integrations and AI steps that HighLevel does not do on its own. Together they give you a system built around how your business actually runs.',
  },
  {
    question: 'How long does it take to build an AI automation workflow?',
    answer:
      'It depends on how many processes you want to automate and how many tools they touch. A single lead follow up workflow is quick to scope and build, while a full CRM, calendar and AI receptionist setup takes longer. We map your process first, then give you a clear timeline before any build starts.',
  },
  {
    question: 'Which tools can you integrate with?',
    answer:
      'We connect HighLevel, n8n, Make, Zapier, OpenAI, Claude, Gemini, Google Workspace, Stripe, Twilio, Mailgun, WhatsApp, Calendly and WordPress, plus any tool that offers an API or webhook. If a tool you rely on is not listed, ask us on the discovery call.',
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

  return (
    <motion.div {...pageTransition} className="min-h-screen">
      <Seo {...getServiceSeo(service)} jsonLd={buildServiceJsonLd(service, AI_AUTOMATION_FAQS)} />

      <Navbar />

      <main className="mt-16">
        <AIAutomationHero />

        <ServiceAnswerBlock heading={service.answerHeading!} answer={service.answer!} />

        <ServiceContentSection
          eyebrow="WHAT WE AUTOMATE"
          title="AI Receptionist, CRM Workflow Automation and Appointment Booking"
          intro="We design automation around your real process, then build it on tools you can keep using."
          cards={[
            {
              heading: 'CRM workflow automation with HighLevel',
              body: (
                <>
                  Lead routing, pipelines, follow ups and reporting built on{' '}
                  <ExternalInlineLink href="https://www.gohighlevel.com/">HighLevel</ExternalInlineLink>.{' '}
                  <InlineLink to="/our-team/abhijeet-jain">Abhijeet Jain</InlineLink>, our Founder and CEO, has hands on experience
                  managing HighLevel CRM workflows and building AI automation systems for client businesses.
                </>
              ),
            },
            {
              heading: 'AI receptionist and AI chatbots',
              body: (
                <>
                  Answer calls and chats around the clock, qualify leads and book appointments without adding headcount. Pair
                  them with{' '}
                  <InlineLink to="/services/lead-generation-paid-advertising">lead generation and paid advertising</InlineLink> so
                  every new lead is answered in minutes.
                </>
              ),
            },
            {
              heading: 'n8n workflows and custom integrations',
              body: (
                <>
                  Connect your tools and AI models through{' '}
                  <ExternalInlineLink href="https://n8n.io/">n8n</ExternalInlineLink> workflows. When you need more than
                  automation, our{' '}
                  <InlineLink to="/services/application-software-development">custom software and web app development</InlineLink> team
                  builds the missing piece.
                </>
              ),
            },
          ]}
        />

        <CorePhilosophy />

        <PlatformsGrid
          platforms={PLATFORMS}
          eyebrow="TECH STACK"
          title="Platforms We Build With"
          description="Enterprise grade tools, connected together into one automated system."
        />

        <AutomationSolutions />

        <WhyHighLevelN8n />

        <IndustryIconGrid items={INDUSTRIES} eyebrow="INDUSTRIES" title="Built for Every Kind of Business" />

        <StatsSection stats={service.stats} />

        <PricingTiers tiers={aiAutomationTiers} eyebrow="PRICING" title="Plans Built Around Your Operations" />

        <ServiceContentSection
          tone="canvas"
          eyebrow="FOR LOCAL BUSINESSES"
          title="GoHighLevel Automation for Local Service Businesses"
          intro="Home service companies lose jobs when a call goes unanswered or a lead waits a day for a reply. Automation closes that gap."
          cards={[
            {
              heading: 'Instant lead follow up and missed call text back',
              body: (
                <>
                  Every enquiry gets an immediate reply by text or email, and missed calls get a text back. It works hand in
                  hand with the campaigns from our{' '}
                  <InlineLink to="/services/lead-generation-paid-advertising">lead generation agency</InlineLink> team.
                </>
              ),
            },
            {
              heading: 'Appointment booking, reminders and review requests',
              body: (
                <>
                  Calendars sync, reminders reduce no shows and happy customers are asked for a Google review. See how this
                  fits the wider plan in our{' '}
                  <InlineLink to="/industries/landscaping-and-lawn-care-marketing">landscaping and lawn care marketing guide</InlineLink>.
                </>
              ),
            },
            {
              heading: 'A website that feeds the system',
              body: (
                <>
                  Forms, chat and booking widgets on your site feed straight into the CRM. Our{' '}
                  <InlineLink to="/services/website-development">website development company</InlineLink> builds sites ready for
                  that handoff.
                </>
              ),
            },
          ]}
        />

        <ServiceResourceLinks
          service={service}
          intro="Explore the services that connect to automation, and the official sites for the tools we build with."
          caseStudies={[
            { label: 'All Calibre Associates projects', to: '/portfolio', description: 'Browse every website, SEO and brand project.' },
          ]}
          moreLinks={[
            { label: 'Meet Abhijeet Jain, Founder and CEO', to: '/our-team/abhijeet-jain' },
            { label: 'Tree service marketing', to: '/industries/tree-service-marketing' },
            { label: 'Book an automation consultation', to: '/contact' },
          ]}
          external={[
            { label: 'HighLevel', href: 'https://www.gohighlevel.com/', description: 'The CRM and marketing platform we build on.' },
            { label: 'n8n', href: 'https://n8n.io/', description: 'The workflow automation platform we pair with it.' },
            { label: 'n8n documentation', href: 'https://docs.n8n.io/', description: 'How n8n workflows, nodes and integrations work.' },
          ]}
        />

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

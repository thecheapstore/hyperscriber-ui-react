import React, { useEffect } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Seo from '@/components/seo/Seo';
import { services } from '@/components/services/data/services';
import { defaultFaqs } from '@/components/services/data/faqs';
import { pageTransition } from '@/lib/motion';
import { buildServiceJsonLd, getServiceSeo } from '@/components/services/lib/serviceSchema';

import ServiceHero from '@/components/services/sections/ServiceHero';
import ServiceAnswerBlock from '@/components/services/sections/ServiceAnswerBlock';
import ServiceContentSection, { ExternalInlineLink, InlineLink } from '@/components/services/sections/ServiceContentSection';
import ServiceResourceLinks from '@/components/services/sections/ServiceResourceLinks';
import WhyChooseUs from '@/components/services/sections/WhyChooseUs';
import ProcessTimeline from '@/components/services/sections/ProcessTimeline';
import PortfolioShowcase from '@/components/services/sections/PortfolioShowcase';
import StatsSection from '@/components/services/sections/StatsSection';
import IndustryGrid from '@/components/services/sections/IndustryGrid';
import FAQAccordion from '@/components/services/sections/FAQAccordion';
import FinalCTA from '@/components/services/sections/FinalCTA';

/** Extra keyword and internal link sections for the application and software development page. */
const AppDevSections = ({ service }: { service: (typeof services)[number] }) => (
  <>
    <ServiceContentSection
      eyebrow="WHAT WE BUILD"
      title="Web App, SaaS and Business Software Development"
      intro="From a first working version to a platform that handles real users and real data."
      cards={[
        {
          heading: 'Custom web app development',
          body: (
            <>
              Browser based applications with accounts, permissions, dashboards and reporting, built full stack. We work with
              modern tooling such as <ExternalInlineLink href="https://react.dev/">React</ExternalInlineLink> and plan the data
              model before the first screen is designed.
            </>
          ),
        },
        {
          heading: 'SaaS platform development',
          body: (
            <>
              Subscription products with sign up, billing, user roles and admin tools. We start with the smallest version that
              proves the idea, then build on a foundation that can scale.
            </>
          ),
        },
        {
          heading: 'Internal tools, dashboards and integrations',
          body: (
            <>
              Replace spreadsheets and manual handoffs with software shaped around your workflow, connected to your CRM and
              other tools. Pair it with{' '}
              <InlineLink to="/services/ai-automation-solutions">AI automation for small businesses</InlineLink> when workflows
              need to run on their own.
            </>
          ),
        },
      ]}
    />

    <ServiceContentSection
      tone="canvas"
      eyebrow="HOW WE WORK"
      title="One Team From Planning to Deployment"
      intro="You get a single partner for design, development, deployment and support."
      cards={[
        {
          heading: 'Full stack engineering',
          body: (
            <>
              Builds are led by <InlineLink to="/our-team/abhijeet-jain">Abhijeet Jain</InlineLink>, our Founder and CEO, whose
              work spans full stack development, automation architecture and DevOps based deployment reliability.
            </>
          ),
        },
        {
          heading: 'Security and performance from the first sprint',
          body: (
            <>
              We use the <ExternalInlineLink href="https://owasp.org/www-project-top-ten/">OWASP Top 10</ExternalInlineLink> as a
              checklist for common web application risks and measure speed throughout the build, not only at the end.
            </>
          ),
        },
        {
          heading: 'Websites and applications together',
          body: (
            <>
              Need a marketing site in front of your app? Our{' '}
              <InlineLink to="/services/website-development">website development company</InlineLink> team builds both, and our{' '}
              <InlineLink to="/services/seo">SEO services and local SEO</InlineLink> help people find them.
            </>
          ),
        },
      ]}
    />

  </>
);

const AppDevResources = ({ service }: { service: (typeof services)[number] }) => (
  <>
    <ServiceResourceLinks
      service={service}
      intro="Explore related services, see how we build, and get in touch about your project."
      caseStudies={[
        {
          label: 'Manasvi Pathak personal brand website',
          to: '/services/website-development/projects/manasvi-pathak',
          description: 'A React.js website built end to end by our team.',
        },
        { label: 'All Calibre Associates projects', to: '/portfolio', description: 'Browse every website, SEO and brand project.' },
      ]}
      moreLinks={[
        { label: 'Meet Abhijeet Jain, Founder and CEO', to: '/our-team/abhijeet-jain' },
        { label: 'Discuss a software project', to: '/contact' },
      ]}
      external={[
        { label: 'React documentation', href: 'https://react.dev/', description: 'The official guide to the library we build interfaces with.' },
        { label: 'OWASP Top 10', href: 'https://owasp.org/www-project-top-ten/', description: 'A widely used list of web application security risks.' },
      ]}
    />
  </>
);

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = services.find((s) => s.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const faqs = service.faqs ?? defaultFaqs;
  const isAppDev = service.slug === 'application-software-development';

  return (
    <motion.div {...pageTransition} className="min-h-screen">
      <Seo {...getServiceSeo(service)} jsonLd={buildServiceJsonLd(service, faqs)} />

      <Navbar />

      <main className="mt-16">
        <ServiceHero service={service} />
        {service.answerHeading && service.answer && (
          <ServiceAnswerBlock heading={service.answerHeading} answer={service.answer} />
        )}
        <WhyChooseUs reasons={service.whyChooseReasons} />
        {isAppDev && <AppDevSections service={service} />}
        <ProcessTimeline process={service.process} />
        {service.portfolioCategories.length > 0 && (
          <PortfolioShowcase categories={service.portfolioCategories} serviceTitle={service.title} />
        )}
        <StatsSection stats={service.stats} />
        <IndustryGrid />
        {isAppDev && <AppDevResources service={service} />}
        <FAQAccordion faqs={faqs} />
        <FinalCTA
          headline={service.finalCtaHeadline ?? `Ready to Start Your ${service.title} Project?`}
          description={service.finalCtaDescription}
        />
      </main>

      <Footer />
    </motion.div>
  );
};

export default ServiceDetail;

import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Clock, Search, Smartphone, Target, Zap, ShieldCheck, TrendingUp, Code2 } from 'lucide-react';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { services } from '@/components/services/data/services';
import { pageTransition } from '@/lib/motion';

import ServiceHero from '@/components/services/sections/ServiceHero';
import WhyChooseUs, { type Reason } from '@/components/services/sections/WhyChooseUs';
import ProcessTimeline, { type TimelineStep } from '@/components/services/sections/ProcessTimeline';
import FinalCTA from '@/components/services/sections/FinalCTA';
import WebsiteTypesGrid from '@/components/services/website-development/WebsiteTypesGrid';
import PortfolioStatsSection from '@/components/portfolio/PortfolioStatsSection';
import FeaturedProjects from '@/components/portfolio/FeaturedProjects';
import PortfolioBrowser from '@/components/portfolio/PortfolioBrowser';
import { getProjectsForService } from '@/data/portfolio';
import FAQSection, { type FAQItem } from '@/components/services/sections/FAQSection';
import { buildFaqSchema } from '@/lib/faqSchema';

const SITE_URL = 'https://calibreassociates.com';
const OG_IMAGE = 'https://calibreassociates.com/favicons/android-chrome-512x512.png';

const whyChooseReasons: Reason[] = [
  { icon: <Clock className="h-6 w-6" />, title: 'Fast Turnaround', description: 'Structured workflows that keep your build moving without cutting corners.' },
  { icon: <Search className="h-6 w-6" />, title: 'SEO-Ready Development', description: 'Clean markup and performance foundations built for search from day one.' },
  { icon: <Smartphone className="h-6 w-6" />, title: 'Mobile First', description: 'Every layout is designed and tested for mobile before anything else.' },
  { icon: <Target className="h-6 w-6" />, title: 'Conversion Focused', description: 'Every page is structured around a clear action, not just good looks.' },
  { icon: <Zap className="h-6 w-6" />, title: 'Lightning Fast', description: 'Optimized builds that load fast and keep visitors on the page.' },
  { icon: <ShieldCheck className="h-6 w-6" />, title: 'Secure', description: 'Modern security practices baked into every build we ship.' },
  { icon: <TrendingUp className="h-6 w-6" />, title: 'Scalable', description: 'Architecture that grows with your traffic, content, and team.' },
  { icon: <Code2 className="h-6 w-6" />, title: 'Clean Code', description: 'Maintainable, well-documented code that\'s easy to extend later.' },
];

const WEBSITE_DEV_FAQS: FAQItem[] = [
  {
    question: 'What are the most important steps to improve website loading speed for Indian users?',
    answer:
      'Start with image compression and modern formats like WebP, since oversized images are the most common cause of slow load times. Pair that with a content delivery network so pages load quickly across different regions of India, clean up unused code and scripts, and choose reliable hosting built for your traffic level. We build performance into every site from the first line of code rather than trying to fix it after launch, since speed affects both user experience and search rankings.',
  },
  {
    question: 'How do I choose a website development company in India?',
    answer:
      'Look at their past work first, not just the portfolio highlights, but how those sites actually perform today. Ask about their process for discovery, design, and testing, a company that skips straight to development without understanding your business usually produces a generic result. Confirm they build for mobile first, optimize for speed and SEO from day one, and offer support after launch, since a website is not finished the moment it goes live.',
  },
  {
    question: 'What is the difference between custom website development and template based solutions?',
    answer:
      "Template based solutions get you online faster and cost less upfront, but they come with design limitations, shared code that can slow performance, and less flexibility as your business grows. Custom development takes longer and costs more initially, but gives you a site built specifically around your brand, your users, and your goals, with the performance and scalability to support growth instead of working around a template's constraints.",
  },
  {
    question: 'How do I choose a WordPress development company for a small business website?',
    answer:
      'Check whether they build custom themes and functionality or rely entirely on page builders and pre made templates, since heavily templated WordPress sites tend to load slower and are harder to customize later. Ask how they handle security, updates, and backups after launch, WordPress sites need ongoing maintenance to stay secure. And look at real examples of WordPress sites they have built, not just generic template demos.',
  },
  {
    question: 'What is the average cost to build a custom e-commerce website?',
    answer:
      'Cost depends heavily on scope, a straightforward store with a standard catalog and checkout costs significantly less than a custom e-commerce platform with unique features, integrations, and complex inventory management. Rather than quoting a single number that will not fit most businesses, we start with a discovery call to understand your catalog size, the features you need, and your growth plans, then provide a scope specific quote.',
  },
];

const developmentProcess: TimelineStep[] = [
  { title: 'Discovery', description: 'We learn your business, goals, and audience to define what success looks like.' },
  { title: 'Planning', description: 'Sitemap, scope, and technical approach are mapped out before any design starts.' },
  { title: 'Wireframing', description: 'Low-fidelity layouts establish structure, hierarchy, and user flow.' },
  { title: 'UI Design', description: 'High-fidelity, on-brand design applied across every page and state.' },
  { title: 'Development', description: 'Clean, scalable code brings the approved design to life.' },
  { title: 'Testing', description: 'Cross-browser, cross-device QA to catch issues before launch.' },
  { title: 'Launch', description: 'A smooth, carefully coordinated go-live with zero surprises.' },
  { title: 'Support', description: 'Ongoing monitoring, updates, and optimization after launch.' },
];

const WebsiteDevelopment = () => {
  const service = services.find((s) => s.slug === 'website-development')!;
  const projects = getProjectsForService('website-development');

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

  const faqSchema = buildFaqSchema(WEBSITE_DEV_FAQS);

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
        <ServiceHero service={service} />

        <WebsiteTypesGrid />

        <WhyChooseUs
          reasons={whyChooseReasons}
          eyebrow="WHY CALIBRE ASSOCIATES"
          title="Why Choose Calibre Associates"
          description="Every website and custom WordPress development project we build is judged by the same standard: does it look premium and does it perform."
        />

        <ProcessTimeline
          process={developmentProcess}
          eyebrow="OUR PROCESS"
          title="How We Build Your Website"
          description="A structured, transparent process from first conversation to post-launch support."
        />

        <PortfolioStatsSection projects={projects} />

        <FeaturedProjects projects={projects} />

        <section id="portfolio" className="py-20 md:py-24 bg-canvas">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="eyebrow inline-block py-1 px-3 mb-5 rounded-pill bg-surface-soft">
                THE PORTFOLIO
              </span>
              <h2 className="mb-4">Website Development Portfolio</h2>
              <p className="text-ink/70 text-body-lg">
                A look at real custom websites and WordPress development projects we've designed
                and built, with the thinking behind each one.
              </p>
              <p className="text-ink/60 text-sm mt-4">
                Every build is led by{' '}
                <Link to="/our-team/abhijeet-jain" className="font-semibold text-ink underline underline-offset-2 hover:no-underline">
                  Abhijeet Jain
                </Link>
                , our Founder and full stack developer, from first wireframe through launch.
              </p>
            </div>

            <PortfolioBrowser projects={projects} />
          </div>
        </section>

        <FAQSection
          faqs={WEBSITE_DEV_FAQS}
          eyebrow="WEBSITE DEVELOPMENT FAQS"
          title="Your Website Development Questions, Answered"
          description="Common questions business owners ask about building or upgrading a website."
        />

        <FinalCTA
          headline="Like What You See? Let's Build Yours."
          description="Book a free consultation and we'll map out exactly what your new website should do for your business."
        />
      </main>

      <Footer />
    </motion.div>
  );
};

export default WebsiteDevelopment;

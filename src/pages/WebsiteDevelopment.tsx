import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
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

const SITE_URL = 'https://www.calibreassociates.com';
const OG_IMAGE = 'https://i.ibb.co/ksMhQrst/94e69e74-31c6-4907-b7da-719956c4355f.png';

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
        <ServiceHero service={service} />

        <WebsiteTypesGrid />

        <WhyChooseUs
          reasons={whyChooseReasons}
          eyebrow="WHY CALIBRE ASSOCIATES"
          title="Why Choose Calibre Associates"
          description="Every website we build is judged by the same standard: does it look premium and does it perform."
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
                A look at real websites we've designed and built, with the thinking behind each one.
              </p>
            </div>

            <PortfolioBrowser projects={projects} />
          </div>
        </section>

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

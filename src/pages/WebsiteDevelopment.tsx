import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Clock, Search, Smartphone, Target, Zap, ShieldCheck, TrendingUp, Code2 } from 'lucide-react';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Seo from '@/components/seo/Seo';
import { services } from '@/components/services/data/services';
import { pageTransition } from '@/lib/motion';

import ServiceHero from '@/components/services/sections/ServiceHero';
import ServiceAnswerBlock from '@/components/services/sections/ServiceAnswerBlock';
import ServiceContentSection, { ExternalInlineLink, InlineLink } from '@/components/services/sections/ServiceContentSection';
import ServiceResourceLinks from '@/components/services/sections/ServiceResourceLinks';
import WhyChooseUs, { type Reason } from '@/components/services/sections/WhyChooseUs';
import ProcessTimeline, { type TimelineStep } from '@/components/services/sections/ProcessTimeline';
import FinalCTA from '@/components/services/sections/FinalCTA';
import WebsiteTypesGrid from '@/components/services/website-development/WebsiteTypesGrid';
import PortfolioStatsSection from '@/components/portfolio/PortfolioStatsSection';
import FeaturedProjects from '@/components/portfolio/FeaturedProjects';
import PortfolioBrowser from '@/components/portfolio/PortfolioBrowser';
import { getProjectsForService } from '@/data/portfolio';
import FAQSection, { type FAQItem } from '@/components/services/sections/FAQSection';
import { buildServiceJsonLd, getServiceSeo } from '@/components/services/lib/serviceSchema';

const CASE = '/services/website-development/projects';

const whyChooseReasons: Reason[] = [
  { icon: <Clock className="h-6 w-6" />, title: 'Fast Turnaround', description: 'Structured workflows that keep your build moving without cutting corners.' },
  { icon: <Search className="h-6 w-6" />, title: 'SEO Ready Development', description: 'Clean markup and performance foundations built for search from day one.' },
  { icon: <Smartphone className="h-6 w-6" />, title: 'Mobile First', description: 'Every layout is designed and tested for mobile before anything else.' },
  { icon: <Target className="h-6 w-6" />, title: 'Conversion Focused', description: 'Every page is structured around a clear action, not just good looks.' },
  { icon: <Zap className="h-6 w-6" />, title: 'Lightning Fast', description: 'Optimized builds that load fast and keep visitors on the page.' },
  { icon: <ShieldCheck className="h-6 w-6" />, title: 'Secure', description: 'Modern security practices baked into every build we ship.' },
  { icon: <TrendingUp className="h-6 w-6" />, title: 'Scalable', description: 'Architecture that grows with your traffic, content, and team.' },
  { icon: <Code2 className="h-6 w-6" />, title: 'Clean Code', description: 'Maintainable, well documented code that\'s easy to extend later.' },
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
    question: 'What is the average cost to build a custom ecommerce website?',
    answer:
      'Cost depends heavily on scope, a straightforward store with a standard catalog and checkout costs significantly less than a custom ecommerce platform with unique features, integrations, and complex inventory management. Rather than quoting a single number that will not fit most businesses, we start with a discovery call to understand your catalog size, the features you need, and your growth plans, then provide a scope specific quote.',
  },
  {
    question: 'How long does it take to build a business website?',
    answer:
      'It depends on scope. A focused lead generation site with a handful of pages moves faster than a custom ecommerce store with a large catalog and integrations. We set the timeline after a discovery call, map it to the eight stage process on this page, and tell you up front which steps depend on your content and feedback so there are no surprises.',
  },
  {
    question: 'Can you build a website for a tree service or landscaping company?',
    answer:
      'Yes. Most of our portfolio is local service businesses around Buffalo, Rochester and Syracuse NY, including tree service, landscaping, lawn care and deck building companies. We build custom WordPress websites with clear service pages, service area pages and click to call buttons, then connect them to local SEO so the site keeps earning enquiries after launch.',
  },
  {
    question: 'Do you build WordPress, Shopify or custom React websites?',
    answer:
      'We build on all three. WordPress suits content managed business sites, Shopify suits product catalogs that need a fast storefront, and custom React builds suit teams that want full control or web app features. We recommend the platform after learning about your goals, your budget and who will update the site day to day.',
  },
  {
    question: 'Will my new website rank on Google?',
    answer:
      'We build the technical foundation for search from day one: clean markup, fast loading pages, mobile first layouts, structured data and a clear internal link structure. Rankings also depend on content, competition and local signals, so nobody can honestly guarantee a position. If you want steady growth in search, pair the build with our SEO services.',
  },
  {
    question: 'Do you offer website development in India and the USA?',
    answer:
      'Yes. Calibre Associates works from Lucknow, India and serves clients in the United States, including Buffalo, New York where we keep a local phone line. Projects run remotely with scheduled calls and shared reviews, so location never slows a build down.',
  },
];

const developmentProcess: TimelineStep[] = [
  { title: 'Discovery', description: 'We learn your business, goals, and audience to define what success looks like.' },
  { title: 'Planning', description: 'Sitemap, scope, and technical approach are mapped out before any design starts.' },
  { title: 'Wireframing', description: 'Low fidelity layouts establish structure, hierarchy, and user flow.' },
  { title: 'UI Design', description: 'High fidelity, on brand design applied across every page and state.' },
  { title: 'Development', description: 'Clean, scalable code brings the approved design to life.' },
  { title: 'Testing', description: 'Cross browser, cross device QA to catch issues before launch.' },
  { title: 'Launch', description: 'A smooth, carefully coordinated go live with zero surprises.' },
  { title: 'Support', description: 'Ongoing monitoring, updates, and optimization after launch.' },
];

const WebsiteDevelopment = () => {
  const service = services.find((s) => s.slug === 'website-development')!;
  const projects = getProjectsForService('website-development');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div {...pageTransition} className="min-h-screen">
      <Seo {...getServiceSeo(service)} jsonLd={buildServiceJsonLd(service, WEBSITE_DEV_FAQS)} />

      <Navbar />

      <main className="mt-16">
        <ServiceHero service={service} />

        <ServiceAnswerBlock heading={service.answerHeading!} answer={service.answer!} />

        <WebsiteTypesGrid />

        <ServiceContentSection
          eyebrow="WHAT WE BUILD"
          title="Custom WordPress Development, Web Design and Ecommerce for Small Business"
          intro="Pick the platform that fits how you sell and who updates the site. This is how we approach the three builds small businesses ask for most."
          cards={[
            {
              heading: 'Custom WordPress development',
              body: (
                <>
                  We build WordPress sites with custom themes rather than stacked page builders, so pages stay fast and easy
                  to edit. See how we rebuilt <InlineLink to={`${CASE}/rr-landscaping`}>RR Landscaping &amp; Tree Services</InlineLink> on
                  a hand coded theme and built <InlineLink to={`${CASE}/kp-landscaping`}>the KP Landscaping website</InlineLink>. Learn more about the platform at{' '}
                  <ExternalInlineLink href="https://wordpress.org/">WordPress.org</ExternalInlineLink>.
                </>
              ),
            },
            {
              heading: 'Ecommerce website development',
              body: (
                <>
                  Online stores built around your catalog, checkout and brand story. Browse the{' '}
                  <InlineLink to={`${CASE}/tulsi-online`}>Tulsi Online fashion store</InlineLink>,{' '}
                  <InlineLink to={`${CASE}/scentira-india`}>Scentira India</InlineLink>,{' '}
                  <InlineLink to={`${CASE}/hatti-kaapi`}>Hatti Kaapi</InlineLink> and{' '}
                  <InlineLink to={`${CASE}/flo-mattress`}>Flo Mattress</InlineLink> for examples.
                </>
              ),
            },
            {
              heading: 'Web design for small business and local services',
              body: (
                <>
                  Clear service pages, service area pages and click to call buttons for tree service, landscaping and deck
                  building companies. Read our{' '}
                  <InlineLink to="/industries/tree-service-marketing">tree service marketing</InlineLink> and{' '}
                  <InlineLink to="/industries/landscaping-and-lawn-care-marketing">landscaping marketing</InlineLink> guides,
                  or see the <InlineLink to={`${CASE}/arborix-tree-services`}>Arborix Tree Services website</InlineLink>.
                </>
              ),
            },
          ]}
        />

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
          description="A structured, transparent process from first conversation to post launch support."
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
                and built, with the thinking behind each one. You can also browse the full{' '}
                <InlineLink to="/portfolio">Calibre Associates portfolio</InlineLink>.
              </p>
              <p className="text-ink/60 text-sm mt-4">
                Every build is led by{' '}
                <InlineLink to="/our-team/abhijeet-jain">Abhijeet Jain</InlineLink>, Founder and CEO of Calibre Associates and a
                full stack developer, from first wireframe through launch.
              </p>
            </div>

            <PortfolioBrowser projects={projects} />
          </div>
        </section>

        <ServiceContentSection
          tone="canvas"
          eyebrow="WHERE WE WORK"
          title="Website Development Company in India and Buffalo, NY"
          intro="One team, two markets. We work from Lucknow, India and build for businesses across India and the United States."
          cards={[
            {
              heading: 'Website development company in India',
              body: (
                <>
                  Our team is based in Lucknow, Uttar Pradesh. We build websites and ecommerce stores for Indian brands and
                  startups. Read more about our <InlineLink to="/locations/lucknow-india">Lucknow, India location page</InlineLink>.
                </>
              ),
            },
            {
              heading: 'Website development in Buffalo, NY',
              body: (
                <>
                  Most of our local service work is around Buffalo, Rochester and Syracuse, New York. See our{' '}
                  <InlineLink to="/locations/buffalo-new-york">Buffalo, New York page</InlineLink> or call{' '}
                  <a href="tel:+17163551231" className="font-semibold text-ink underline underline-offset-2 hover:no-underline">+1 716 355 1231</a>.
                </>
              ),
            },
          ]}
        />

        <ServiceResourceLinks
          service={service}
          intro="Pair your new website with the services that bring visitors to it, and see the proof behind our work."
          caseStudies={[
            { label: 'Arborix Tree Services website', to: `${CASE}/arborix-tree-services`, description: 'A tree service website with a hub and spoke SEO structure.' },
            { label: 'Branch Experts Rochester website', to: `${CASE}/branch-experts-rochester`, description: 'A Rochester tree service site built for local search.' },
            { label: 'TreeCraft Tree Service website', to: `${CASE}/tree-craft-tree-services`, description: 'Programmatic SEO pages across three metro areas.' },
            { label: 'All Calibre Associates projects', to: '/portfolio', description: 'Browse every website, SEO and brand project.' },
          ]}
          moreLinks={[
            { label: 'Tree service marketing', to: '/industries/tree-service-marketing' },
            { label: 'Landscaping and lawn care marketing', to: '/industries/landscaping-and-lawn-care-marketing' },
            { label: 'Meet Abhijeet Jain, Founder and CEO', to: '/our-team/abhijeet-jain' },
            { label: 'Request a website quote', to: '/contact' },
          ]}
          external={[
            { label: 'WordPress.org', href: 'https://wordpress.org/', description: 'The open source platform behind many of our builds.' },
            { label: 'Google SEO Starter Guide', href: 'https://developers.google.com/search/docs/fundamentals/seo-starter-guide', description: 'How Google recommends making a site easy to find.' },
            { label: 'web.dev Core Web Vitals', href: 'https://web.dev/articles/vitals', description: 'The speed and stability metrics we build for.' },
          ]}
        />

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

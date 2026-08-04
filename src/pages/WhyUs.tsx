import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ServiceProcess from '@/components/services/ServiceProcess';
import WhyChooseUs from '@/components/services/sections/WhyChooseUs';
import StatsSection from '@/components/services/sections/StatsSection';
import TestimonialSlider from '@/components/services/sections/TestimonialSlider';
import FinalCTA from '@/components/services/sections/FinalCTA';
import { ArrowDown } from 'lucide-react';
import { Helmet } from 'react-helmet';
import { pageTransition } from '@/lib/motion';

const companyStats = [
  { label: 'Projects Delivered', value: 300, suffix: '+' },
  { label: 'Years Combined Experience', value: 8, suffix: '+' },
  { label: 'Client Retention Rate', value: 95, suffix: '%' },
  { label: 'Industries Served', value: 12, suffix: '+' },
];

const WhyUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      {...pageTransition}
      className="min-h-screen"
    >
      <Navbar />
      <main className="mt-16">
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-white">
          <Helmet>
  <meta charSet="utf-8" />
  <title>Why Choose Calibre Associates | Digital Growth & Automation Experts</title>
  <meta
    name="description"
    content="Discover why businesses choose Calibre Associates for lead generation, SEO, development, automation, and AI-driven digital growth solutions built for scale."
  />
  <link
    rel="canonical"
    href="https://calibreassociates.com/why-us"
  />
  <link rel="icon" href="https://i.ibb.co/ksMhQrst/94e69e74-31c6-4907-b7da-719956c4355f.png" />
</Helmet>
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-4xl mx-auto"
            >
              <span className="inline-block py-1.5 px-4 mb-6 text-xs font-semibold tracking-wider rounded-full bg-surface-soft text-ink border border-hairline">
                OUR APPROACH
              </span>
              <h1 className="mb-6">
                How Calibre Associates Builds <span className="text-ink font-bold">Scalable Growth</span> Systems
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-10">
                Our proven process combines strategy, technology, marketing, and automation to help businesses generate leads, scale operations, and achieve measurable long-term growth.
              </p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="flex justify-center mt-12"
              >
                <a
                  href="#workflow"
                  className="flex flex-col items-center text-ink/70 hover:text-ink transition-colors"
                >
                  <span className="mb-2">Explore our execution process</span>
                  <ArrowDown className="animate-bounce" />
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Workflow Section - Using our existing component */}
        <div id="workflow">
          <ServiceProcess />
        </div>

        <WhyChooseUs />

        <StatsSection stats={companyStats} />

        <TestimonialSlider />

        <FinalCTA
          headline="Ready to Work With a Team That Delivers?"
          description="Book a free consultation and let's talk about what scalable growth looks like for your business."
        />
      </main>
      <Footer />
    </motion.div>
  );
};

export default WhyUs;

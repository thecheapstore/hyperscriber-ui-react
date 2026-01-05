import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ServiceProcess from '@/components/services/ServiceProcess';
import CTASection from '@/components/CTASection';
import { ArrowDown } from 'lucide-react';
import { Helmet } from 'react-helmet';

const ProjectCard = ({
  image,
  title,
  description,
  link,
  delay,
}: {
  image: string;
  title: string;
  description: string;
  link: string;
  delay: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
    className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col"
  >
    <img
      src={image}
      alt={title}
      className="h-48 w-full object-cover"
    />
    <div className="p-6 flex flex-col flex-grow">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-muted-foreground mb-6 flex-grow">
        {description}
      </p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-5 py-2.5 text-white font-medium hover:bg-blue-700 transition"
      >
        View Project
      </a>
    </div>
  </motion.div>
);

const WhyUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen"
    >
      <Navbar />
      <main className="mt-16">
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-white">
          <Helmet>
            <meta charSet="utf-8" />
            <title>HyperScriber | Why Us</title>
            <meta name="description" content="Our streamlined AI + human workflow delivers exceptional content that drives real business results." />
            <link rel="canonical" href="https://hyperscriber.com/why-us" />
            <link rel="icon" href="/favicon.ico" />
          </Helmet>
          <div className="container mx-auto px-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-4xl mx-auto"
            >
              <span className="inline-block py-1.5 px-4 mb-6 text-xs font-semibold tracking-wider rounded-full bg-blue-50 text-blue-600 border border-blue-100 shadow-sm">
                OUR APPROACH
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                How Calibre Associates Builds <span className="text-gradient bg-gradient-to-r from-blue-600 to-purple-600">Scalable Growth</span> Systems
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
                  className="flex flex-col items-center text-blue-600 hover:text-blue-700 transition-colors"
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
        
        {/* Project Showcase Section */}
<section className="py-20 bg-slate-50" id="projects">
  <div className="container mx-auto px-6 text-center mb-16">
    <h2 className="text-3xl md:text-4xl font-bold mb-4">
      Featured Projects & Case Studies
    </h2>
    <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
      Real-world projects where we helped businesses grow through
      high-performance development, lead generation, marketing systems,
      and automation.
    </p>
  </div>

  <div className="container mx-auto px-6">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

      {/* PROJECT 1 */}
      <ProjectCard
        image="/projects/optipharm.jpg"
        title="OptiPharm"
        description="Healthcare-focused website built for speed, SEO readiness, and lead conversion to support long-term digital growth."
        link="https://optipharm.com"
        delay={0}
      />

      {/* PROJECT 2 */}
      <ProjectCard
        image="/projects/calibre.jpg"
        title="Calibre Associates"
        description="Complete digital ecosystem including website development, SEO, social media marketing, automation, and conversion-focused UX."
        link="https://calibreassociates.com"
        delay={0.05}
      />

      {/* PROJECT 3 */}
      <ProjectCard
        image="/projects/taggingmy.jpg"
        title="TaggingMy"
        description="Lead generation and marketing platform designed to attract, nurture, and convert inbound traffic at scale."
        link="https://taggingmy.com"
        delay={0.1}
      />

      {/* PROJECT 4 */}
      <ProjectCard
        image="/projects/automation.jpg"
        title="AI & Automation Systems"
        description="Custom automation and AI workflows built to eliminate manual work and streamline business operations."
        link="https://calibreassociates.com"
        delay={0.15}
      />

      {/* PROJECT 5 */}
      <ProjectCard
        image="/projects/saas-dashboard.jpg"
        title="SaaS Dashboard Platform"
        description="Scalable SaaS dashboard with performance optimization, clean UI UX, and secure backend architecture."
        link="#"
        delay={0.2}
      />

      {/* PROJECT 6 */}
      <ProjectCard
        image="/projects/marketing-funnel.jpg"
        title="Lead Generation Funnel"
        description="High-converting paid ads and landing page funnel designed for consistent inbound lead flow."
        link="#"
        delay={0.25}
      />

      {/* PROJECT 7 */}
      <ProjectCard
        image="/projects/gmb-seo.jpg"
        title="Local SEO & GMB Growth"
        description="Online reputation management and Google My Business optimization to drive organic local leads."
        link="#"
        delay={0.3}
      />

      {/* PROJECT 8 */}
      <ProjectCard
        image="/projects/uiux.jpg"
        title="UI UX Product Design"
        description="Modern UI UX design system created for web and mobile applications with conversion-focused layouts."
        link="#"
        delay={0.35}
      />

    </div>
  </div>
</section>
        
        <CTASection />
      </main>
      <Footer />
    </motion.div>
  );
};

export default WhyUs;

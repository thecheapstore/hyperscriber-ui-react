import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ServiceProcess from '@/components/services/ServiceProcess';
import CTASection from '@/components/CTASection';
import { ArrowDown } from 'lucide-react';
import { Helmet } from 'react-helmet';
import gemmenialImg from "../assets/images/projects/gemmenial.png";
import hattiKappiImg from "../assets/images/projects/hatti-kappi.png";
import kishoramImg from "../assets/images/projects/kishoram.png";
import scentiraImg from "../assets/images/projects/scentita.png";
import LawncareImg from "../assets/images/projects/716lawncare.png";
import ManasviImg from "../assets/images/projects/manasvi.png";
import rrlandscapingImg from "../assets/images/projects/rrlandscaping.png";
import flowImg from "../assets/images/projects/flow.png";
import tulsiImg from "../assets/images/projects/tulsi.png";

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
                  href="#process" 
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
        image={LawncareImg}
        title="716 Lawn Care"
        description="Local service website designed to drive leads, improve mobile usability, and clearly present lawn care services for a Buffalo based residential business."
        link="https://716lawncare.com/"
        delay={0}
      />

      {/* PROJECT 2 */}
      <ProjectCard
        image={rrlandscapingImg}
        title="RR Landscaping & Tree Services"
        description="Service focused business website built to showcase landscaping and tree services, streamline navigation, and support consistent lead capture for local property clients."
        link="https://rrlandscapingandtreeservices.com/"
        delay={0.05}
      />

      {/* PROJECT 3 */}
      <ProjectCard
        image={ManasviImg}
        title="Personal Brand Portfolio (Actor & Model)"
        description="Personal brand portfolio website created to highlight professional identity, visual work, and contact pathways, supporting discovery, credibility, and direct booking opportunities online."
        link="https://manasvipathak.netlify.app/"
        delay={0.1}
      />

      {/* PROJECT 4 */}
      <ProjectCard
        image={flowImg}
        title="Flo Mattress - Ecommerce Website"
        description="Direct to consumer ecommerce website structured to present sleep products clearly, build trust through value propositions, and enable purchasing for online shoppers."
        link="https://www.flomattress.com/"
        delay={0.15}
      />

      {/* PROJECT 5 */}
      <ProjectCard
        image={tulsiImg}
        title="Tulsionline - Premium Fashion Ecommerce Website"
        description="Premium ecommerce website built to showcase curated fashion collections, emphasize craftsmanship and brand identity, and provide a seamless shopping experience for customers."
        link="https://www.tulsionline.in/"
        delay={0.2}
      />

      {/* PROJECT 6 */}
      <ProjectCard
        image={kishoramImg}
        title="Kirosham – Contemporary Women’s Fashion Ecommerce"
        description="Ecommerce website created to showcase a curated collection of stylish ready-to-wear clothing, highlight brand identity, and offer a seamless shopping experience for fashion conscious customers."
        link="https://kirosham.com/"
        delay={0.25}
      />

      {/* PROJECT 7 */}
      <ProjectCard
        image={scentiraImg}
        title="Scentira – Luxury Fragrance Ecommerce Experience"
        description="Ecommerce website crafted to present a curated collection of premium perfumes and niche fragrances, emphasize authentic scent discovery, and offer a seamless shopping and sampling experience for fragrance lovers online."
        link="https://scentira.in/"
        delay={0.3}
      />

      {/* PROJECT 8 */}
      <ProjectCard
        image={hattiKappiImg}
        title="Hatti Kaapi – Premium Coffee and Cafe Ecommerce"
        description="Ecommerce website developed to showcase artisanal coffee products, highlight brand heritage and cafe culture, and provide a streamlined online ordering experience for coffee enthusiasts."
        link="https://www.hattikaapi.com/"
        delay={0.35}
      />

      {/* PROJECT 9 */}
      <ProjectCard
        image={gemmenialImg}
        title="Gemennial – Contemporary Jewellery Ecommerce Platform"
        description="Ecommerce website built to showcase modern gold plated and anti-tarnish jewellery collections, highlight refined design details, and provide a seamless shopping experience for style conscious customers."
        link="https://gemennial.com/"
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

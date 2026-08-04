import React from 'react';
import { motion } from 'framer-motion';
import { Newspaper, Image, Rocket, Atom, ShoppingBag, ShoppingCart, FileText, Database, Server } from 'lucide-react';
import { staggerContainer, fadeUp, viewportOnce } from '@/lib/motion';

const websiteTypes = [
  {
    icon: <Newspaper className="h-6 w-6" />,
    title: 'WordPress Websites',
    description: 'Flexible, content-managed sites built on the world\'s most trusted CMS.',
  },
  {
    icon: <Image className="h-6 w-6" />,
    title: 'Portfolio Websites',
    description: 'Visually led sites that showcase work and build personal or brand credibility.',
  },
  {
    icon: <Rocket className="h-6 w-6" />,
    title: 'Landing Pages',
    description: 'Focused, high-converting pages built around a single campaign goal.',
  },
  {
    icon: <Atom className="h-6 w-6" />,
    title: 'Custom React.js Websites',
    description: 'Fast, component-driven builds for teams that need full control and scale.',
  },
  {
    icon: <ShoppingBag className="h-6 w-6" />,
    title: 'Shopify Stores',
    description: 'Conversion-ready storefronts built for growing product businesses.',
  },
  {
    icon: <ShoppingCart className="h-6 w-6" />,
    title: 'E-commerce Websites',
    description: 'Custom online stores with catalog, cart, and checkout built around your workflow.',
  },
  {
    icon: <FileText className="h-6 w-6" />,
    title: 'Static Websites',
    description: 'Lightweight, blazing-fast sites for brochures, docs, and marketing pages.',
  },
  {
    icon: <Database className="h-6 w-6" />,
    title: 'Dynamic Websites',
    description: 'Data-driven sites with real-time content, accounts, and interactive features.',
  },
  {
    icon: <Server className="h-6 w-6" />,
    title: 'PHP Websites & Applications',
    description: 'Robust server-side applications built for custom business logic at scale.',
  },
];

const WebsiteTypesGrid = () => {
  return (
    <section className="py-20 md:py-24 bg-surface-soft">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <motion.span variants={fadeUp} className="eyebrow inline-block py-1 px-3 mb-5 rounded-pill bg-canvas">
            WHAT WE BUILD
          </motion.span>
          <motion.h2 variants={fadeUp} className="mb-4">
            Every Kind of Website, Done Right
          </motion.h2>
          <motion.p variants={fadeUp} className="text-ink/70 text-body-lg">
            Whichever platform or stack fits your business, we build it to the same premium standard.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {websiteTypes.map((type) => (
            <motion.div
              key={type.title}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className="group bg-canvas border border-hairline rounded-lg p-6 transition-shadow duration-300 hover:shadow-card"
            >
              <div className="w-12 h-12 rounded-lg bg-surface-soft text-ink flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110">
                {type.icon}
              </div>
              <h3 className="text-lg font-bold mb-2">{type.title}</h3>
              <p className="text-sm text-ink/70">{type.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WebsiteTypesGrid;

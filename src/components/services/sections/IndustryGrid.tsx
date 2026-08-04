import React from 'react';
import { motion } from 'framer-motion';
import { staggerContainer, fadeUp, viewportOnce } from '@/lib/motion';
import { industries } from '../data/industries';

const IndustryGrid = () => {
  return (
    <section className="py-20 md:py-24 bg-canvas">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <motion.span variants={fadeUp} className="eyebrow inline-block py-1 px-3 mb-5 rounded-pill bg-surface-soft">
            INDUSTRIES WE SERVE
          </motion.span>
          <motion.h2 variants={fadeUp} className="mb-4">
            Built for Businesses Like Yours
          </motion.h2>
          <motion.p variants={fadeUp} className="text-ink/70 text-body-lg">
            We've worked across a wide range of industries, adapting our approach to what each business actually needs.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4"
        >
          {industries.map((industry) => (
            <motion.div
              key={industry.label}
              variants={fadeUp}
              whileHover={{ y: -4 }}
              className="flex flex-col items-center text-center gap-3 bg-surface-soft rounded-lg p-6 transition-colors duration-300 hover:bg-hairline-soft"
            >
              <div className="w-12 h-12 rounded-full bg-canvas text-ink flex items-center justify-center">
                {industry.icon}
              </div>
              <span className="text-sm font-medium text-ink">{industry.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default IndustryGrid;

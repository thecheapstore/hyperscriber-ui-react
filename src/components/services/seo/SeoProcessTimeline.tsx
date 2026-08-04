import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowDown } from 'lucide-react';
import { staggerContainer, fadeUp, viewportOnce } from '@/lib/motion';

const STEPS = ['Discovery', 'Research', 'Strategy', 'Implementation', 'Authority Building', 'Reporting', 'Continuous Growth'];

const SeoProcessTimeline = () => (
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
          OUR SEO PROCESS
        </motion.span>
        <motion.h2 variants={fadeUp} className="mb-4">How We Approach SEO</motion.h2>
        <motion.p variants={fadeUp} className="text-ink/70 text-body-lg">
          A structured, repeatable process behind every engagement — from first audit to ongoing growth.
        </motion.p>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer}
        className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center gap-6 md:gap-0"
      >
        {STEPS.map((step, index) => (
          <div key={step} className="contents">
            <motion.div variants={fadeUp} className="flex flex-row md:flex-col items-center gap-4 md:gap-3 md:flex-1 md:text-center">
              <div className="w-11 h-11 rounded-full bg-ink text-inverse-ink flex items-center justify-center font-bold text-sm flex-shrink-0">
                {index + 1}
              </div>
              <span className="text-sm md:text-base font-semibold text-ink">{step}</span>
            </motion.div>

            {index < STEPS.length - 1 && (
              <motion.div variants={fadeUp} className="flex items-center justify-center text-ink/25 flex-shrink-0">
                <ArrowRight className="hidden md:block h-4 w-4" />
                <ArrowDown className="md:hidden h-4 w-4 ml-[22px]" />
              </motion.div>
            )}
          </div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default SeoProcessTimeline;

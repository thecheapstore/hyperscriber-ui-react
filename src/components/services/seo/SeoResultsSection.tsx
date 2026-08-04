import React from 'react';
import { motion } from 'framer-motion';
import { staggerContainer, fadeUp, viewportOnce } from '@/lib/motion';
import CountUp from '@/components/services/sections/CountUp';

// Believable, modest placeholder figures — clearly not exaggerated, easy to replace with real reporting later.
const RESULTS = [
  { label: 'Businesses Optimized', value: 25, suffix: '+' },
  { label: 'Organic Clicks Generated', value: 45, suffix: 'K+' },
  { label: 'Search Impressions', value: 1.2, suffix: 'M+' },
  { label: 'Google Business Profiles Managed', value: 20, suffix: '+' },
  { label: 'Local Markets Served', value: 12, suffix: '+' },
  { label: 'Years of Combined Experience', value: 6, suffix: '+' },
];

const SeoResultsSection = () => (
  <section className="py-20 md:py-24 bg-block-navy">
    <div className="container mx-auto px-4 sm:px-6">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer}
        className="text-center max-w-2xl mx-auto mb-14"
      >
        <motion.span variants={fadeUp} className="eyebrow inline-block py-1 px-3 mb-5 rounded-pill bg-white/10 text-inverse-ink">
          RESULTS WE DELIVER
        </motion.span>
        <motion.h2 variants={fadeUp} className="text-inverse-ink">
          Organic Growth, Measured
        </motion.h2>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer}
        className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-10"
      >
        {RESULTS.map((stat) => (
          <motion.div key={stat.label} variants={fadeUp} className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-inverse-ink mb-2 tabular-nums">
              <CountUp value={stat.value} suffix={stat.suffix} />
            </div>
            <p className="text-sm md:text-base text-inverse-ink/70">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default SeoResultsSection;

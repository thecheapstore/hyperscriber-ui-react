import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { staggerContainer, fadeUp, viewportOnce } from '@/lib/motion';
import CountUp from '@/components/services/sections/CountUp';
import type { Project } from '@/data/portfolio/types';

interface PortfolioStatsSectionProps {
  projects: Project[];
}

/** Every figure here is computed directly from the portfolio data array — nothing is hardcoded or fabricated. */
const PortfolioStatsSection = ({ projects }: PortfolioStatsSectionProps) => {
  const stats = useMemo(() => {
    const websitesDelivered = projects.filter((p) => p.portfolioCategory === 'Website Development').length;
    const ecommerceStoresBuilt = projects.filter((p) => p.portfolioCategory === 'Ecommerce').length;
    const industriesServed = new Set(projects.map((p) => p.about.industry)).size;

    return [
      { label: 'Projects Completed', value: projects.length },
      { label: 'Websites Delivered', value: websitesDelivered },
      { label: 'Ecommerce Stores Built', value: ecommerceStoresBuilt },
      { label: 'Industries Served', value: industriesServed },
    ];
  }, [projects]);

  return (
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
            BY THE NUMBERS
          </motion.span>
          <motion.h2 variants={fadeUp} className="text-inverse-ink">
            Our Track Record
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10"
        >
          {stats.map((stat) => (
            <motion.div key={stat.label} variants={fadeUp} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-inverse-ink mb-2 tabular-nums">
                <CountUp value={stat.value} suffix="+" />
              </div>
              <p className="text-sm md:text-base text-inverse-ink/70">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioStatsSection;

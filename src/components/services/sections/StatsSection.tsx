import React from 'react';
import { motion } from 'framer-motion';
import { staggerContainer, fadeUp, viewportOnce } from '@/lib/motion';
import CountUp from './CountUp';
import type { Stat } from '../types/service';

interface StatsSectionProps {
  stats: Stat[];
}

const StatsSection = ({ stats }: StatsSectionProps) => {
  return (
    <section className="py-20 md:py-24 bg-block-navy">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className={
            stats.length === 1
              ? 'flex justify-center'
              : 'grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10'
          }
        >
          {stats.map((stat, index) => (
            <motion.div key={`${index}-${stat.label}`} variants={fadeUp} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-inverse-ink mb-2 tabular-nums">
                <CountUp value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
              </div>
              <p className="text-sm md:text-base text-inverse-ink/70">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;

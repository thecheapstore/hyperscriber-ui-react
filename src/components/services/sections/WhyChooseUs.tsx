import React from 'react';
import { motion } from 'framer-motion';
import { Award, Zap, ShieldCheck, Clock, TrendingUp } from 'lucide-react';
import { staggerContainer, fadeUp, viewportOnce } from '@/lib/motion';

export interface Reason {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const defaultReasons: Reason[] = [
  {
    icon: <Award className="h-6 w-6" />,
    title: 'Proven Experience',
    description: 'Years of hands-on execution across development, marketing, and automation for growing businesses.',
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: 'Performance First',
    description: 'Every deliverable is built and measured against speed, usability, and conversion outcomes.',
  },
  {
    icon: <ShieldCheck className="h-6 w-6" />,
    title: 'Reliable Delivery',
    description: 'Transparent timelines, clear communication, and dependable execution from start to finish.',
  },
  {
    icon: <Clock className="h-6 w-6" />,
    title: 'Fast Turnaround',
    description: 'Structured workflows that keep projects moving without compromising on quality.',
  },
  {
    icon: <TrendingUp className="h-6 w-6" />,
    title: 'ROI Focused',
    description: 'Every recommendation is weighed against the impact it has on your bottom line.',
  },
];

interface WhyChooseUsProps {
  reasons?: Reason[];
  eyebrow?: string;
  title?: string;
  description?: string;
}

const WhyChooseUs = ({
  reasons = defaultReasons,
  eyebrow = 'WHY CALIBRE ASSOCIATES',
  title = 'Why Clients Choose Us',
  description = 'A dependable partner focused on outcomes, not just deliverables.',
}: WhyChooseUsProps) => {
  const gridCols = reasons.length >= 8 ? 'lg:grid-cols-4' : 'lg:grid-cols-5';
  return (
    <section id="why-us" className="py-20 md:py-24 bg-canvas">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <motion.span variants={fadeUp} className="eyebrow inline-block py-1 px-3 mb-5 rounded-pill bg-surface-soft">
            {eyebrow}
          </motion.span>
          <motion.h2 variants={fadeUp} className="mb-4">
            {title}
          </motion.h2>
          <motion.p variants={fadeUp} className="text-ink/70 text-body-lg">
            {description}
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className={`grid grid-cols-1 sm:grid-cols-2 ${gridCols} gap-5`}
        >
          {reasons.map((reason) => (
            <motion.div
              key={reason.title}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className="bg-canvas border border-hairline rounded-lg p-6 transition-shadow duration-300 hover:shadow-card"
            >
              <div className="w-12 h-12 rounded-lg bg-surface-soft text-ink flex items-center justify-center mb-5">
                {reason.icon}
              </div>
              <h3 className="text-lg font-bold mb-2">{reason.title}</h3>
              <p className="text-sm text-ink/70">{reason.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

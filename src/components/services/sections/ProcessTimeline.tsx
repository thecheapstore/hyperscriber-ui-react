import React from 'react';
import { motion } from 'framer-motion';
import { staggerContainer, fadeUp, viewportOnce, easeOut } from '@/lib/motion';

export interface TimelineStep {
  title: string;
  description: string;
}

interface ProcessTimelineProps {
  process: TimelineStep[];
  eyebrow?: string;
  title?: string;
  description?: string;
}

const ProcessTimeline = ({
  process,
  eyebrow = 'OUR PROCESS',
  title = 'How We Get It Done',
  description = 'A clear, structured workflow from first conversation to ongoing optimization.',
}: ProcessTimelineProps) => {
  return (
    <section id="process" className="py-20 md:py-24 bg-surface-soft">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="text-center max-w-2xl mx-auto mb-16 md:mb-20"
        >
          <motion.span variants={fadeUp} className="eyebrow inline-block py-1 px-3 mb-5 rounded-pill bg-canvas">
            {eyebrow}
          </motion.span>
          <motion.h2 variants={fadeUp} className="mb-4">
            {title}
          </motion.h2>
          <motion.p variants={fadeUp} className="text-ink/70 text-body-lg">
            {description}
          </motion.p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Connecting line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-hairline md:-translate-x-1/2" aria-hidden />

          <div className="flex flex-col gap-10 md:gap-4">
            {process.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={`${index}-${step.title}`}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewportOnce}
                  transition={{ duration: 0.5, delay: index * 0.08, ease: easeOut }}
                  className={`relative flex items-start md:items-center gap-6 pl-16 md:pl-0 ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Node */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 top-0 md:top-1/2 md:-translate-y-1/2 z-10">
                    <div className="w-4 h-4 rounded-full bg-primary ring-4 ring-surface-soft" />
                  </div>

                  {/* Content card */}
                  <div className={`md:w-[calc(50%-2rem)] ${isEven ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="bg-canvas border border-hairline rounded-lg p-6">
                      <span className="font-mono text-caption text-ink/40 uppercase tracking-[0.6px]">
                        Step {String(index + 1).padStart(2, '0')}
                      </span>
                      <h3 className="text-xl font-bold my-2">{step.title}</h3>
                      <p className="text-sm text-ink/70">{step.description}</p>
                    </div>
                  </div>

                  <div className="hidden md:block md:w-[calc(50%-2rem)]" aria-hidden />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;

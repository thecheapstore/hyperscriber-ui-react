import React from 'react';
import { motion } from 'framer-motion';
import { Image, PlayCircle, LineChart, LayoutTemplate } from 'lucide-react';
import { staggerContainer, fadeUp, viewportOnce } from '@/lib/motion';
import type { PortfolioCategory } from '../types/service';

interface PortfolioShowcaseProps {
  categories: PortfolioCategory[];
  serviceTitle: string;
}

const pickIcon = (label: string) => {
  const lower = label.toLowerCase();
  if (lower.includes('video') || lower.includes('reel') || lower.includes('motion')) return PlayCircle;
  if (lower.includes('metric') || lower.includes('ranking') || lower.includes('growth') || lower.includes('report') || lower.includes('analytics')) return LineChart;
  if (lower.includes('dashboard') || lower.includes('mockup') || lower.includes('ui') || lower.includes('architecture') || lower.includes('screenshot')) return LayoutTemplate;
  return Image;
};

const PortfolioShowcase = ({ categories, serviceTitle }: PortfolioShowcaseProps) => {
  return (
    <section id="portfolio" className="py-20 md:py-24 bg-canvas">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <motion.span variants={fadeUp} className="eyebrow inline-block py-1 px-3 mb-5 rounded-pill bg-surface-soft">
            FEATURED WORK
          </motion.span>
          <motion.h2 variants={fadeUp} className="mb-4">
            {serviceTitle} Portfolio
          </motion.h2>
          <motion.p variants={fadeUp} className="text-ink/70 text-body-lg">
            A look at how we approach {serviceTitle.toLowerCase()} projects. Real case studies are added here as projects launch.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {categories.map((category) => {
            const Icon = pickIcon(category.label);
            return (
              <motion.div
                key={category.label}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                className="group bg-canvas border border-hairline rounded-lg overflow-hidden transition-shadow duration-300 hover:shadow-card"
              >
                <div className="relative aspect-video bg-surface-soft flex items-center justify-center overflow-hidden">
                  <Icon className="h-10 w-10 text-ink/30 transition-transform duration-300 group-hover:scale-110" />
                  <span className="absolute top-3 right-3 font-mono text-[10px] uppercase tracking-[0.5px] text-ink/40 bg-canvas/80 border border-hairline rounded-pill px-2 py-0.5">
                    Coming Soon
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-ink mb-1">{category.label}</h3>
                  <p className="text-sm text-ink/60">{category.description}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioShowcase;

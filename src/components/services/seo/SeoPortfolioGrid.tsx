import React from 'react';
import { motion } from 'framer-motion';
import { staggerContainer } from '@/lib/motion';
import type { Project } from '@/data/portfolio/types';
import SeoProjectCard from './SeoProjectCard';

interface SeoPortfolioGridProps {
  projects: Project[];
}

const SeoPortfolioGrid = ({ projects }: SeoPortfolioGridProps) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.1 }}
    variants={staggerContainer}
    className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
  >
    {projects.map((project) => (
      <SeoProjectCard key={project.slug} project={project} />
    ))}
  </motion.div>
);

export default SeoPortfolioGrid;

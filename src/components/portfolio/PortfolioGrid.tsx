import React from 'react';
import { motion } from 'framer-motion';
import { FolderOpen, ArrowRight } from 'lucide-react';
import ProjectCard from './ProjectCard';
import type { Project } from '@/data/portfolio/types';
import { staggerContainer, viewportOnce } from '@/lib/motion';

interface PortfolioGridProps {
  projects: Project[];
}

const EmptyState = () => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={viewportOnce}
    transition={{ duration: 0.5 }}
    className="border border-dashed border-hairline rounded-lg py-16 px-6 text-center max-w-xl mx-auto"
  >
    <div className="w-14 h-14 rounded-full bg-surface-soft flex items-center justify-center mx-auto mb-5">
      <FolderOpen className="h-6 w-6 text-ink/50" />
    </div>
    <h3 className="text-xl font-bold mb-2">Case Studies Launching Soon</h3>
    <p className="text-sm text-ink/60 mb-6">
      We're adding detailed project breakdowns here. In the meantime, let's talk about what we'd build for you.
    </p>
    <a href="https://calendly.com/calibreassociates/meeting" target="_blank" rel="noopener noreferrer">
      <span className="inline-flex items-center gap-1.5 rounded-pill bg-primary text-primary-foreground px-5 py-2.5 text-sm font-medium hover:opacity-90 transition-opacity id-calendly-booking">
        Book a Free Consultation
        <ArrowRight className="h-3.5 w-3.5" />
      </span>
    </a>
  </motion.div>
);

const PortfolioGrid = ({ projects }: PortfolioGridProps) => {
  if (projects.length === 0) {
    return <EmptyState />;
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={staggerContainer}
      className="flex flex-wrap justify-center gap-6 sm:gap-8"
    >
      {projects.map((project) => (
        <div key={project.slug} className="flex-none w-full sm:basis-[calc(50%-1rem)] lg:basis-[calc(33.333%-1.334rem)]">
          <ProjectCard project={project} />
        </div>
      ))}
    </motion.div>
  );
};

export default PortfolioGrid;

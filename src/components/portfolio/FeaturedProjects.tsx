import React from 'react';
import { motion } from 'framer-motion';
import FeaturedProjectCard from './FeaturedProjectCard';
import type { Project } from '@/data/portfolio/types';
import { staggerContainer, fadeUp, viewportOnce } from '@/lib/motion';

interface FeaturedProjectsProps {
  projects: Project[];
}

/** Renders nothing if no projects are flagged as featured — keeps the section self-hiding like the rest of the portfolio components. */
const FeaturedProjects = ({ projects }: FeaturedProjectsProps) => {
  const featured = projects.filter((p) => p.featured);

  if (featured.length === 0) return null;

  return (
    <section className="py-20 md:py-24 bg-surface-soft">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <motion.span variants={fadeUp} className="eyebrow inline-block py-1 px-3 mb-5 rounded-pill bg-canvas">
            FEATURED PROJECTS
          </motion.span>
          <motion.h2 variants={fadeUp} className="mb-4">
            Some of Our Strongest Work
          </motion.h2>
          <motion.p variants={fadeUp} className="text-ink/70 text-body-lg">
            A closer look at a few projects that best represent the range and quality of what we build.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8"
        >
          {featured.map((project) => (
            <FeaturedProjectCard key={`${project.serviceSlug}-${project.slug}`} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProjects;

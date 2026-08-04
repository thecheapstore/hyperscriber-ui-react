import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import type { Project } from '@/data/portfolio/types';
import { staggerContainer, fadeUp, viewportOnce } from '@/lib/motion';

interface RelatedProjectsProps {
  currentProject: Project;
  allProjects: Project[];
}

/** Shows up to 3 other projects (same service preferred). Renders nothing if none exist yet. */
const RelatedProjects = ({ currentProject, allProjects }: RelatedProjectsProps) => {
  const others = allProjects.filter((p) => p.slug !== currentProject.slug || p.serviceSlug !== currentProject.serviceSlug);
  const sameService = others.filter((p) => p.serviceSlug === currentProject.serviceSlug);
  const related = (sameService.length > 0 ? sameService : others).slice(0, 3);

  if (related.length === 0) return null;

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
            MORE WORK
          </motion.span>
          <motion.h2 variants={fadeUp}>Related Projects</motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {related.map((project) => (
            <ProjectCard key={`${project.serviceSlug}-${project.slug}`} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default RelatedProjects;

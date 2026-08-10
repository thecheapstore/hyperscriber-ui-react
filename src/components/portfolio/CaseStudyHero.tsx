import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import TechnologyBadge from './TechnologyBadge';
import LiveWebsiteButton from './LiveWebsiteButton';
import type { Project } from '@/data/portfolio/types';
import { easeOut } from '@/lib/motion';

interface CaseStudyHeroProps {
  project: Project;
  serviceTitle: string;
}

const CaseStudyHero = ({ project, serviceTitle }: CaseStudyHeroProps) => {
  const initial = project.companyName.trim().charAt(0).toUpperCase();

  return (
    <section className="relative pt-32 pb-16 md:pb-20 bg-canvas overflow-hidden">
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.45 }}
        transition={{ duration: 2 }}
        className="absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full bg-block-mint blur-[100px]"
      />

      <div className="container relative mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: easeOut }}
          className="max-w-3xl"
        >
          <nav aria-label="Breadcrumb" className="mb-8 text-sm text-ink/60 flex flex-wrap gap-2">
            <Link to="/" className="hover:text-ink transition-colors">Home</Link>
            <span>/</span>
            <Link to="/services" className="hover:text-ink transition-colors">Services</Link>
            <span>/</span>
            <Link to={`/services/${project.serviceSlug}`} className="hover:text-ink transition-colors">{serviceTitle}</Link>
            <span>/</span>
            <span className="text-ink">{project.projectName}</span>
          </nav>

          <div className="flex items-center gap-4 mb-6">
            {project.companyLogo ? (
              <img src={project.companyLogo} alt={project.companyName} loading="lazy" decoding="async" className="w-14 h-14 rounded-full object-cover border border-hairline flex-shrink-0" />
            ) : (
              <div className="w-14 h-14 rounded-full bg-surface-soft border border-hairline flex items-center justify-center text-lg font-semibold text-ink/60 flex-shrink-0">
                {initial}
              </div>
            )}
            <div>
              <p className="font-semibold text-ink">{project.companyName}</p>
              <span className="font-mono text-xs uppercase tracking-[0.5px] text-ink/50">{project.category}</span>
            </div>
          </div>

          <h1 className="mb-6">{project.projectName}</h1>
          <p className="text-lg text-ink/70 mb-8 max-w-xl">{project.shortDescription}</p>

          <div className="mb-8">
            <span className="font-mono text-caption uppercase tracking-[0.6px] text-ink/40 block mb-3">Project Highlights</span>
            <div className="flex flex-wrap gap-2">
              {project.highlights.map((highlight, index) => (
                <TechnologyBadge key={`${index}-${highlight}`} name={highlight} />
              ))}
            </div>
          </div>

          <LiveWebsiteButton url={project.liveUrl} />
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudyHero;

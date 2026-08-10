import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import WebsiteMockup from './WebsiteMockup';
import TechnologyBadge from './TechnologyBadge';
import type { Project } from '@/data/portfolio/types';
import { fadeUp } from '@/lib/motion';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const href = `/services/${project.serviceSlug}/projects/${project.slug}`;
  const initial = project.companyName.trim().charAt(0).toUpperCase();

  return (
    <motion.div variants={fadeUp} whileHover={{ y: -6 }} className="group h-full">
      <Link
        to={href}
        onClick={() => window.scrollTo(0, 0)}
        className="flex flex-col h-full bg-canvas border border-hairline rounded-lg overflow-hidden transition-shadow duration-300 hover:shadow-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        {project.thumbnail && (
          <div className="p-4 pb-0">
            <WebsiteMockup
              imageUrl={project.thumbnail}
              alt={project.projectName}
              device="desktop"
              className="aspect-video w-full transition-transform duration-500 ease-out group-hover:scale-[1.02]"
            />
          </div>
        )}

        <div className="p-6 flex flex-col flex-grow">
          <div className="flex items-center gap-3 mb-4">
            {project.companyLogo ? (
              <img src={project.companyLogo} alt={project.companyName} loading="lazy" decoding="async" className="w-9 h-9 rounded-full object-cover border border-hairline flex-shrink-0" />
            ) : (
              <div className="w-9 h-9 rounded-full bg-surface-soft border border-hairline flex items-center justify-center text-sm font-semibold text-ink/60 flex-shrink-0">
                {initial}
              </div>
            )}
            <div className="min-w-0">
              <p className="text-sm font-medium text-ink truncate">{project.companyName}</p>
              <span className="font-mono text-[10px] uppercase tracking-[0.5px] text-ink/40">{project.category}</span>
            </div>
          </div>

          <h3 className="text-lg font-bold mb-2">{project.projectName}</h3>
          <p className="text-sm text-ink/70 mb-5 flex-grow">{project.shortDescription}</p>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.highlights.slice(0, 4).map((highlight, index) => (
              <TechnologyBadge key={`${index}-${highlight}`} name={highlight} />
            ))}
          </div>

          <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-ink">
            Read Case Study
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProjectCard;

import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, ArrowRight, Star } from 'lucide-react';
import TechnologyBadge from '@/components/portfolio/TechnologyBadge';
import type { Project } from '@/data/portfolio/types';
import { fadeUp } from '@/lib/motion';

interface SeoProjectCardProps {
  project: Project;
}

const SeoProjectCard = ({ project }: SeoProjectCardProps) => {
  const href = `/services/${project.serviceSlug}/projects/${project.slug}`;
  const initial = project.companyName.trim().charAt(0).toUpperCase();

  return (
    <motion.div variants={fadeUp} whileHover={{ y: -6 }} className={`group h-full ${project.featured ? 'md:col-span-2' : ''}`}>
      <Link
        to={href}
        onClick={() => window.scrollTo(0, 0)}
        className={`flex flex-col h-full rounded-lg p-6 md:p-8 transition-shadow duration-300 hover:shadow-card ${
          project.featured ? 'bg-ink text-inverse-ink border border-ink' : 'bg-canvas border border-hairline'
        }`}
      >
        {project.featured && (
          <span className="inline-flex items-center gap-1.5 self-start mb-5 rounded-pill bg-accent-magenta px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.5px] text-white">
            <Star className="h-3 w-3 fill-current" />
            Featured SEO Project
          </span>
        )}

        <div className="flex items-center gap-4 mb-5">
          {project.companyLogo ? (
            <img
              src={project.companyLogo}
              alt={project.companyName}
              className={`w-14 h-14 rounded-full object-cover border flex-shrink-0 bg-white ${project.featured ? 'border-white/20' : 'border-hairline'}`}
            />
          ) : (
            <div
              className={`w-14 h-14 rounded-full flex items-center justify-center text-lg font-semibold flex-shrink-0 ${
                project.featured ? 'bg-white/10 text-inverse-ink' : 'bg-surface-soft text-ink/60 border border-hairline'
              }`}
            >
              {initial}
            </div>
          )}
          <div className="min-w-0">
            <h3 className="text-lg font-bold truncate">{project.companyName}</h3>
            <span className={`font-mono text-[11px] uppercase tracking-[0.5px] ${project.featured ? 'text-inverse-ink/60' : 'text-ink/50'}`}>
              {project.about.industry}
            </span>
          </div>
        </div>

        <div className={`flex items-center gap-1.5 text-xs mb-4 ${project.featured ? 'text-inverse-ink/60' : 'text-ink/50'}`}>
          <MapPin className="h-3.5 w-3.5 flex-shrink-0" />
          {project.about.location}
        </div>

        <p className={`text-sm mb-6 flex-grow ${project.featured ? 'text-inverse-ink/80' : 'text-ink/70'}`}>
          {project.shortDescription}
        </p>

        <div className="mb-6">
          <span className={`font-mono text-[10px] uppercase tracking-[0.5px] block mb-2.5 ${project.featured ? 'text-inverse-ink/50' : 'text-ink/40'}`}>
            Services Provided
          </span>
          <div className="flex flex-wrap gap-2">
            {project.highlights.slice(0, 4).map((highlight, index) => (
              <TechnologyBadge
                key={`${index}-${highlight}`}
                name={highlight}
                className={project.featured ? '!bg-white/10 !border-white/20 !text-inverse-ink' : ''}
              />
            ))}
          </div>
        </div>

        <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold">
          View Case Study
          <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </Link>
    </motion.div>
  );
};

export default SeoProjectCard;

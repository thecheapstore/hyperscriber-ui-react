import React, { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import PortfolioGrid from './PortfolioGrid';
import type { Project, PlatformTag, PortfolioCategoryType } from '@/data/portfolio/types';
import { fadeUp, staggerContainer, viewportOnce } from '@/lib/motion';

interface PortfolioBrowserProps {
  projects: Project[];
}

const FILTERS: Array<{ label: string; tag: PlatformTag | 'All' }> = [
  { label: 'All', tag: 'All' },
  { label: 'WordPress', tag: 'WordPress' },
  { label: 'React.js', tag: 'React.js' },
  { label: 'Shopify', tag: 'Shopify' },
  { label: 'Ecommerce', tag: 'Ecommerce' },
  { label: 'Local Business', tag: 'Local Business' },
  { label: 'Personal Brand', tag: 'Personal Brand' },
  { label: 'Brand Identity', tag: 'Brand Identity' },
];

const CATEGORY_ORDER: PortfolioCategoryType[] = ['Website Development', 'Ecommerce', 'Personal Branding', 'Brand Identity'];

/** Portfolio browsing surface: filter chips + either grouped-by-category (All) or a flat filtered grid. */
const PortfolioBrowser = ({ projects }: PortfolioBrowserProps) => {
  const [activeFilter, setActiveFilter] = useState<PlatformTag | 'All'>('All');

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') return projects;
    return projects.filter((p) => p.platformTags.includes(activeFilter));
  }, [projects, activeFilter]);

  const groupedByCategory = useMemo(() => {
    return CATEGORY_ORDER.map((category) => ({
      category,
      projects: projects.filter((p) => p.portfolioCategory === category),
    })).filter((group) => group.projects.length > 0);
  }, [projects]);

  return (
    <div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer}
        className="flex flex-wrap justify-center gap-2.5 mb-14"
      >
        {FILTERS.map((filter) => {
          const isActive = activeFilter === filter.tag;
          return (
            <motion.button
              key={filter.tag}
              variants={fadeUp}
              type="button"
              onClick={() => setActiveFilter(filter.tag)}
              aria-pressed={isActive}
              className="relative rounded-pill px-4 py-2 text-sm font-medium transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              {isActive && (
                <motion.span
                  layoutId="portfolio-filter-active"
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0 rounded-pill bg-ink"
                />
              )}
              <span className={`relative ${isActive ? 'text-inverse-ink' : 'text-ink/70 hover:text-ink'}`}>
                {filter.label}
              </span>
            </motion.button>
          );
        })}
      </motion.div>

      <AnimatePresence mode="wait">
        {activeFilter === 'All' ? (
          <motion.div
            key="grouped"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="space-y-16"
          >
            {groupedByCategory.map((group) => (
              <div key={group.category}>
                <h3 className="text-xl font-bold mb-6">{group.category}</h3>
                <PortfolioGrid projects={group.projects} />
              </div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <PortfolioGrid projects={filteredProjects} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PortfolioBrowser;

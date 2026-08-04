import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { fadeUp, staggerContainer, viewportOnce } from '@/lib/motion';
import VideoPortfolioGrid from './video/VideoPortfolioGrid';
import InstagramPostGrid from './InstagramPostGrid';

type PortfolioTab = 'videos' | 'graphics';

const TABS: Array<{ id: PortfolioTab; label: string }> = [
  { id: 'videos', label: 'Videos' },
  { id: 'graphics', label: 'Graphics & Carousels' },
];

const PortfolioTabs = () => {
  const [activeTab, setActiveTab] = useState<PortfolioTab>('videos');

  return (
    <div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer}
        className="flex justify-center mb-12"
      >
        <motion.div variants={fadeUp} className="inline-flex items-center gap-1 rounded-pill border border-hairline bg-surface-soft p-1">
          {TABS.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                aria-pressed={isActive}
                className="relative rounded-pill px-5 py-2.5 text-sm font-semibold whitespace-nowrap transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                {isActive && (
                  <motion.span
                    layoutId="portfolio-tabs-active"
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-0 rounded-pill bg-ink"
                  />
                )}
                <span className={`relative ${isActive ? 'text-inverse-ink' : 'text-ink/60 hover:text-ink'}`}>{tab.label}</span>
              </button>
            );
          })}
        </motion.div>
      </motion.div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          {activeTab === 'videos' ? <VideoPortfolioGrid /> : <InstagramPostGrid />}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default PortfolioTabs;

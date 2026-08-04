import React, { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { fadeUp, staggerContainer, viewportOnce } from '@/lib/motion';
import { editingVideos, EDITING_CATEGORY_ORDER } from '../data/videoEditingVideos';
import VideoPortfolioGrid from './video/VideoPortfolioGrid';

const TABS = ['All', ...EDITING_CATEGORY_ORDER];

const PortfolioCategoryTabs = () => {
  const [activeTab, setActiveTab] = useState('All');

  const filteredVideos = useMemo(() => {
    if (activeTab === 'All') return editingVideos;
    return editingVideos.filter((v) => v.category === activeTab);
  }, [activeTab]);

  return (
    <div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer}
        className="flex flex-wrap justify-center gap-2.5 mb-14"
      >
        {TABS.map((tab) => {
          const isActive = activeTab === tab;
          return (
            <motion.button
              key={tab}
              variants={fadeUp}
              type="button"
              onClick={() => setActiveTab(tab)}
              aria-pressed={isActive}
              className="relative rounded-pill px-4 py-2 text-sm font-medium transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              {isActive && (
                <motion.span
                  layoutId="video-editing-tabs-active"
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0 rounded-pill bg-ink"
                />
              )}
              <span className={`relative ${isActive ? 'text-inverse-ink' : 'text-ink/70 hover:text-ink'}`}>{tab}</span>
            </motion.button>
          );
        })}
      </motion.div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <VideoPortfolioGrid videos={filteredVideos} />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default PortfolioCategoryTabs;

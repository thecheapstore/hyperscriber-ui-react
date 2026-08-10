import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Monitor, Tablet, Smartphone } from 'lucide-react';
import WebsiteMockup from './WebsiteMockup';
import type { ProjectScreenshots } from '@/data/portfolio/types';
import { staggerContainer, fadeUp, viewportOnce, easeOut } from '@/lib/motion';

interface ScreenshotGalleryProps {
  screenshots: ProjectScreenshots;
  projectName: string;
}

const TABS: Array<{ key: keyof ProjectScreenshots; label: string; icon: React.ElementType }> = [
  { key: 'desktop', label: 'Desktop', icon: Monitor },
  { key: 'tablet', label: 'Tablet', icon: Tablet },
  { key: 'mobile', label: 'Mobile', icon: Smartphone },
];

const FRAME_SIZE: Record<keyof ProjectScreenshots, string> = {
  desktop: 'aspect-video w-full max-w-3xl',
  tablet: 'aspect-[3/4] w-full max-w-sm',
  mobile: 'aspect-[9/19] w-full max-w-[260px]',
};

const ScreenshotGallery = ({ screenshots, projectName }: ScreenshotGalleryProps) => {
  const [active, setActive] = useState<keyof ProjectScreenshots>('desktop');

  const hasAnyScreenshot = Boolean(screenshots.desktop || screenshots.tablet || screenshots.mobile);
  if (!hasAnyScreenshot) return null;

  return (
    <section className="py-20 md:py-24 bg-surface-soft">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <motion.span variants={fadeUp} className="eyebrow inline-block py-1 px-3 mb-5 rounded-pill bg-canvas">
            THE RESULT
          </motion.span>
          <motion.h2 variants={fadeUp}>See It In Action</motion.h2>
        </motion.div>

        <div className="flex justify-center gap-2 mb-10">
          {TABS.map((tab) => {
            const Icon = tab.icon;
            const isActive = active === tab.key;
            return (
              <button
                key={tab.key}
                type="button"
                onClick={() => setActive(tab.key)}
                className={`inline-flex items-center gap-2 rounded-pill px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                  isActive ? 'bg-primary text-primary-foreground' : 'bg-canvas text-ink/70 border border-hairline hover:bg-hairline-soft'
                }`}
              >
                <Icon className="h-4 w-4" />
                {tab.label}
              </button>
            );
          })}
        </div>

        <div className="flex justify-center min-h-[320px] items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35, ease: easeOut }}
            >
              <WebsiteMockup
                imageUrl={screenshots[active]}
                alt={`${projectName}, ${active} preview`}
                device={active}
                className={FRAME_SIZE[active]}
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default ScreenshotGallery;

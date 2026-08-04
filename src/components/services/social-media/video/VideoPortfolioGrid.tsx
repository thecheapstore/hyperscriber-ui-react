import React from 'react';
import { motion } from 'framer-motion';
import { Clapperboard } from 'lucide-react';
import { staggerContainer, fadeUp, viewportOnce } from '@/lib/motion';
import { socialVideos } from '../../data/socialVideos';
import VideoPortfolioCard from './VideoPortfolioCard';

const EmptyState = () => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={viewportOnce}
    transition={{ duration: 0.5 }}
    className="border border-dashed border-hairline rounded-lg py-16 px-6 text-center max-w-xl mx-auto"
  >
    <div className="w-14 h-14 rounded-full bg-surface-soft flex items-center justify-center mx-auto mb-5">
      <Clapperboard className="h-6 w-6 text-ink/50" />
    </div>
    <h3 className="text-xl font-bold mb-2">Video Reel Launching Soon</h3>
    <p className="text-sm text-ink/60">
      We're adding recent client content here. In the meantime, book a call and we'll walk you through examples directly.
    </p>
  </motion.div>
);

const VideoPortfolioGrid = () => {
  if (socialVideos.length === 0) {
    return <EmptyState />;
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={staggerContainer}
      className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
    >
      {socialVideos.map((video) => (
        <VideoPortfolioCard key={video.id} video={video} />
      ))}
    </motion.div>
  );
};

export default VideoPortfolioGrid;

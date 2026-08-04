import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Heart, MessageCircle, Send, Bookmark, Play, Bell } from 'lucide-react';
import CountUp from './CountUp';

const STORY_RINGS = [
  { accent: 'from-block-coral to-accent-magenta', isYou: true },
  { accent: 'from-block-mint to-block-lime' },
  { accent: 'from-block-lilac to-accent-magenta' },
  { accent: 'from-block-lime to-block-mint' },
  { accent: 'from-accent-magenta to-block-lilac' },
];

/** Premium, abstract social-feed mockup — evokes a modern content app without copying any real platform's UI. */
const InstagramFeedMockup = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], [18, -18]);

  return (
    <div ref={containerRef} className="w-full h-full flex items-center justify-center">
      <motion.div style={{ y: parallaxY }} className="w-full h-full bg-canvas rounded-lg shadow-card overflow-hidden flex flex-col relative">
        {/* Header */}
        <div className="flex items-center gap-2.5 px-3.5 py-3 flex-shrink-0">
          <div className="relative w-8 h-8 rounded-full p-[2px] bg-gradient-to-br from-block-coral via-accent-magenta to-block-lilac flex-shrink-0">
            <div className="w-full h-full rounded-full bg-canvas flex items-center justify-center text-[10px] font-bold text-ink">CA</div>
          </div>
          <div className="flex-1 flex flex-col gap-1">
            <div className="h-2 w-20 rounded-full bg-ink/70" />
            <div className="h-1.5 w-12 rounded-full bg-hairline-soft" />
          </div>
          <motion.div
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
            className="relative"
          >
            <Bell className="h-3.5 w-3.5 text-ink/40" />
            <motion.span
              animate={{ scale: [1, 1.8, 1], opacity: [0.9, 0, 0.9] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 rounded-full bg-accent-magenta"
            />
          </motion.div>
        </div>

        {/* Story rings */}
        <div className="flex items-center gap-3 px-3.5 pb-3 flex-shrink-0">
          {STORY_RINGS.map((story, i) => (
            <motion.div
              key={i}
              animate={{ rotate: 360 }}
              transition={{ duration: 6 + i, repeat: Infinity, ease: 'linear' }}
              className={`w-8 h-8 rounded-full p-[2px] bg-gradient-to-tr ${story.accent} flex-shrink-0`}
            >
              <div className="w-full h-full rounded-full bg-canvas border-2 border-canvas flex items-center justify-center">
                {story.isYou && <span className="text-[10px] font-bold text-ink">+</span>}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Main post */}
        <div className="relative flex-1 mx-3.5 mb-3 rounded-md overflow-hidden bg-gradient-to-br from-block-mint via-surface-soft to-block-lilac">
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="w-11 h-11 rounded-full bg-ink/85 flex items-center justify-center shadow-card">
              <Play className="h-4 w-4 text-canvas fill-canvas ml-0.5" />
            </div>
          </motion.div>

          <span className="absolute top-2.5 left-2.5 font-mono text-[9px] uppercase tracking-[0.5px] text-ink/70 bg-canvas/80 rounded-pill px-2 py-0.5">
            Reel
          </span>

          {/* Floating engagement icons */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3.4, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-4 right-3 w-6 h-6 rounded-full bg-canvas/90 shadow-card flex items-center justify-center"
          >
            <Heart className="h-3 w-3 text-accent-magenta fill-accent-magenta" />
          </motion.div>
          <motion.div
            animate={{ y: [0, 9, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
            className="absolute bottom-14 right-4 w-6 h-6 rounded-full bg-canvas/90 shadow-card flex items-center justify-center"
          >
            <MessageCircle className="h-3 w-3 text-ink/70" />
          </motion.div>
          <motion.div
            animate={{ y: [0, -7, 0] }}
            transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut', delay: 1.1 }}
            className="absolute bottom-4 left-3 w-6 h-6 rounded-full bg-canvas/90 shadow-card flex items-center justify-center"
          >
            <Send className="h-3 w-3 text-ink/70" />
          </motion.div>
        </div>

        {/* Action row + animated likes */}
        <div className="flex items-center gap-3 px-3.5 pb-3.5 flex-shrink-0">
          <motion.div animate={{ scale: [1, 1.25, 1] }} transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}>
            <Heart className="h-4 w-4 text-accent-magenta fill-accent-magenta" />
          </motion.div>
          <MessageCircle className="h-4 w-4 text-ink/60" />
          <Send className="h-4 w-4 text-ink/60" />
          <Bookmark className="h-4 w-4 text-ink/60 ml-auto" />
        </div>
        <div className="px-3.5 -mt-2.5 pb-3 flex-shrink-0">
          <span className="text-[11px] font-semibold text-ink tabular-nums">
            <CountUp value={1.2} suffix="K" duration={1.4} /> likes
          </span>
        </div>
      </motion.div>
    </div>
  );
};

export default InstagramFeedMockup;

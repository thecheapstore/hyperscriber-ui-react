import { motion } from 'framer-motion';
import { ArrowRight, Play, Film } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { staggerContainer, fadeUp, easeOut } from '@/lib/motion';

const CLIPS = [
  { color: 'bg-accent-magenta/70', width: 'w-[18%]' },
  { color: 'bg-block-mint/70', width: 'w-[26%]' },
  { color: 'bg-block-lilac/70', width: 'w-[14%]' },
  { color: 'bg-block-coral/70', width: 'w-[22%]' },
  { color: 'bg-white/30', width: 'w-[12%]' },
];

const VideoEditingHero = () => {
  return (
    <section className="relative pt-32 pb-24 md:pb-32 bg-ink overflow-hidden">
      {/* Cinematic gradient glows */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.35 }}
        transition={{ duration: 2 }}
        className="absolute -top-32 -left-20 w-[520px] h-[520px] rounded-full bg-accent-magenta/40 blur-[130px]"
      />
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 2, delay: 0.3 }}
        className="absolute -bottom-40 -right-20 w-[560px] h-[560px] rounded-full bg-block-lilac/40 blur-[140px]"
      />

      {/* Moving light streak */}
      <motion.div
        aria-hidden
        initial={{ x: '-30%', opacity: 0 }}
        animate={{ x: '130%', opacity: [0, 0.5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', repeatDelay: 2 }}
        className="absolute top-0 left-0 h-full w-40 -skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent"
      />

      <div className="container relative mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="text-center lg:text-left">
            <motion.span
              variants={fadeUp}
              className="inline-flex items-center gap-2 py-1.5 px-4 mb-6 font-mono uppercase text-caption tracking-[0.6px] rounded-pill bg-white/10 text-inverse-ink border border-white/10"
            >
              <Film className="h-3.5 w-3.5" />
              Video Editing
            </motion.span>

            <motion.h1 variants={fadeUp} className="text-inverse-ink mb-6 text-[clamp(2rem,1.3rem+3.2vw,3.75rem)] leading-[1.08]">
              We create videos that <span className="text-accent-magenta">stop the scroll.</span>
            </motion.h1>

            <motion.p variants={fadeUp} className="text-lg md:text-xl text-inverse-ink/70 mb-10 max-w-xl mx-auto lg:mx-0">
              Cinematic, conversion-focused editing that turns raw footage into content built to hold attention —
              across social, YouTube, ads and everything in between.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="https://calendly.com/calibreassociates/meeting" target="_blank" rel="noopener noreferrer">
                <Button className="w-full sm:w-auto rounded-pill px-8 py-6 text-base group bg-white text-ink hover:bg-white/90 id-calendly-booking">
                  Book Free Consultation
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </a>
              <Button variant="outline" className="w-full sm:w-auto rounded-pill px-8 py-6 text-base border-white/25 bg-transparent text-inverse-ink hover:bg-white/10" asChild>
                <a href="#portfolio">
                  <Play className="mr-2 h-4 w-4" />
                  View Portfolio
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Editing-interface-inspired visual — inspired by, not a recreation of, any specific NLE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: easeOut }}
            className="relative"
          >
            <div className="relative rounded-block border border-white/10 bg-white/[0.04] backdrop-blur-sm p-4 md:p-5 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.6)]">
              {/* Preview frame */}
              <div className="relative aspect-video rounded-lg overflow-hidden bg-gradient-to-br from-white/10 via-transparent to-black/40 border border-white/10">
                <motion.div
                  aria-hidden
                  animate={{ x: ['-100%', '200%'] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/15 to-transparent"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center">
                    <Play className="h-6 w-6 text-white fill-white ml-0.5" />
                  </span>
                </div>
                <span className="absolute top-3 right-3 font-mono text-[10px] uppercase tracking-[0.5px] text-white bg-black/40 backdrop-blur-md border border-white/15 rounded-pill px-2 py-1">
                  4K · 24fps
                </span>
              </div>

              {/* Timeline track */}
              <div className="mt-4 space-y-2">
                <div className="flex items-center gap-1 h-8 rounded-md bg-white/5 border border-white/10 overflow-hidden px-1">
                  {CLIPS.map((clip, i) => (
                    <motion.div
                      key={i}
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.5, delay: 0.6 + i * 0.08, ease: easeOut }}
                      style={{ transformOrigin: 'left' }}
                      className={`h-5 rounded-sm ${clip.color} ${clip.width}`}
                    />
                  ))}
                </div>
                <motion.div
                  animate={{ left: ['4%', '92%', '4%'] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                  className="relative h-3"
                >
                  <div className="absolute top-0 w-px h-8 -translate-y-6 bg-accent-magenta" />
                  <div className="absolute -top-1 -translate-y-6 -translate-x-1/2 w-2 h-2 rounded-full bg-accent-magenta" />
                </motion.div>
              </div>
            </div>

            {/* Floating stat chips */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-5 -left-5 hidden sm:flex items-center gap-2 bg-canvas border border-hairline rounded-pill px-3.5 py-2 shadow-card"
            >
              <span className="w-2 h-2 rounded-full bg-block-mint" />
              <span className="text-xs font-semibold text-ink">Cut on Beat</span>
            </motion.div>
            <motion.div
              animate={{ y: [0, 14, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
              className="absolute -bottom-5 -right-5 hidden sm:flex items-center gap-2 bg-canvas border border-hairline rounded-pill px-3.5 py-2 shadow-card"
            >
              <span className="w-2 h-2 rounded-full bg-accent-magenta" />
              <span className="text-xs font-semibold text-ink">+3x Watch Time</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VideoEditingHero;

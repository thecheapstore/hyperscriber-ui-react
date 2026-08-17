import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { staggerContainer, fadeUp, viewportOnce } from '@/lib/motion';
import type { ProjectGalleryItem, ProjectVideo } from '@/data/portfolio/types';

interface MediaGalleryProps {
  gallery: ProjectGalleryItem[];
  video?: ProjectVideo;
  eyebrow?: string;
  title?: string;
  description?: string;
}

/** Masonry-style campaign gallery with a click-to-enlarge lightbox, and an optional showcase video. */
const MediaGallery = ({
  gallery,
  video,
  eyebrow = 'THE CAMPAIGN',
  title = 'Campaign Gallery',
  description,
}: MediaGalleryProps) => {
  const [active, setActive] = useState<ProjectGalleryItem | null>(null);

  return (
    <section className="py-20 md:py-24 bg-surface-soft">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <motion.span variants={fadeUp} className="eyebrow inline-block py-1 px-3 mb-5 rounded-pill bg-canvas">
            {eyebrow}
          </motion.span>
          <motion.h2 variants={fadeUp}>{title}</motion.h2>
          {description && (
            <motion.p variants={fadeUp} className="text-ink/70 text-body-lg mt-4">
              {description}
            </motion.p>
          )}
        </motion.div>

        {video && (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeUp}
            className="max-w-xs mx-auto mb-14"
          >
            <video
              src={video.src}
              poster={video.poster}
              controls
              playsInline
              preload="metadata"
              className="w-full aspect-[9/16] object-cover rounded-block border border-hairline shadow-card bg-black"
            />
            {video.label && (
              <p className="text-center font-mono text-xs uppercase tracking-[0.5px] text-ink/50 mt-3">
                {video.label}
              </p>
            )}
          </motion.div>
        )}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="columns-2 sm:columns-3 lg:columns-4 gap-4 [column-fill:_balance]"
        >
          {gallery.map((item, index) => (
            <motion.button
              key={`${index}-${item.src}`}
              type="button"
              variants={fadeUp}
              onClick={() => setActive(item)}
              className="mb-4 block w-full break-inside-avoid overflow-hidden rounded-lg border border-hairline group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                decoding="async"
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </motion.button>
          ))}
        </motion.div>
      </div>

      <Dialog open={Boolean(active)} onOpenChange={(open) => !open && setActive(null)}>
        <DialogContent className="max-w-3xl bg-canvas border-hairline p-2 sm:p-3">
          <DialogTitle className="sr-only">{active?.alt ?? 'Campaign image'}</DialogTitle>
          <DialogDescription className="sr-only">Enlarged campaign image</DialogDescription>
          {active && <img src={active.src} alt={active.alt} className="w-full h-auto rounded-md" />}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default MediaGallery;

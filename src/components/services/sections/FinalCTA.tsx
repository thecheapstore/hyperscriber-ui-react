import React, { type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { fadeUp, staggerContainer, viewportOnce, easeOut } from '@/lib/motion';

interface FinalCTAProps {
  headline: string;
  description?: string;
  primaryLabel?: string;
  secondaryLabel?: string;
  /** Internal route or same-page hash anchor (e.g. "#portfolio") for the secondary button — falls back to the /contact page */
  secondaryHref?: string;
  secondaryIcon?: ReactNode;
}

const FinalCTA = ({
  headline,
  description = "Book a free consultation and we'll walk through exactly how we'd approach your project.",
  primaryLabel = 'Book Your Free Strategy Call',
  secondaryLabel = 'Request a Proposal',
  secondaryHref = '/contact',
  secondaryIcon = <Mail className="mr-2 h-4 w-4" />,
}: FinalCTAProps) => {
  const isHashLink = secondaryHref.startsWith('#');
  return (
    <section className="relative py-24 md:py-32 bg-primary overflow-hidden">
      {/* Floating decorative elements */}
      <motion.div
        aria-hidden
        animate={{ y: [0, -16, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-12 left-[8%] w-24 h-24 rounded-full bg-white/5"
      />
      <motion.div
        aria-hidden
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
        className="absolute bottom-16 right-[10%] w-32 h-32 rounded-full bg-white/5"
      />
      <motion.div
        aria-hidden
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
        className="absolute top-1/2 right-[20%] w-12 h-12 rounded-full bg-accent-magenta/40"
      />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer}
        className="container relative mx-auto px-4 sm:px-6 text-center"
      >
        <motion.span
          variants={fadeUp}
          className="inline-block py-1.5 px-4 mb-6 font-mono uppercase text-caption tracking-[0.6px] rounded-pill bg-white/10 text-inverse-ink"
        >
          Let's Talk
        </motion.span>
        <motion.h2 variants={fadeUp} className="text-inverse-ink max-w-3xl mx-auto mb-6">
          {headline}
        </motion.h2>
        <motion.p variants={fadeUp} className="text-inverse-ink/70 text-body-lg max-w-xl mx-auto mb-10">
          {description}
        </motion.p>

        <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="https://calendly.com/calibreassociates/meeting" target="_blank" rel="noopener noreferrer">
            <Button className="w-full sm:w-auto bg-canvas text-ink hover:bg-surface-soft rounded-pill px-8 py-6 text-base group id-calendly-booking">
              {primaryLabel}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </a>
          <Button variant="outline" className="w-full sm:w-auto border-white/30 bg-transparent text-inverse-ink hover:bg-white/10 rounded-pill px-8 py-6 text-base" asChild>
            {isHashLink ? (
              <a href={secondaryHref}>
                {secondaryIcon}
                {secondaryLabel}
              </a>
            ) : (
              <Link to={secondaryHref}>
                {secondaryIcon}
                {secondaryLabel}
              </Link>
            )}
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default FinalCTA;

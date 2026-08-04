import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { fadeUp, viewportOnce } from '@/lib/motion';
import type { ProjectTestimonial } from '@/data/portfolio/types';

interface CaseStudyTestimonialProps {
  testimonial: ProjectTestimonial;
}

/** Clearly-labeled placeholder testimonial, easy to replace with a real quote later. */
const CaseStudyTestimonial = ({ testimonial }: CaseStudyTestimonialProps) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={viewportOnce}
    variants={fadeUp}
    className="relative max-w-2xl mx-auto rounded-block bg-block-lilac p-8 md:p-10 text-center"
  >
    <span className="absolute top-4 right-4 font-mono text-[9px] uppercase tracking-[0.5px] text-ink/40">
      Placeholder
    </span>
    <Quote className="h-8 w-8 text-ink/25 mx-auto mb-4" />
    <p className="text-lg text-ink/80 leading-relaxed mb-6">&ldquo;{testimonial.quote}&rdquo;</p>
    <p className="font-semibold text-ink">{testimonial.name}</p>
    <p className="text-sm text-ink/60">{testimonial.role}</p>
  </motion.div>
);

export default CaseStudyTestimonial;

import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer, viewportOnce } from '@/lib/motion';

interface ServiceAnswerBlockProps {
  /** Question style H2, for example "What is lead generation and paid advertising?" */
  heading: string;
  /** 40 to 60 word direct answer, written so search engines and AI assistants can quote it */
  answer: string;
  eyebrow?: string;
  /** Optional extra content such as a row of internal links */
  children?: ReactNode;
}

/** Short, quotable "what is this service" answer placed near the top of every service page (AEO). */
const ServiceAnswerBlock = ({ heading, answer, eyebrow = 'THE SHORT ANSWER', children }: ServiceAnswerBlockProps) => (
  <section className="py-16 md:py-20 bg-canvas">
    <div className="container mx-auto px-4 sm:px-6">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer}
        className="max-w-3xl mx-auto rounded-block border border-hairline bg-surface-soft p-8 md:p-10"
      >
        <motion.span variants={fadeUp} className="eyebrow inline-block py-1 px-3 mb-5 rounded-pill bg-canvas">
          {eyebrow}
        </motion.span>
        <motion.h2 variants={fadeUp} className="mb-4 text-2xl md:text-3xl">
          {heading}
        </motion.h2>
        <motion.p variants={fadeUp} className="text-ink/80 text-body-lg">
          {answer}
        </motion.p>
        {children && (
          <motion.div variants={fadeUp} className="mt-5 text-sm text-ink/70">
            {children}
          </motion.div>
        )}
      </motion.div>
    </div>
  </section>
);

export default ServiceAnswerBlock;

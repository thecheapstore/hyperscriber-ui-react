import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Link } from '@/lib/routerLink';
import { fadeUp, staggerContainer, viewportOnce } from '@/lib/motion';

export interface ContentCard {
  /** H3 heading, written as a long tail phrase people actually search */
  heading: string;
  body: ReactNode;
}

interface ServiceContentSectionProps {
  eyebrow: string;
  /** H2 heading containing the long tail keyword for this block */
  title: string;
  intro?: ReactNode;
  cards: ContentCard[];
  tone?: 'canvas' | 'soft';
}

const linkClass = 'font-semibold text-ink underline underline-offset-2 hover:no-underline';

/** In text link to another page on this site, uses the trailing slash aware Link. */
export const InlineLink = ({ to, children }: { to: string; children: ReactNode }) => (
  <Link to={to} className={linkClass}>
    {children}
  </Link>
);

/** In text link to a trusted outside source such as official documentation. */
export const ExternalInlineLink = ({ href, children }: { href: string; children: ReactNode }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className={linkClass}>
    {children}
  </a>
);

/** Keyword rich H2 with a row of H3 cards, used to deepen a service page without changing its design language. */
const ServiceContentSection = ({ eyebrow, title, intro, cards, tone = 'soft' }: ServiceContentSectionProps) => {
  const bg = tone === 'soft' ? 'bg-surface-soft' : 'bg-canvas';
  const cardBg = tone === 'soft' ? 'bg-canvas' : 'bg-surface-soft';
  const columns = cards.length === 2 ? 'md:grid-cols-2' : 'md:grid-cols-2 lg:grid-cols-3';

  return (
    <section className={`py-20 md:py-24 ${bg}`}>
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <motion.span
            variants={fadeUp}
            className={`eyebrow inline-block py-1 px-3 mb-5 rounded-pill ${tone === 'soft' ? 'bg-canvas' : 'bg-surface-soft'}`}
          >
            {eyebrow}
          </motion.span>
          <motion.h2 variants={fadeUp} className="mb-4">
            {title}
          </motion.h2>
          {intro && (
            <motion.p variants={fadeUp} className="text-ink/70 text-body-lg">
              {intro}
            </motion.p>
          )}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          className={`grid grid-cols-1 ${columns} gap-6`}
        >
          {cards.map((card) => (
            <motion.article
              key={card.heading}
              variants={fadeUp}
              className={`rounded-block border border-hairline ${cardBg} p-7`}
            >
              <h3 className="text-lg font-bold mb-3">{card.heading}</h3>
              <p className="text-sm md:text-base text-ink/70 leading-relaxed">{card.body}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceContentSection;

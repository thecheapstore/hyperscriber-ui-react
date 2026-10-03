import { motion } from 'framer-motion';
import { Link } from '@/lib/routerLink';
import { staggerContainer, fadeUp, viewportOnce } from '@/lib/motion';

/** Short, quotable definition of the business, placed straight after the hero for search and AI answer engines. */
const HomeAnswerBlock = () => {
  return (
    <section id="what-we-do" className="py-20 md:py-24 bg-canvas">
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="max-w-4xl mx-auto bg-surface-soft border border-hairline rounded-block p-8 md:p-12"
        >
          <motion.span variants={fadeUp} className="eyebrow inline-block py-1 px-3 mb-5 rounded-pill bg-canvas border border-hairline">
            WHAT WE DO
          </motion.span>
          <motion.h2 variants={fadeUp} className="mb-6">
            What Calibre Associates Does
          </motion.h2>
          <motion.p variants={fadeUp} className="text-body-lg text-ink/80 mb-6">
            Calibre Associates is a digital marketing agency for small businesses and growing brands in India and the
            USA. We build websites, run local SEO and paid advertising, manage social media, edit video and set up AI
            automation and CRM workflows, so one team handles your marketing and technology. We work from Lucknow,
            India and Buffalo, New York.
          </motion.p>
          <motion.p variants={fadeUp} className="text-ink/70">
            Learn more{' '}
            <Link to="/why-us" className="text-ink underline underline-offset-4 hover:opacity-70">
              about how we work
            </Link>
            , read our{' '}
            <Link to="/faq" className="text-ink underline underline-offset-4 hover:opacity-70">
              digital marketing FAQs
            </Link>{' '}
            or{' '}
            <Link to="/contact" className="text-ink underline underline-offset-4 hover:opacity-70">
              contact the team for a free consultation
            </Link>
            .
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeAnswerBlock;

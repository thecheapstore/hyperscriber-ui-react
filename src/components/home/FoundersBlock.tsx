import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from '@/lib/routerLink';
import { staggerContainer, fadeUp, viewportOnce } from '@/lib/motion';

const FOUNDERS = [
  {
    name: 'Abhijeet Jain',
    role: 'Founder and CEO',
    body: 'Abhijeet works across web and app development, AI automation, local SEO and CRM systems including GoHighLevel. He is also Managing Director of 716 Lawn Care in Buffalo, so he runs marketing and technology for a real local business, not just advises one.',
    to: '/our-team/abhijeet-jain/',
    anchor: 'Meet Abhijeet Jain, founder of Calibre Associates',
    bg: 'bg-block-cream',
  },
  {
    name: 'Manasvi Pathak',
    role: 'Co Founder and Talent Manager',
    body: 'Manasvi leads talent management and brand representation, connecting brands with creators, models, actors and on camera talent for campaigns and UGC content.',
    to: '/our-team/manasvi-pathak/',
    anchor: 'Meet Manasvi Pathak, co founder and talent manager',
    bg: 'bg-block-pink',
  },
];

const FoundersBlock = () => {
  return (
    <section id="founders" className="py-24 md:py-32 bg-surface-soft">
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="max-w-3xl mb-14 md:mb-16"
        >
          <motion.span variants={fadeUp} className="eyebrow inline-block py-1 px-3 mb-5 rounded-pill bg-canvas border border-hairline">
            THE FOUNDERS
          </motion.span>
          <motion.h2 variants={fadeUp} className="mb-4">
            Founder Led, With Real Business Experience
          </motion.h2>
          <motion.p variants={fadeUp} className="text-ink/70 text-body-lg">
            Calibre Associates was founded in Lucknow, India in December 2025 to give businesses one coordinated team
            for branding, websites, marketing and automation.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6"
        >
          {FOUNDERS.map((founder) => (
            <motion.div key={founder.name} variants={fadeUp} className={`${founder.bg} rounded-block p-8 md:p-10 flex flex-col`}>
              <h3 className="text-2xl font-bold text-ink">{founder.name}</h3>
              <p className="font-mono text-[11px] uppercase tracking-[0.5px] text-ink/60 mb-4 mt-1">{founder.role}</p>
              <p className="text-ink/70 mb-6">{founder.body}</p>
              <Link
                to={founder.to}
                className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-ink underline underline-offset-4 hover:opacity-70"
              >
                {founder.anchor}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FoundersBlock;

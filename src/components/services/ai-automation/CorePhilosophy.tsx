import { motion } from 'framer-motion';
import { Users, Repeat, TrendingUp } from 'lucide-react';
import { staggerContainer, fadeUp, viewportOnce } from '@/lib/motion';

const POINTS = [
  { icon: Users, title: 'People Stay in Charge', description: 'Automation handles the workflow — your team still makes the decisions that matter.' },
  { icon: Repeat, title: 'Repetitive Work Disappears', description: 'Data entry, follow-ups and status updates happen automatically, every time.' },
  { icon: TrendingUp, title: 'Time Goes Back to Growth', description: 'Hours saved get reinvested into sales, service and the work that actually grows the business.' },
];

const CorePhilosophy = () => {
  return (
    <section className="py-20 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.span variants={fadeUp} className="eyebrow inline-block py-1 px-3 mb-5 rounded-pill bg-surface-soft">
            OUR PHILOSOPHY
          </motion.span>
          <motion.h2 variants={fadeUp} className="mb-5">
            Automation Doesn't Replace People. It Removes the Work They Shouldn't Be Doing.
          </motion.h2>
          <motion.p variants={fadeUp} className="text-ink/70 text-body-lg">
            Every workflow we build is designed to take repetitive, manual tasks off your team's plate —
            so the people you've hired can spend their time on the work that actually grows the business.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          {POINTS.map((point) => (
            <motion.div
              key={point.title}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className="text-center bg-canvas border border-hairline rounded-block p-7 transition-shadow duration-300 hover:shadow-card"
            >
              <div className="w-12 h-12 rounded-full bg-surface-soft text-ink flex items-center justify-center mx-auto mb-5">
                <point.icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold mb-2">{point.title}</h3>
              <p className="text-sm text-ink/70">{point.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CorePhilosophy;

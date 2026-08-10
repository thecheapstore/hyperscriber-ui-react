import { motion } from 'framer-motion';
import { staggerContainer, fadeUp, viewportOnce } from '@/lib/motion';
import TrustBadges, { type TrustBadge } from '../social-media/TrustBadges';
import PricingTierCard, { type PricingTier } from './PricingTierCard';

interface PricingTiersProps {
  tiers: PricingTier[];
  eyebrow?: string;
  title?: string;
  description?: string;
  trustBadges?: TrustBadge[];
  footnote?: string;
}

const PricingTiers = ({
  tiers,
  eyebrow = 'PRICING',
  title = 'Plans Built Around Your Goals',
  description = "Every engagement is scoped around your business, reach out and we'll put together a plan that fits.",
  trustBadges,
  footnote,
}: PricingTiersProps) => {
  return (
    <section id="pricing" className="py-20 md:py-24 bg-canvas">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <motion.span variants={fadeUp} className="eyebrow inline-block py-1 px-3 mb-5 rounded-pill bg-surface-soft">
            {eyebrow}
          </motion.span>
          <motion.h2 variants={fadeUp} className="mb-4">{title}</motion.h2>
          <motion.p variants={fadeUp} className="text-ink/70 text-body-lg">{description}</motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {tiers.map((tier) => (
            <motion.div key={tier.id} variants={fadeUp} className="h-full">
              <PricingTierCard tier={tier} />
            </motion.div>
          ))}
        </motion.div>

        {trustBadges && <TrustBadges badges={trustBadges} />}
        {footnote && <p className="text-center text-xs text-ink/40 mt-4">{footnote}</p>}
      </div>
    </section>
  );
};

export default PricingTiers;

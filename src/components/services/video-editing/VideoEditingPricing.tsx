import { motion } from 'framer-motion';
import { RefreshCw, Award, Zap, MonitorSmartphone } from 'lucide-react';
import { staggerContainer, fadeUp, viewportOnce } from '@/lib/motion';
import TrustBadges from '../social-media/TrustBadges';
import VideoEditingPricingCard from './VideoEditingPricingCard';
import { videoEditingTiers } from './data/videoEditingPricing';

const PRICING_TRUST_BADGES = [
  { icon: <RefreshCw className="h-4 w-4" />, label: 'Unlimited Revisions*' },
  { icon: <Award className="h-4 w-4" />, label: 'Professional Editing' },
  { icon: <Zap className="h-4 w-4" />, label: 'Fast Turnaround' },
  { icon: <MonitorSmartphone className="h-4 w-4" />, label: 'Platform Optimized' },
];

const VideoEditingPricing = () => {
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
            PRICING
          </motion.span>
          <motion.h2 variants={fadeUp} className="mb-4">Plans Built Around Your Content</motion.h2>
          <motion.p variants={fadeUp} className="text-ink/70 text-body-lg">
            Every project is scoped around your footage, platforms and turnaround needs — reach out and we'll put
            together a plan that fits.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {videoEditingTiers.map((tier) => (
            <motion.div key={tier.id} variants={fadeUp} className="h-full">
              <VideoEditingPricingCard tier={tier} />
            </motion.div>
          ))}
        </motion.div>

        <TrustBadges badges={PRICING_TRUST_BADGES} />
        <p className="text-center text-xs text-ink/40 mt-4">*Revision policy varies by package — confirmed during your consultation.</p>
      </div>
    </section>
  );
};

export default VideoEditingPricing;

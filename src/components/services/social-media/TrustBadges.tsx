import React, { type ReactNode } from 'react';
import { motion } from 'framer-motion';
import { CalendarClock, ShieldCheck, Unlock, XCircle } from 'lucide-react';
import { staggerContainer, fadeUp, viewportOnce } from '@/lib/motion';

export interface TrustBadge {
  icon: ReactNode;
  label: string;
}

const DEFAULT_BADGES: TrustBadge[] = [
  { icon: <CalendarClock className="h-4 w-4" />, label: 'Monthly Retainers' },
  { icon: <ShieldCheck className="h-4 w-4" />, label: 'No Hidden Fees' },
  { icon: <Unlock className="h-4 w-4" />, label: 'No Long Term Commitment' },
  { icon: <XCircle className="h-4 w-4" />, label: 'Cancel Anytime' },
];

interface TrustBadgesProps {
  badges?: TrustBadge[];
}

const TrustBadges = ({ badges = DEFAULT_BADGES }: TrustBadgesProps) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={viewportOnce}
    variants={staggerContainer}
    className="flex flex-wrap justify-center gap-3 mt-14"
  >
    {badges.map((badge, index) => (
      <motion.div
        key={`${index}-${badge.label}`}
        variants={fadeUp}
        className="inline-flex items-center gap-2 rounded-pill border border-hairline bg-surface-soft px-4 py-2 text-sm font-medium text-ink/70"
      >
        <span className="text-ink">{badge.icon}</span>
        {badge.label}
      </motion.div>
    ))}
  </motion.div>
);

export default TrustBadges;

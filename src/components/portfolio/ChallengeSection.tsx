import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle } from 'lucide-react';
import { fadeUp } from '@/lib/motion';

interface ChallengeSectionProps {
  challenge: string;
}

/** Column content, pair with SolutionSection inside a shared two-column section. */
const ChallengeSection = ({ challenge }: ChallengeSectionProps) => (
  <motion.div variants={fadeUp} className="bg-canvas border border-hairline rounded-lg p-8">
    <div className="w-11 h-11 rounded-lg bg-surface-soft flex items-center justify-center mb-5">
      <AlertCircle className="h-5 w-5 text-ink" />
    </div>
    <span className="font-mono text-caption uppercase tracking-[0.6px] text-ink/40">The Challenge</span>
    <p className="text-ink/80 mt-3 leading-relaxed">{challenge}</p>
  </motion.div>
);

export default ChallengeSection;

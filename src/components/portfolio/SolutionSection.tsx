import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb } from 'lucide-react';
import { fadeUp } from '@/lib/motion';

interface SolutionSectionProps {
  solution: string;
}

/** Column content, pair with ChallengeSection inside a shared two-column section. */
const SolutionSection = ({ solution }: SolutionSectionProps) => (
  <motion.div variants={fadeUp} className="bg-ink text-inverse-ink rounded-lg p-8">
    <div className="w-11 h-11 rounded-lg bg-white/10 flex items-center justify-center mb-5">
      <Lightbulb className="h-5 w-5 text-inverse-ink" />
    </div>
    <span className="font-mono text-caption uppercase tracking-[0.6px] text-inverse-ink/50">The Solution</span>
    <p className="text-inverse-ink/85 mt-3 leading-relaxed">{solution}</p>
  </motion.div>
);

export default SolutionSection;

import React from 'react';
import { motion } from 'framer-motion';
import { Compass } from 'lucide-react';
import { fadeUp } from '@/lib/motion';

interface StrategySectionProps {
  strategy: string;
}

/** Column content, how we approached the challenge, ahead of what we built (Solution). */
const StrategySection = ({ strategy }: StrategySectionProps) => (
  <motion.div variants={fadeUp} className="bg-block-mint rounded-lg p-8">
    <div className="w-11 h-11 rounded-lg bg-canvas/60 flex items-center justify-center mb-5">
      <Compass className="h-5 w-5 text-ink" />
    </div>
    <span className="font-mono text-caption uppercase tracking-[0.6px] text-ink/50">Our Strategy</span>
    <p className="text-ink/80 mt-3 leading-relaxed">{strategy}</p>
  </motion.div>
);

export default StrategySection;

import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Factory, MapPin } from 'lucide-react';
import { fadeUp } from '@/lib/motion';
import type { ProjectAbout } from '@/data/portfolio/types';

interface AboutClientSectionProps {
  about: ProjectAbout;
}

const AboutClientSection = ({ about }: AboutClientSectionProps) => (
  <motion.div variants={fadeUp} className="grid grid-cols-1 sm:grid-cols-3 gap-6">
    <div className="flex items-start gap-3">
      <Building2 className="h-5 w-5 text-ink/50 flex-shrink-0 mt-0.5" />
      <div>
        <span className="font-mono text-caption uppercase tracking-[0.6px] text-ink/40 block mb-1">Business</span>
        <p className="text-sm text-ink/80">{about.business}</p>
      </div>
    </div>
    <div className="flex items-start gap-3">
      <Factory className="h-5 w-5 text-ink/50 flex-shrink-0 mt-0.5" />
      <div>
        <span className="font-mono text-caption uppercase tracking-[0.6px] text-ink/40 block mb-1">Industry</span>
        <p className="text-sm text-ink/80">{about.industry}</p>
      </div>
    </div>
    <div className="flex items-start gap-3">
      <MapPin className="h-5 w-5 text-ink/50 flex-shrink-0 mt-0.5" />
      <div>
        <span className="font-mono text-caption uppercase tracking-[0.6px] text-ink/40 block mb-1">Location</span>
        <p className="text-sm text-ink/80">{about.location}</p>
      </div>
    </div>
  </motion.div>
);

export default AboutClientSection;

import { motion } from 'framer-motion';
import {
  Smartphone,
  Building2,
  HeartPulse,
  GraduationCap,
  Shirt,
  Sparkles,
  UtensilsCrossed,
  Briefcase,
  Cpu,
  HardHat,
  Crown,
  UserCircle2,
  Camera,
  Mic2,
  Youtube,
  Megaphone,
} from 'lucide-react';
import { staggerContainer, fadeUp, viewportOnce } from '@/lib/motion';

const INDUSTRIES = [
  { label: 'UGC', icon: Smartphone },
  { label: 'Real Estate', icon: Building2 },
  { label: 'Healthcare', icon: HeartPulse },
  { label: 'Education', icon: GraduationCap },
  { label: 'Fashion', icon: Shirt },
  { label: 'Beauty', icon: Sparkles },
  { label: 'Restaurants', icon: UtensilsCrossed },
  { label: 'Corporate', icon: Briefcase },
  { label: 'Technology', icon: Cpu },
  { label: 'Construction', icon: HardHat },
  { label: 'Luxury Brands', icon: Crown },
  { label: 'Personal Branding', icon: UserCircle2 },
  { label: 'Creators', icon: Camera },
  { label: 'Podcasts', icon: Mic2 },
  { label: 'YouTube Channels', icon: Youtube },
  { label: 'Commercial Advertising', icon: Megaphone },
];

const IndustriesWeEditFor = () => {
  return (
    <section className="py-20 md:py-24 bg-canvas">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <motion.span variants={fadeUp} className="eyebrow inline-block py-1 px-3 mb-5 rounded-pill bg-surface-soft">
            INDUSTRIES WE EDIT FOR
          </motion.span>
          <motion.h2 variants={fadeUp} className="mb-4">Built for Every Kind of Brand</motion.h2>
          <motion.p variants={fadeUp} className="text-ink/70 text-body-lg">
            From creators to enterprises, our editing style adapts to what each industry actually needs.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {INDUSTRIES.map((industry) => (
            <motion.div
              key={industry.label}
              variants={fadeUp}
              whileHover={{ y: -4 }}
              className="flex flex-col items-center text-center gap-3 bg-surface-soft rounded-lg p-6 transition-colors duration-300 hover:bg-hairline-soft"
            >
              <div className="w-12 h-12 rounded-full bg-canvas text-ink flex items-center justify-center">
                <industry.icon className="h-5 w-5" />
              </div>
              <span className="text-sm font-medium text-ink">{industry.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default IndustriesWeEditFor;

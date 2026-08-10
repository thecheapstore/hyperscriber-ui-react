import React from 'react';
import { motion } from 'framer-motion';
import {
  Compass,
  PenTool,
  Atom,
  Newspaper,
  ShoppingCart,
  Search,
  Gauge,
  Target,
  Sparkles,
  Smartphone,
  Code2,
  CheckCircle2,
} from 'lucide-react';
import { staggerContainer, fadeUp, viewportOnce } from '@/lib/motion';

interface BuiltBySectionProps {
  /** Services delivered on this specific project, only relevant items are ever shown. */
  services: string[];
}

const ICON_RULES: Array<{ test: RegExp; icon: React.ReactNode }> = [
  { test: /strategy/i, icon: <Compass className="h-5 w-5" /> },
  { test: /shopify|ecommerce/i, icon: <ShoppingCart className="h-5 w-5" /> },
  { test: /wordpress/i, icon: <Newspaper className="h-5 w-5" /> },
  { test: /react/i, icon: <Atom className="h-5 w-5" /> },
  { test: /seo/i, icon: <Search className="h-5 w-5" /> },
  { test: /performance/i, icon: <Gauge className="h-5 w-5" /> },
  { test: /conversion/i, icon: <Target className="h-5 w-5" /> },
  { test: /brand/i, icon: <Sparkles className="h-5 w-5" /> },
  { test: /responsive|mobile/i, icon: <Smartphone className="h-5 w-5" /> },
  { test: /ui\/ux|design|experience/i, icon: <PenTool className="h-5 w-5" /> },
  { test: /development|architecture|frontend/i, icon: <Code2 className="h-5 w-5" /> },
];

const getServiceIcon = (label: string): React.ReactNode => {
  const match = ICON_RULES.find((rule) => rule.test.test(label));
  return match ? match.icon : <CheckCircle2 className="h-5 w-5" />;
};

/** Recaps the specific services Calibre delivered on this project. Renders nothing if none are set. */
const BuiltBySection = ({ services }: BuiltBySectionProps) => {
  if (!services || services.length === 0) return null;

  return (
    <section className="py-20 md:py-24 bg-surface-soft">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <motion.span variants={fadeUp} className="eyebrow inline-block py-1 px-3 mb-5 rounded-pill bg-canvas">
            OUR ROLE
          </motion.span>
          <motion.h2 variants={fadeUp}>Built by Calibre Associates</motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-3 gap-4"
        >
          {services.map((service, index) => (
            <motion.div
              key={`${index}-${service}`}
              variants={fadeUp}
              className="flex items-center gap-3 bg-canvas border border-hairline rounded-lg px-4 py-3.5"
            >
              <div className="w-9 h-9 rounded-lg bg-block-mint flex items-center justify-center text-ink flex-shrink-0">
                {getServiceIcon(service)}
              </div>
              <span className="text-sm font-medium text-ink">{service}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BuiltBySection;

import React from 'react';
import { motion } from 'framer-motion';
import {
  Smartphone, FileEdit, Search, Gauge, ClipboardList, Workflow,
  ShoppingCart, CalendarCheck, ShieldCheck, CheckCircle2,
} from 'lucide-react';
import { staggerContainer, fadeUp, viewportOnce } from '@/lib/motion';

const ICON_MAP: Array<{ match: RegExp; icon: React.ElementType }> = [
  { match: /responsive|mobile/i, icon: Smartphone },
  { match: /cms|content/i, icon: FileEdit },
  { match: /seo|search/i, icon: Search },
  { match: /speed|performance|optimi[sz]ation/i, icon: Gauge },
  { match: /form/i, icon: ClipboardList },
  { match: /automation|workflow|integration/i, icon: Workflow },
  { match: /e-?commerce|shop|store|cart/i, icon: ShoppingCart },
  { match: /booking|schedul|appointment/i, icon: CalendarCheck },
  { match: /secur|ssl/i, icon: ShieldCheck },
];

const pickIcon = (label: string) => ICON_MAP.find((entry) => entry.match.test(label))?.icon ?? CheckCircle2;

interface FeatureGridProps {
  features: string[];
  title?: string;
  eyebrow?: string;
}

const FeatureGrid = ({ features, title = 'Features Delivered', eyebrow = 'WHAT SHIPPED' }: FeatureGridProps) => {
  return (
    <section className="py-20 md:py-24 bg-canvas">
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
          <motion.h2 variants={fadeUp}>{title}</motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {features.map((feature, index) => {
            const Icon = pickIcon(feature);
            return (
              <motion.div
                key={`${index}-${feature}`}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                className="flex flex-col items-center text-center gap-3 bg-surface-soft rounded-lg p-6 transition-colors duration-300 hover:bg-hairline-soft"
              >
                <div className="w-11 h-11 rounded-full bg-canvas text-ink flex items-center justify-center">
                  <Icon className="h-5 w-5" />
                </div>
                <span className="text-sm font-medium text-ink">{feature}</span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default FeatureGrid;

import type { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { staggerContainer, fadeUp, viewportOnce } from '@/lib/motion';

export interface IndustryItem {
  label: string;
  icon: LucideIcon;
}

interface IndustryIconGridProps {
  items: IndustryItem[];
  eyebrow?: string;
  title?: string;
  description?: string;
}

const IndustryIconGrid = ({
  items,
  eyebrow = 'INDUSTRIES WE SERVE',
  title = 'Built for Businesses Like Yours',
  description = "We've worked across a wide range of industries, adapting our approach to what each business actually needs.",
}: IndustryIconGridProps) => {
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
            {eyebrow}
          </motion.span>
          <motion.h2 variants={fadeUp} className="mb-4">
            {title}
          </motion.h2>
          <motion.p variants={fadeUp} className="text-ink/70 text-body-lg">
            {description}
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4"
        >
          {items.map((item) => (
            <motion.div
              key={item.label}
              variants={fadeUp}
              whileHover={{ y: -4 }}
              className="flex flex-col items-center text-center gap-3 bg-surface-soft rounded-lg p-6 transition-colors duration-300 hover:bg-hairline-soft"
            >
              <div className="w-12 h-12 rounded-full bg-canvas text-ink flex items-center justify-center">
                <item.icon className="h-5 w-5" />
              </div>
              <span className="text-sm font-medium text-ink">{item.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default IndustryIconGrid;

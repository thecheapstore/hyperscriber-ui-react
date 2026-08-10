import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { fadeUp } from '@/lib/motion';

type BulletListCardVariant = 'light' | 'dark' | 'accent';

interface BulletListCardProps {
  icon: React.ReactNode;
  eyebrow: string;
  title?: string;
  /** Optional lead-in paragraph shown above the bullet list */
  description?: string;
  items: string[];
  variant?: BulletListCardVariant;
  className?: string;
}

const VARIANT_STYLES: Record<BulletListCardVariant, string> = {
  light: 'bg-canvas border border-hairline text-ink',
  dark: 'bg-ink text-inverse-ink',
  accent: 'bg-block-lilac text-ink',
};

const VARIANT_ICON_WRAP: Record<BulletListCardVariant, string> = {
  light: 'bg-surface-soft',
  dark: 'bg-white/10',
  accent: 'bg-canvas/60',
};

const VARIANT_EYEBROW: Record<BulletListCardVariant, string> = {
  light: 'text-ink/40',
  dark: 'text-inverse-ink/50',
  accent: 'text-ink/50',
};

const VARIANT_CHECK: Record<BulletListCardVariant, string> = {
  light: 'text-ink',
  dark: 'text-inverse-ink/80',
  accent: 'text-ink/70',
};

const VARIANT_DESCRIPTION: Record<BulletListCardVariant, string> = {
  light: 'text-ink/70',
  dark: 'text-inverse-ink/70',
  accent: 'text-ink/70',
};

/** Reusable bullet-list card, powers Client Goals, SEO Foundation, Performance Optimization, and Business Impact. */
const BulletListCard = ({ icon, eyebrow, title, description, items, variant = 'light', className = '' }: BulletListCardProps) => (
  <motion.div variants={fadeUp} className={`rounded-lg p-8 ${VARIANT_STYLES[variant]} ${className}`}>
    <div className={`w-11 h-11 rounded-lg flex items-center justify-center mb-5 ${VARIANT_ICON_WRAP[variant]}`}>
      {icon}
    </div>
    <span className={`font-mono text-caption uppercase tracking-[0.6px] ${VARIANT_EYEBROW[variant]}`}>{eyebrow}</span>
    {title && <h3 className="text-xl font-bold mt-2 mb-1">{title}</h3>}
    {description && <p className={`text-sm leading-relaxed mt-3 ${VARIANT_DESCRIPTION[variant]}`}>{description}</p>}
    <ul className={`space-y-3 ${title || description ? 'mt-4' : 'mt-3'}`}>
      {items.map((item, index) => (
        <li key={`${index}-${item}`} className="flex items-start gap-2.5">
          <CheckCircle2 className={`h-4 w-4 flex-shrink-0 mt-0.5 ${VARIANT_CHECK[variant]}`} />
          <span className="text-sm leading-relaxed">{item}</span>
        </li>
      ))}
    </ul>
  </motion.div>
);

export default BulletListCard;

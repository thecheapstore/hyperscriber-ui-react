import React from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { CheckCircle2, Sparkles, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import type { Currency, PricingPackage } from '../data/pricing';
import { CURRENCY_SYMBOLS } from '../data/pricing';

interface PricingPackageCardProps {
  pkg: PricingPackage;
  currency: Currency;
}

const PricingPackageCard = ({ pkg, currency }: PricingPackageCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      className={`relative flex flex-col h-full rounded-block border p-8 transition-shadow duration-300 hover:shadow-card ${
        pkg.highlight ? 'border-ink bg-ink text-inverse-ink' : 'border-hairline bg-canvas text-ink'
      }`}
    >
      {pkg.highlight && (
        <span className="absolute -top-3 left-8 inline-flex items-center gap-1.5 rounded-pill bg-accent-magenta px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.5px] text-white">
          <Sparkles className="h-3 w-3" />
          Most Popular
        </span>
      )}

      <h3 className="text-xl font-bold mb-1">{pkg.name}</h3>

      {pkg.isCustom ? (
        <p className={`text-lg font-semibold mb-6 ${pkg.highlight ? 'text-inverse-ink' : 'text-ink'}`}>
          {pkg.customHeadline ?? 'Custom Pricing'}
        </p>
      ) : (
        <div className="mb-6 h-12 flex items-end">
          <AnimatePresence mode="wait">
            <motion.div
              key={currency}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="flex items-baseline gap-1.5"
            >
              <span className="text-3xl md:text-4xl font-bold tabular-nums">
                {CURRENCY_SYMBOLS[currency]}
                {pkg.price?.[currency].toLocaleString('en-US')}
              </span>
              <span className={`text-sm ${pkg.highlight ? 'text-inverse-ink/60' : 'text-ink/50'}`}>{pkg.billingPeriod}</span>
            </motion.div>
          </AnimatePresence>
        </div>
      )}

      {pkg.isCustom && pkg.customDescription && (
        <p className={`text-sm leading-relaxed mb-6 ${pkg.highlight ? 'text-inverse-ink/70' : 'text-ink/70'}`}>
          {pkg.customDescription}
        </p>
      )}

      <ul className="space-y-3 mb-6">
        {pkg.includes.map((item, index) => (
          <li key={`${index}-${item}`} className="flex items-start gap-2.5">
            <CheckCircle2 className={`h-4 w-4 flex-shrink-0 mt-0.5 ${pkg.highlight ? 'text-inverse-ink/80' : 'text-ink'}`} />
            <span className="text-sm leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>

      {pkg.notes && pkg.notes.length > 0 && (
        <div className={`space-y-2 mb-6 ${pkg.highlight ? 'text-inverse-ink/50' : 'text-ink/50'}`}>
          {pkg.notes.map((note, index) => (
            <p key={index} className="text-xs leading-relaxed">
              {note}
            </p>
          ))}
        </div>
      )}

      {pkg.reporting && (
        <p className={`text-xs font-mono uppercase tracking-[0.5px] mb-6 ${pkg.highlight ? 'text-inverse-ink/50' : 'text-ink/40'}`}>
          Reporting: {pkg.reporting}
        </p>
      )}

      <div className="mt-auto pt-2">
        <Button
          asChild
          variant={pkg.highlight ? 'secondary' : 'default'}
          className="w-full rounded-pill group"
        >
          <Link to={pkg.ctaHref}>
            {pkg.ctaLabel}
            <ArrowRight className="ml-1.5 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </Button>
      </div>
    </motion.div>
  );
};

export default PricingPackageCard;

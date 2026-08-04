import React from 'react';
import { motion } from 'framer-motion';
import type { Currency } from '../data/pricing';

interface CurrencyToggleProps {
  value: Currency;
  onChange: (currency: Currency) => void;
}

const OPTIONS: Currency[] = ['INR', 'USD'];

const CurrencyToggle = ({ value, onChange }: CurrencyToggleProps) => {
  return (
    <div className="inline-flex items-center gap-1 rounded-pill border border-hairline bg-surface-soft p-1">
      {OPTIONS.map((currency) => {
        const isActive = value === currency;
        return (
          <button
            key={currency}
            type="button"
            onClick={() => onChange(currency)}
            aria-pressed={isActive}
            className="relative rounded-pill px-5 py-2 text-sm font-semibold transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            {isActive && (
              <motion.span
                layoutId="currency-toggle-active"
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0 rounded-pill bg-ink"
              />
            )}
            <span className={`relative ${isActive ? 'text-inverse-ink' : 'text-ink/60 hover:text-ink'}`}>
              {currency}
            </span>
          </button>
        );
      })}
    </div>
  );
};

export default CurrencyToggle;

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle2, Sparkles, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export interface PricingTier {
  id: string;
  name: string;
  /** Shown prominently in place of a price, e.g. "Contact for Pricing" */
  priceLabel?: string;
  description: string;
  features: string[];
  ctaLabel: string;
  featured?: boolean;
}

interface PricingTierCardProps {
  tier: PricingTier;
}

const PricingTierCard = ({ tier }: PricingTierCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      className={`relative flex flex-col h-full rounded-block border p-8 transition-shadow duration-300 hover:shadow-card ${
        tier.featured ? 'border-ink bg-ink text-inverse-ink' : 'border-hairline bg-canvas text-ink'
      }`}
    >
      {tier.featured && (
        <span className="absolute -top-3 left-8 inline-flex items-center gap-1.5 rounded-pill bg-accent-magenta px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.5px] text-white">
          <Sparkles className="h-3 w-3" />
          Most Popular
        </span>
      )}

      <h3 className="text-xl font-bold mb-1">{tier.name}</h3>
      {tier.priceLabel && (
        <p className={`text-lg font-semibold mb-3 ${tier.featured ? 'text-inverse-ink' : 'text-ink'}`}>{tier.priceLabel}</p>
      )}
      <p className={`text-sm leading-relaxed mb-6 ${tier.featured ? 'text-inverse-ink/70' : 'text-ink/70'}`}>
        {tier.description}
      </p>

      <ul className="space-y-3 mb-8 flex-grow">
        {tier.features.map((item) => (
          <li key={item} className="flex items-start gap-2.5">
            <CheckCircle2 className={`h-4 w-4 flex-shrink-0 mt-0.5 ${tier.featured ? 'text-inverse-ink/80' : 'text-ink'}`} />
            <span className="text-sm leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>

      <Button
        asChild
        variant={tier.featured ? 'secondary' : 'default'}
        className="w-full rounded-pill group mt-auto h-auto py-3.5 px-4 text-sm whitespace-normal"
      >
        <Link to="/contact">
          {tier.ctaLabel}
          <ArrowRight className="ml-1.5 h-4 w-4 flex-shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </Button>
    </motion.div>
  );
};

export default PricingTierCard;

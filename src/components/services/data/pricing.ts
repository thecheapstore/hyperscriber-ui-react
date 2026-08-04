export type Currency = 'INR' | 'USD';

export const CURRENCY_SYMBOLS: Record<Currency, string> = {
  INR: '₹',
  USD: '$',
};

export interface PricingPackage {
  id: string;
  name: string;
  /** Monthly price per currency — omitted entirely for the custom, quote-based tier */
  price?: Record<Currency, number>;
  billingPeriod?: string;
  isCustom?: boolean;
  /** Headline shown in place of a price on the custom tier */
  customHeadline?: string;
  /** Description shown below the headline on the custom tier */
  customDescription?: string;
  highlight?: boolean;
  includes: string[];
  notes?: string[];
  reporting?: string;
  ctaLabel: string;
  ctaHref: string;
}

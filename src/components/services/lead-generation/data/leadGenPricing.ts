import type { PricingTier } from '../../shared/PricingTierCard';

export const leadGenTiers: PricingTier[] = [
  {
    id: 'starter',
    name: 'Starter',
    priceLabel: 'Contact for Pricing',
    description: 'For businesses launching their first structured paid advertising campaigns.',
    features: ['Single-channel campaign management', 'Landing page setup', 'Lead tracking', 'Monthly performance reporting'],
    ctaLabel: 'Book Consultation',
  },
  {
    id: 'growth',
    name: 'Growth',
    priceLabel: 'Contact for Pricing',
    description: 'For businesses ready to scale across multiple channels with automation.',
    features: ['Multi-channel campaigns (Google + Meta)', 'CRM integration & lead routing', 'Email + SMS follow-up automation', 'A/B tested landing pages'],
    ctaLabel: 'Book Consultation',
    featured: true,
  },
  {
    id: 'scale',
    name: 'Scale',
    priceLabel: 'Contact for Pricing',
    description: 'A full-funnel system for businesses with an active sales team to feed.',
    features: ['Everything in Growth', 'Cold email & outreach sequencing', 'Sales team appointment routing', 'Reputation & review marketing'],
    ctaLabel: 'Book Consultation',
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    priceLabel: 'Contact for Pricing',
    description: 'A dedicated, custom-built lead generation system for agencies and large operations.',
    features: ['Custom-built campaign infrastructure', 'Dedicated strategy & reporting', 'Multi-location or multi-brand support', 'Priority optimization cycles'],
    ctaLabel: 'Book Consultation',
  },
];

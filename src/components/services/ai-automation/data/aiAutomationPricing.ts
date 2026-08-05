import type { PricingTier } from '../../shared/PricingTierCard';

export const aiAutomationTiers: PricingTier[] = [
  {
    id: 'starter',
    name: 'Starter',
    priceLabel: 'Contact for Pricing',
    description: 'For businesses automating their first core workflow.',
    features: ['CRM automation setup', 'Lead routing & notifications', 'Basic appointment automation', 'One core workflow built'],
    ctaLabel: 'Book Consultation',
  },
  {
    id: 'growth',
    name: 'Growth',
    priceLabel: 'Contact for Pricing',
    description: 'For businesses ready to automate across sales and customer communication.',
    features: ['Everything in Starter', 'AI chatbot or AI receptionist', 'Email + SMS nurture sequences', 'Multiple connected workflows'],
    ctaLabel: 'Book Consultation',
    featured: true,
  },
  {
    id: 'business',
    name: 'Business',
    priceLabel: 'Contact for Pricing',
    description: 'A full operational automation system across sales, service and admin.',
    features: ['Everything in Growth', 'Estimates, invoicing & payment automation', 'Internal business automation', 'Marketing automation & lead scoring'],
    ctaLabel: 'Book Consultation',
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    priceLabel: 'Contact for Pricing',
    description: 'Custom, API-level automation built for enterprise teams and complex operations.',
    features: ['Custom API integrations', 'Business-specific systems', 'Enterprise-grade workflows', 'Dedicated build & support'],
    ctaLabel: 'Book Consultation',
  },
];

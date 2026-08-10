import type { PricingPackage } from './pricing';

export type { Currency } from './pricing';
export { CURRENCY_SYMBOLS } from './pricing';
/** @deprecated use PricingPackage from './pricing' */
export type SocialMediaPackage = PricingPackage;

export const socialMediaPackages: PricingPackage[] = [
  {
    id: 'starter',
    name: 'Starter Package',
    price: { INR: 30000, USD: 300 },
    billingPeriod: '/month',
    includes: [
      '8 Reels',
      '4 Graphics',
      '4 Carousels',
      '4–6 Stories (T&Cs apply on story count)',
    ],
    notes: [
      'Reels use AI-generated video or client-supplied raw footage, edited with captions, background music, and basic trimming, no advanced motion graphics.',
      'Advanced editing, talking-head videos, premium AI videos, and cinematic editing are quoted separately based on project requirements.',
    ],
    reporting: 'Performance report once every two months',
    ctaLabel: 'Book Free Consultation',
    ctaHref: '/contact',
  },
  {
    id: 'advanced',
    name: 'Advanced Package',
    price: { INR: 60000, USD: 600 },
    billingPeriod: '/month',
    highlight: true,
    includes: [
      'Everything in Starter',
      'Advanced video editing',
      'Motion graphics',
      'Premium transitions',
      'Talking-head videos',
      'Professional editing workflow',
    ],
    notes: [
      'Pricing may vary for realistic AI avatars, real creators, AI influencers, or fully produced talking-head videos from scratch where scripting is client-supplied.',
    ],
    reporting: 'Monthly performance report',
    ctaLabel: 'Book Free Consultation',
    ctaHref: '/contact',
  },
  {
    id: 'premium',
    name: 'Premium Package',
    price: { INR: 100000, USD: 1000 },
    billingPeriod: '/month',
    includes: [
      'Everything in Starter & Advanced',
      '10 Reels',
      '6 Graphics',
      '5 Carousels',
      'Up to 8 Stories (T&Cs apply)',
    ],
    notes: [
      'For talking-head videos, Calibre Associates also handles script writing.',
    ],
    reporting: 'Monthly performance report',
    ctaLabel: 'Book Free Consultation',
    ctaHref: '/contact',
  },
  {
    id: 'custom',
    name: 'Custom Plan',
    isCustom: true,
    customHeadline: "Let's Build Your Custom Growth Plan",
    customDescription:
      'Perfect for brands requiring tailored content production, creators, UGC, AI influencers, paid advertising, and complete marketing support.',
    includes: [
      'Tailored content production',
      'Creators & UGC',
      'AI influencers',
      'Paid advertising',
      'Complete marketing support',
    ],
    ctaLabel: 'Request Custom Proposal',
    ctaHref: '/contact',
  },
];

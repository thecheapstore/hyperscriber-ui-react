export interface VideoEditingTier {
  id: string;
  name: string;
  description: string;
  features: string[];
  ctaLabel: string;
  featured?: boolean;
}

export const videoEditingTiers: VideoEditingTier[] = [
  {
    id: 'basic',
    name: 'Basic',
    description: 'Suitable for creators and small businesses requiring clean, professional editing.',
    features: ['Basic cuts', 'Captions', 'Music', 'Color adjustments', 'Platform optimization'],
    ctaLabel: 'Contact for Pricing',
  },
  {
    id: 'advanced',
    name: 'Advanced',
    description: 'Everything in Basic, plus richer motion and sound design for brands that need more polish.',
    features: [
      'Everything in Basic',
      'Motion Graphics',
      'Advanced Transitions',
      'Sound Design',
      'Premium Captions',
      'Brand Animations',
      'Dynamic Visual Effects',
    ],
    ctaLabel: 'Contact for Pricing',
    featured: true,
  },
  {
    id: 'premium',
    name: 'Premium',
    description: 'Designed for businesses requiring cinematic, commercial-grade production.',
    features: [
      'Full Creative Direction',
      'Story-driven Editing',
      'Motion Graphics',
      'Advanced Sound Design',
      'Color Grading',
      'Premium Visual Effects',
      'Platform-specific Optimization',
    ],
    ctaLabel: 'Contact for Pricing',
  },
  {
    id: 'custom',
    name: 'Custom',
    description: 'A completely tailored editing workflow for agencies, creators, brands and enterprises.',
    features: [
      'Long-form YouTube',
      'Podcasts',
      'Commercial Campaigns',
      'Product Launches',
      'Real Estate',
      'Corporate Videos',
      'UGC Production',
    ],
    ctaLabel: 'Request Custom Quote',
  },
];

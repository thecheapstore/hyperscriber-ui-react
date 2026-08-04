export type MockupVariant =
  | 'browser'
  | 'image'
  | 'dashboard'
  | 'social'
  | 'instagram'
  | 'search'
  | 'rankings'
  | 'video'
  | 'funnel'
  | 'workflow';

const SLUG_TO_VARIANT: Record<string, MockupVariant> = {
  'website-development': 'image',
  'application-software-development': 'dashboard',
  'social-media-marketing': 'instagram',
  seo: 'rankings',
  'video-editing': 'video',
  'lead-generation-paid-advertising': 'funnel',
  'ai-automation-solutions': 'workflow',
};

export const getMockupVariant = (slug: string): MockupVariant => SLUG_TO_VARIANT[slug] ?? 'browser';

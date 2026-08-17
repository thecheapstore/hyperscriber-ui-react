import { services } from '@/components/services/data/services';

// Explicit order for the nav dropdown / mobile accordion, all 8 services.
const DROPDOWN_SLUGS = [
  'website-development',
  'social-media-marketing',
  'seo',
  'video-editing',
  'lead-generation-paid-advertising',
  'ai-automation-solutions',
  'brand-identity-development',
  'application-software-development',
] as const;

export const servicesDropdownItems = DROPDOWN_SLUGS.map((slug) => {
  const service = services.find((s) => s.slug === slug)!;
  return {
    slug: service.slug,
    label: service.title,
    icon: service.icon,
    path: `/services/${service.slug}`,
  };
});

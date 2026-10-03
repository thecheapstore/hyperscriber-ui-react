/** Every service page with a descriptive, keyword rich anchor. Shared by the home page and the services hub. */
export interface ServiceLink {
  path: string;
  /** Short anchor text used inside running copy. */
  anchor: string;
  /** Full name used in lists and structured data. */
  name: string;
}

export const SERVICE_LINKS: ServiceLink[] = [
  { path: '/services/website-development/', anchor: 'website development for small business', name: 'Website Development' },
  { path: '/services/seo/', anchor: 'local SEO services', name: 'Search Engine Optimization' },
  { path: '/services/social-media-marketing/', anchor: 'social media marketing', name: 'Social Media Marketing' },
  { path: '/services/video-editing/', anchor: 'video editing for social media and ads', name: 'Video Editing' },
  { path: '/services/lead-generation-paid-advertising/', anchor: 'lead generation and paid advertising', name: 'Lead Generation and Paid Advertising' },
  { path: '/services/ai-automation-solutions/', anchor: 'AI automation for small business', name: 'AI Automation and Solutions' },
  { path: '/services/brand-identity-development/', anchor: 'brand identity development', name: 'Brand Identity Development' },
  { path: '/services/application-software-development/', anchor: 'custom application and software development', name: 'Application and Software Development' },
];

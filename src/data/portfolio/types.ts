import type { Stat } from '@/components/services/types/service';

export interface ProjectAbout {
  business: string;
  industry: string;
  location: string;
}

export interface ProjectProcessStep {
  title: string;
  description: string;
}

export interface ProjectScreenshots {
  desktop?: string;
  tablet?: string;
  mobile?: string;
}

export interface ProjectTestimonial {
  quote: string;
  name: string;
  role: string;
}

/** Top-level grouping used for portfolio browsing/category filters */
export type PortfolioCategoryType = 'Website Development' | 'Ecommerce' | 'Personal Branding';

/** Filter-chip values — subset of tags a project can be tagged with for the portfolio filter bar */
export type PlatformTag = 'WordPress' | 'React.js' | 'Shopify' | 'Ecommerce' | 'Local Business' | 'Personal Brand';

export interface Project {
  /** URL-safe identifier, unique within its service — used in the route */
  slug: string;
  /** Which service portfolio this project belongs to, e.g. "website-development" */
  serviceSlug: string;
  companyName: string;
  companyLogo?: string;
  projectName: string;
  shortDescription: string;
  category: string;
  /** Which of the 3 portfolio categories this project is grouped under */
  portfolioCategory: PortfolioCategoryType;
  /** Tags used to drive the portfolio filter bar */
  platformTags: PlatformTag[];
  /** Shown with larger emphasis in the Featured Projects section */
  featured?: boolean;
  /** Outcome-focused scope tags shown as badges — e.g. "Local SEO Structure", not raw tech stack names */
  highlights: string[];
  liveUrl?: string;
  /** Card thumbnail — falls back to an abstract mockup when omitted */
  thumbnail?: string;
  /** Longer lead-in paragraph shown near the top of the case study */
  overview?: string;
  about: ProjectAbout;
  /** What the client set out to achieve */
  goals?: string[];
  challenge: string;
  /** How we approached solving the challenge, ahead of what we actually built */
  strategy?: string;
  solution: string;
  process: ProjectProcessStep[];
  screenshots: ProjectScreenshots;
  features: string[];
  /** Craft/aesthetic callouts — better tonal fit than Technical Foundation for design- and brand-led projects */
  designHighlights?: string[];
  seoFoundation?: string[];
  performanceOptimizations?: string[];
  /** Optional lead-in paragraph shown above the businessImpact bullets */
  businessImpactSummary?: string;
  /** Qualitative outcomes — pair with `results` for any quantified metrics */
  businessImpact?: string[];
  results: Stat[];
  /** Override the default final-CTA copy — useful for non-business (e.g. personal brand) projects */
  finalCtaHeadline?: string;
  finalCtaDescription?: string;
  /** Override the default "Website Features" / "WHAT SHIPPED" heading on the features section — e.g. "Services Delivered" for SEO case studies */
  featuresSectionTitle?: string;
  featuresSectionEyebrow?: string;
  /** Shows the Search Performance + Google Business Profile sample-dashboard sections — clearly labeled illustrative data, never real client metrics */
  showSeoReporting?: boolean;
  /** Placeholder client quote, clearly marked as such — shown when present */
  testimonial?: ProjectTestimonial;
}

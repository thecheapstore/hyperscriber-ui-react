import type { LucideIcon } from 'lucide-react';

export interface TeamProjectRef {
  serviceSlug: string;
  slug: string;
}

export interface DoCard {
  title: string;
  description: string;
}

export interface CtaLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface ExperienceItem {
  role: string;
  org: string;
}

export interface ProfileFAQItem {
  question: string;
  answer: string;
}

export type ProjectsVariant = 'cards' | 'portfolio' | 'linkedin';

export interface TalentCategory {
  title: string;
  description: string;
}

export interface TalentIntro {
  heading: string;
  description: string;
}

export interface TalentWorkflowStep {
  label: string;
  icon: LucideIcon;
}

export interface FoundingTeamMember {
  slug: string;
  name: string;
  roleLine?: string;
  title: string;
  image: string;
  imagePosition?: string;
  heroImageAlt?: string;
  /** Optional override for the Founding Team grid card only, falls back to `image` when omitted. */
  listingImage?: string;
  listingImagePosition?: string;
  cardIntro: string;
  cardBadges: string[];
  heroBadges: string[];
  heroTagline?: string;
  /** Optional short supporting line rendered under the hero tagline, e.g. a secondary role summary. */
  heroSupportingLine?: string;
  primaryCta: CtaLink;
  secondaryCta: CtaLink;
  aboutHeading: string;
  aboutParagraphs: string[];
  journey: string[];
  whatIDo: DoCard[];
  techStack: string[];
  techStackHeading?: string;
  projectsVariant: ProjectsVariant;
  projects?: TeamProjectRef[];
  portfolioUrl?: string;
  portfolioImage?: string;
  /** Optional second CTA shown alongside the portfolio link (e.g. "Work With Manasvi" -> /contact). */
  secondaryPortfolioCta?: CtaLink;
  philosophyHeading: string;
  philosophyPoints: string[];
  beyondHeading: string;
  beyondItems: string[];
  funFacts: string[];
  finalCtaHeading: string;
  finalCtaButtons: CtaLink[];
  achievements?: string[];
  achievementsHeading?: string;
  achievementsPosition?: 'after-journey' | 'after-beyond';
  experience?: ExperienceItem[];
  industries?: string[];
  faqs?: ProfileFAQItem[];
  /** Optional talent management / creator representation capability section. */
  talentIntro?: TalentIntro;
  talentCategories?: TalentCategory[];
  talentWorkflow?: TalentWorkflowStep[];
  /** schema.org Person "knowsAbout" values, omitted from structured data when unset. */
  knowsAbout?: string[];
  /** Overrides the default "{name} | Founding Team | Calibre Associates" page title. */
  metaTitle?: string;
  /** Overrides cardIntro as the meta/OG description when a longer, SEO-specific description is needed. */
  metaDescription?: string;
}

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

export type ProjectsVariant = 'cards' | 'portfolio' | 'linkedin';

export interface FoundingTeamMember {
  slug: string;
  name: string;
  roleLine?: string;
  title: string;
  image: string;
  imagePosition?: string;
  cardIntro: string;
  cardBadges: string[];
  heroBadges: string[];
  heroTagline?: string;
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
}

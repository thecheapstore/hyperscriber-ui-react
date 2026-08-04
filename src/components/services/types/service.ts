
import { ReactNode } from 'react';

export interface ProcessStep {
  title: string;
  icon: ReactNode;
  description: string;
}

export interface CaseStudy {
  client: string;
  results: string[];
}

export interface Stat {
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
}

export interface PortfolioCategory {
  label: string;
  description: string;
}

export interface WhyChooseReason {
  icon: ReactNode;
  title: string;
  description: string;
}

export interface Service {
  id: string;
  slug: string;
  icon: ReactNode;
  title: string;
  shortDescription: string;
  description: string;
  details: string[];
  benefits: string[];
  process: ProcessStep[];
  caseStudy: CaseStudy;
  color: string;
  bgLight: string;
  stats: Stat[];
  /** Empty array hides the Featured Work / portfolio section entirely for this service */
  portfolioCategories: PortfolioCategory[];
  /** Real project screenshot shown inside the hero browser mockup — falls back to an abstract skeleton when omitted */
  previewImage?: string;
  /** Overrides the default generic reasons in WhyChooseUs when provided */
  whyChooseReasons?: WhyChooseReason[];
  /** Overrides the default generic Final CTA headline/description when provided */
  finalCtaHeadline?: string;
  finalCtaDescription?: string;
}

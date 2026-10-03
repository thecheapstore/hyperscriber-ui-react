
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
  /** Real project screenshot shown inside the hero browser mockup, falls back to an abstract skeleton when omitted */
  previewImage?: string;
  /** Descriptive alt text for previewImage (what is shown, plus business and service context) */
  previewAlt?: string;
  /** Overrides the default generic reasons in WhyChooseUs when provided */
  whyChooseReasons?: WhyChooseReason[];
  /** Overrides the default generic Final CTA headline/description when provided */
  finalCtaHeadline?: string;
  finalCtaDescription?: string;

  // SEO block: every field is optional so pages fall back to the plain title and short description
  /** Full document title, about 55 to 65 characters, ends with "| Calibre Associates" */
  seoTitle?: string;
  /** Meta description, 140 to 160 characters, answer style with a call to action */
  seoDescription?: string;
  /** The page's single H1, contains the primary keyword in natural wording */
  h1?: string;
  /** Marketing sentence shown as the lead paragraph under the H1 */
  heroSubheading?: string;
  primaryKeyword?: string;
  secondaryKeywords?: string[];
  /** Question style H2 for the 40 to 60 word answer block near the top of the page (AEO) */
  answerHeading?: string;
  answer?: string;
  /** Descriptive anchor text other pages use when linking to this service */
  anchorText?: string;
  relatedServiceSlugs?: string[];
  /** Service specific FAQs, used by the generic ServiceDetail page */
  faqs?: { question: string; answer: string }[];
}

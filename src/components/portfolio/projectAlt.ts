import type { Project } from '@/data/portfolio/types';

/** Short descriptor of what a project thumbnail shows, used to build natural alt text and link labels. */
const projectKind = (project: Project): string => {
  if (project.portfolioCategory === 'Brand Identity') return 'brand identity and campaign concept';
  if (project.serviceSlug === 'seo') return 'local SEO case study';
  if (project.portfolioCategory === 'Ecommerce') return 'ecommerce website design';
  if (project.portfolioCategory === 'Personal Branding') return 'personal brand website design';
  return 'website homepage design';
};

/** Descriptive alt text for a project thumbnail, for example "Arborix Tree Services website homepage design by Calibre Associates". */
export const projectImageAlt = (project: Project): string =>
  `${project.companyName} ${projectKind(project)} by Calibre Associates`;

/** Accessible name for a project card link, so the anchor names the project instead of a bare "Read Case Study". */
export const projectLinkLabel = (project: Project): string =>
  `Read the ${project.companyName} ${projectKind(project)} case study`;

export const projectLogoAlt = (project: Project): string => `${project.companyName} logo`;

import type { Project } from './types';
import { websiteDevelopmentProjects } from './websiteDevelopmentProjects';
import { seoProjects } from './seoProjects';
import { brandIdentityProjects } from './brandIdentityProjects';

// Combined registry across every service's portfolio. Add new per-service
// arrays here as they're built (e.g. videoEditingProjects) so the dynamic
// case study route can resolve any project regardless of service.
export const allPortfolioProjects: Project[] = [
  ...websiteDevelopmentProjects,
  ...seoProjects,
  ...brandIdentityProjects,
];

export const findProject = (serviceSlug: string, projectSlug: string): Project | undefined =>
  allPortfolioProjects.find((p) => p.serviceSlug === serviceSlug && p.slug === projectSlug);

export const getProjectsForService = (serviceSlug: string): Project[] =>
  allPortfolioProjects.filter((p) => p.serviceSlug === serviceSlug);

export type { Project, ProjectAbout, ProjectProcessStep, ProjectScreenshots } from './types';
export { websiteDevelopmentProjects };
export { seoProjects };
export { brandIdentityProjects };

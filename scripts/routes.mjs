// Single source of truth for every indexable route. Slugs are read straight from the data
// files, so a new service, case study, team member or landing page is picked up by both the
// sitemap and the prerender step without anyone editing a hand written URL list.
import { readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const read = (rel) => readFileSync(join(ROOT, rel), 'utf-8');
const all = (text, re) => [...text.matchAll(re)].map((m) => m.slice(1));

const STATIC_ROUTES = [
  '/', '/services', '/portfolio', '/why-us', '/our-team', '/faq', '/contact',
  '/privacy-policy', '/terms-conditions',
];

const PROJECT_FILES = [
  'src/data/portfolio/websiteDevelopmentProjects.ts',
  'src/data/portfolio/seoProjects.ts',
  'src/data/portfolio/brandIdentityProjects.ts',
];

export const SITE_URL = 'https://calibreassociates.com';

export function getRoutes() {
  const routes = [...STATIC_ROUTES];

  // Services: top level `slug` entries of services.ts
  for (const [slug] of all(read('src/components/services/data/services.ts'), /^ {4}slug:\s*["']([^"']+)["']/gm)) {
    routes.push(`/services/${slug}`);
  }

  // Case studies: each project object declares slug and serviceSlug at the same indent.
  for (const file of PROJECT_FILES) {
    const text = read(file);
    const slugs = all(text, /^ {4}slug:\s*['"]([^'"]+)['"]/gm).map((m) => m[0]);
    const services = all(text, /^ {4}serviceSlug:\s*['"]([^'"]+)['"]/gm).map((m) => m[0]);
    if (slugs.length !== services.length) {
      throw new Error(`routes: slug/serviceSlug count mismatch in ${file} (${slugs.length} vs ${services.length})`);
    }
    slugs.forEach((slug, i) => routes.push(`/services/${services[i]}/projects/${slug}`));
  }

  // Team profiles
  for (const [slug] of all(read('src/data/team/foundingTeam.ts'), /^ {4}slug:\s*['"]([^'"]+)['"]/gm)) {
    routes.push(`/our-team/${slug}`);
  }

  // Industry and location landing pages
  for (const [p] of all(read('src/data/landingPages.ts'), /const \w+_PATH\s*=\s*['"]([^'"]+)['"]/g)) {
    routes.push(p);
  }

  // Canonical form is the trailing slash URL, de duplicated, order preserved.
  const canon = (r) => (r === '/' ? '/' : `${r.replace(/\/+$/, '')}/`);
  return [...new Set(routes.map(canon))];
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const r = getRoutes();
  console.log(r.join('\n'));
  console.error(`\n${r.length} routes`);
}

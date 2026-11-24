import type { FoundingTeamMember, CtaLink } from '@/data/team/types';
import { SITE_URL, absImage, absUrl, breadcrumbSchema, DEFAULT_OG_IMAGE } from '@/lib/seo';

/** Date the team profile content was last reviewed, used for ProfilePage dateModified.
 * Google requires a full ISO 8601 date time with a timezone here, a bare date is reported as an invalid datetime. */
export const PROFILE_DATE_MODIFIED = '2026-11-24T10:00:00+05:30';

const ORGANIZATION_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;

export const profilePath = (member: FoundingTeamMember) => `/our-team/${member.slug}`;
export const personId = (member: FoundingTeamMember) => `${absUrl(profilePath(member))}#person`;
export const profilePageId = (member: FoundingTeamMember) => `${absUrl(profilePath(member))}#profilepage`;

/** Resolves a bundled asset URL to an absolute image URL, falling back to the default social image for inlined data URIs. */
export const memberImageUrl = (member: FoundingTeamMember): string =>
  member.image.startsWith('data:') ? DEFAULT_OG_IMAGE : absImage(member.image);

export const memberImageAlt = (member: FoundingTeamMember): string =>
  member.heroImageAlt ?? `${member.name}, ${member.title} at Calibre Associates`;

const stripSlash = (url: string) => url.replace(/\/+$/, '');

/** External profile URLs (LinkedIn, Instagram, personal site). Booking links and press links are never included. */
const collectSameAs = (member: FoundingTeamMember): string[] => {
  const links: CtaLink[] = [member.primaryCta, member.secondaryCta, ...(member.finalCtaButtons ?? [])];
  const fromCtas = links
    .filter((link) => link.external && link.href.startsWith('http') && !link.href.includes('calendly.com'))
    .map((link) => link.href);
  const candidates = [...(member.sameAs ?? []), ...fromCtas, ...(member.portfolioUrl ? [member.portfolioUrl] : [])];
  const seen = new Set<string>();
  const result: string[] = [];
  for (const url of candidates) {
    const key = stripSlash(url);
    if (seen.has(key)) continue;
    seen.add(key);
    result.push(url);
  }
  return result;
};

const buildAddress = (locality?: string, region?: string, country?: string) => ({
  '@type': 'PostalAddress',
  ...(locality ? { addressLocality: locality } : {}),
  ...(region ? { addressRegion: region } : {}),
  ...(country ? { addressCountry: country } : {}),
});

export const buildPersonSchema = (member: FoundingTeamMember) => {
  const calibre = { '@id': ORGANIZATION_ID };
  const otherEmployers = (member.otherEmployers ?? []).map((org) => ({
    '@type': 'Organization',
    name: org.name,
    ...(org.url ? { url: org.url } : {}),
    ...(org.locality || org.region || org.country ? { address: buildAddress(org.locality, org.region, org.country) } : {}),
  }));
  const sameAs = collectSameAs(member);

  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': personId(member),
    name: member.name,
    url: absUrl(profilePath(member)),
    mainEntityOfPage: { '@id': profilePageId(member) },
    image: {
      '@type': 'ImageObject',
      url: memberImageUrl(member),
      caption: memberImageAlt(member),
    },
    jobTitle: member.jobTitle ?? member.roleLine ?? member.title,
    description: member.metaDescription ?? member.cardIntro,
    worksFor: otherEmployers.length > 0 ? [calibre, ...otherEmployers] : calibre,
    ...(member.locality || member.region || member.country
      ? { address: buildAddress(member.locality, member.region, member.country) }
      : {}),
    ...(sameAs.length > 0 ? { sameAs } : {}),
    ...(member.knowsAbout && member.knowsAbout.length > 0 ? { knowsAbout: member.knowsAbout } : {}),
    ...(member.credentials && member.credentials.length > 0
      ? {
          hasCredential: member.credentials.map((credential) => ({
            '@type': 'EducationalOccupationalCredential',
            name: credential.name,
            credentialCategory: 'certificate',
            recognizedBy: { '@type': 'Organization', name: credential.issuer },
          })),
        }
      : {}),
    ...(member.pressFeatures && member.pressFeatures.length > 0
      ? {
          subjectOf: member.pressFeatures.map((feature) => ({
            '@type': 'NewsArticle',
            headline: feature.title,
            url: feature.url,
            ...(feature.isoDate ? { datePublished: feature.isoDate } : {}),
            publisher: { '@type': 'Organization', name: feature.outlet },
          })),
        }
      : {}),
  };
};

/** ProfilePage wrapper whose mainEntity is the full Person, the structure Google documents for profile pages. */
export const buildProfilePageSchema = (member: FoundingTeamMember, title: string, description: string) => {
  const { '@context': _context, ...person } = buildPersonSchema(member);
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    '@id': profilePageId(member),
    url: absUrl(profilePath(member)),
    name: title,
    description,
    dateModified: PROFILE_DATE_MODIFIED,
    inLanguage: 'en',
    isPartOf: { '@id': WEBSITE_ID },
    mainEntity: person,
    primaryImageOfPage: { '@type': 'ImageObject', url: memberImageUrl(member), caption: memberImageAlt(member) },
  };
};

export const buildProfileBreadcrumb = (member: FoundingTeamMember) =>
  breadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Our Team', path: '/our-team' },
    { name: member.name, path: profilePath(member) },
  ]);

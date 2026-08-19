import type { FoundingTeamMember, CtaLink } from '@/data/team/types';

const SITE_URL = 'https://calibreassociates.com';

const collectSameAs = (member: FoundingTeamMember): string[] => {
  const links: CtaLink[] = [member.primaryCta, member.secondaryCta, ...(member.finalCtaButtons ?? [])];
  const urls = links
    .filter((link) => link.external && link.href.startsWith('http'))
    .map((link) => link.href);
  if (member.portfolioUrl) urls.push(member.portfolioUrl);
  return [...new Set(urls)];
};

export const buildPersonSchema = (member: FoundingTeamMember) => ({
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: member.name,
  jobTitle: member.roleLine ?? member.title,
  description: member.cardIntro,
  image: member.image.startsWith('http') ? member.image : `${SITE_URL}${member.image}`,
  url: `${SITE_URL}/our-team/${member.slug}`,
  worksFor: {
    '@type': 'Organization',
    name: 'Calibre Associates',
    url: SITE_URL,
  },
  sameAs: collectSameAs(member),
  ...(member.knowsAbout && member.knowsAbout.length > 0 ? { knowsAbout: member.knowsAbout } : {}),
});

import { SITE_URL, SITE_NAME, LOGO_URL, absUrl } from '@/lib/seo';

export const ORGANIZATION_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

const DESCRIPTION =
  'Calibre Associates is a digital marketing agency in India and the USA. We build websites, run SEO and local SEO, manage social media and paid ads, and set up AI automation and CRM systems for growing businesses.';

export const buildOrganizationSchema = () => ({
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['Organization', 'ProfessionalService'],
      '@id': ORGANIZATION_ID,
      name: SITE_NAME,
      legalName: 'Calibre Associates',
      alternateName: 'Calibre Associates Digital Marketing Agency',
      url: `${SITE_URL}/`,
      logo: { '@type': 'ImageObject', url: LOGO_URL, width: 512, height: 512 },
      image: LOGO_URL,
      description: DESCRIPTION,
      slogan: 'Digital marketing, websites and AI automation for growing businesses',
      email: 'info@calibreassociates.com',
      telephone: '+1 716 355 1231',
      foundingDate: '2025-12',
      priceRange: '$$',
      founder: [
        { '@id': `${absUrl('/our-team/abhijeet-jain')}#person` },
        { '@id': `${absUrl('/our-team/manasvi-pathak')}#person` },
      ],
      areaServed: [
        { '@type': 'Country', name: 'India' },
        { '@type': 'Country', name: 'United States' },
        { '@type': 'City', name: 'Buffalo, New York' },
        { '@type': 'City', name: 'Rochester, New York' },
        { '@type': 'City', name: 'Lucknow' },
      ],
      knowsAbout: [
        'Digital marketing',
        'Website development',
        'Search engine optimization',
        'Local SEO',
        'Social media marketing',
        'Lead generation',
        'Paid advertising',
        'AI automation',
        'CRM implementation',
        'GoHighLevel',
        'Brand identity development',
        'Video editing',
      ],
      sameAs: [
        'https://www.linkedin.com/company/calibreassociates/',
        'https://www.linkedin.com/company/112087503/',
        'https://www.instagram.com/calibreassociates/',
        'https://www.facebook.com/profile.php?id=61588562476880',
      ],
      contactPoint: [
        {
          '@type': 'ContactPoint',
          telephone: '+1 716 355 1231',
          contactType: 'sales',
          areaServed: 'US',
          availableLanguage: 'English',
          email: 'info@calibreassociates.com',
        },
        {
          '@type': 'ContactPoint',
          telephone: '+91 97928 48868',
          contactType: 'sales',
          areaServed: 'IN',
          availableLanguage: ['English', 'Hindi'],
          email: 'info@calibreassociates.com',
        },
      ],
      location: [
        {
          '@type': 'Place',
          name: 'Calibre Associates North America Operations',
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Buffalo',
            addressRegion: 'NY',
            addressCountry: 'US',
          },
        },
        {
          '@type': 'Place',
          name: 'Calibre Associates Head Office',
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Lucknow',
            addressRegion: 'Uttar Pradesh',
            addressCountry: 'IN',
          },
        },
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Digital marketing services',
        itemListElement: [
          ['Website Development', '/services/website-development'],
          ['SEO', '/services/seo'],
          ['Social Media Marketing', '/services/social-media-marketing'],
          ['Video Editing', '/services/video-editing'],
          ['Lead Generation and Paid Advertising', '/services/lead-generation-paid-advertising'],
          ['AI Automation and Solutions', '/services/ai-automation-solutions'],
          ['Brand Identity Development', '/services/brand-identity-development'],
          ['Application and Software Development', '/services/application-software-development'],
        ].map(([name, path]) => ({
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name, url: absUrl(path) },
        })),
      },
    },
    {
      '@type': 'WebSite',
      '@id': WEBSITE_ID,
      url: `${SITE_URL}/`,
      name: SITE_NAME,
      description: DESCRIPTION,
      inLanguage: 'en',
      publisher: { '@id': ORGANIZATION_ID },
    },
  ],
});

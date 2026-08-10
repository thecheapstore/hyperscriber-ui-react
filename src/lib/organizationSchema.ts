const SITE_URL = 'https://www.calibreassociates.com';
const LOGO_URL = 'https://i.ibb.co/ksMhQrst/94e69e74-31c6-4907-b7da-719956c4355f.png';

export const buildOrganizationSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Calibre Associates',
  url: SITE_URL,
  logo: LOGO_URL,
  image: LOGO_URL,
  description:
    'Calibre Associates is a digital marketing agency that designs and builds scalable digital systems, including high performance websites, AI automation workflows, and CRM integrations, that help businesses in India and the United States operate efficiently and grow sustainably.',
  email: 'info@calibreassociates.com',
  sameAs: [
    'https://www.linkedin.com/company/112087503/',
    'https://www.instagram.com/calibreassociates/',
  ],
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+1-716-355-1231',
      contactType: 'sales',
      areaServed: 'US',
      email: 'info@calibreassociates.com',
    },
    {
      '@type': 'ContactPoint',
      telephone: '+91-97928-48868',
      contactType: 'sales',
      areaServed: 'IN',
      email: 'info@calibreassociates.com',
    },
  ],
  location: [
    {
      '@type': 'Place',
      name: 'Calibre Associates, North America Operations',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Buffalo',
        addressRegion: 'New York',
        addressCountry: 'US',
      },
    },
    {
      '@type': 'Place',
      name: 'Calibre Associates, Head Office',
      address: {
        '@type': 'PostalAddress',
        addressRegion: 'Uttar Pradesh',
        addressCountry: 'IN',
      },
    },
  ],
});

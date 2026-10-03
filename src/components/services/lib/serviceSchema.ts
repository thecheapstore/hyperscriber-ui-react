import type { Service } from '../types/service';
import type { FAQItem } from '../sections/FAQSection';
import { SITE_URL, absUrl, breadcrumbSchema } from '@/lib/seo';
import { buildFaqSchema } from '@/lib/faqSchema';

export const servicePath = (service: Service): string => `/services/${service.slug}`;

/** Resolved title, description and route path for a service page's <Seo> component. */
export const getServiceSeo = (service: Service) => ({
  title: service.seoTitle ?? `${service.title} | Calibre Associates`,
  description: service.seoDescription ?? service.shortDescription,
  path: servicePath(service),
});

/** BreadcrumbList, Service and FAQPage JSON-LD for a service page, all URLs in canonical trailing slash form. */
export const buildServiceJsonLd = (service: Service, faqs: FAQItem[]) => {
  const path = servicePath(service);
  return [
    breadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: 'Services', path: '/services' },
      { name: service.title, path },
    ]),
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      '@id': `${absUrl(path)}#service`,
      name: service.title,
      serviceType: service.primaryKeyword ?? service.title,
      description: service.seoDescription ?? service.description,
      url: absUrl(path),
      provider: { '@id': `${SITE_URL}/#organization` },
      areaServed: [
        { '@type': 'Country', name: 'India' },
        { '@type': 'Country', name: 'United States' },
      ],
    },
    buildFaqSchema(faqs),
  ];
};

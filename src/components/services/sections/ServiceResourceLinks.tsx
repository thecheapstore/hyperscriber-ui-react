import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from '@/lib/routerLink';
import { fadeUp, staggerContainer, viewportOnce } from '@/lib/motion';
import { services } from '../data/services';
import { SERVICE_GUIDES, INSIGHTS_ARTICLES_URL } from '@/data/insightsGuides';
import type { Service } from '../types/service';

export interface ResourceLink {
  /** Descriptive anchor text, never "click here" or a bare service name when a better phrase exists */
  label: string;
  to: string;
  description?: string;
}

export interface ExternalResource {
  label: string;
  href: string;
  description?: string;
}

interface ServiceResourceLinksProps {
  service: Service;
  /** Matching case studies from the portfolio */
  caseStudies?: ResourceLink[];
  /** Hubs, industry pages, team members and contact */
  moreLinks?: ResourceLink[];
  /** Trusted outside references such as official documentation */
  external?: ExternalResource[];
  title?: string;
  intro?: string;
}

const itemClass =
  'group block rounded-lg px-3 py-2.5 -mx-3 transition-colors hover:bg-surface-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring';
const labelClass = 'font-semibold text-ink underline underline-offset-2 group-hover:no-underline';

const Column = ({ heading, children }: { heading: string; children: ReactNode }) => (
  <motion.div variants={fadeUp} className="rounded-block border border-hairline bg-canvas p-7">
    <h3 className="text-lg font-bold mb-4">{heading}</h3>
    <ul className="space-y-1">{children}</ul>
  </motion.div>
);

/** Internal linking and trusted reference block: related services, proof, and learn more links. */
const ServiceResourceLinks = ({
  service,
  caseStudies = [],
  moreLinks = [],
  external = [],
  title = 'Related Services and Resources',
  intro,
}: ServiceResourceLinksProps) => {
  const related = (service.relatedServiceSlugs ?? [])
    .map((slug) => services.find((s) => s.slug === slug))
    .filter((s): s is Service => Boolean(s));
  const guides = SERVICE_GUIDES[service.slug] ?? [];

  const columnCount =
    (related.length > 0 ? 1 : 0) +
    (caseStudies.length > 0 ? 1 : 0) +
    (moreLinks.length > 0 ? 1 : 0) +
    (external.length > 0 ? 1 : 0);
  const gridCols = columnCount >= 4 ? 'lg:grid-cols-4' : 'lg:grid-cols-3';

  return (
    <section className="py-20 md:py-24 bg-surface-soft">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <motion.span variants={fadeUp} className="eyebrow inline-block py-1 px-3 mb-5 rounded-pill bg-canvas">
            KEEP EXPLORING
          </motion.span>
          <motion.h2 variants={fadeUp} className="mb-4">
            {title}
          </motion.h2>
          {intro && (
            <motion.p variants={fadeUp} className="text-ink/70 text-body-lg">
              {intro}
            </motion.p>
          )}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          className={`grid grid-cols-1 md:grid-cols-2 ${gridCols} gap-6`}
        >
          {related.length > 0 && (
            <Column heading="Related services">
              {related.map((s) => (
                <li key={s.slug}>
                  <Link to={`/services/${s.slug}`} className={itemClass}>
                    <span className={labelClass}>{s.anchorText ?? s.title}</span>
                    <span className="block text-sm text-ink/60 mt-0.5">{s.shortDescription}</span>
                  </Link>
                </li>
              ))}
            </Column>
          )}

          {caseStudies.length > 0 && (
            <Column heading="Case studies">
              {caseStudies.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className={itemClass}>
                    <span className={labelClass}>{item.label}</span>
                    {item.description && <span className="block text-sm text-ink/60 mt-0.5">{item.description}</span>}
                  </Link>
                </li>
              ))}
            </Column>
          )}

          {moreLinks.length > 0 && (
            <Column heading="Industries, team and contact">
              {moreLinks.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className={itemClass}>
                    <span className={labelClass}>{item.label}</span>
                    {item.description && <span className="block text-sm text-ink/60 mt-0.5">{item.description}</span>}
                  </Link>
                </li>
              ))}
            </Column>
          )}

          {external.length > 0 && (
            <Column heading="Trusted references">
              {external.map((item) => (
                <li key={item.href}>
                  <a href={item.href} target="_blank" rel="noopener noreferrer" className={itemClass}>
                    <span className={`inline-flex items-center gap-1 ${labelClass}`}>
                      {item.label}
                      <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
                    </span>
                    {item.description && <span className="block text-sm text-ink/60 mt-0.5">{item.description}</span>}
                  </a>
                </li>
              ))}
            </Column>
          )}
        </motion.div>

        {guides.length > 0 && (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
            className="mt-6 rounded-block border border-hairline bg-canvas p-7"
          >
            <motion.div variants={fadeUp} className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 mb-4">
              <h3 className="text-lg font-bold">Guides from our founder</h3>
              <a href={INSIGHTS_ARTICLES_URL} target="_blank" rel="noopener" className="text-sm font-semibold text-ink underline underline-offset-2 hover:no-underline">
                All articles on the Calibre Insights blog
              </a>
            </motion.div>
            <motion.ul variants={fadeUp} className="grid grid-cols-1 md:grid-cols-3 gap-1 md:gap-6">
              {guides.map((g) => (
                <li key={g.href}>
                  <a href={g.href} target="_blank" rel="noopener" className={itemClass}>
                    <span className={`inline-flex items-center gap-1 ${labelClass}`}>
                      {g.title}
                      <ArrowUpRight className="h-3.5 w-3.5 shrink-0" aria-hidden />
                    </span>
                    <span className="block text-sm text-ink/60 mt-0.5">By Abhijeet Jain, Founder and CEO</span>
                  </a>
                </li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ServiceResourceLinks;

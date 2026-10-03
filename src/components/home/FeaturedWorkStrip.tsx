import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from '@/lib/routerLink';
import WebsiteMockup from '@/components/portfolio/WebsiteMockup';
import { findProject } from '@/data/portfolio';
import { staggerContainer, fadeUp, viewportOnce } from '@/lib/motion';

interface FeaturedCase {
  slug: string;
  name: string;
  place: string;
  blurb: string;
  anchor: string;
  alt: string;
  span: string;
}

const CASES: FeaturedCase[] = [
  {
    slug: 'tree-craft-tree-services',
    name: 'TreeCraft Tree Service',
    place: 'Buffalo, Rochester and Batavia, NY',
    blurb: 'A hand coded WordPress site where 62 towns and 5 tree services render from two data files, built for local and AI search.',
    anchor: 'Read the TreeCraft tree service website development case study',
    alt: 'TreeCraft Tree Service website homepage designed and built by Calibre Associates',
    span: 'lg:col-span-2',
  },
  {
    slug: 'arborix-tree-services',
    name: 'Arborix Tree Services',
    place: 'Tree service website',
    blurb: 'A tree service website built by Calibre Associates, with the full case study covering the brief, the build and the search setup.',
    anchor: 'Read the Arborix Tree Services website case study',
    alt: 'Arborix Tree Services website homepage designed and built by Calibre Associates',
    span: 'lg:col-span-2',
  },
  {
    slug: 'branch-experts-rochester',
    name: 'Branch Experts Rochester',
    place: 'Rochester, NY',
    blurb: 'A Rochester tree service website, with the full case study covering the brief, the build and the search setup.',
    anchor: 'Read the Branch Experts Rochester tree service website case study',
    alt: 'Branch Experts Rochester tree service website homepage built by Calibre Associates',
    span: 'lg:col-span-2',
  },
  {
    slug: 'kp-landscaping',
    name: 'KP Landscaping',
    place: 'Buffalo, Rochester and Batavia, NY',
    blurb: 'A landscaping, hardscaping and tree care site rebuilt on a custom WordPress theme with over 1,600 pages.',
    anchor: 'Read the KP Landscaping website development case study',
    alt: 'KP Landscaping website homepage showing landscaping and hardscaping services built by Calibre Associates',
    span: 'lg:col-span-3',
  },
  {
    slug: '716-lawn-care',
    name: '716 Lawn Care',
    place: 'Erie and Niagara counties, NY',
    blurb: 'A lawn care, landscaping and snow plowing company site built around service area pages and lead forms.',
    anchor: 'Read the 716 Lawn Care website development case study',
    alt: '716 Lawn Care website homepage for a Buffalo lawn care and landscaping company built by Calibre Associates',
    span: 'lg:col-span-3',
  },
];

const FeaturedWorkStrip = () => {
  return (
    <section id="featured-work" className="py-24 md:py-32 bg-canvas">
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="max-w-3xl mb-14 md:mb-16"
        >
          <motion.span variants={fadeUp} className="eyebrow inline-block py-1 px-3 mb-5 rounded-pill bg-surface-soft">
            FEATURED WORK
          </motion.span>
          <motion.h2 variants={fadeUp} className="mb-4">
            Website Development Case Studies for Local Service Businesses
          </motion.h2>
          <motion.p variants={fadeUp} className="text-ink/70 text-body-lg">
            Real builds for tree service, landscaping and lawn care companies across Western New York. Each case study
            shows the problem, the build and the search foundation behind it.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-5 md:gap-6"
        >
          {CASES.map((item) => {
            const project = findProject('website-development', item.slug);
            return (
              <motion.article
                key={item.slug}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                className={`group relative flex flex-col bg-canvas border border-hairline rounded-block overflow-hidden transition-shadow duration-300 hover:shadow-card ${item.span}`}
              >
                <div className="p-4 pb-0">
                  {project?.thumbnail ? (
                    <WebsiteMockup
                      imageUrl={project.thumbnail}
                      alt={item.alt}
                      device="desktop"
                      className="aspect-video w-full"
                    />
                  ) : (
                    <div className="aspect-video w-full rounded-lg bg-block-mint flex items-center justify-center">
                      <span className="text-5xl font-bold text-ink/40" aria-hidden="true">
                        {item.name.charAt(0)}
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-6 md:p-8 flex flex-col flex-grow">
                  <span className="font-mono text-[11px] uppercase tracking-[0.5px] text-ink/50 mb-2">{item.place}</span>
                  <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                  <p className="text-sm md:text-base text-ink/70 mb-5 flex-grow">{item.blurb}</p>
                  <Link
                    to={`/services/website-development/projects/${item.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink after:absolute after:inset-0 after:content-[''] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    {item.anchor}
                    <ArrowRight className="h-3.5 w-3.5 shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </motion.article>
            );
          })}
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-10 text-ink/70"
        >
          More builds: the{' '}
          <Link
            to="/services/website-development/projects/wny-tree-specialists"
            className="text-ink underline underline-offset-4 hover:opacity-70"
          >
            WNY Tree Specialists tree service website
          </Link>{' '}
          and the{' '}
          <Link
            to="/services/website-development/projects/manasvi-pathak"
            className="text-ink underline underline-offset-4 hover:opacity-70"
          >
            Manasvi Pathak personal brand website
          </Link>
          . Browse the{' '}
          <Link to="/portfolio" className="text-ink font-semibold underline underline-offset-4 hover:opacity-70">
            full Calibre Associates portfolio
          </Link>
          .
        </motion.p>
      </div>
    </section>
  );
};

export default FeaturedWorkStrip;

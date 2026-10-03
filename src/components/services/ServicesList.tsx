
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import ServiceBentoTile from './components/ServiceBentoTile';
import { Link } from '@/lib/routerLink';
import { SERVICE_LINKS } from '@/components/home/serviceLinks';
import { services } from './data/services';
import { useLocation } from 'react-router-dom';
import { staggerContainer, fadeUp } from '@/lib/motion';

/** Column-span classes per index so the 7-service grid fills every row with no empty cells. */
const TILE_LAYOUT = [
  { variant: 'featured' as const, colSpanClass: 'sm:col-span-2 lg:col-span-3' },
  { variant: 'featured' as const, colSpanClass: 'sm:col-span-2 lg:col-span-3' },
  { variant: 'standard' as const, colSpanClass: 'sm:col-span-1 lg:col-span-2' },
  { variant: 'standard' as const, colSpanClass: 'sm:col-span-1 lg:col-span-2' },
  { variant: 'standard' as const, colSpanClass: 'sm:col-span-2 lg:col-span-2' },
  { variant: 'standard' as const, colSpanClass: 'sm:col-span-1 lg:col-span-3' },
  { variant: 'standard' as const, colSpanClass: 'sm:col-span-1 lg:col-span-3' },
];

const ServicesList = () => {
  const location = useLocation();

  useEffect(() => {
    // If there's a hash in the URL, scroll to the corresponding service
    if (location.hash) {
      const id = location.hash.slice(1); // Remove the # from the hash
      const element = document.getElementById(id);
      if (element) {
        // Add a small delay to ensure the page is fully loaded
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  return (
    <section className="py-20 md:py-24 bg-canvas">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-4">
            Every Service Under One Digital Marketing Agency
          </h2>
          <p className="text-lg text-ink/70">
            From lead generation and paid advertising to SEO, social media marketing, AI automation and custom website
            development, choose one service or combine several into a system that drives steady growth.
          </p>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-5 md:gap-6"
        >
          {services.map((service, index) => {
            const layout = TILE_LAYOUT[index] ?? { variant: 'standard' as const, colSpanClass: 'lg:col-span-2' };
            return (
              <div key={service.id} id={service.slug} className={layout.colSpanClass}>
                <ServiceBentoTile
                  service={service}
                  variant={layout.variant}
                  variants={fadeUp}
                />
              </div>
            );
          })}
        </motion.div>

        <div className="max-w-4xl mx-auto mt-14 md:mt-16 text-center text-ink/70">
          <p className="mb-3">
            Popular starting points:{' '}
            {SERVICE_LINKS.slice(0, 4).map((item, index) => (
              <React.Fragment key={item.path}>
                <Link to={item.path} className="text-ink underline underline-offset-4 hover:opacity-70">
                  {item.anchor}
                </Link>
                {index < 2 ? ', ' : index === 2 ? ' and ' : '.'}
              </React.Fragment>
            ))}
          </p>
          <p>
            See the work behind our services in the{' '}
            <Link to="/portfolio" className="text-ink underline underline-offset-4 hover:opacity-70">
              Calibre Associates portfolio
            </Link>
            , including{' '}
            <Link
              to="/services/website-development/projects/tree-craft-tree-services"
              className="text-ink underline underline-offset-4 hover:opacity-70"
            >
              a tree service website case study
            </Link>
            , or read how we market{' '}
            <Link to="/industries/tree-service-marketing" className="text-ink underline underline-offset-4 hover:opacity-70">
              tree service companies
            </Link>{' '}
            and{' '}
            <Link
              to="/industries/landscaping-and-lawn-care-marketing"
              className="text-ink underline underline-offset-4 hover:opacity-70"
            >
              landscaping and lawn care businesses
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesList;

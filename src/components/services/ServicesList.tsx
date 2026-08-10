
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import ServiceBentoTile from './components/ServiceBentoTile';
import ServicesHeader from './components/ServicesHeader';
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
        <ServicesHeader />

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
      </div>
    </section>
  );
};

export default ServicesList;

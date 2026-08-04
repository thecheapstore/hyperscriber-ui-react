
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import ServiceCard from './components/ServiceCard';
import ServicesHeader from './components/ServicesHeader';
import { services } from './data/services';
import { useLocation } from 'react-router-dom';
import { staggerContainer, fadeUp } from '@/lib/motion';

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
    <section className="py-20 bg-canvas">
      <div className="container mx-auto px-6">
        <ServicesHeader />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service) => (
            <div
              key={service.id}
              id={service.slug}
            >
              <ServiceCard
                service={service}
                variants={fadeUp}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesList;

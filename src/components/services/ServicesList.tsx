import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import ServiceCard from './components/ServiceCard';
import ServicesHeader from './components/ServicesHeader';
import { services } from './data/services';
import { useLocation } from 'react-router-dom';

const ServicesList = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.slice(1);
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <ServicesHeader />

        <motion.div className="space-y-12">
          {services.map((service) => (
            <div
              key={service.id}
              id={service.title.toLowerCase().replace(/\s+/g, '-')}
            >
              <ServiceCard service={service} />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesList;
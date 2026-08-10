import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { services } from './data/services';
import { staggerContainer, fadeUp } from '@/lib/motion';

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 md:py-32 bg-canvas">
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="max-w-3xl mb-16 md:mb-20"
        >
          <motion.span variants={fadeUp} className="eyebrow inline-block py-1 px-3 mb-5 rounded-pill bg-surface-soft">
            OUR CORE SERVICES
          </motion.span>
          <motion.h2 variants={fadeUp} className="mb-4">
            Growth Driven Digital Services Built to Scale Your Business
          </motion.h2>
          <motion.p variants={fadeUp} className="text-ink/70 text-body-lg max-w-2xl">
            Lead generation, paid advertising, SEO, social media marketing, video editing, website
            development, and AI automation, delivered as one connected system by a digital marketing
            agency that treats your growth as our own.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="border-t border-hairline"
        >
          {services.map((service, index) => (
            <motion.div key={service.id} variants={fadeUp} className="border-b border-hairline">
              <Link
                to={`/services/${service.slug}`}
                className="group grid grid-cols-[auto_1fr_auto] md:grid-cols-[64px_auto_1fr_auto] items-center gap-5 md:gap-8 py-7 md:py-9 px-2 -mx-2 rounded-lg transition-colors duration-300 hover:bg-surface-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <span className="hidden md:block font-mono text-sm text-ink/30 tabular-nums">
                  {String(index + 1).padStart(2, '0')}
                </span>

                <div className={`w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-lg ${service.bgLight} text-ink shrink-0 transition-transform duration-300 group-hover:scale-110 [&_svg]:h-6 [&_svg]:w-6`}>
                  {service.icon}
                </div>

                <div className="min-w-0">
                  <h3 className="text-xl md:text-2xl font-bold mb-1.5 truncate">{service.title}</h3>
                  <p className="text-sm md:text-base text-ink/60 line-clamp-1">{service.shortDescription}</p>
                </div>

                <ArrowRight className="h-5 w-5 text-ink/40 shrink-0 transition-all duration-300 group-hover:text-ink group-hover:translate-x-1" />
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex justify-center mt-14 md:mt-16"
        >
          <Button className="rounded-pill px-8 py-6 group" asChild>
            <Link to="/services">
              View All Services
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;

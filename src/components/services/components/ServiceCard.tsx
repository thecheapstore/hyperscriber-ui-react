
import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Service } from '../types/service';

interface ServiceCardProps {
  service: Service;
  variants?: Variants;
}

const ServiceCard = ({ service, variants }: ServiceCardProps) => {
  return (
    <motion.div variants={variants} whileHover={{ y: -6 }} className="group h-full">
      <Link
        to={`/services/${service.slug}`}
        className="flex flex-col h-full bg-canvas border border-hairline rounded-lg p-8 transition-shadow duration-300 hover:shadow-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        <div
          className={`w-14 h-14 flex items-center justify-center rounded-lg ${service.bgLight} text-ink mb-6 transition-transform duration-300 group-hover:scale-110`}
        >
          {service.icon}
        </div>

        <h3 className="text-card-title mb-3">{service.title}</h3>
        <p className="text-ink/70 mb-6 flex-grow">{service.shortDescription}</p>

        <ul className="space-y-2 mb-8">
          {service.details.slice(0, 3).map((detail, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-ink/70">
              <CheckCircle size={14} className="text-ink mt-0.5 flex-shrink-0" />
              <span>{detail}</span>
            </li>
          ))}
        </ul>

        <span className="mt-auto inline-flex items-center justify-center gap-2 rounded-pill border border-hairline px-5 py-2.5 text-sm font-medium text-ink transition-colors duration-200 group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary">
          Learn More
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </Link>
    </motion.div>
  );
};

export default ServiceCard;

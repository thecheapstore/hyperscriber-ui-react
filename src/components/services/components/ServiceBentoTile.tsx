import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Service } from '../types/service';

interface ServiceBentoTileProps {
  service: Service;
  variant: 'featured' | 'standard';
  variants?: Variants;
}

const ServiceBentoTile = ({ service, variant, variants }: ServiceBentoTileProps) => {
  const isFeatured = variant === 'featured';

  return (
    <motion.div variants={variants} whileHover={{ y: -6 }} className="group h-full">

      <Link
        to={`/services/${service.slug}`}
        className={`relative flex flex-col h-full ${service.bgLight} rounded-block overflow-hidden transition-shadow duration-300 hover:shadow-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
          isFeatured ? 'p-8 md:p-10 min-h-[280px]' : 'p-7 md:p-8 min-h-[220px]'
        }`}
      >
        <div
          className={`flex items-center justify-center rounded-lg bg-canvas/70 text-ink shrink-0 transition-transform duration-300 group-hover:scale-110 ${
            isFeatured ? 'w-16 h-16 mb-6 [&_svg]:h-7 [&_svg]:w-7' : 'w-12 h-12 mb-5 [&_svg]:h-5 [&_svg]:w-5'
          }`}
        >
          {service.icon}
        </div>

        <h3 className={`font-bold text-ink mb-2 ${isFeatured ? 'text-2xl md:text-3xl' : 'text-xl'}`}>
          {service.title}
        </h3>

        <p className={`text-ink/70 ${isFeatured ? 'text-base max-w-md line-clamp-2 mb-6' : 'text-sm line-clamp-2 mb-5'}`}>
          {service.shortDescription}
        </p>

        {isFeatured && (
          <div className="flex flex-wrap gap-2 mb-2">
            {service.details.slice(0, 2).map((detail) => (
              <span
                key={detail}
                className="text-[11px] font-medium text-ink/70 bg-canvas/70 rounded-pill px-2.5 py-1"
              >
                {detail}
              </span>
            ))}
          </div>
        )}

        <span className="mt-auto pt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-ink">
          Explore Service
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </Link>
    </motion.div>
  );
};

export default ServiceBentoTile;

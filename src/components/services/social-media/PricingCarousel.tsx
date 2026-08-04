import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from '@/components/ui/carousel';
import { staggerContainer, fadeUp, viewportOnce } from '@/lib/motion';
import CurrencyToggle from './CurrencyToggle';
import PricingPackageCard from './PricingPackageCard';
import type { Currency, PricingPackage } from '../data/pricing';

interface PricingCarouselProps {
  packages: PricingPackage[];
}

const PricingCarousel = ({ packages }: PricingCarouselProps) => {
  const [currency, setCurrency] = useState<Currency>('INR');
  const [api, setApi] = useState<CarouselApi>();
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!api) return;
    const onSelect = () => setSelectedIndex(api.selectedScrollSnap());
    onSelect();
    api.on('select', onSelect);
    api.on('reInit', onSelect);
    return () => {
      api.off('select', onSelect);
    };
  }, [api]);

  return (
    <div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={fadeUp}
        className="flex justify-center mb-12"
      >
        <CurrencyToggle value={currency} onChange={setCurrency} />
      </motion.div>

      <Carousel
        setApi={setApi}
        opts={{ align: 'start', loop: false }}
        className="max-w-6xl mx-auto"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
        >
          <CarouselContent className="-ml-4 md:-ml-6 pt-7 pb-2">
            {packages.map((pkg) => (
              <CarouselItem key={pkg.id} className="pl-4 md:pl-6 basis-[86%] sm:basis-1/2 lg:basis-1/3 flex">
                <motion.div variants={fadeUp} className="h-full w-full">
                  <PricingPackageCard pkg={pkg} currency={currency} />
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </motion.div>

        <div className="flex items-center justify-center gap-6 mt-10">
          <CarouselPrevious className="static translate-y-0 h-10 w-10" />
          <div className="flex items-center gap-2">
            {packages.map((pkg, index) => (
              <button
                key={pkg.id}
                type="button"
                aria-label={`Go to ${pkg.name}`}
                onClick={() => api?.scrollTo(index)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  index === selectedIndex ? 'w-6 bg-ink' : 'w-1.5 bg-hairline hover:bg-ink/40'
                }`}
              />
            ))}
          </div>
          <CarouselNext className="static translate-y-0 h-10 w-10" />
        </div>
      </Carousel>
    </div>
  );
};

export default PricingCarousel;

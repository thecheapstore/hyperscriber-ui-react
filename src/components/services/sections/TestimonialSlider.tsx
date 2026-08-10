import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '@/components/ui/carousel';
import { staggerContainer, fadeUp, viewportOnce } from '@/lib/motion';
import { serviceTestimonials } from '../data/testimonials';

interface TestimonialSliderProps {
  description?: string;
}

const TestimonialSlider = ({
  description = 'Placeholder testimonials, real client quotes will replace these as case studies are added.',
}: TestimonialSliderProps) => {
  return (
    <section className="py-20 md:py-24 bg-canvas overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <motion.span variants={fadeUp} className="eyebrow inline-block py-1 px-3 mb-5 rounded-pill bg-surface-soft">
            CLIENT FEEDBACK
          </motion.span>
          <motion.h2 variants={fadeUp} className="mb-4">
            What Clients Say
          </motion.h2>
          <motion.p variants={fadeUp} className="text-ink/70 text-body-lg">
            {description}
          </motion.p>
        </motion.div>

        <Carousel opts={{ align: 'start', loop: true }} className="max-w-5xl mx-auto">
          <CarouselContent>
            {serviceTestimonials.map((testimonial) => (
              <CarouselItem key={testimonial.name} className="sm:basis-1/2 lg:basis-1/2">
                <Card className="h-full border border-hairline shadow-none rounded-lg">
                  <CardContent className="p-8">
                    <Quote className="h-8 w-8 text-ink/20 mb-4" />
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-ink fill-ink mr-0.5" />
                      ))}
                    </div>
                    <p className="text-ink/70 mb-6">"{testimonial.quote}"</p>
                    <div className="flex items-center">
                      <Avatar className="h-11 w-11 mr-3 border border-hairline">
                        <AvatarImage src={testimonial.image} alt={testimonial.name} />
                        <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold text-sm">{testimonial.name}</p>
                        <p className="text-xs text-ink/60">{testimonial.role}, {testimonial.company}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex items-center justify-center gap-3 mt-10">
            <CarouselPrevious className="static translate-y-0" />
            <CarouselNext className="static translate-y-0" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialSlider;


import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Daniel Moore',
    role: 'Founder & CEO, SaaS Startup',
    image: '/placeholder.svg',
    content:
      'Calibre Associates rebuilt our website and application architecture with performance and scalability in mind. The result was a faster product, cleaner UX, and a system we can confidently scale without technical debt.',
    rating: 5,
  },
  {
    name: 'Emily Carter',
    role: 'Head of Growth, B2B SaaS',
    image: '/placeholder.svg',
    content:
      'Their lead generation and paid advertising strategy brought structure to our acquisition efforts. Campaigns were tightly aligned with our funnel, and the leads we received were far more qualified than before.',
    rating: 5,
  },
  {
    name: 'Rahul Verma',
    role: 'Marketing Manager, Tech Company',
    image: '/placeholder.svg',
    content:
      'Calibre Associates helped us improve our SEO and social media presence with a clear organic strategy. Rankings improved steadily, engagement increased, and our brand visibility became far more consistent.',
    rating: 5,
  },
  {
    name: 'Sophia Nguyen',
    role: 'Product Owner',
    image: '/placeholder.svg',
    content:
      'From UI UX design to content and video assets, the team delivered work that actually supported the product experience. Everything felt intentional, user focused, and aligned with our business goals.',
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="testimonials" className="py-24 bg-canvas">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="eyebrow inline-block py-1 px-3 mb-5 rounded-pill bg-surface-soft">
            TESTIMONIALS
          </span>
          <h2 className="mb-4">
            What Our Clients Say
          </h2>
          <p className="text-ink/70 text-body-lg">
            Don't just take our word for it. Here's what successful SaaS founders and marketing leaders have to say about our services.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid md:grid-cols-2 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} variants={cardVariants} whileHover={{ y: -6 }}>
              <Card className="h-full border border-hairline shadow-none hover:shadow-card transition-shadow duration-300">
                <CardContent className="p-8">
                  {/* Stars */}
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-ink mr-1"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  <p className="text-ink/70 mb-6 text-body-lg">
                    "{testimonial.content}"
                  </p>

                  <div className="flex items-center">
                    <Avatar className="h-12 w-12 mr-4 border border-hairline">
                      <AvatarImage src={testimonial.image} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold text-ink">{testimonial.name}</p>
                      <p className="text-sm text-ink/70">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { services } from './data/services';
import { staggerContainer, fadeUp } from '@/lib/motion';

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-canvas">
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.span variants={fadeUp} className="eyebrow inline-block py-1 px-3 mb-5 rounded-pill bg-surface-soft">
            OUR CORE SERVICES
          </motion.span>
          <motion.h2 variants={fadeUp} className="mb-4">
            Growth Driven Digital Services Built to Scale Your Business
          </motion.h2>
          <motion.p variants={fadeUp} className="text-ink/70 text-body-lg">
            We help businesses grow through lead generation, paid advertising, SEO, social media marketing, video content, website and application development, and AI powered automation systems that improve conversions and streamline operations.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service) => (
            <motion.div key={service.id} variants={fadeUp} whileHover={{ y: -6 }} className="group h-full">
              <Card className="h-full flex flex-col border border-hairline shadow-none rounded-lg overflow-hidden transition-shadow duration-300 hover:shadow-card">
                <CardHeader className="pb-4">
                  <div className={`mb-3 w-14 h-14 flex items-center justify-center rounded-lg ${service.bgLight} text-ink transition-transform duration-300 group-hover:scale-110`}>
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base text-ink/70">
                    {service.shortDescription}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pb-0 grow">
                  <ul className="space-y-2 mb-6">
                    {service.details.slice(0, 3).map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <div className="mr-2 p-0.5 rounded-full bg-surface-soft">
                          <CheckCircle size={12} className="text-ink" />
                        </div>
                        <span className="text-sm text-ink/70">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="pt-0">
                  <Button
                    variant="outline"
                    className="w-full rounded-pill group/btn"
                    size="sm"
                    asChild
                  >
                    <Link to={`/services/${service.slug}`}>
                      <span>Learn More</span>
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-center mt-16"
        >
          <Button
            className="rounded-pill px-8 py-6 group"
            asChild
          >
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

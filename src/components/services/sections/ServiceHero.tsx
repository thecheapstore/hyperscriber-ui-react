import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { ArrowRight, ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Service } from '../types/service';
import { easeOut } from '@/lib/motion';
import ServiceMockup from './ServiceMockup';
import { getMockupVariant } from '../data/mockupVariants';

interface ServiceHeroProps {
  service: Service;
  /** Optional premium badge row shown between the description and CTAs */
  badges?: string[];
  secondaryCtaLabel?: string;
}

const ServiceHero = ({ service, badges, secondaryCtaLabel = 'See Our Work' }: ServiceHeroProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 150, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 150, damping: 20 });
  const rotateX = useTransform(springY, [-0.5, 0.5], [8, -8]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-8, 8]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section className="relative pt-32 pb-20 md:pb-28 bg-canvas overflow-hidden">
      {/* Subtle background motion */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 2 }}
        className={`absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full ${service.bgLight} blur-[100px]`}
      />
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.35 }}
        transition={{ duration: 2, delay: 0.3 }}
        className="absolute -bottom-32 -left-24 w-[380px] h-[380px] rounded-full bg-block-lilac blur-[100px]"
      />

      <div className="container relative mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Copy */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: easeOut }}
            className="text-center lg:text-left"
          >
            <nav aria-label="Breadcrumb" className="mb-6 text-sm text-ink/60 flex justify-center lg:justify-start gap-2">
              <Link to="/" className="hover:text-ink transition-colors">Home</Link>
              <span>/</span>
              <Link to="/services" className="hover:text-ink transition-colors">Services</Link>
              <span>/</span>
              <span className="text-ink">{service.title}</span>
            </nav>

            <span className="eyebrow inline-block py-1.5 px-4 mb-6 rounded-pill bg-surface-soft">
              {service.title}
            </span>

            <h1 className="mb-6 text-[clamp(1.875rem,1.3rem+2.6vw,3.5rem)] leading-[1.1]">{service.shortDescription}</h1>

            <p className="text-lg md:text-xl text-ink/70 mb-10 max-w-xl mx-auto lg:mx-0">
              {service.description}
            </p>

            {badges && badges.length > 0 && (
              <motion.div
                initial="hidden"
                animate="visible"
                variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.05, delayChildren: 0.3 } } }}
                className="flex flex-wrap gap-2 justify-center lg:justify-start mb-10"
              >
                {badges.map((badge) => (
                  <motion.span
                    key={badge}
                    variants={{ hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0 } }}
                    className="font-mono text-[11px] uppercase tracking-[0.5px] text-ink/70 bg-surface-soft border border-hairline rounded-pill px-3 py-1.5"
                  >
                    {badge}
                  </motion.span>
                ))}
              </motion.div>
            )}

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="https://calendly.com/calibreassociates/meeting" target="_blank" rel="noopener noreferrer">
                <Button className="w-full sm:w-auto rounded-pill px-8 py-6 text-base group id-calendly-booking">
                  Book a Free Consultation
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </a>
              <Button variant="outline" className="w-full sm:w-auto rounded-pill px-8 py-6 text-base" asChild>
                <a href="#portfolio">{secondaryCtaLabel}</a>
              </Button>
            </div>
          </motion.div>

          {/* Illustration / mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: easeOut }}
            className="relative"
            style={{ perspective: 1000 }}
          >
            <motion.div
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
              className={`relative aspect-square max-w-md mx-auto rounded-block border border-hairline ${service.bgLight} overflow-hidden`}
            >
              <ServiceMockup variant={getMockupVariant(service.slug)} previewImage={service.previewImage} />

              {/* Service icon badge */}
              <motion.div
                style={{ transform: 'translateZ(50px)' }}
                className="absolute -bottom-4 -right-4 w-14 h-14 rounded-block bg-canvas shadow-card flex items-center justify-center text-ink [&_svg]:h-6 [&_svg]:w-6"
              >
                {service.icon}
              </motion.div>

              {/* Floating decorative elements */}
              <motion.div
                aria-hidden
                animate={{ y: [0, -14, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-5 left-5 w-3 h-3 rounded-full bg-canvas border border-hairline"
                style={{ transform: 'translateZ(60px)' }}
              />
              <motion.div
                aria-hidden
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute top-8 right-8 w-2.5 h-2.5 rounded-full bg-accent-magenta/70"
                style={{ transform: 'translateZ(60px)' }}
              />
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="flex justify-center mt-16"
        >
          <a href="#why-us" className="flex flex-col items-center text-ink/60 hover:text-ink transition-colors">
            <span className="mb-2 text-sm">Explore {service.title}</span>
            <ArrowDown className="h-4 w-4 animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceHero;

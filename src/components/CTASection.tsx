
import React from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const CTASection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-block-navy rounded-block overflow-hidden relative"
        >
          <div className="relative z-10 p-8 sm:p-10 md:p-14 lg:p-16 text-center">
            <span className="inline-block py-1 px-3 mb-5 font-mono uppercase text-caption tracking-[0.60px] rounded-pill bg-white/10 text-inverse-ink">
              GET IN TOUCH
            </span>
            <h2 className="text-inverse-ink max-w-3xl mx-auto mb-6">
              Ready to Build Smarter Digital Systems for Growth?
            </h2>
            <p className="text-inverse-ink/80 text-body-lg mb-8 max-w-2xl mx-auto">
              Book a free consultation to discuss your website, automation, or CRM needs and see how we can streamline your operations and improve conversions.
            </p>

            {/* Social proof elements - made responsive */}
            <div className="flex flex-wrap gap-3 sm:gap-4 justify-center mb-10">
              <div className="flex items-center gap-2 bg-white/10 px-3 sm:px-4 py-2 rounded-pill">
                <Check className="h-4 w-4 sm:h-5 sm:w-5 text-inverse-ink" />
                <span className="text-inverse-ink text-sm sm:text-base font-medium">No obligation or sales pressure</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-3 sm:px-4 py-2 rounded-pill">
                <Check className="h-4 w-4 sm:h-5 sm:w-5 text-inverse-ink" />
                <span className="text-inverse-ink text-sm sm:text-base font-medium">20 minute clarity call with our team</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-3 sm:px-4 py-2 rounded-pill">
                <Check className="h-4 w-4 sm:h-5 sm:w-5 text-inverse-ink" />
                <span className="text-inverse-ink text-sm sm:text-base font-medium">Actionable recommendations tailored to your business</span>
              </div>
            </div>

            {/* Made button responsive */}
            <div className="flex justify-center">
              <a href="https://calendly.com/calibreassociates/meeting" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <Button className="w-full sm:w-auto bg-canvas text-ink hover:bg-surface-soft rounded-pill px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base group transition-all duration-300 id-calendly-booking">
                  Book Your Free Consultation
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;

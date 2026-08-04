
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const TestimonialBanner = () => {
  return (
    <section className="bg-block-cream py-16">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-6 text-center"
        >
          <Quote className="text-ink h-10 w-10 flex-shrink-0 opacity-60" />
          <div>
  <p className="text-xl md:text-2xl text-ink font-medium mb-3 leading-relaxed">
    "As a solo SaaS founder, managing product development while handling marketing and operations was overwhelming. Calibre Associates stepped in with structured systems and execution support, allowing me to focus on building the product and growing the business."
  </p>
  <p className="text-sm md:text-base text-ink/70">
    <span className="font-semibold text-ink">David F.</span> • <span>Founder & CEO</span>
  </p>
</div>
          <Quote className="text-ink h-10 w-10 flex-shrink-0 rotate-180 opacity-60" />
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialBanner;
